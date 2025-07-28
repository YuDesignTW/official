'use client'

/**
 * 跑馬燈組件
 * 用於顯示連續滾動的文字內容
 */
interface MarqueeProps {
  text: string
  className?: string
}

export function Marquee({ text, className = '' }: MarqueeProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 跑馬燈容器 */}
      <div className="flex animate-marquee whitespace-nowrap">
        {/* 重複顯示文字以確保連續效果 */}
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i} className="mx-8 md:mx-16">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}