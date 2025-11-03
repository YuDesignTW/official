'use client'

import { useState, RefObject } from 'react'

interface ServiceSectionProps {
  serviceSectionRef?: RefObject<HTMLElement>
}

export function ServiceSection({ serviceSectionRef }: ServiceSectionProps) {
  const [activeServiceVideo, setActiveServiceVideo] = useState('/video/01_project_management.mp4')
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const features = [
    {
      number: 1,
      title: '專案管理',
      subtitle: 'OKR Management',
      description: '用 OKR 拆解行銷目標，自上而下對齊團隊方向',
      video: '/images/yulab/video/01_project_management.mp4'
    },
    {
      number: 2,
      title: '品牌知識庫',
      subtitle: 'Knowledge System',
      description: '資料為王,建立新時代的資訊軍火庫',
      video: '/images/yulab/video/02_knowledgebase.mp4'
    },
    {
      number: 3,
      title: '爆款文案生成',
      subtitle: 'Copy Engine',
      description: '從標題、文案、影片腳本到流量密碼，一鍵生成',
      video: '/images/yulab/video/03_hotcontext.mp4'
    },
    {
      number: 4,
      title: '活動企劃',
      subtitle: 'Campaign Creator',
      description: '自動生成與品牌高價值的活動提案',
      video: '/images/yulab/video/04_activity.mp4'
    },
    {
      number: 5,
      title: '批量改寫與排程',
      subtitle: 'Auto Rewrite & Schedule',
      description: '跨平台文案生成、排程發佈',
      video: '/images/yulab/video/05_schedule.mp4'
    }
  ]

  // 觸控滑動處理
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY)
    setTouchEnd(e.targetTouches[0].clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isUpSwipe = distance > 50
    const isDownSwipe = distance < -50

    const currentIndex = features.findIndex(f => f.video === activeServiceVideo)

    if (isUpSwipe) {
      // 向上滑動，切換到上一張（反向循環）
      const prevIndex = (currentIndex - 1 + features.length) % features.length
      setActiveServiceVideo(features[prevIndex].video)
    }

    if (isDownSwipe) {
      // 向下滑動，切換到下一張（反向循環）
      const nextIndex = (currentIndex + 1) % features.length
      setActiveServiceVideo(features[nextIndex].video)
    }
  }

  return (
    <section
      ref={serviceSectionRef}
      className="relative min-h-screen bg-white"
      onClick={(e) => {
        // 桌面版：如果點擊的不是list項目，重置為第一個影片
        if (!(e.target as HTMLElement).closest('li') && !(e.target as HTMLElement).closest('button')) {
          if (window.innerWidth >= 1024) { // lg breakpoint
            setActiveServiceVideo('/video/01_project_management.mp4')
          }
        }
      }}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-screen">
        {/* 左側：標題和功能列表 */}
        <div className="flex flex-col justify-between pt-24 sm:pt-28 lg:pt-28 pb-0">
          {/* 上方：標題區域 */}
          <div className="px-6 sm:px-8 lg:px-16 mb-8 sm:mb-12 lg:mb-0 text-center lg:text-left">
            {/* 副標 */}
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-2"
              style={{
                fontFamily: "'HanWangMingHeavy', serif",
                letterSpacing: '0.1em'
              }}
            >
              From thinking to doing, powered by AI.
            </p>

            {/* 主標 */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black"
              style={{
                fontFamily: "'Mantou Sans', cursive",
                fontWeight: 400,
                letterSpacing: '0.05em'
              }}
            >
              一站式行銷專家系統
            </h2>
          </div>

          {/* 下方：功能列表（靠底部） */}
          <div>
            {/* 提示文字 - 只在桌面版顯示 */}
            <div className="hidden lg:flex justify-end pr-3 sm:pr-4 lg:pr-5 mb-2 animate-fadeIn">
              <p
                className="text-xs sm:text-sm text-gray-500"
                style={{ fontFamily: "'HanWangMingHeavy', serif" }}
              >
                ↓ Click
              </p>
            </div>

            {/* 手機版卡片堆疊設計 (< lg) - 唱片選擇器風格 */}
            <div className="lg:hidden px-6 pb-6 relative">
              <div
                className="relative h-[240px]"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {features.map((feature, index) => {
                  const currentIndex = features.findIndex(f => f.video === activeServiceVideo)
                  const totalCards = features.length

                  // 計算循環位置（支援無限循環，反向排列）
                  let position = currentIndex - index

                  // 處理循環邏輯
                  if (position > totalCards / 2) {
                    position -= totalCards
                  } else if (position < -totalCards / 2) {
                    position += totalCards
                  }

                  // 計算卡片位置和樣式
                  let transform = ''
                  let zIndex = 0
                  let opacity = 0
                  let pointerEvents: 'auto' | 'none' = 'none'

                  if (position === 0) {
                    // 當前選中的卡片（中央）- 位置 0
                    transform = 'translateY(-20px) scale(1)'
                    zIndex = 5
                    opacity = 1
                    pointerEvents = 'auto'
                  } else if (position === -1) {
                    // 上一張卡片 - 位置 -1（往上）
                    transform = 'translateY(-80px) scale(0.95)'
                    zIndex = 4
                    opacity = 0.5
                    pointerEvents = 'auto'
                  } else if (position === -2) {
                    // 上上張卡片 - 位置 -2（更往上）
                    transform = 'translateY(-120px) scale(0.9)'
                    zIndex = 3
                    opacity = 0.3
                    pointerEvents = 'auto'
                  } else if (position === 1) {
                    // 下一張卡片 - 位置 +1（往下）
                    transform = 'translateY(40px) scale(0.95)'
                    zIndex = 4
                    opacity = 0.5
                    pointerEvents = 'auto'
                  } else if (position === 2) {
                    // 下下張卡片 - 位置 +2（更往下）
                    transform = 'translateY(80px) scale(0.9)'
                    zIndex = 3
                    opacity = 0.3
                    pointerEvents = 'auto'
                  } else {
                    // 其他卡片隱藏
                    transform = position > 0 ? 'translateY(100px) scale(0.85)' : 'translateY(-140px) scale(0.85)'
                    zIndex = 2
                    opacity = 0
                    pointerEvents = 'none'
                  }

                  return (
                    <div
                      key={feature.number}
                      className="absolute inset-x-0 top-1/2 -translate-y-1/2 transition-all duration-500 ease-out cursor-pointer"
                      style={{
                        transform,
                        zIndex,
                        opacity,
                        pointerEvents
                      }}
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveServiceVideo(feature.video)
                      }}
                    >
                      <div className={`relative bg-gradient-to-br from-white to-gray-50 rounded-lg p-4 pr-12 shadow-xl border-2 transition-all duration-300 ${
                        position === 0
                          ? 'border-[#00FF88] shadow-[#00FF88]/30'
                          : 'border-gray-200'
                      }`}>
                        {/* 卡片內容 */}
                        <div className="flex items-start gap-3 mb-2">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                            position === 0
                              ? 'bg-[#00FF88] text-black'
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            <span
                              className={`text-lg font-bold transition-all duration-300 ${
                                position === 0 ? 'opacity-100' : 'opacity-40'
                              }`}
                              style={{
                                fontFamily: "'Mantou Sans', cursive",
                                fontWeight: 400
                              }}
                            >
                              {feature.number}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3
                              className={`text-lg mb-0.5 truncate transition-all duration-300 ${
                                position === 0 ? 'text-black opacity-100' : 'text-black opacity-30'
                              }`}
                              style={{
                                fontFamily: "'Mantou Sans', cursive",
                                fontWeight: 400,
                                letterSpacing: '0.05em'
                              }}
                            >
                              {feature.title}
                            </h3>
                            <span
                              className={`text-xs font-semibold uppercase transition-all duration-300 ${
                                position === 0 ? 'text-gray-600 opacity-100' : 'text-gray-600 opacity-30'
                              }`}
                              style={{ letterSpacing: '0.1em' }}
                            >
                              {feature.subtitle}
                            </span>
                          </div>
                        </div>

                        {/* 描述文字 - 只在選中時完全顯示 */}
                        <p className={`text-sm text-gray-600 leading-relaxed transition-all duration-300 ${
                          position === 0 ? 'opacity-100' : 'opacity-20'
                        }`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* 導航提示 - 垂直排列在右側 */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10">
                {features.map((feature) => (
                  <button
                    key={feature.number}
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveServiceVideo(feature.video)
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      activeServiceVideo === feature.video
                        ? 'h-8 w-2 bg-[#00FF88]'
                        : 'h-2 w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* 桌面版 List 設計 (≥ lg) - 保持原樣 */}
            <ul className="hidden lg:block space-y-0">
            {features.map((feature) => (
              <li
                key={feature.number}
                className={`group relative bg-white overflow-hidden cursor-pointer transition-all duration-300 hover:translate-x-1 hover:shadow-lg ${activeServiceVideo === feature.video ? 'ring-2 ring-[#00FF88] ring-inset' : ''}`}
                onClick={(e) => {
                  e.stopPropagation() // 防止事件冒泡到section
                  // 切換影片
                  setActiveServiceVideo(feature.video)

                  // 點擊漣漪效果
                  const ripple = document.createElement('div')
                  ripple.className = 'absolute rounded-full bg-[#00ff9d]/40 pointer-events-none'
                  ripple.style.width = '20px'
                  ripple.style.height = '20px'
                  const rect = e.currentTarget.getBoundingClientRect()
                  ripple.style.left = `${e.clientX - rect.left - 10}px`
                  ripple.style.top = `${e.clientY - rect.top - 10}px`
                  ripple.style.animation = 'ripple 0.6s ease-out'
                  e.currentTarget.appendChild(ripple)
                  setTimeout(() => ripple.remove(), 600)
                }}
                onMouseMove={(e) => {
                  // 滑鼠追蹤光暈效果
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top
                  const glow = e.currentTarget.querySelector('.ambient-glow') as HTMLElement
                  if (glow) {
                    glow.style.left = `${x - 50}px`
                    glow.style.top = `${y - 50}px`
                    glow.style.transform = 'scale(1.5)'
                  }
                }}
                onMouseLeave={(e) => {
                  const glow = e.currentTarget.querySelector('.ambient-glow') as HTMLElement
                  if (glow) {
                    glow.style.left = '-50px'
                    glow.style.top = '50%'
                    glow.style.transform = 'translateY(-50%) scale(0.5)'
                  }
                }}
              >
                {/* 螢光進度條 */}
                <div className="absolute left-[-100%] top-0 w-full h-full bg-gradient-to-r from-transparent via-[#00ff9d]/40 to-transparent transition-all duration-600 ease-out group-hover:left-[100%] blur-sm" />
                <div className="absolute left-[-100%] top-0 w-full h-full bg-gradient-to-r from-transparent via-[#00ffff]/30 to-transparent transition-all duration-600 ease-out group-hover:left-[100%] blur-md" />

                {/* 內容 */}
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between py-3 sm:py-4 lg:py-5 pl-8 sm:pl-10 lg:pl-16 pr-3 sm:pr-4 lg:pr-5 gap-3">
                  <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                    <span
                      className="text-xl sm:text-2xl lg:text-3xl text-gray-800 min-w-[30px] sm:min-w-[40px] lg:min-w-[50px]"
                      style={{
                        fontFamily: "'Mantou Sans', cursive",
                        fontWeight: 400
                      }}
                    >
                      {feature.number}
                    </span>
                    <h3
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black"
                      style={{
                        fontFamily: "'Mantou Sans', cursive",
                        fontWeight: 400,
                        letterSpacing: '0.05em'
                      }}
                    >
                      {feature.title}
                    </h3>
                  </div>

                  {/* 右側內容 - hover 顯示 */}
                  <div className="opacity-0 translate-x-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 max-w-md text-right">
                    <span
                      className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2"
                      style={{ letterSpacing: '0.1em' }}
                    >
                      {feature.subtitle}
                    </span>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* 底部發光線 */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#00ffff] via-[#00ff9d] to-[#00ffff] transition-all duration-600 group-hover:w-full shadow-[0_0_10px_rgba(0,255,157,0.8)]" />

                {/* 環境光暈 */}
                <div className="ambient-glow absolute top-1/2 left-[-50px] w-24 h-24 bg-[#00ff9d]/40 rounded-full blur-3xl opacity-0 transition-all duration-600 group-hover:opacity-100" style={{ transform: 'translateY(-50%) scale(0.5)' }} />

                {/* 灰色分隔線 */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200"></div>
              </li>
            ))}
          </ul>
          </div>
        </div>

        {/* 右側：背景影片 + 功能影片浮層 */}
        <div className="relative h-[60vh] sm:h-[70vh] lg:h-full flex items-center justify-center bg-black z-20">
          {/* 背景預設影片 */}
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/images/yulab/loginvideo.mp4" type="video/mp4" />
            您的瀏覽器不支援影片播放。
          </video>

          {/* 黑色模糊層 - 只在有功能影片時顯示 */}
          {activeServiceVideo !== '/loginvideo.mp4' && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 z-20"></div>
          )}

          {/* 功能影片浮層 - 總是顯示 */}
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 pointer-events-none z-30">
            <div
              key={`container-${activeServiceVideo}`}
              className="w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl animate-videoFadeIn"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            >
              <video
                key={activeServiceVideo}
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
                ref={(el) => {
                  if (el) el.playbackRate = 0.8
                }}
              >
                <source src={activeServiceVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* 添加動畫樣式 */}
      <style jsx>{`
        /* 隱藏滾動條 */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes tabFadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes videoFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-tabFadeIn {
          animation: tabFadeIn 0.3s ease-out forwards;
        }

        .animate-videoFadeIn {
          animation: videoFadeIn 0.4s ease-out forwards;
        }

        li:nth-child(1) {
          animation: slideIn 0.6s ease backwards 0.1s;
        }
        li:nth-child(2) {
          animation: slideIn 0.6s ease backwards 0.2s;
        }
        li:nth-child(3) {
          animation: slideIn 0.6s ease backwards 0.3s;
        }
        li:nth-child(4) {
          animation: slideIn 0.6s ease backwards 0.4s;
        }
        li:nth-child(5) {
          animation: slideIn 0.6s ease backwards 0.5s;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(0, 255, 157, 0.7);
          }
          50% {
            box-shadow: 0 0 20px 10px rgba(0, 255, 157, 0);
          }
        }

        .group:hover {
          animation: pulse 2s infinite;
        }

        @keyframes ripple {
          to {
            width: 200px;
            height: 200px;
            opacity: 0;
            margin-left: -100px;
            margin-top: -100px;
          }
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* 螢光綠跑馬燈 */}
      <div className="relative w-full overflow-hidden py-6 sm:py-8 lg:py-12" style={{ backgroundColor: '#00FF88' }}>
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: 'marquee 20s linear infinite'
          }}
        >
          {/* 重複兩次文字以確保無縫循環 */}
          <span
            className="text-sm sm:text-lg md:text-xl lg:text-2xl mx-4 sm:mx-6 lg:mx-8"
            style={{
              fontFamily: "'Mantou Sans', cursive",
              fontWeight: 400,
              color: '#000000',
              letterSpacing: '0.25em'
            }}
          >
            Designed for creators, brands, and marketing pros. Designed for creators, brands, and marketing pros.
          </span>
          <span
            className="text-sm sm:text-lg md:text-xl lg:text-2xl mx-4 sm:mx-6 lg:mx-8"
            style={{
              fontFamily: "'Mantou Sans', cursive",
              fontWeight: 400,
              color: '#000000',
              letterSpacing: '0.25em'
            }}
          >
            Designed for creators, brands, and marketing pros. Designed for creators, brands, and marketing pros.
          </span>
        </div>
      </div>
    </section>
  )
}
