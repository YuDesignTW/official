'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { FAQSchema } from '@/components/seo/faq-schema'

const FAQ_DATA = [
  {
    question: '你的設計服務包含哪些內容？',
    answer: '我提供完整的設計服務，包含設計研究、UI/UX 設計、品牌識別設計、產品設計驗證。從找對問題到具象化實現，再到體驗優化，確保設計不只美觀更能解決實際問題。'
  },
  {
    question: '從概念到產品上線需要多長時間？',
    answer: '根據專案複雜度而定。簡單的 MVP 可以在 2 週內完成，複雜的產品開發通常需要 2-6 個月。我會在需求確認階段提供詳細的時程規劃，確保專案如期交付。'
  },
  {
    question: '你如何確保設計符合商業目標？',
    answer: '我不只是設計師，更是商業製作人。每個設計決策都會考慮商業目標、用戶需求和技術可行性。透過數據分析、用戶測試和市場驗證，確保設計能真正驅動業務成長。'
  },
  {
    question: '可以協助現有產品的優化嗎？',
    answer: '當然可以！我提供產品健檢服務，分析現有產品的用戶體驗、轉換率和業務指標，找出優化機會點。無論是介面重設計、流程優化或功能迭代，都能提供專業建議。'
  },
  {
    question: '費用如何計算？',
    answer: '根據專案規模和複雜度提供客製化報價。包含設計顧問、產品開發、行銷策略等不同服務組合。歡迎預約免費諮詢，我會根據您的需求提供詳細的服務方案和費用估算。'
  }
]

/**
 * FAQ Section - 常見問題
 * 包含 FAQ Schema 結構化資料
 */
export function FAQ() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-32 bg-white">
      <FAQSchema faqs={FAQ_DATA} />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* 標題 */}
          <div 
            ref={ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-display text-black leading-none tracking-tighter mb-6">
              常見問題
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              關於設計服務、專案流程和合作方式的常見疑問
            </p>
          </div>

          {/* FAQ 列表 */}
          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <div
                key={index}
                className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-medium text-black pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div 
            className={`text-center mt-16 transition-all duration-1000 delay-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-gray-600 mb-6">
              還有其他問題？歡迎直接聯繫我
            </p>
            <a
              href="mailto:yu.design.tw@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
            >
              立即諮詢
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}