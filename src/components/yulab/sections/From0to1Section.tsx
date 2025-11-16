'use client'

import Image from 'next/image'
import { RefObject } from 'react'

interface From0to1SectionProps {
  fromSectionRef: RefObject<HTMLElement>
  isFromSectionVisible: boolean
  windowSize: { width: number; height: number }
}

export function From0to1Section({ fromSectionRef, isFromSectionVisible, windowSize }: From0to1SectionProps) {
  return (
    <section ref={fromSectionRef} className="relative h-screen flex flex-col justify-center items-center overflow-hidden z-10" style={{backgroundColor: '#E7EAEC'}}>
      {/* 底層背景圖片 */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center" style={{top: '40px'}}>
        <Image
          src="/images/yulab/image/backgroup.png"
          alt="Background"
          width={1920}
          height={800}
          sizes="100vw"
          className="w-full h-auto object-contain"
          loading="lazy"
          quality={85}
        />
      </div>

      {/* 多層圖片 */}
      <div className="absolute inset-0 w-full h-full">
        {/* 第一層：ideation.png - 手機版最前面且放大，桌面版中間靠左 */}
        <div
          className={`absolute opacity-0 ${isFromSectionVisible ? 'animate-fadeInLayer3' : ''}`}
          style={{
            left: windowSize.width < 768 ? '40%' : '10%',
            top: windowSize.width < 768 ? '80%' : 'calc(50% + 80px)',
            transform: windowSize.width < 768 ? 'translate(-50%, -50%)' : 'translateY(-50%)',
            zIndex: windowSize.width < 768 ? 20 : 3
          }}
        >
          <Image
            src="/images/yulab/image/ideation.png"
            alt="Ideation"
            width={300}
            height={200}
            sizes="(max-width: 640px) 224px, (max-width: 768px) 192px, (max-width: 1024px) 240px, 288px"
            className="object-contain w-56 sm:w-48 md:w-60 lg:w-64 xl:w-72"
            style={{ height: 'auto' }}
            loading="lazy"
            quality={85}
          />
        </div>

        {/* 第二層：Group 4.png - 桌面版正中間，手機版放大且只顯示右半 */}
        <div
          className={`absolute opacity-0 ${isFromSectionVisible ? 'animate-fadeInLayer1' : ''}`}
          style={{
            left: windowSize.width < 640 ? '-70vw' : '50%',
            top: windowSize.width < 640 ? 'calc(50%)' : 'calc(50% + 80px)',
            transform: windowSize.width < 640 ? 'translateY(-50%)' : 'translate(-50%, -50%)',
            width: windowSize.width < 640 ? '150vw' : 'auto',
            zIndex: 1
          }}
        >
          <Image
            src="/images/yulab/image/Group 4.png"
            alt="Group 4"
            width={1200}
            height={400}
            sizes="(max-width: 640px) 200vw, (max-width: 768px) 80vw, 70vw"
            className="object-contain h-auto w-[200vw] sm:w-[80vw] md:w-[70vw] lg:w-auto max-w-full"
            loading="lazy"
            quality={85}
          />
        </div>

        {/* 第三層：Group 1.png - 手機版左下角放大，桌面版中間靠右 */}
        <div
          className={`absolute opacity-0 ${isFromSectionVisible ? 'animate-fadeInLayer2' : ''}`}
          style={{
            left: windowSize.width < 768 ? '20%' : 'auto',
            right: windowSize.width < 768 ? 'auto' : '15%',
            bottom: windowSize.width < 768 ? '0%' : 'auto',
            top: windowSize.width < 768 ? 'auto' : 'calc(50%)',
            transform: windowSize.width < 768 ? 'none' : 'translateY(-50%)',
            zIndex: windowSize.width < 768 ? 10 : 2
          }}
        >
          <Image
            src="/images/yulab/image/Group 1.png"
            alt="Group 1"
            width={300}
            height={200}
            sizes="(max-width: 640px) 224px, (max-width: 768px) 192px, (max-width: 1024px) 240px, 288px"
            className="object-contain w-56 sm:w-48 md:w-60 lg:w-64 xl:w-72"
            style={{ height: 'auto' }}
            loading="lazy"
            quality={85}
          />
        </div>

        {/* 第四層：traffic_influence.png - 手機版隱藏，桌面版中間靠左下 */}
        <div
          className={`absolute opacity-0 ${isFromSectionVisible ? 'animate-fadeInLayer4' : ''} ${windowSize.width < 768 ? 'hidden' : ''}`}
          style={{
            left: windowSize.width < 768 ? '10%' : '20%',
            bottom: 'calc(25% - 20px)',
            zIndex: 4
          }}
        >
          <Image
            src="/images/yulab/image/traffic_infulance.png"
            alt="Traffic Influence"
            width={250}
            height={180}
            sizes="(max-width: 640px) 112px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
            className="object-contain w-28 sm:w-40 md:w-48 lg:w-48 xl:w-56"
            style={{ height: 'auto' }}
            loading="lazy"
            quality={85}
          />
        </div>
      </div>

      {/* 文字內容 */}
      <div className="absolute top-12 sm:top-16 lg:top-20 left-0 right-0 z-10 text-center px-4 sm:px-6">
        <h1
          className={`font-black text-black ${isFromSectionVisible ? 'animate-fadeInUp' : ''}`}
          style={{
            fontFamily: "'HanWangMingHeavy', serif",
            fontWeight: 900,
            fontSize: windowSize.width < 640 ? '36px' : windowSize.width < 1024 ? '48px' : '72px',
            animationDelay: '0.5s'
          }}
        >
          From 0 to 1
        </h1>

        <h2
          className={`font-black text-black ${isFromSectionVisible ? 'animate-fadeInUp' : ''}`}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 900,
            fontSize: windowSize.width < 640 ? '14px' : windowSize.width < 1024 ? '18px' : '24px',
            letterSpacing: '0.25em',
            animationDelay: '0.4s'
          }}
        >
          從靈感構思到執行排程計畫
        </h2>
      </div>

      {/* 動畫樣式 */}
      <style jsx>{`
        @keyframes fadeInLayer1 {
          from {
            opacity: 0;
            scale: 0.8;
          }
          to {
            opacity: 1;
            scale: 1;
          }
        }

        @keyframes fadeInLayer1Mobile {
          from {
            opacity: 0;
            scale: 0.8;
          }
          to {
            opacity: 1;
            scale: 1;
          }
        }

        @keyframes fadeInLayer2 {
          from {
            opacity: 0;
            transform: translateY(-50%) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) scale(1);
          }
        }

        @keyframes fadeInLayer3 {
          from {
            opacity: 0;
            transform: translateY(-50%) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) scale(1);
          }
        }

        @keyframes fadeInLayer4 {
          from {
            opacity: 0;
            transform: scale(0.8);
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

        .animate-fadeInLayer1 {
          animation: fadeInLayer1 1s ease-out forwards;
          animation-delay: 0.6s;
        }

        .animate-fadeInLayer2 {
          animation: fadeInLayer2 1s ease-out forwards;
          animation-delay: 0.8s;
        }

        .animate-fadeInLayer3 {
          animation: fadeInLayer3 1s ease-out forwards;
          animation-delay: 1s;
        }

        .animate-fadeInLayer4 {
          animation: fadeInLayer4 1s ease-out forwards;
          animation-delay: 1.2s;
        }

        .animate-fadeInUp {
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
