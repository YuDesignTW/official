'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus, Minus } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { cn } from '@/lib/utils'


export function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="container mx-auto px-4">
        {/* 極簡標題 */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-32"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-none tracking-tighter">
            SERVICES
          </h2>
          <div className="w-24 h-px bg-black mt-8" />
        </motion.div>

        {/* 極簡服務網格 */}
        <div className="space-y-1">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="border-b border-black/10 last:border-b-0"
            >
              {/* 服務標題行 */}
              <motion.button
                onClick={() => toggleExpanded(index)}
                className="w-full py-8 md:py-12 flex items-center justify-between group hover:bg-black/5 transition-colors duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center gap-8">
                  <span className="text-2xl md:text-4xl font-light text-black/30 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-black tracking-tight">
                    {service.title.toUpperCase()}
                  </h3>
                </div>
                
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-black group-hover:scale-110 transition-transform"
                >
                  <Plus size={32} strokeWidth={1} />
                </motion.div>
              </motion.button>

              {/* 展開內容 */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 pl-16 md:pl-24 pr-16">
                      {/* 描述 */}
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl font-light text-black/70 mb-8 max-w-4xl leading-relaxed"
                      >
                        {service.description}
                      </motion.p>

                      {/* 特色列表 */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                      >
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-1 h-1 bg-black rounded-full" />
                            <span className="text-lg font-light text-black/60">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        {/* 極簡分隔線 */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-32 h-px bg-black/20 origin-left"
        />
      </div>
    </section>
  )
}