'use client'

import { useEffect, useState, useRef } from 'react'

/**
 * 關鍵資源列表 - 需要預載的圖片和影片
 * 策略：只預載首屏必需的資源，其他資源延遲載入
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
    '/images/yulab/loginvideo.mp4',                      // 背景影片（必需）
    '/images/yulab/video/01_project_management.mp4',     // 第一個功能影片（必需）
  ]
}

/**
 * 預載資源的 Hook - 簡化版本
 */
function useResourcePreloader() {
  const [displayProgress, setDisplayProgress] = useState(0)
  const [targetProgress, setTargetProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const targetProgressRef = useRef(0)  // ✅ 使用 ref 來追蹤最新的 targetProgress

  // useEffect #1: 資源預載（只執行一次）
  useEffect(() => {
    const totalResources = CRITICAL_RESOURCES.images.length + CRITICAL_RESOURCES.videos.length
    let loadedCount = 0

    const updateProgress = () => {
      loadedCount++
      const progress = Math.floor((loadedCount / totalResources) * 100)
      targetProgressRef.current = progress
      setTargetProgress(progress)
    }

    // 預載圖片
    const imagePromises = CRITICAL_RESOURCES.images.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image()
        let isResolved = false

        const timeout = setTimeout(() => {
          if (!isResolved) {
            isResolved = true
            updateProgress()
            resolve()
          }
        }, 3000)

        img.onload = () => {
          if (!isResolved) {
            clearTimeout(timeout)
            isResolved = true
            updateProgress()
            resolve()
          }
        }

        img.onerror = () => {
          if (!isResolved) {
            clearTimeout(timeout)
            isResolved = true
            updateProgress()
            resolve()
          }
        }

        img.src = src
      })
    })

    // 預載影片
    const videoPromises = CRITICAL_RESOURCES.videos.map((src) => {
      return new Promise<void>((resolve) => {
        const video = document.createElement('video')
        let isResolved = false

        const timeout = setTimeout(() => {
          if (!isResolved) {
            isResolved = true
            updateProgress()
            resolve()
          }
        }, 4000)

        video.preload = 'metadata'

        video.onloadedmetadata = () => {
          if (!isResolved) {
            clearTimeout(timeout)
            isResolved = true
            updateProgress()
            resolve()
          }
        }

        video.onerror = () => {
          if (!isResolved) {
            clearTimeout(timeout)
            isResolved = true
            updateProgress()
            resolve()
          }
        }

        video.src = src
      })
    })

    // 等待所有資源載入完成
    Promise.all([...imagePromises, ...videoPromises])
      .then(() => {
        targetProgressRef.current = 100
        setTargetProgress(100)
      })
      .catch(() => {
        targetProgressRef.current = 100
        setTargetProgress(100)
      })

    // 全域超時（5 秒）
    const maxLoadTimer = setTimeout(() => {
      targetProgressRef.current = 100
      setTargetProgress(100)
    }, 5000)

    return () => {
      clearTimeout(maxLoadTimer)
    }
  }, [])

  // useEffect #2: 平滑進度動畫（只啟動一次，使用 ref 追蹤目標進度）
  useEffect(() => {
    let animationFrameId: number
    let isRunning = true

    const animateProgress = () => {
      if (!isRunning) return

      setDisplayProgress((current) => {
        const target = targetProgressRef.current

        if (current >= target) {
          return current
        }

        const distance = target - current
        const increment = Math.max(1, distance * 0.1)
        const next = Math.min(current + increment, target)
        const floored = Math.floor(next)

        return floored
      })

      animationFrameId = requestAnimationFrame(animateProgress)
    }

    animationFrameId = requestAnimationFrame(animateProgress)

    return () => {
      isRunning = false
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // useEffect #3: 完成邏輯
  useEffect(() => {
    if (displayProgress >= 100 && targetProgress >= 100) {
      const timer = setTimeout(() => {
        setIsComplete(true)
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [displayProgress, targetProgress])

  return { progress: displayProgress, isComplete }
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
