'use client'

import Image from 'next/image'
import { RefObject } from 'react'

// 緩動函數：三次方緩動 - 開始慢，中間快，結束慢
function easeInOutCubic(t: number): number {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2
}

interface StorySectionProps {
  storySectionRef: RefObject<HTMLElement>
  storyProgress: number
  windowSize: { width: number; height: number }
}

export function StorySection({ storySectionRef, storyProgress, windowSize }: StorySectionProps) {
  return (
    <section
      ref={storySectionRef}
      className="relative bg-white"
      style={{ height: '300vh' }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* 第一行：副標題 - 手機版隱藏，桌面版顯示 */}
        <div
          className="hidden sm:block absolute left-0 right-0 text-center z-20 px-4"
          style={{
            top: 'calc(50% - 180px)',
            opacity: Math.max(0, 1 - storyProgress * 2),
            transform: `translateY(${storyProgress * 50}px)`
          }}
        >
          <p
            className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-black"
            style={{
              fontFamily: "'HanWangMingHeavy', serif",
              letterSpacing: '0.1em'
            }}
          >
            Strategy. System. Story. All in one place.
          </p>
        </div>

        {/* 手機版頂部文字：從策略到執行、從靈感到內容 */}
        <div
          className="sm:hidden absolute left-0 right-0 top-4 text-center z-20 px-4"
          style={{
            opacity: Math.max(0, 1 - storyProgress * 2)
          }}
        >
          <p
            className="text-3xl text-black mb-2"
            style={{
              fontFamily: "'Mantou Sans', cursive",
              fontWeight: 400,
              letterSpacing: '0.25em'
            }}
          >
            從策略到執行
          </p>
          <p
            className="text-3xl text-black"
            style={{
              fontFamily: "'Mantou Sans', cursive",
              fontWeight: 400,
              letterSpacing: '0.25em'
            }}
          >
            從靈感到內容
          </p>
        </div>

        {/* 第二行：左右文字 + 中間圖片 */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* 左側文字 - 手機版隱藏 */}
          <div
            className="hidden lg:block absolute z-10 text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              fontFamily: "'Mantou Sans', cursive",
              fontWeight: 400,
              letterSpacing: '0.25em',
              top: 'calc(50%)',
              left: 'calc(50% - 130px)',
              transform: `translate(-100%, -50%) translateX(${storyProgress * 150}px)`,
              opacity: Math.max(0, 1 - storyProgress * 2),
              willChange: 'transform, opacity'
            }}
          >
            從策略到執行
          </div>

          {/* 中間圖片 */}
          <div
            className="relative flex items-center justify-center"
            style={{
              willChange: 'transform',
              marginLeft: windowSize.width >= 1024 ? `${-50 + 50 * easeInOutCubic(storyProgress)}px` : '0px'
            }}
          >
            <Image
              src="/images/yulab/whyus.png"
              alt="Why Us"
              width={1920}
              height={1080}
              className="object-contain sm:object-contain"
              style={{
                // 手機版：直式夾槽型（9:16 比例），桌面版：橫式
                width: windowSize.width < 640
                  ? `${Math.min(windowSize.width * 0.5, 200) + (windowSize.width - Math.min(windowSize.width * 0.5, 200)) * easeInOutCubic(storyProgress)}px`
                  : storyProgress > 0.7
                    ? `${Math.max(windowSize.width, windowSize.height * (16/9))}px`
                    : `${150 + (Math.max(windowSize.width, windowSize.height * (16/9)) - 150) * easeInOutCubic(storyProgress)}px`,
                height: windowSize.width < 640
                  ? `${Math.min(windowSize.height * 0.6, 400) + (windowSize.height - Math.min(windowSize.height * 0.6, 400)) * easeInOutCubic(storyProgress)}px`
                  : storyProgress > 0.7
                    ? `${Math.max(windowSize.height, windowSize.width * (9/16))}px`
                    : `${250 + (Math.max(windowSize.height, windowSize.width * (9/16)) - 250) * easeInOutCubic(storyProgress)}px`,
                maxWidth: 'none',
                maxHeight: 'none',
                borderRadius: `${16 * (1 - storyProgress)}px`,
                willChange: 'width, height',
                objectFit: windowSize.width < 640
                  ? (storyProgress > 0.5 ? 'cover' : 'cover')
                  : (storyProgress > 0.7 ? 'cover' : 'contain'),
                objectPosition: windowSize.width < 640 ? '60% center' : 'center'
              }}
              quality={100}
              priority
            />
          </div>

          {/* 右側文字 - 手機版隱藏 */}
          <div
            className="hidden lg:block absolute z-10 text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              fontFamily: "'Mantou Sans', cursive",
              fontWeight: 400,
              letterSpacing: '0.25em',
              top: 'calc(50%)',
              left: 'calc(50% + 100px)',
              transform: `translateY(-50%) translateX(-${storyProgress * 150}px)`,
              opacity: Math.max(0, 1 - storyProgress * 2),
              willChange: 'transform, opacity'
            }}
          >
            從靈感到內容
          </div>
        </div>

        {/* 第三行：底部文字 - 桌面版在中間，手機版在底部 */}
        <div
          className="hidden sm:block absolute left-0 right-0 text-center z-20 px-4"
          style={{
            top: 'calc(50% + 60px)',
            opacity: Math.max(0, 1 - storyProgress * 2),
            transform: `translateY(${storyProgress * 50}px)`
          }}
        >
          <p
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-black"
            style={{
              fontFamily: "'Mantou Sans', cursive",
              fontWeight: 400,
              letterSpacing: '0.25em'
            }}
          >
            AI 幫你整合「有料的行銷」。
          </p>
        </div>

        {/* 手機版底部文字 */}
        <div
          className="sm:hidden absolute left-0 right-0 bottom-4 text-center z-20 px-4"
          style={{
            opacity: Math.max(0, 1 - storyProgress * 2)
          }}
        >
          <p
            className="text-3xl text-black"
            style={{
              fontFamily: "'Mantou Sans', cursive",
              fontWeight: 400,
              letterSpacing: '0.25em'
            }}
          >
            AI 幫你整合「有料的行銷」。
          </p>
        </div>

        {/* 圖片放大後的文字內容 */}
        <div
          className="absolute left-0 right-0 sm:left-auto sm:right-4 md:right-10 lg:right-20 xl:right-32 top-1/2 transform -translate-y-1/2 z-30 text-center sm:text-right px-4"
          style={{
            opacity: Math.max(0, storyProgress > 0.6 ? (storyProgress - 0.6) * 2.5 : 0)
          }}
        >
          <div className="space-y-2 sm:space-y-4 md:space-y-6">
            <p
              className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-white"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: 400,
                letterSpacing: '0.25em'
              }}
            >
              品牌每一次活動都從零開始
            </p>
            <p
              className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-white"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: 400,
                letterSpacing: '0.25em'
              }}
            >
              每份文案都得重寫
            </p>
            <p
              className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-white"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: 400,
                letterSpacing: '0.25em'
              }}
            >
              行銷應該更聰明，而不是更累
            </p>
            <p
              className="text-xl sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white mt-4 sm:mt-8"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.25em'
              }}
            >
              有料研究室
            </p>
            <p
              className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-white"
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: 400,
                letterSpacing: '0.25em'
              }}
            >
              讓你的品牌有自己的「行銷大腦」
            </p>
          </div>

          {/* 英文文字 */}
          <p
            className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl text-white mt-6 sm:mt-12"
            style={{
              fontFamily: "'HanWangMingHeavy', serif",
              letterSpacing: '0.25em'
            }}
          >
            Most teams have great products — but not a great story yet.
          </p>
        </div>
      </div>
    </section>
  )
}
