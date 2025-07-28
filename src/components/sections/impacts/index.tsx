'use client'

import { useInView } from 'react-intersection-observer'
import { RESULTS } from '@/lib/constants'
import { MetricItem } from './metric-item'

/**
 * Impacts Section - 成效數據展示
 * 從原本的 results-section 分離出來
 */
export function Impacts() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="impacts" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* 極簡標題 */}
        <div 
          className={`mb-32 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-display text-black leading-none tracking-tighter">
            IMPACTS
          </h2>
          <div className="w-24 h-px bg-black mt-8" />
          <p className="text-subheading text-black/60 mt-8 max-w-3xl">
            數據說話，證明實力
          </p>
        </div>

        {/* 成效數據 */}
        <div 
          ref={ref}
          className="grid md:grid-cols-3 gap-12 lg:gap-16"
        >
          {RESULTS.map((result, index) => (
            <MetricItem
              key={result.id}
              metric={result}
              index={index}
              isVisible={inView}
            />
          ))}
        </div>

        {/* 極簡分隔線 */}
        <div 
          className={`mt-32 h-px bg-black/20 transition-all duration-1500 delay-600 ${
            inView ? 'scale-x-100' : 'scale-x-0'
          }`}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </section>
  )
}