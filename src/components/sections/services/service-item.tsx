'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface ServiceItemProps {
  service: {
    id: string
    title: string
    description: string
    fullDescription: string
    features: readonly string[]
  }
  index: number
}

/**
 * 單一服務項目組件 - 重新設計版本
 * 特色：標題翻轉離場，內容取代；+/- 按鈕動態
 */
export function ServiceItem({ service, index }: ServiceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border-b border-black/10 last:border-b-0">
      {/* 服務標題行 */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-8 md:py-12 flex items-center justify-between group hover:bg-black/5 active:bg-black/10 transition-colors duration-300 px-6 md:px-8 touch-manipulation"
      >
        <div className="flex items-center gap-8 md:gap-12 flex-1 min-w-0">
          <span className="text-mono-number text-2xl md:text-4xl text-black/40 font-bold">
            {String(index + 1).padStart(2, '0')}
          </span>
          
          {/* 標題翻轉容器 */}
          <div className="relative overflow-hidden h-20 md:h-24 lg:h-28 flex-1">
            {/* 原始標題 - 左對齊 */}
            <h3 
              className={`absolute inset-0 flex items-center justify-start text-2xl md:text-6xl lg:text-7xl font-black text-black font-display tracking-tight leading-tight transition-all duration-500 ease-in-out ${
                isExpanded 
                  ? 'transform -translate-y-full opacity-0' 
                  : 'transform translate-y-0 opacity-100'
              }`}
            >
              {service.title.toUpperCase()}
            </h3>
            
            {/* 展開時的內容預覽 - 左對齊 */}
            <div 
              className={`absolute inset-0 flex items-center justify-start text-base md:text-xl font-medium text-primary transition-all duration-500 ease-in-out ${
                isExpanded 
                  ? 'transform translate-y-0 opacity-100' 
                  : 'transform translate-y-full opacity-0'
              }`}
            >
              <span className="line-clamp-2 leading-tight">
                {service.description}
              </span>
            </div>
          </div>
        </div>
        
        {/* +/- 按鈕動態 */}
        <div className="ml-4 relative w-10 h-10 flex items-center justify-center">
          {/* + 按鈕 */}
          <Plus 
            size={24} 
            strokeWidth={2}
            className={`absolute text-black transition-all duration-300 ease-in-out ${
              isExpanded 
                ? 'transform rotate-90 opacity-0 scale-75' 
                : 'transform rotate-0 opacity-100 scale-100 group-hover:scale-110 group-active:scale-125'
            }`}
          />
          
          {/* - 按鈕 */}
          <Minus 
            size={24} 
            strokeWidth={2}
            className={`absolute text-black transition-all duration-300 ease-in-out ${
              isExpanded 
                ? 'transform rotate-0 opacity-100 scale-100 group-hover:scale-110 group-active:scale-125' 
                : 'transform -rotate-90 opacity-0 scale-75'
            }`}
          />
        </div>
      </button>

      {/* 展開內容 */}
      <div 
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-12 pl-8 md:pl-28 pr-8 md:pr-20">
          {/* 完整描述 */}
          <p className="text-lg md:text-xl text-black/70 mb-8 max-w-4xl leading-relaxed">
            {service.fullDescription}
          </p>

          {/* 特色列表 */}
          <div className="space-y-4">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 transition-all duration-500 ${
                  isExpanded ? 'transform translate-x-0 opacity-100' : 'transform translate-x-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isExpanded ? `${idx * 100 + 200}ms` : '0ms'
                }}
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-base md:text-lg text-black/80 font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}