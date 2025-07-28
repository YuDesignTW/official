'use client'

import { useInView } from 'react-intersection-observer'
import { ProjectCard } from './project-card'

// 模擬專案資料
const PROJECTS = [
  {
    id: 'project-1',
    title: '品牌重塑專案',
    description: '協助科技新創公司完整品牌形象重塑，包含識別設計、網站建置與行銷策略規劃。',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
    tags: ['品牌設計', 'UI/UX', '行銷策略'],
  },
  {
    id: 'project-2', 
    title: 'AI 驅動產品開發',
    description: '運用AI 技術，2週內完成 MVP 開發功能產品。',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    tags: ['產品開發', 'AI整合', 'No-Code'],
  },
  {
    id: 'project-3',
    title: '電商平台優化',
    description: '透過使用者體驗優化與數據分析，將轉換率提升300%，營收成長6倍。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['電商優化', '數據分析', 'UX設計'],
  },
  {
    id: 'project-4',
    title: '社群行銷策略',
    description: '建立完整社群媒體矩陣，3個月內粉絲成長500%，品牌知名度大幅提升。',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    tags: ['社群行銷', '內容策略', '品牌推廣'],
  },
] as const

/**
 * Works Section - 作品集展示
 */
export function Works() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="works" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 極簡標題 */}
        <div 
          className={`mb-32 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-display text-black leading-none tracking-tighter">
            WORKS
          </h2>
          <div className="w-24 h-px bg-black mt-8" />
          <p className="text-subheading text-black/60 mt-8 max-w-3xl">
            精選專案作品，展現設計到實現的完整過程
          </p>
        </div>

        {/* 專案網格 */}
        <div 
          ref={ref}
          className="grid md:grid-cols-2 gap-12 lg:gap-16"
        >
          {inView && PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* 極簡分隔線 */}
        <div 
          className={`mt-32 h-px bg-black/20 transition-all duration-1500 delay-800 ${
            inView ? 'scale-x-100' : 'scale-x-0'
          }`}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </section>
  )
}