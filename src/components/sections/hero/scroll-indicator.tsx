'use client'

/**
 * 動態直線滾動指示器
 */
export function ScrollIndicator() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex justify-center">
      <button
        onClick={scrollToNext}
        className="group flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300"
        aria-label="滾動到下一個區塊"
      >
        {/* 滾動文字 */}
        <span className="text-xs font-light tracking-[0.3em] text-white/60 group-hover:text-primary transition-colors duration-300">
          SCROLL
        </span>
        
        {/* 動態直線 */}
        <div className="relative w-px h-16 bg-white/30 overflow-hidden">
          {/* 背景線 */}
          <div className="absolute inset-0 bg-white/20" />
          
          {/* 動態橘色線 */}
          <div 
            className="absolute w-full bg-primary animate-scroll-line"
            style={{
              height: '30%',
              animationDuration: '2s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out'
            }}
          />
          
          {/* 白色跟隨線 */}
          <div 
            className="absolute w-full bg-white animate-scroll-line-follow"
            style={{
              height: '20%',
              animationDuration: '2s',  
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
              animationDelay: '0.3s'
            }}
          />
        </div>
      </button>
    </div>
  )
}