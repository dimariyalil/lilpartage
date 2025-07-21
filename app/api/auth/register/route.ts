import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'
import { sendPartnerRegistrationNotification } from '@/lib/telegram'
import { generateTrackingId } from '@/lib/utils'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      email,
      password,
      firstName,
      lastName,
      phone,
      country,
      language,
      messenger,
      messengerUsername,
      trafficSource,
      trafficUrl,
      monthlyVolume,
      username,
      paymentMethod,
    } = body

    // Валидация обязательных полей
    if (!email || !password || !firstName || !lastName || !phone || !country || !username) {
      return NextResponse.json(
        { error: 'Заполните все обязательные поля' },
        { status: 400 }
      )
    }

    const supabase = createRouteHandlerClient({ cookies })
    
    // Проверяем, существует ли уже пользователь с таким email
    const existingPartner = await prisma.partner.findUnique({
      where: { email }
    })

    if (existingPartner) {
      return NextResponse.json(
        { error: 'Пользователь с таким email уже существует' },
        { status: 400 }
      )
    }

    // Проверяем уникальность username
    const existingUsername = await prisma.partner.findUnique({
      where: { username }
    })

    if (existingUsername) {
      return NextResponse.json(
        { error: 'Пользователь с таким логином уже существует' },
        { status: 400 }
      )
    }
    
    // Создаем пользователя в Supabase
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        }
      }
    })
    
    if (authError) {
      console.error('Supabase auth error:', authError)
      return NextResponse.json(
        { error: 'Ошибка создания аккаунта' },
        { status: 500 }
      )
    }

    if (!authData.user) {
      return NextResponse.json(
        { error: 'Не удалось создать пользователя' },
        { status: 500 }
      )
    }
    
    // Создаем партнера в базе данных
    const partner = await prisma.partner.create({
      data: {
        authId: authData.user.id,
        email,
        firstName,
        lastName,
        phone,
        country,
        language: language || 'ru',
        messenger: messenger || '',
        messengerUsername: messengerUsername || '',
        trafficSource: trafficSource || '',
        trafficUrl: trafficUrl || '',
        monthlyVolume: monthlyVolume || '',
        username,
        paymentMethod: paymentMethod || '',
      },
    })

    // Создаем основной трекинг аккаунт
    await prisma.subAccount.create({
      data: {
        partnerId: partner.id,
        name: 'Main',
        trackingId: generateTrackingId(),
      },
    })
    
    // Отправляем уведомление в Telegram
    try {
      await sendPartnerRegistrationNotification({
        firstName,
        lastName,
        email,
        country,
        trafficSource,
        monthlyVolume,
      })
    } catch (telegramError) {
      console.error('Telegram notification error:', telegramError)
      // Не прерываем процесс регистрации из-за ошибки Telegram
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Регистрация успешна! Проверьте email для подтверждения.',
      partner: {
        id: partner.id,
        email: partner.email,
        firstName: partner.firstName,
        lastName: partner.lastName,
        status: partner.status,
      }
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}