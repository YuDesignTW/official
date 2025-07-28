'use client'

import { useInView } from 'react-intersection-observer'
import { SERVICES } from '@/lib/constants'
import { ServiceItem } from './service-item'
import { Marquee } from '@/components/ui/marquee'

/**
 * 輕量化 Services Section
 * 移除：Framer Motion 複雜動畫、懸浮效果
 * 保留：展開/收縮功能（純 CSS）
 */
export function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="container mx-auto px-4">
        {/* 極簡標題 */}
        <div 
          ref={ref}
          className={`mb-16 md:mb-32 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-display text-black leading-none tracking-tighter">
            SERVICES
          </h2>
          <div className="w-24 h-px bg-black mt-8" />
        </div>

        {/* 極簡服務列表 */}
        <div 
          className={`space-y-1 transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {SERVICES.map((service, index) => (
            <ServiceItem 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>

        {/* 極簡分隔線 */}
        <div 
          className={`mt-32 h-px bg-black/20 transition-all duration-1500 delay-500 ${
            inView ? 'scale-x-100' : 'scale-x-0'
          }`}
          style={{ transformOrigin: 'left' }}
        />
      </div>

      {/* 跑馬燈區域 */}
      <div className="py-16 md:py-24 bg-white overflow-hidden">
        <Marquee 
          text="DESIGN × MARKETING × DEVELOP"
          className="text-6xl md:text-8xl lg:text-9xl xl:text-10xl font-black text-primary font-display tracking-tighter"
        />
      </div>
    </section>
  )
}