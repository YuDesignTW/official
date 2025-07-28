'use client'

import { useInView } from 'react-intersection-observer'
import { PROCESS_STEPS, CTA_BUTTONS, EXTERNAL_LINKS } from '@/lib/constants'
import { StepItem } from './step-item'

/**
 * 輕量化 Process Section
 * 移除：複雜時間線動畫、3D 效果
 * 保留：簡潔步驟展示
 */
export function Process() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="process" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* 極簡標題 */}
        <div 
          className={`mb-32 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-display text-black leading-none tracking-tighter">
            合作流程
          </h2>
          <div className="w-24 h-px bg-black mt-8" />
          <p className="text-subheading text-black/60 mt-8 max-w-3xl">
            從概念到實現的完整工作流程
          </p>
        </div>

        {/* 流程步驟 */}
        <div 
          ref={ref}
          className="max-w-4xl mx-auto"
        >
          {PROCESS_STEPS.map((step, index) => (
            <StepItem 
              key={step.id}
              step={step}
              index={index}
              isVisible={inView}
            />
          ))}
        </div>

        {/* CTA 按鈕區域 */}
        <div 
          className={`mt-24 text-center transition-all duration-1000 delay-1200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href={EXTERNAL_LINKS.consultation}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-lg"
          >
            {CTA_BUTTONS.consultation}
          </a>
        </div>

        {/* 極簡分隔線 */}
        <div 
          className={`mt-32 h-px bg-black/20 transition-all duration-1500 delay-1000 ${
            inView ? 'scale-x-100' : 'scale-x-0'
          }`}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </section>
  )
}