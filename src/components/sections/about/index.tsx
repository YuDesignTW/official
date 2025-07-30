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

/**
 * 重新設計的 About Section - 品牌故事
 */
export function About() {
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
    <section id="about" className="py-20 md:py-32 relative overflow-hidden" style={{
      background: 'linear-gradient(to bottom, #000000 0%, #000000 70%, #FF4500 100%)'
    }}>
      {/* 霧面效果層 - 與 Hero 完全一致 */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/85" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">
          
          {/* 第二個 Section - 打字機效果的角色與需求 - 固定高度 */}
          <section
            id="about-typewriter"
            className="py-12 md:py-16 pb-36 md:pb-42"
          >
            <div className="text-left max-w-4xl h-48 md:h-56 lg:h-64 xl:h-72">
              <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight">
                <p>Hey! 你是</p>
                <div className="font-bold text-primary mt-2 md:mt-4 h-16 md:h-20 lg:h-24 xl:h-28">
                  {displayedRole}
                  {isTypingRole && <span className="animate-pulse">|</span>}
                </div>
              </div>
              
              <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white/70 leading-relaxed mt-4 md:mt-6">
                <p>你正在</p>
                <div className="font-medium text-white mt-2 md:mt-4 h-16 md:h-20 lg:h-24 xl:h-28">
                  {displayedNeed}
                  {!isTypingRole && <span className="animate-pulse">|</span>}
                </div>
              </div>
            </div>
          </section>

          {/* 分隔線容器 */}
          <div className="py-[120px]">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.0, delay: 0.8 }}
              className="w-32 h-[2px] bg-primary/50 mx-auto"
              style={{ transformOrigin: 'center' }}
            />
          </div>

          {/* 第一個 Div - 專屬你的商業製作人 */}
          <motion.div
            id="about-business-producer"
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="space-y-8 text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white font-display leading-tight"
            >
              <span className="inline-block mr-3">專屬你的</span><span className="font-black">商業製作人</span>
              <br />
              <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light mt-4 block">
                為你的品牌打造不可取代的價值
              </span>
            </motion.h2>

            {/* 從0到1到A+的垂直線性動態顯示 */}
            <div className="flex flex-col items-start space-y-8 md:space-y-12 max-w-2xl">
              {/* 0 - 設計思維 */}
              <div className="flex items-start space-x-6 md:space-x-8">
                <div className="flex flex-col items-center w-32 md:w-40">
                  <div className="flex items-center gap-3 w-full justify-center">
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.3 }}
                      className="text-sm md:text-base text-white/50 font-light"
                    >
                      from
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-display text-primary"
                    >
                      0
                    </motion.span>
                  </div>
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="w-1 h-16 md:h-20 bg-primary origin-top mt-4"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className="pt-4 md:pt-6"
                >
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white">設計思維</h3>
                  <p className="text-base md:text-lg text-white/70 mt-2 leading-relaxed">
                    深入理解用戶需求，運用設計思考流程
                  </p>
                </motion.div>
              </div>

              {/* 1 - 產品開發 */}
              <div className="flex items-start space-x-6 md:space-x-8">
                <div className="flex flex-col items-center w-32 md:w-40">
                  <div className="flex items-center gap-3 w-full justify-center">
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.7 }}
                      className="text-sm md:text-base text-white/50 font-light"
                    >
                      to
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-display text-primary"
                    >
                      1
                    </motion.span>
                  </div>
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.8, delay: 2.0 }}
                    className="w-1 h-16 md:h-20 bg-primary origin-top mt-4"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.9 }}
                  className="pt-4 md:pt-6"
                >
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white">產品開發</h3>
                  <p className="text-base md:text-lg text-white/70 mt-2 leading-relaxed">
                    運用 AI/No-Code 工具快速建構 MVP
                  </p>
                </motion.div>
              </div>

              {/* A+ - 行銷策略 */}
              <div className="flex items-start space-x-6 md:space-x-8">
                <div className="flex flex-col items-center w-32 md:w-40">
                  <div className="flex items-center gap-3 w-full justify-center">
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 2.1 }}
                      className="text-sm md:text-base text-white/50 font-light"
                    >
                      to
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 2.2 }}
                      className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-display text-primary"
                    >
                      A+
                    </motion.span>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 2.3 }}
                  className="pt-4 md:pt-6"
                >
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white">行銷策略</h3>
                  <p className="text-base md:text-lg text-white/70 mt-2 leading-relaxed">
                    制定精準的市場進入與品牌推廣策略
                  </p>
                </motion.div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}