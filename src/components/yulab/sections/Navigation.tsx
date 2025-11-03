'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SectionName } from '../../../hooks/yulab/useActiveSection'

interface NavigationProps {
  activeSection?: SectionName
}

export function Navigation({ activeSection = 'hero' }: NavigationProps) {
  // 需要深色 Logo 的 sections
  const darkSections: SectionName[] = ['story', 'service', 'from0to1', 'partner']
  const isDark = darkSections.includes(activeSection)

  // ServiceSection 使用白色 CTA，其他深色 sections 使用黑色 CTA
  const isWhiteCTA = activeSection === 'service' || activeSection === 'hero' || activeSection === 'contact' || activeSection === 'footer'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="flex items-center justify-center sm:justify-between py-3 sm:py-4">
        {/* Logo - 手機版置中，桌面版靠左 */}
        <div className="flex items-center sm:ml-5 animate-slideInLeft">
          <Image
            src={isDark ? "/logo_dark.png" : "/logo.png"}
            alt="YU MARKET Logo"
            width={240}
            height={80}
            className="object-contain h-8 sm:h-10 w-auto transition-opacity duration-150"
            priority
            quality={100}
          />
        </div>

        {/* Right side button - 桌面版顯示，手機版隱藏 */}
        <Link href="https://calendar.app.google/JjkxXsrjHzUuBCPx5" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
          <div className={`nav-cta-button group relative overflow-hidden pl-6 sm:pl-8 pr-4 sm:pr-6 py-3 sm:py-4 transition-all duration-500 hover:pl-8 sm:hover:pl-10 rounded-l-full animate-slideInRight ${isDark ? 'dark-mode' : ''}`}>
            {/* 毛玻璃背景層 */}
            <div className={`absolute inset-0 border-l border-t border-b backdrop-blur-lg transition-all duration-300 rounded-l-full ${
              isWhiteCTA
                ? 'border-white/20 bg-white/10'
                : 'border-black/20 bg-black/10'
            }`}></div>

            {/* 進度條 */}
            <div className="nav-progress absolute inset-0 transition-transform duration-300 ease-in-out rounded-l-full">
              <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-r from-[#00FF88] to-[#00ff9d] rounded-l-full"></div>
            </div>

            {/* 文字 */}
            <span
              className={`relative z-10 font-black text-base sm:text-lg uppercase whitespace-nowrap transition-colors duration-300 ${
                isWhiteCTA ? 'text-white' : 'text-black'
              }`}
              style={{ fontFamily: "'HanWangMingHeavy', serif" }}
            >
              預約諮詢
            </span>
          </div>
        </Link>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .nav-cta-button {
          position: relative;
        }

        .nav-progress {
          width: 0%;
          opacity: 0;
          transition: width 0.5s ease-out, opacity 0.3s ease-out;
        }

        .nav-cta-button:hover .nav-progress {
          width: 100%;
          opacity: 1;
        }

        /* Dark mode hover effects */
        .nav-cta-button.dark-mode:hover .nav-progress {
          opacity: 1;
        }

        /* 入場動畫 - Logo 從左側淡入 */
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* 入場動畫 - CTA 按鈕從右側淡入 */
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out 0.2s backwards;
        }
      `}</style>
    </nav>
  )
}
