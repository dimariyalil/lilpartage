'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Link, BarChart3, Image, MousePointer } from 'lucide-react'

export function Tools() {
  const t = useTranslations('tools')

  const tools = [
    {
      icon: Link,
      title: t('smartLinks'),
      description: 'Автоматическое перенаправление пользователей на нужную версию сайта',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Image,
      title: t('banners'),
      description: 'Готовые рекламные баннеры различных размеров и форматов',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: BarChart3,
      title: t('landingPages'),
      description: 'Готовые конвертящие лендинги для различных GEO',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: MousePointer,
      title: t('tracking'),
      description: 'Детальная аналитика и отслеживание конверсий в реальном времени',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-tektur text-4xl md:text-5xl font-extrabold text-primary-dark mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={`w-16 h-16 ${tool.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <tool.icon className={`w-8 h-8 ${tool.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary-green transition-colors">
                {tool.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">
              Маркетинговые материалы
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                <span>Баннеры: 728x90, 300x250, 160x600, 468x60</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                <span>Мобильные баннеры: 320x50, 300x300</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                <span>Социальные сети: Facebook, Instagram, Telegram</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                <span>Видео материалы и GIF анимация</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">
              Аналитика и отчеты
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-pink rounded-full"></div>
                <span>Real-time статистика кликов и регистраций</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-pink rounded-full"></div>
                <span>Детализация по странам и источникам</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-pink rounded-full"></div>
                <span>Конверсионная воронка и LTV игроков</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-pink rounded-full"></div>
                <span>Автоматические отчеты на email</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}