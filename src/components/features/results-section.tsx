'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RESULTS, TESTIMONIALS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Quote } from 'lucide-react'

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        
        setCount(Math.floor(progress * end))
        
        if (progress < 1) {
          requestAnimationFrame(animateCount)
        }
      }
      requestAnimationFrame(animateCount)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {count}
    </span>
  )
}

export function ResultsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="results" className="py-20 md:py-32 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        {/* 標題區域 */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-lg mb-2">成功案例</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            實際成效，用數據說話
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            5個月內業績成長6倍，廣告成本減少80%，轉換率提升4倍
          </p>
        </motion.div>

        {/* 數據展示 */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {RESULTS.map((result, index) => {
            const numberValue = parseInt(result.number.replace('%', ''))
            
            return (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    'p-8 rounded-2xl text-center',
                    'bg-gradient-to-br from-gray-50 to-white',
                    'dark:from-gray-900 dark:to-gray-800',
                    'border border-gray-200 dark:border-gray-700',
                    'shadow-lg group-hover:shadow-2xl',
                    'transition-shadow duration-300'
                  )}
                >
                  {/* 數字動畫 */}
                  <div className="text-5xl md:text-6xl font-black text-primary mb-4">
                    <CountUp end={numberValue} />
                    {result.number.includes('%') && '%'}
                  </div>
                  
                  {/* 標題 */}
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {result.title}
                  </h3>
                  
                  {/* 描述 */}
                  <p className="text-gray-600 dark:text-gray-400">
                    {result.description}
                  </p>

                  {/* 裝飾元素 */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* 客戶見證 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            客戶見證
          </h3>
          
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              className="relative"
            >
              <div className={cn(
                'p-8 md:p-12 rounded-3xl',
                'bg-gradient-to-br from-gray-50 to-white',
                'dark:from-gray-900 dark:to-gray-800',
                'border border-gray-200 dark:border-gray-700',
                'shadow-xl'
              )}>
                {/* 引號圖標 */}
                <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
                
                {/* 內容 */}
                <blockquote className="relative z-10 mb-8">
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    {testimonial.content}
                  </p>
                </blockquote>
                
                {/* 作者資訊 */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.author.avatar}
                      alt={testimonial.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {testimonial.author.name}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonial.author.title}
                    </p>
                  </div>
                </div>

                {/* 背景裝飾 */}
                <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}