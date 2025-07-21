'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp, Zap, Shield, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    key: 'highCommissions'
  },
  {
    icon: Zap,
    key: 'fastPayouts'
  },
  {
    icon: Shield,
    key: 'professionalSupport'
  },
  {
    icon: BarChart3,
    key: 'detailedStatistics'
  }
]

const FloatingShape = ({ delay = 0, duration = 6 }: { delay?: number; duration?: number }) => (
  <motion.div
    className="absolute w-20 h-20 bg-gradient-to-r from-lilbet-accent/20 to-lilbet-secondary/20 rounded-full blur-xl"
    animate={{
      x: [0, 100, 0],
      y: [0, -50, 0],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
)

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-lilbet-primary via-lilbet-gradient-blue to-lilbet-gradient-green">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="geometric-pattern absolute inset-0 opacity-30" />
        <div className="lightning-pattern absolute inset-0 opacity-10" />
        
        {/* Floating Shapes */}
        <FloatingShape delay={0} duration={8} />
        <FloatingShape delay={2} duration={10} />
        <FloatingShape delay={4} duration={6} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-lilbet-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-lilbet-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-tektur font-extrabold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('title')}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('subtitle')}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-lilbet-accent hover:opacity-80 text-white px-8 py-4 text-lg font-semibold group"
              >
                {t('cta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                className="glass-effect p-6 rounded-xl text-center group hover-lift"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-lilbet-gradient rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-tektur font-bold text-sm md:text-base">
                  {t(`features.${feature.key}`)}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}