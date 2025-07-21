'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  {
    value: 50000,
    suffix: '+',
    label: 'Активных партнеров',
    prefix: ''
  },
  {
    value: 25,
    suffix: 'M+',
    label: 'Выплачено партнерам',
    prefix: '$'
  },
  {
    value: 1200,
    suffix: '+',
    label: 'Конверсий в день',
    prefix: ''
  },
  {
    value: 99.5,
    suffix: '%',
    label: 'Uptime сервиса',
    prefix: ''
  }
]

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count.toLocaleString()}</span>
}

export function Stats() {
  return (
    <section className="py-20 bg-lilbet-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="geometric-pattern absolute inset-0" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-tektur font-extrabold text-white mb-6">
            Цифры, которые говорят за нас
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            LILBET Partners — это проверенный партнер с впечатляющими результатами
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 group-hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-tektur font-extrabold text-lilbet-secondary mb-2">
                  {stat.prefix}
                  <CountUp end={stat.value} duration={2.5} />
                  {stat.suffix}
                </div>
                <div className="text-white/90 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-lilbet-secondary rounded-full animate-pulse"></div>
            <span className="text-white font-medium">
              Статистика обновляется в реальном времени
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}