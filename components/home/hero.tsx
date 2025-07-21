'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react'

export function Hero() {
  const t = useTranslations('hero')
  const locale = useLocale()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary-dark overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="geometric-pattern h-full w-full"></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-gradient-blue to-gradient-green opacity-90"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-accent-pink/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-24 h-24 bg-primary-green/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-20 h-20 bg-accent-pink/30 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-tektur text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            {t('title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-accent-pink">
              LILBET Partners
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('subtitle')}
        </motion.p>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 neon-pattern">
            <TrendingUp className="w-10 h-10 text-primary-green mb-4 mx-auto" />
            <div className="text-3xl font-bold text-white mb-2">40%</div>
            <div className="text-gray-300">RevShare</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 neon-pattern">
            <Users className="w-10 h-10 text-accent-pink mb-4 mx-auto" />
            <div className="text-3xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-300">Партнеров</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 neon-pattern">
            <DollarSign className="w-10 h-10 text-primary-green mb-4 mx-auto" />
            <div className="text-3xl font-bold text-white mb-2">$2M+</div>
            <div className="text-gray-300">Выплачено</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href={`/${locale}/register`}
            className="group relative overflow-hidden bg-accent-pink hover:bg-accent-pink/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-2xl"
          >
            <span className="relative z-10">{t('cta')}</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent-pink to-primary-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          <Link
            href={`/${locale}/login`}
            className="group bg-transparent border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center space-x-2"
          >
            <span>{t('login')}</span>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}