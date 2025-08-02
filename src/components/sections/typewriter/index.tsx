'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

// 打字機內容資料
const TYPEWRITER_DATA = [
  {
    role: "初創團隊創業者",
    need: "思考如何達成商品化的第一哩路"
  },
  {
    role: "有經驗的企業頭家", 
    need: "尋找下一個數位成長突破口"
  },
  {
    role: "深耕地方的團隊",
    need: "尋求一個把理念轉成爆款產品的方法"
  },
  {
    role: "高超技術的發明家",
    need: "找一個能幫你打造設計、打進市場的夥伴"
  }
]

/**
 * 全新的打字機 Section
 * 簡潔直接的實現，無複雜狀態管理
 */
export function Typewriter() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [roleText, setRoleText] = useState('')
  const [needText, setNeedText] = useState('')
  const [isTypingRole, setIsTypingRole] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  // 重置到下一組數據
  const moveToNext = () => {
    const nextIndex = (currentIndex + 1) % TYPEWRITER_DATA.length
    setCurrentIndex(nextIndex)
    setRoleText('')
    setNeedText('')
    setIsTypingRole(true)
    setShowCursor(true)
  }

  // 主要打字機邏輯
  useEffect(() => {
    if (!inView) return

    const currentData = TYPEWRITER_DATA[currentIndex]
    let timeout: NodeJS.Timeout

    if (isTypingRole) {
      // 正在打字顯示角色
      if (roleText.length < currentData.role.length) {
        timeout = setTimeout(() => {
          setRoleText(prev => currentData.role.slice(0, prev.length + 1))
        }, 80) // 角色打字速度
      } else {
        // 角色打完，準備打需求
        timeout = setTimeout(() => {
          setIsTypingRole(false)
        }, 400) // 角色完成後的暫停
      }
    } else {
      // 正在打字顯示需求
      if (needText.length < currentData.need.length) {
        timeout = setTimeout(() => {
          setNeedText(prev => currentData.need.slice(0, prev.length + 1))
        }, 50) // 需求打字速度（更快）
      } else {
        // 需求打完，準備切換到下一組
        timeout = setTimeout(() => {
          setShowCursor(false)
          setTimeout(moveToNext, 200)
        }, 1500) // 需求完成後的停留時間
      }
    }

    return () => clearTimeout(timeout)
  }, [inView, currentIndex, roleText, needText, isTypingRole])

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 bg-black relative overflow-hidden"
    >
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* 打字機內容區域 */}
          <div className="text-left space-y-8">
            
            {/* Hey! 你是 */}
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white">
              <p>Hey! 你是</p>
              <div className="font-bold text-primary mt-4 min-h-[80px] md:min-h-[100px] lg:min-h-[120px] xl:min-h-[140px]">
                {roleText}
                {isTypingRole && showCursor && (
                  <span className="animate-pulse text-primary">|</span>
                )}
              </div>
            </div>
            
            {/* 你正在 */}
            <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white/80">
              <p>你正在</p>
              <div className="font-medium text-white mt-4 min-h-[80px] md:min-h-[100px] lg:min-h-[120px] xl:min-h-[140px]">
                {needText}
                {!isTypingRole && showCursor && (
                  <span className="animate-pulse text-white">|</span>
                )}
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  )
}