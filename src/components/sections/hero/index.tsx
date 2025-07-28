'use client'

import { HeroBackground } from './background'
import { HeroContent } from './content'

/**
 * 輕量化 Hero Section
 * 移除：Framer Motion、TypeAnimation、複雜粒子系統
 * 保留：極簡設計、純 CSS 動畫
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      <HeroBackground />
      <HeroContent />
    </section>
  )
}