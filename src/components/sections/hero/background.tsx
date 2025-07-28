'use client'

import { useEffect, useRef } from 'react'

/**
 * 霧面玻璃背景 - 含滾動大球
 */
export function HeroBackground() {
  const ballRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ball = ballRef.current
    if (!ball) return

    let animationId: number

    const animate = () => {
      const time = Date.now() * 0.0005
      const x = Math.sin(time) * 200 + window.innerWidth / 2
      const y = Math.cos(time * 0.8) * 150 + window.innerHeight / 2
      
      ball.style.transform = `translate(${x}px, ${y}px)`
      
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 減少 blur 的純黑色背景層 */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/85" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70" />
      
      {/* 第一顆大球 - 左上角 */}
      <div 
        ref={ballRef}
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 top-1/4 left-1/4"
        style={{ willChange: 'transform' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-primary/25 via-primary/15 to-primary/8 rounded-full blur-2xl" />
      </div>
      
      {/* 第二顆大球 - 右下角 */}
      <div className="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bottom-1/4 right-1/4">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/12 to-primary/6 rounded-full blur-2xl" />
      </div>
      
      {/* 減少網格紋理強度 */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 69, 0, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 69, 0, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />
      
      {/* 底部漸層線 */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  )
}