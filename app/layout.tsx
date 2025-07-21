import './globals.css'
import type { Metadata } from 'next'
import { Tektur } from 'next/font/google'

const tektur = Tektur({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-tektur',
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'LILBET PARTNERS - Партнерская программа',
    template: '%s | LILBET PARTNERS'
  },
  description: 'Партнерская программа LILBET - высокие комиссии, быстрые выплаты, профессиональная поддержка. Присоединяйтесь к успешному беттинг партнерству.',
  keywords: ['партнерская программа', 'беттинг', 'казино', 'аффилиат', 'комиссии', 'LILBET'],
  authors: [{ name: 'LILBET PARTNERS' }],
  creator: 'LILBET PARTNERS',
  publisher: 'LILBET PARTNERS',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://partners.lilbet.com',
    title: 'LILBET PARTNERS - Партнерская программа',
    description: 'Партнерская программа LILBET - высокие комиссии, быстрые выплаты, профессиональная поддержка.',
    siteName: 'LILBET PARTNERS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LILBET PARTNERS - Партнерская программа',
    description: 'Партнерская программа LILBET - высокие комиссии, быстрые выплаты, профессиональная поддержка.',
  },

  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#082b53" />
        <meta name="msapplication-TileColor" content="#082b53" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${tektur.variable} font-nairi antialiased`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}