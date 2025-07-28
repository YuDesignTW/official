'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Calendar, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'

export function CTASection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模擬提交
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setEmail('')
    alert('感謝您的訂閱！我們將盡快與您聯繫。')
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* 背景漸層 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-background-dark" />
      
      {/* 動態背景圖案 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float animation-delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* 標題 */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6"
          >
            準備讓你的點子發光嗎？
          </motion.h2>
          
          {/* 副標題 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
          >
            立即預約免費諮詢，讓我們一起打造下一個成功案例
          </motion.p>

          {/* CTA 按鈕組 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'inline-flex items-center gap-3 px-8 py-4',
                'bg-white text-primary rounded-full font-semibold',
                'hover:bg-gray-100 transition-all duration-300',
                'shadow-2xl hover:shadow-3xl'
              )}
            >
              <Calendar size={20} />
              預約諮詢
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'inline-flex items-center gap-3 px-8 py-4',
                'border-2 border-white text-white rounded-full font-semibold',
                'hover:bg-white hover:text-primary transition-all duration-300',
                'backdrop-blur-sm'
              )}
            >
              <MessageSquare size={20} />
              聯絡我
            </motion.a>
          </motion.div>

          {/* 電子郵件訂閱表單 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-md mx-auto"
          >
            <p className="text-white/80 mb-4">或者留下您的電子郵件，我們將主動聯繫您</p>
            
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className={cn(
                  'w-full px-6 py-4 pr-12',
                  'bg-white/10 backdrop-blur-md',
                  'border border-white/20 rounded-full',
                  'text-white placeholder-white/60',
                  'focus:outline-none focus:border-white/40',
                  'transition-all duration-300'
                )}
              />
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={cn(
                  'absolute right-2 top-1/2 -translate-y-1/2',
                  'w-10 h-10 rounded-full',
                  'bg-white text-primary',
                  'flex items-center justify-center',
                  'hover:bg-gray-100 transition-colors',
                  'disabled:opacity-50 disabled:cursor-not-allowed'
                )}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send size={18} />
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* 信任標誌 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-16 border-t border-white/20"
          >
            <p className="text-white/60 mb-6">值得信賴的合作夥伴</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {/* 這裡可以放置合作夥伴的 Logo */}
              <div className="w-32 h-12 bg-white/20 rounded"></div>
              <div className="w-32 h-12 bg-white/20 rounded"></div>
              <div className="w-32 h-12 bg-white/20 rounded"></div>
              <div className="w-32 h-12 bg-white/20 rounded"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}