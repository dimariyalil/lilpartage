'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { TrendingUp, Zap, Shield, BarChart3, Users, DollarSign } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'Высокие комиссии',
    description: 'До 45% RevShare + CPA бонусы за первые депозиты. Мы ценим качественный трафик.',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Быстрые выплаты',
    description: 'Выплаты каждую неделю без задержек. Минимальная сумма от $100.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Надежность',
    description: 'Лицензированное казино с многолетним опытом работы и безупречной репутацией.',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: BarChart3,
    title: 'Аналитика в реальном времени',
    description: 'Детальная статистика по кликам, регистрациям и доходам в личном кабинете.',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: Users,
    title: 'Персональная поддержка',
    description: 'Индивидуальный менеджер для каждого партнера. Консультации 24/7.',
    color: 'from-indigo-400 to-purple-500'
  },
  {
    icon: DollarSign,
    title: 'Гибкие условия',
    description: 'Различные модели сотрудничества: RevShare, CPA, Hybrid. Выбирайте подходящую.',
    color: 'from-green-500 to-teal-500'
  }
]

export function Features() {
  const t = useTranslations('features')

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-tektur font-extrabold text-lilbet-primary mb-6">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем лучшие условия для партнеров в индустрии онлайн-гемблинга
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-tektur font-bold text-lilbet-primary mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-lilbet-gradient rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-tektur font-extrabold mb-4">
              Готовы начать зарабатывать?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Присоединяйтесь к тысячам успешных партнеров LILBET
            </p>
            <button className="bg-lilbet-accent hover:opacity-80 text-white px-8 py-4 rounded-lg font-tektur font-bold text-lg transition-all duration-300 hover:scale-105">
              Стать партнером
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}