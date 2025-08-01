'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { getAssetPath } from '@/lib/config'

/**
 * 個人照片組件 - 夾槽型設計
 */
export function ProfilePhoto() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    // 檢測是否為行動裝置
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    const handleMouseMove = (e: MouseEvent) => {
      // 在手機版不執行滑鼠跟隨效果
      if (isMobile) return
      
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      
      // 計算相對中心點的偏移，並限制移動範圍
      const deltaX = (clientX - centerX) * 0.025 // 增加移動範圍
      const deltaY = (clientY - centerY) * 0.025
      
      setMousePosition({ x: deltaX, y: deltaY })
    }

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove)
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [isMobile])

  return (
    <div ref={ref} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 -mt-4">
      <div 
        className={`relative w-16 h-28 md:w-20 md:h-36 lg:w-24 lg:h-44 transition-all duration-1000 ease-out ${
          inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
        style={{
          transform: isMobile 
            ? 'none' 
            : `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transitionDelay: '1.5s',
        }}
      >
        {/* 夾槽型照片容器 */}
        <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: '50px' }}>
          <Image
            src={getAssetPath("/images/yuga-photo.png")}
            alt="Yuga - Designer & Developer"
            fill
            sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}