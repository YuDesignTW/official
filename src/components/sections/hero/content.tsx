'use client'

import { useInView } from 'react-intersection-observer'
import { ProfilePhoto } from './profile-photo'
import { ScrollIndicator } from './scroll-indicator'

/**
 * Hero 內容區域 - 橘色品牌版本
 * 使用新文案與橘色+灰黑色配色
 */
export function HeroContent() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div ref={ref} className="container mx-auto px-4 relative z-10">
      {/* 個人照片 */}
      <ProfilePhoto />
      
      <div className="max-w-6xl mx-auto text-center pt-24 md:pt-32">
        {/* 小標題 1 */}
        <div 
          className={`mb-12 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <p className="text-xl md:text-2xl text-white font-light tracking-wide">
            從設計到行銷，讓您的點子發光
          </p>
        </div>

        {/* 品牌大標題 */}
        <div 
          className={`mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <h1 className="text-8xl md:text-9xl lg:text-11xl xl:text-12xl text-brand-orange leading-none tracking-ultra-tight font-black font-display">
            YuDesign
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-brand-orange leading-none tracking-ultra-tight font-black font-display mt-4">
            Yuga
          </h1>
        </div>

        {/* 小標題 2 */}
        <div 
          className={`mb-24 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-white font-light leading-relaxed max-w-5xl mx-auto">
            結合設計思維、AI/No‑Code 產品開發與行銷策略，<br className="hidden md:block" />
            幫助你的品牌從 0 到 1 創造獨一無二的產品服務
          </p>
        </div>

        {/* 滾動指示器 */}
        <div 
          className={`mt-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1.1s' }}
        >
          <ScrollIndicator />
        </div>

      </div>
    </div>
  )
}