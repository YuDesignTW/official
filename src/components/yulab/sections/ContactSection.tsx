'use client'

import Link from 'next/link'
import Image from 'next/image'
import { RefObject } from 'react'

interface ContactSectionProps {
  contactSectionRef: RefObject<HTMLElement>
  isContactSectionVisible: boolean
  contactScrollOffset: number
  windowSize: { width: number; height: number }
}

export function ContactSection({ contactSectionRef, isContactSectionVisible, contactScrollOffset, windowSize }: ContactSectionProps) {
  return (
    <section
      ref={contactSectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* 背景圖片 - 手機版初始貼齊左邊滾動時往左移動，桌面版初始靠左滾動時往右移動 */}
      <div
        className="absolute h-full"
        style={{
          left: windowSize.width < 768 ? '0' : '-600px',
          top: 0,
          width: windowSize.width < 768 ? '150%' : 'calc(100% + 600px)',
          transform: `translateX(${windowSize.width < 768 ? -contactScrollOffset * 0.3 : contactScrollOffset}px)`,
          willChange: 'transform'
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/yulab/cta.png"
            alt="Contact Us"
            fill
            className={windowSize.width < 768 ? "object-cover object-left" : "object-cover object-right"}
            quality={100}
            priority
            sizes="(max-width: 768px) 150vw, 200vw"
            unoptimized={false}
          />
        </div>
      </div>

      {/* 上方文字 - 逐行進場 */}
      <div className="absolute top-12 sm:top-16 lg:top-20 left-0 right-0 z-10 text-center px-4 sm:px-6">
        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
          <p
            className={`text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white leading-relaxed ${isContactSectionVisible ? 'animate-contact-line-1' : 'opacity-0'}`}
            style={{
              fontFamily: "'HanWangMingHeavy', serif",
              fontWeight: 400,
              letterSpacing: '0.1em'
            }}
          >
            我們相信行銷不是一場場活動，
          </p>
          <p
            className={`text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white leading-relaxed ${isContactSectionVisible ? 'animate-contact-line-2' : 'opacity-0'}`}
            style={{
              fontFamily: "'HanWangMingHeavy', serif",
              fontWeight: 400,
              letterSpacing: '0.1em'
            }}
          >
            而是一套能累積智慧的系統。
          </p>
          <p
            className={`text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white leading-relaxed ${isContactSectionVisible ? 'animate-contact-line-3' : 'opacity-0'}`}
            style={{
              fontFamily: "'HanWangMingHeavy', serif",
              fontWeight: 400,
              letterSpacing: '0.1em'
            }}
          >
            有料研究室，
          </p>
          <p
            className={`text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white leading-relaxed ${isContactSectionVisible ? 'animate-contact-line-4' : 'opacity-0'}`}
            style={{
              fontFamily: "'HanWangMingHeavy', serif",
              fontWeight: 400,
              letterSpacing: '0.1em'
            }}
          >
            讓每一次輸出都成為可學習的資產。
          </p>
        </div>
      </div>

      {/* 動畫樣式 */}
      <style jsx>{`
        @keyframes contactFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-contact-line-1 {
          animation: contactFadeIn 1s ease-out forwards;
          animation-delay: 0.2s;
        }

        .animate-contact-line-2 {
          animation: contactFadeIn 1s ease-out forwards;
          animation-delay: 0.4s;
        }

        .animate-contact-line-3 {
          animation: contactFadeIn 1s ease-out forwards;
          animation-delay: 0.6s;
        }

        .animate-contact-line-4 {
          animation: contactFadeIn 1s ease-out forwards;
          animation-delay: 0.8s;
        }
      `}</style>

      {/* 右下角黑色方塊 - 貼齊底部 */}
      <Link
        href="https://calendar.app.google/JjkxXsrjHzUuBCPx5"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-0 right-0 z-10 bg-black p-6 sm:p-8 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-900 transition-colors"
      >
        <h3
          className="text-2xl sm:text-2xl lg:text-3xl text-white mb-3 sm:mb-4 text-center"
          style={{
            fontFamily: "'Mantou Sans', cursive",
            fontWeight: 400,
            letterSpacing: '0.05em'
          }}
        >
          立即諮詢
        </h3>
        <p
          className="text-sm sm:text-base lg:text-lg text-white text-center leading-relaxed"
          style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 400,
            letterSpacing: '0.1em'
          }}
        >
          讓品牌能自信思考<br />
          自由創造、自動行銷
        </p>
      </Link>
    </section>
  )
}
