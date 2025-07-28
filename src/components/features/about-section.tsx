'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// 角色與需求對應資料
const CLIENT_DATA = [
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

export function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedRole, setDisplayedRole] = useState('')
  const [displayedNeed, setDisplayedNeed] = useState('')
  const [isTypingRole, setIsTypingRole] = useState(true)

  // 打字機效果
  useEffect(() => {
    if (!inView) return

    const currentData = CLIENT_DATA[currentIndex]
    let timeoutId: NodeJS.Timeout

    if (isTypingRole) {
      // 打字顯示角色
      if (displayedRole.length < currentData.role.length) {
        timeoutId = setTimeout(() => {
          setDisplayedRole(currentData.role.slice(0, displayedRole.length + 1))
        }, 100)
      } else {
        // 角色打完，開始打需求
        timeoutId = setTimeout(() => {
          setIsTypingRole(false)
        }, 500)
      }
    } else {
      // 打字顯示需求
      if (displayedNeed.length < currentData.need.length) {
        timeoutId = setTimeout(() => {
          setDisplayedNeed(currentData.need.slice(0, displayedNeed.length + 1))
        }, 50)
      } else {
        // 需求打完，等待後切換到下一組
        timeoutId = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % CLIENT_DATA.length)
          setDisplayedRole('')
          setDisplayedNeed('')
          setIsTypingRole(true)
        }, 2000)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [displayedRole, displayedNeed, isTypingRole, currentIndex, inView])

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          
          {/* 第一個 Div - 專屬你的商業製作人 */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary font-display"
            >
              專屬你的商業製作人
            </motion.h2>

            {/* 從0到1到A+的線性動態顯示 */}
            <div className="flex items-center justify-center space-x-8 md:space-x-12 text-6xl md:text-8xl font-black font-display">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-primary"
              >
                0
              </motion.span>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-12 h-1 bg-primary origin-left"
              />
              
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-primary"
              >
                1
              </motion.span>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="w-12 h-1 bg-primary origin-left"
              />
              
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-primary"
              >
                A+
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-xl md:text-2xl text-secondary/80 font-light leading-relaxed"
            >
              設計思維 產品開發 行銷策略，<br />
              為你的品牌打造不可取代的價值
            </motion.p>
          </motion.div>

          {/* 第二個 Div - 打字機效果的角色與需求 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6 p-8 bg-secondary/5 rounded-2xl"
          >
            <div className="text-left max-w-2xl mx-auto space-y-4">
              <p className="text-2xl md:text-3xl font-light text-secondary">
                Hey! 你是
                <span className="font-bold text-primary ml-2">
                  {displayedRole}
                  {isTypingRole && <span className="animate-pulse">|</span>}
                </span>
              </p>
              
              <p className="text-xl md:text-2xl font-light text-secondary/70">
                你正在
                <span className="font-medium text-secondary ml-2">
                  {displayedNeed}
                  {!isTypingRole && <span className="animate-pulse">|</span>}
                </span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}