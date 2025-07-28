'use client'

import Image from 'next/image'

/**
 * 個人資訊組件 - 輕量化版本
 */
export function PersonalInfo() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* 圖片區域 */}
      <div className="relative group">
        <div className="relative overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
            alt="設計思考工作坊"
            width={600}
            height={400}
            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* 極簡裝飾元素 */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-black/5 blur-2xl" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-black/10 blur-2xl" />
      </div>

      {/* 內容區域 */}
      <div className="space-y-6">
        <div>
          <p className="text-black font-semibold text-lg mb-2">
            品牌故事
          </p>
          <h2 className="text-heading text-black mb-6">
            專注於品牌經營的
            <br />
            <span className="text-gradient">商業製作人</span>
          </h2>
        </div>

        <div className="space-y-4 text-black/60">
          <p className="text-body-large">
            10年設計+5年產品管理經驗，曾協助品牌營收成長6倍，透過設計與AI工具，來實現你的品牌增長。
          </p>
          <p className="text-body-large">
            我是<span className="font-bold text-black">Yuga</span>，一個超過5年的產品開發經驗，打造出千萬營收級別產品的營運長。擅長0到1的產品開發與上市計畫，曾將營收增長6倍。透過我的經驗以及打造成功產品的方程式，能夠協助各大企業及新創業家挖掘商業機會，打造新商業模式！
          </p>
        </div>

        <div className="pt-6">
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-black text-white hover:bg-black/80 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            與我合作
          </button>
        </div>
      </div>
    </div>
  )
}