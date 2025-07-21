import { Telegraf } from 'telegraf'

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || '')
const chatId = process.env.TELEGRAM_CHAT_ID || ''

export async function sendTelegramNotification(message: string) {
  try {
    if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
      console.warn('Telegram credentials not configured')
      return
    }

    await bot.telegram.sendMessage(chatId, message, {
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    })
  } catch (error) {
    console.error('Telegram notification error:', error)
  }
}

export async function sendPartnerRegistrationNotification(partner: {
  firstName: string
  lastName: string
  email: string
  country: string
  trafficSource: string
  monthlyVolume?: string
}) {
  const message = `
🆕 <b>Новая заявка партнера!</b>

👤 <b>Имя:</b> ${partner.firstName} ${partner.lastName}
📧 <b>Email:</b> ${partner.email}
🌍 <b>Страна:</b> ${partner.country}
📊 <b>Источник трафика:</b> ${partner.trafficSource}
${partner.monthlyVolume ? `📈 <b>Объем в месяц:</b> ${partner.monthlyVolume}` : ''}

⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'UTC' })} UTC
  `.trim()

  await sendTelegramNotification(message)
}