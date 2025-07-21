import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const clickId = searchParams.get('click_id')
  const event = searchParams.get('event')
  const playerId = searchParams.get('player_id')
  const revenue = searchParams.get('revenue')
  const currency = searchParams.get('currency') || 'USD'
  const country = searchParams.get('country')
  
  // Логирование входящих параметров
  console.log('S2S Postback received:', {
    clickId,
    event,
    playerId,
    revenue,
    currency,
    country,
  })
  
  if (!clickId || !event) {
    return NextResponse.json(
      { error: 'Missing required parameters: click_id, event' },
      { status: 400 }
    )
  }
  
  try {
    // Находим реферала по click_id
    const referral = await prisma.referral.findFirst({
      where: { clickId },
      include: { partner: true }
    })
    
    if (!referral) {
      // Если click_id не найден, пытаемся найти по player_id
      if (playerId) {
        const existingReferral = await prisma.referral.findFirst({
          where: { playerId },
          include: { partner: true }
        })
        
        if (!existingReferral) {
          return NextResponse.json(
            { error: 'Click ID or Player ID not found' },
            { status: 404 }
          )
        }
        
        // Обновляем clickId если его не было
        if (!existingReferral.clickId) {
          await prisma.referral.update({
            where: { id: existingReferral.id },
            data: { clickId }
          })
        }
        
        return handleEvent(existingReferral, event, revenue, currency, country)
      }
      
      return NextResponse.json(
        { error: 'Click ID not found' },
        { status: 404 }
      )
    }
    
    return handleEvent(referral, event, revenue, currency, country)
  } catch (error) {
    console.error('S2S Postback error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function handleEvent(
  referral: any,
  event: string,
  revenue: string | null,
  currency: string,
  country: string | null
) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  try {
    switch (event) {
      case 'registration':
        // Обновляем дневную статистику - регистрация
        await prisma.stat.upsert({
          where: {
            partnerId_date: {
              partnerId: referral.partnerId,
              date: today,
            },
          },
          update: {
            registrations: { increment: 1 },
          },
          create: {
            partnerId: referral.partnerId,
            date: today,
            registrations: 1,
            clicks: 0,
            deposits: 0,
            revenue: 0,
            commission: 0,
          },
        })
        
        // Обновляем информацию о реферале
        if (country) {
          await prisma.referral.update({
            where: { id: referral.id },
            data: { country }
          })
        }
        
        break
        
      case 'deposit':
      case 'first_deposit':
        if (!revenue) {
          return NextResponse.json(
            { error: 'Revenue is required for deposit events' },
            { status: 400 }
          )
        }
        
        const revenueAmount = parseFloat(revenue)
        const commissionRate = referral.partner.revShareRate / 100
        const commissionAmount = revenueAmount * commissionRate
        
        // Обновляем реферала
        await prisma.referral.update({
          where: { id: referral.id },
          data: {
            depositCount: { increment: 1 },
            totalRevenue: { increment: revenueAmount },
          },
        })
        
        // Обновляем дневную статистику - депозит
        await prisma.stat.upsert({
          where: {
            partnerId_date: {
              partnerId: referral.partnerId,
              date: today,
            },
          },
          update: {
            deposits: { increment: 1 },
            revenue: { increment: revenueAmount },
            commission: { increment: commissionAmount },
          },
          create: {
            partnerId: referral.partnerId,
            date: today,
            deposits: 1,
            revenue: revenueAmount,
            commission: commissionAmount,
            clicks: 0,
            registrations: 0,
          },
        })
        
        break
        
      case 'click':
        // Создаем новый реферал для клика если его еще нет
        const existingClickReferral = await prisma.referral.findFirst({
          where: { clickId: referral.clickId }
        })
        
        if (!existingClickReferral && referral.playerId) {
          // Создаем новый реферал для этого клика
          await prisma.referral.create({
            data: {
              partnerId: referral.partnerId,
              playerId: referral.playerId,
              clickId: referral.clickId,
              country: country,
            }
          })
        }
        
        // Обновляем дневную статистику - клик
        await prisma.stat.upsert({
          where: {
            partnerId_date: {
              partnerId: referral.partnerId,
              date: today,
            },
          },
          update: {
            clicks: { increment: 1 },
          },
          create: {
            partnerId: referral.partnerId,
            date: today,
            clicks: 1,
            registrations: 0,
            deposits: 0,
            revenue: 0,
            commission: 0,
          },
        })
        
        break
        
      default:
        console.log(`Unknown event type: ${event}`)
        break
    }
    
    return NextResponse.json({ 
      success: true,
      message: `Event ${event} processed successfully`,
      partner_id: referral.partnerId,
      revenue: revenue ? parseFloat(revenue) : 0,
    })
    
  } catch (error) {
    console.error(`Error handling event ${event}:`, error)
    return NextResponse.json(
      { error: `Failed to process event ${event}` },
      { status: 500 }
    )
  }
}

// POST endpoint для тестирования
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { clickId, event, playerId, revenue, currency, country } = body
    
    // Создаем URL параметры из POST данных
    const searchParams = new URLSearchParams({
      click_id: clickId,
      event: event,
      ...(playerId && { player_id: playerId }),
      ...(revenue && { revenue: revenue.toString() }),
      ...(currency && { currency }),
      ...(country && { country }),
    })
    
    // Создаем новый Request объект с параметрами
    const testReq = new NextRequest(
      `${req.nextUrl.origin}${req.nextUrl.pathname}?${searchParams.toString()}`
    )
    
    return await GET(testReq)
  } catch (error) {
    console.error('S2S POST error:', error)
    return NextResponse.json(
      { error: 'Invalid POST data' },
      { status: 400 }
    )
  }
}