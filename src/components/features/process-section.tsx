'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PROCESS_STEPS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  
  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%'])
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section 
      id="process" 
      ref={containerRef}
      className="py-20 md:py-32 bg-background-light dark:bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* 標題區域 */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-semibold text-lg mb-2">工作方法</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            從 0 到 1 的成功路徑
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            先做唯一，再做第一；用科學化流程降低風險、加速你的產品成長
          </p>
        </motion.div>

        {/* 時間軸 - 桌面版 */}
        <div className="hidden lg:block relative">
          {/* 背景線 */}
          <div className="absolute top-[60px] left-0 right-0 h-[2px] bg-gray-300 dark:bg-gray-700" />
          
          {/* 進度線 */}
          <motion.div
            className="absolute top-[60px] left-0 h-[2px] bg-primary"
            style={{ width: lineProgress }}
          />

          {/* 步驟 */}
          <div className="relative grid grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* 圓圈 */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={cn(
                    'w-[120px] h-[120px] mx-auto mb-6',
                    'rounded-full flex items-center justify-center',
                    'bg-white dark:bg-gray-800',
                    'border-4 border-gray-300 dark:border-gray-700',
                    'shadow-lg hover:shadow-xl',
                    'transition-all duration-300',
                    'cursor-pointer group'
                  )}
                >
                  <motion.span
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform"
                  >
                    {step.id}
                  </motion.span>
                </motion.div>

                {/* 內容 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {step.description}
                  </p>
                </motion.div>

                {/* 連接線動畫 */}
                {index < PROCESS_STEPS.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    className="absolute top-[60px] left-[60px] right-[-32px] h-[2px] origin-left"
                  >
                    <div className="h-full bg-gradient-to-r from-primary to-transparent" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* 時間軸 - 手機版 */}
        <div className="lg:hidden relative">
          {/* 背景線 */}
          <div className="absolute top-0 bottom-0 left-[30px] w-[2px] bg-gray-300 dark:bg-gray-700" />
          
          {/* 進度線 */}
          <motion.div
            className="absolute top-0 left-[30px] w-[2px] bg-primary"
            style={{ height: lineProgress }}
          />

          {/* 步驟 */}
          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start gap-6"
              >
                {/* 圓圈 */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={cn(
                    'w-[60px] h-[60px] flex-shrink-0',
                    'rounded-full flex items-center justify-center',
                    'bg-white dark:bg-gray-800',
                    'border-4 border-gray-300 dark:border-gray-700',
                    'shadow-lg z-10'
                  )}
                >
                  <span className="text-xl font-bold text-primary">
                    {step.id}
                  </span>
                </motion.div>

                {/* 內容 */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}