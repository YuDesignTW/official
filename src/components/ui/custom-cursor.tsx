'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // 檢測是否為行動裝置
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4)
      cursorY.set(e.clientY - 4)
    }

    const checkPointer = () => {
      const target = document.elementFromPoint(cursorX.get() + 4, cursorY.get() + 4)
      const isClickable = target && (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        window.getComputedStyle(target).cursor === 'pointer'
      )
      setIsPointer(!!isClickable)
    }

    // 只在非行動裝置上啟用滑鼠特效
    if (!isMobile) {
      window.addEventListener('mousemove', moveCursor)
      window.addEventListener('mousemove', checkPointer)
    }

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousemove', checkPointer)
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [cursorX, cursorY, isMobile])

  // 在行動裝置上不顯示自定義遊標
  if (isMobile) {
    return null
  }

  return (
    <>
      {/* 大橘色圓形遊標 */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full bg-primary"
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: '20px',
          height: '20px',
          marginLeft: '-10px',
          marginTop: '-10px',
        }}
      />
    </>
  )
}