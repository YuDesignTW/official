'use client'

interface StepItemProps {
  step: {
    id: number
    title: string
    description: string
  }
  index: number
  isVisible: boolean
}

/**
 * 流程步驟項目 - 輕量化版本
 */
export function StepItem({ step, index, isVisible }: StepItemProps) {
  return (
    <div 
      className={`flex items-start gap-6 md:gap-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      {/* 步驟編號 */}
      <div className="flex-shrink-0">
        <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-black flex items-center justify-center">
          <span className="text-mono-number text-2xl md:text-3xl">
            {String(step.id).padStart(2, '0')}
          </span>
        </div>
        
        {/* 連接線 */}
        {index < 4 && (
          <div className="w-px h-16 bg-black/20 mx-auto mt-4" />
        )}
      </div>

      {/* 步驟內容 */}
      <div className="flex-1 pb-16">
        <h3 className="text-heading text-black mb-4">
          {step.title}
        </h3>
        <p className="text-body text-black/70 leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  )
}