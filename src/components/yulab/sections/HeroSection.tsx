'use client'

import Image from 'next/image'
import Link from 'next/link'
import { RefObject } from 'react'

interface HeroSectionProps {
  scrollY: number
  heroSectionRef?: RefObject<HTMLElement>
}

export function HeroSection({ scrollY, heroSectionRef }: HeroSectionProps) {
  return (
    <section
      ref={heroSectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#00EA75',
        transform: `translateY(-${scrollY * 0.3}px)`
      }}
    >
      {/* 1. 背景層（最底層）：左右兩張背景圖 */}
      <div className="absolute inset-0 w-full h-full">
        {/* 左側背景圖 */}
        <div className="absolute left-0 top-0 h-full w-1/2">
          <Image
            src="/images/yulab/hero_left.png"
            alt="Hero Background Left"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 右側背景圖 */}
        <div className="absolute right-0 top-0 h-full w-1/2">
          <Image
            src="/images/yulab/hero_right.png"
            alt="Hero Background Right"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* 2. 中間層：視差滾動的 logo */}
      <div className="absolute inset-0 w-full h-full">
        {/* logo_l - 中間貼齊左側邊緣，往下滾動 */}
        <div
          className="absolute left-0"
          style={{
            top: '50%',
            transform: `translateY(calc(-50% + ${scrollY * 0.5}px))`
          }}
        >
          <Image
            src="/images/yulab/logo_l.png"
            alt="Logo Left"
            width={400}
            height={400}
            className="object-contain w-48 sm:w-64 md:w-80 lg:w-96 h-auto"
            priority
          />
        </div>

        {/* logo_r - 中間貼齊右側邊緣，往上滾動 */}
        <div
          className="absolute right-0"
          style={{
            top: '50%',
            transform: `translateY(calc(-50% - ${scrollY * 0.5}px))`
          }}
        >
          <Image
            src="/images/yulab/logo_r.png"
            alt="Logo Right"
            width={400}
            height={400}
            className="object-contain w-48 sm:w-64 md:w-80 lg:w-96 h-auto"
            priority
          />
        </div>
      </div>

      {/* 3. 最上層：中央內容區域 */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4 sm:px-6" style={{marginTop: '40px'}}>
        {/* Logo CN - 中央 */}
        <div className="mb-4 sm:mb-12 animate-fadeIn">
          <Image
            src="/images/yulab/logo_cn.png"
            alt="YU Market Logo"
            width={400}
            height={150}
            className="object-contain w-64 sm:w-80 md:w-96 lg:w-[400px] h-auto"
            priority
          />
        </div>

        {/* 副標題 - 中文 */}
        <h2
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-0 sm:mb-4 animate-fadeInUp text-center px-4"
          style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 700,
            letterSpacing: '0.3em',
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1)'
          }}
        >
          讓每一個品牌，都有自己的行銷智慧系統。
        </h2>

        {/* 副標題 - 英文 */}
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-center px-4 animate-fadeInUp"
          style={{
            fontFamily: "'HanWangMingHeavy', serif",
            letterSpacing: '0.1em',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2)'
          }}
        >
          Build your Marketing Brain not just another design and campaign.
        </p>
      </div>

      {/* CTA 按鈕 - 僅手機版顯示，固定在底部 */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center sm:hidden animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
        <Link href="https://calendar.app.google/JjkxXsrjHzUuBCPx5" target="_blank" rel="noopener noreferrer">
          <div className="hero-cta-button group relative overflow-hidden px-8 py-4 transition-all duration-500 rounded-full">
            {/* 毛玻璃背景層 */}
            <div className="absolute inset-0 border backdrop-blur-lg transition-all duration-300 rounded-full border-white/20 bg-white/10"></div>

            {/* 進度條 */}
            <div className="hero-progress absolute inset-0 transition-transform duration-300 ease-in-out rounded-full">
              <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-r from-[#00FF88] to-[#00ff9d] rounded-full"></div>
            </div>

            {/* 文字 */}
            <span
              className="relative z-10 font-black text-base uppercase whitespace-nowrap transition-colors duration-300 text-white"
              style={{ fontFamily: "'HanWangMingHeavy', serif" }}
            >
              點我預約聊聊
            </span>
          </div>
        </Link>
      </div>

      {/* 動畫樣式 */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-fadeInUp {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        /* Hero CTA Button styles */
        .hero-cta-button {
          position: relative;
        }

        .hero-progress {
          width: 0%;
          opacity: 0;
          transition: width 0.5s ease-out, opacity 0.3s ease-out;
        }

        .hero-cta-button:active .hero-progress {
          width: 100%;
          opacity: 1;
        }

        @media (hover: hover) {
          .hero-cta-button:hover .hero-progress {
            width: 100%;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
