'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CTA_BUTTONS } from '@/lib/constants'

// 數據卡片資料
const METRICS_DATA = [
  {
    id: 'projects',
    value: '30+',
    title: '成功專案完成',
    description: '從 0 到 1 實戰經驗，涵蓋硬體、SaaS、AI 工具等多元領域',
    companies: ['BenQ', 'Seasalt.ai', 'Asus']
  },
  {
    id: 'satisfaction',
    value: '95%',
    title: '客戶滿意度',
    description: '結合設計 × 技術 × 行銷，提供一站式解決方案與數據驅動成果',
    companies: ['AI SaaS','電子商品','零售電商', '教育創新', '地方創生']
  }
]

/**
 * Metric Card Component
 */
function MetricCard({ 
  metric, 
  index, 
  isVisible 
}: { 
  metric: typeof METRICS_DATA[0]
  index: number
  isVisible: boolean 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
      className="p-6 bg-white rounded-xl border border-gray-100 hover:border-primary/20 transition-all duration-300"
    >
      {/* 數據值 */}
      <div className="text-4xl md:text-5xl font-black text-primary mb-3 font-display">
        {metric.value}
      </div>

      {/* 標題 */}
      <h4 className="text-lg font-bold text-black mb-3">
        {metric.title}
      </h4>

      {/* 描述 */}
      <p className="text-sm text-black/70 leading-relaxed mb-4">
        {metric.description}
      </p>

      {/* 公司/領域標籤 */}
      <div className="flex flex-wrap gap-2">
        {metric.companies.map((company, idx) => (
          <span 
            key={idx}
            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
          >
            {company}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

/**
 * Why Us Section - 為什麼選擇我們
 * 左右兩欄佈局：左側標題+照片，右側描述+數據卡片
 */
export function WhyUs() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="why-us" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-7xl mx-auto">
          
          {/* 左側：主要內容區塊 */}
          <div className="space-y-12">
            {/* 頂部導航/標題區塊 */}
            <div className="space-y-8">
              {/* 左上角連結/按鈕區塊 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3"
              >
                {/* 圓形指示器 */}
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-primary font-medium text-lg">Why choose us</span>
              </motion.div>

              {/* 右側標題文字區塊 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black font-display leading-tight">
                  真正懂你需求的<br />
                  <span className="text-primary">策略夥伴</span>
                </h2>
              </motion.div>
            </div>

            {/* 中下部圖片/人像區塊 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-sm"
            >
              {/* 左側圖片容器 */}
              <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gray-100 shadow-xl group cursor-pointer">
                <Image
                  src="/images/whyus.png"
                  alt="Yuga - 商業製作人"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                  priority
                />
                {/* 照片覆蓋漸層 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>
                
                {/* Hover 時出現的聯絡按鈕 */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-white text-black font-semibold rounded-xl transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg hover:shadow-xl hover:bg-primary hover:text-white"
                  >
                    {CTA_BUTTONS.contact}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 右側：補充資訊/資料呈現區塊 */}
          <div className="space-y-12 lg:pt-16">
            {/* 頂部描述性文字區塊 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-black/80 leading-relaxed">
                不只是執行，更是你的策略夥伴。
              </p>
              <p className="text-lg text-black/60 leading-relaxed mb-4">
                從大型上市櫃公司到跨國AI企業的實戰經驗，擅長「看懂需求 → 找對解法 → 快速落地 → 成效追蹤」。
              </p>
              <div className="space-y-3 text-base text-black/70 leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>完整的「0 → 1」產品實戰經驗</strong> - 實體硬體、SaaS平台、AI工具從無到有打造</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>設計 × 技術 × 行銷跨界實力</strong> - UX設計、No-Code開發、品牌策略一站式服務</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>台灣在地市場脈絡</strong> - 地方創生、教育、農業文創、B2B SaaS豐富經驗</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>系統化流程與數據成果</strong> - 營收提升、轉換率改善、廣告優化等真實績效</span>
                </div>
              </div>
            </motion.div>

            {/* 下方數據/統計區塊 (卡片式佈局) */}
            <div className="grid md:grid-cols-2 gap-6">
              {METRICS_DATA.map((metric, index) => (
                <MetricCard
                  key={metric.id}
                  metric={metric}
                  index={index}
                  isVisible={inView}
                />
              ))}
            </div>

            {/* CTA 按鈕 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {CTA_BUTTONS.learnMore}
              </button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* 背景裝飾 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-primary/8 rounded-full blur-3xl opacity-40" />
      </div>
    </section>
  )
}