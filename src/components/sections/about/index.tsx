'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * About Section - 專屬你的商業製作人
 * 移除打字機動畫，專注於品牌故事
 */
export function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden" style={{
      background: 'linear-gradient(to bottom, #000000 0%, #000000 70%, #FF4500 100%)'
    }}>
      {/* 霧面效果層 - 與 Hero 完全一致 */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/85" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">

          {/* 分隔線容器 */}
          <div className="py-[60px]">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.0, delay: 0.3 }}
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