'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
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

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousemove', checkPointer)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousemove', checkPointer)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* 大橘色圓形游標 */}
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