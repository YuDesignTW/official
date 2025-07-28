'use client'

import { useRef, Suspense } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown } from 'lucide-react'
import { ParticleField } from '@/components/ui/particle-field'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* 3D 粒子背景 */}
      <Suspense fallback={<div className="absolute inset-0 bg-white" />}>
        <ParticleField />
      </Suspense>

      {/* 極簡噪音紋理 */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 內容區域 */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* 極簡大標題 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none tracking-tight">
              DESIGN
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none tracking-tight mt-2">
              DEVELOP
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none tracking-tight mt-2 opacity-70">
              DELIVER
            </h1>
          </motion.div>

          {/* 極簡副標題 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl font-light text-black/60 mb-16 max-w-4xl mx-auto leading-relaxed"
          >
            從概念到實現，打造卓越數位體驗
          </motion.p>

          {/* 極簡 CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className={cn(
                'group relative px-12 py-4 bg-black text-white text-lg font-medium',
                'transition-all duration-300 hover:bg-black/90',
                'border-2 border-black'
              )}
            >
              開始合作
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                whileHover={{ opacity: 0.1 }}
              />
            </motion.button>
          </motion.div>

          {/* 極簡滾動提示 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToNext}
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="text-black/40 hover:text-black/60 transition-colors"
              aria-label="滾動到下一個區塊"
            >
              <ArrowDown size={24} strokeWidth={1} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* 極簡幾何裝飾 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-2 h-2 bg-black/10"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-20 w-1 h-1 bg-black/15"
        />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
      </div>
    </section>
  )
}