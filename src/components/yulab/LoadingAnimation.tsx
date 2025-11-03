'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function LoadingAnimation() {
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    // 2.2 秒後結束動畫（圓形擴散完成後）
    const timer = setTimeout(() => {
      setIsFinished(true)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  if (isFinished) return null

  return (
    <>
      {/* Loading Container */}
      <div className="fixed top-0 left-0 w-full h-screen z-[9999] pointer-events-none">
        {/* 圓形擴散層 */}
        <div className="circle-layer circle-green"></div>
        <div className="circle-layer circle-black"></div>
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
        }

        .circle-green {
          background: #00FF88;
          animation: expandCircle 1.6s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          z-index: 3;
        }

        .circle-black {
          background: #0a0a0a;
          animation: expandCircle 1.6s cubic-bezier(0.65, 0, 0.35, 1) 0.6s forwards;
          z-index: 2;
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
