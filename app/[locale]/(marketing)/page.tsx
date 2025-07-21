import { Hero } from '@/components/marketing/hero'
import { Features } from '@/components/marketing/features'
import { Stats } from '@/components/marketing/stats'
import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Главная - LILBET PARTNERS',
  description: 'Партнерская программа LILBET - высокие комиссии, быстрые выплаты, профессиональная поддержка. Присоединяйтесь к успешному беттинг партнерству.',
}

type Props = {
  params: { locale: string }
}

export default function HomePage({ params: { locale } }: Props) {
  setRequestLocale(locale)
  
  return (
    <div>
      <Hero />
      <Features />
      <Stats />
    </div>
  )
}