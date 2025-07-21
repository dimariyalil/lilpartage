'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export function Products() {
  const t = useTranslations('product')

  const products = [
    {
      title: t('sports.title'),
      features: t.raw('sports.features') as string[],
      gradient: 'from-blue-600 to-blue-800',
      delay: 0,
    },
    {
      title: t('casino.title'),
      features: t.raw('casino.features') as string[],
      gradient: 'from-purple-600 to-purple-800',
      delay: 0.2,
    },
    {
      title: t('esports.title'),
      features: t.raw('esports.features') as string[],
      gradient: 'from-green-600 to-green-800',
      delay: 0.4,
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: product.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${product.gradient}`}></div>
              
              <div className="p-8">
                <h3 className="font-tektur text-2xl font-bold text-primary-dark mb-6 text-center">
                  {product.title}
                </h3>
                
                <ul className="space-y-4">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-green rounded-full mt-2"></div>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 to-accent-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-dark mb-2">50+</div>
            <div className="text-gray-600">Видов спорта</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-dark mb-2">13K+</div>
            <div className="text-gray-600">Игр казино</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-dark mb-2">25+</div>
            <div className="text-gray-600">Киберспорт</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-dark mb-2">24/7</div>
            <div className="text-gray-600">Поддержка</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}