'use client'

import { useEffect, useState } from 'react'

interface MetricItemProps {
  metric: {
    id: string
    number: string
    title: string
    description: string
  }
  index: number
  isVisible: boolean
}

/**
 * 數據項目組件 - 輕量化動畫
 */
export function MetricItem({ metric, index, isVisible }: MetricItemProps) {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsAnimated(true)
      }, index * 200)
      return () => clearTimeout(timer)
    }
  }, [isVisible, index])

  return (
    <div 
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      {/* 數據 */}
      <div 
        className={`text-6xl md:text-7xl lg:text-8xl font-black text-black leading-none mb-4 transition-all duration-1000 ${
          isAnimated ? 'scale-100' : 'scale-75'
        }`}
      >
        {metric.number}
      </div>

      {/* 標題 */}
      <h3 className="text-heading text-black mb-4">
        {metric.title}
      </h3>

      {/* 描述 */}
      <p className="text-body text-black/60 leading-relaxed max-w-xs mx-auto">
        {metric.description}
      </p>
    </div>
  )
}