'use client'

import { useEffect, useState } from 'react'

/**
 * 關鍵資源列表 - 需要預載的圖片和影片
 */
const CRITICAL_RESOURCES = {
  images: [
    '/images/yulab/hero_left.png',
    '/images/yulab/hero_right.png',
    '/images/yulab/logo_l.png',
    '/images/yulab/logo_r.png',
    '/images/yulab/logo_cn.png',
    '/images/yulab/whyus.png',
  ],
  videos: [
    '/images/yulab/loginvideo.mp4',
    '/video/01_project_management.mp4',
  ]
}

/**
 * 預載資源的 Hook
 */
function useResourcePreloader() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const totalResources = CRITICAL_RESOURCES.images.length + CRITICAL_RESOURCES.videos.length
    let loadedCount = 0

    const updateProgress = () => {
      loadedCount++
      const currentProgress = Math.floor((loadedCount / totalResources) * 100)
      setProgress(currentProgress)

      if (loadedCount === totalResources) {
        // 所有資源載入完成後，再等待 800ms 讓動畫完整播放
        setTimeout(() => {
          setIsComplete(true)
        }, 800)
      }
    }

    // 預載圖片
    const imagePromises = CRITICAL_RESOURCES.images.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image()
        img.onload = () => {
          updateProgress()
          resolve()
        }
        img.onerror = () => {
          // 即使載入失敗也要繼續
          updateProgress()
          resolve()
        }
        img.src = src
      })
    })

    // 預載影片（只載入 metadata）
    const videoPromises = CRITICAL_RESOURCES.videos.map((src) => {
      return new Promise<void>((resolve) => {
        const video = document.createElement('video')
        video.preload = 'metadata'
        video.onloadedmetadata = () => {
          updateProgress()
          resolve()
        }
        video.onerror = () => {
          // 即使載入失敗也要繼續
          updateProgress()
          resolve()
        }
        video.src = src
      })
    })

    // 執行所有預載
    Promise.all([...imagePromises, ...videoPromises]).catch(() => {
      // 確保即使有錯誤也能完成載入
      setIsComplete(true)
    })

    // 設定最大載入時間（5 秒後強制完成）
    const maxLoadTimer = setTimeout(() => {
      setIsComplete(true)
    }, 5000)

    return () => {
      clearTimeout(maxLoadTimer)
    }
  }, [])

  return { progress, isComplete }
}

export function LoadingAnimation() {
  const { progress, isComplete } = useResourcePreloader()
  const [shouldHide, setShouldHide] = useState(false)
  const [hideWhiteBg, setHideWhiteBg] = useState(false)

  useEffect(() => {
    if (isComplete) {
      // 觸發自定義事件通知資源載入完成
      window.dispatchEvent(new CustomEvent('resourcesLoaded'))

      // 等待綠色圓形擴散到足夠大（0.8s）後，才隱藏白色背景
      const whiteBgTimer = setTimeout(() => {
        setHideWhiteBg(true)
      }, 800)

      // 資源載入完成後，等待圓形擴散動畫結束（1.6s）
      const hideTimer = setTimeout(() => {
        setShouldHide(true)
      }, 1600)

      return () => {
        clearTimeout(whiteBgTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [isComplete])

  if (shouldHide) return null

  return (
    <>
      {/* Loading Container */}
      <div className="fixed top-0 left-0 w-full h-screen z-[9999] pointer-events-none">
        {/* 白色背景層 - 遮蓋所有內容 */}
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-500 ${
            hideWhiteBg ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            zIndex: 1,
          }}
        ></div>

        {/* 圓形擴散層 */}
        <div className={`circle-layer circle-green ${isComplete ? 'expand' : ''}`}></div>
        <div className={`circle-layer circle-black ${isComplete ? 'expand' : ''}`}></div>

        {/* 載入進度顯示 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="text-center">
            {/* 進度百分比 */}
            <div
              className="text-6xl sm:text-7xl md:text-8xl font-black mb-2 transition-all duration-300"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: isComplete ? '#0a0a0a' : '#00FF88',
                textShadow: isComplete
                  ? '0 0 20px rgba(10, 10, 10, 0.3)'
                  : '0 0 30px rgba(0, 255, 136, 0.5)',
              }}
            >
              {progress}%
            </div>

            {/* 進度條 */}
            <div className="w-48 sm:w-64 h-2 bg-white/20 overflow-hidden mx-auto">
              <div
                className="h-full transition-all duration-300 ease-out"
                style={{
                  width: `${progress}%`,
                  background: isComplete
                    ? 'linear-gradient(90deg, #0a0a0a 0%, #333 100%)'
                    : 'linear-gradient(90deg, #00FF88 0%, #00ff9d 100%)',
                  boxShadow: isComplete
                    ? '0 0 10px rgba(10, 10, 10, 0.5)'
                    : '0 0 15px rgba(0, 255, 136, 0.6)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Circle Layers */
        .circle-layer {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transform-origin: center;
          transition: all 0.3s ease;
        }

        .circle-green {
          background: #00FF88;
          z-index: 3;
        }

        .circle-green.expand {
          animation: expandCircle 1.6s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        .circle-black {
          background: #0a0a0a;
          z-index: 2;
        }

        .circle-black.expand {
          animation: expandCircle 1.6s cubic-bezier(0.65, 0, 0.35, 1) 0.6s forwards;
        }

        @keyframes expandCircle {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          60% {
            width: 200vmax;
            height: 200vmax;
            opacity: 1;
          }
          100% {
            width: 200vmax;
            height: 200vmax;
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}
