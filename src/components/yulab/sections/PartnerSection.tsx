'use client'

import Link from 'next/link'
import { RefObject } from 'react'

interface PartnerSectionProps {
  partnerSectionRef: RefObject<HTMLElement>
  isPartnerSectionVisible: boolean
}

export function PartnerSection({ partnerSectionRef, isPartnerSectionVisible }: PartnerSectionProps) {
  return (
    <section ref={partnerSectionRef} className="relative py-20 lg:py-40 bg-gray-100">
      {/* 標題區域 */}
      <div className="text-center px-6 mb-16">
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black uppercase mb-4 ${isPartnerSectionVisible ? 'animate-partner-title' : 'opacity-0'}`}
          style={{
            fontFamily: "'HanWangMingHeavy', serif",
            fontWeight: 400,
            letterSpacing: '0.05em'
          }}
        >
          Let&apos;s grow business together
        </h2>
      </div>

      {/* 卡片區域 */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* For BRANDS 卡片 */}
        <div className={`group bg-white text-black aspect-[300/400] relative flex flex-col items-start p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${isPartnerSectionVisible ? 'animate-partner-card-1' : 'opacity-0'}`}>
          <h3
            className="text-3xl lg:text-4xl uppercase mb-3"
            style={{
              fontFamily: "'Mantou Sans', cursive",
              fontWeight: 400,
              letterSpacing: '0.05em'
            }}
          >
            For BRANDS
          </h3>
          <p
            className="text-xl lg:text-2xl mb-6"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 700
            }}
          >
            頭家好
          </p>
          <p
            className="text-base lg:text-lg leading-relaxed mb-auto"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 400
            }}
          >
            有好產品，卻不知道怎麼說服世界<br />
            我們讓你的故事被看見
          </p>
          <Link
            href="https://calendar.app.google/JjkxXsrjHzUuBCPx5"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-2 text-sm uppercase mt-8 hover:gap-4 transition-all duration-300"
            style={{
              fontFamily: "'HanWangMingHeavy', serif"
            }}
          >
            <span className="h-2 w-3 bg-current transition-all duration-200 group-hover/link:w-7"></span>
            <span>立即預約</span>
          </Link>
        </div>

        {/* For Talent 卡片 */}
        <div className={`group bg-black text-white aspect-[300/400] relative flex flex-col items-start p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${isPartnerSectionVisible ? 'animate-partner-card-2' : 'opacity-0'}`}>
          <h3
            className="text-3xl lg:text-4xl uppercase mb-3"
            style={{
              fontFamily: "'Mantou Sans', cursive",
              fontWeight: 400,
              letterSpacing: '0.05em'
            }}
          >
            For Talent
          </h3>
          <p
            className="text-xl lg:text-2xl mb-6"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 700
            }}
          >
            專家好
          </p>
          <p
            className="text-base lg:text-lg leading-relaxed mb-auto"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 400
            }}
          >
            我們正在找<br />
            我們幫你打造屬於你的行銷武器<br />
            一起合作，一起進化
          </p>
          <Link
            href="https://calendar.app.google/JjkxXsrjHzUuBCPx5"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-2 text-sm uppercase mt-8 hover:gap-4 transition-all duration-300"
            style={{
              fontFamily: "'HanWangMingHeavy', serif"
            }}
          >
            <span className="h-2 w-3 bg-current transition-all duration-200 group-hover/link:w-7"></span>
            <span>加入我們</span>
          </Link>
        </div>
      </div>

      {/* 動畫樣式 */}
      <style jsx>{`
        @keyframes partnerTitleFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes partnerCardSlideIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-partner-title {
          animation: partnerTitleFadeIn 1s ease-out forwards;
        }

        .animate-partner-card-1 {
          animation: partnerCardSlideIn 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }

        .animate-partner-card-2 {
          animation: partnerCardSlideIn 0.8s ease-out forwards;
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  )
}
