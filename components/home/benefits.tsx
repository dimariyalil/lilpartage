'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export function Benefits() {
  const t = useTranslations('benefits')

  return (
    <section className="py-20 bg-white">
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.raw('items').map((item: any, index: number) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Decorative Element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-green to-accent-pink rounded-t-2xl"></div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 to-accent-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-pattern rounded-2xl p-12 text-white">
            <h3 className="font-tektur text-3xl font-bold mb-4">
              Готовы начать зарабатывать?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Присоединяйтесь к тысячам успешных партнеров уже сегодня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent-pink hover:bg-accent-pink/90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Стать партнером
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-dark font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Узнать больше
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}