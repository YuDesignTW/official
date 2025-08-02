import type { ProjectBlock } from '@/lib/constants'

export const projectContent: readonly ProjectBlock[] = [
  {
    type: 'hero',
    title: '海外破百萬月營收的產品，從0開始打造',
    subtitle: '全球首款雙模式 PC 攝影機的完整產品旅程',
    description: '你是否也有一個好產品，卻不知道怎麼賣進國際？從無到有打造出第一款自有攝影鏡頭產品，並規劃其 SaaS 工具，以及上市規劃，主導產品從「市場需求 → MVP驗證 → 上市營運」的完整旅程。'
  },
  {
    type: 'text',
    title: '市場機會與挑戰',
    content: '疫情期間遠距工作興起，市場上的攝影設備要麼太專業複雜，要麼畫質不佳。我們發現了一個機會：打造一款既專業又易用的攝影設備，能同時滿足工作會議和內容創作需求，透過整個產品開發流程，從用戶需求調研、競品分析、功能規劃到供應鏈管理。產品的核心創新在於「雙模式」設計 - 既能作為高畫質會議攝影機，也能切換為專業攝影設備，解決用戶的多重需求。'
  },
  {
    type: 'gallery',
    images: [
      { src: '/images/project/project 1/product-1.jpg', alt: '雙模式攝影機產品展示' },
      { src: '/images/project/project 1/product-2.jpg', alt: '產品功能特寫' }
    ]
  },
  {
    type: 'text',
    title: '行銷策略與執行',
    content: '產品開發完成後，最大的挑戰是如何快速打開國際市場。我制定了「以面的方式做行銷矩陣」策略，同時佈局多個行銷管道，形成完整的流量漏斗，讓每個接觸點都能互相加乘，達到 1+1>2 的效果。'
  },
  {
    type: 'gallery',
    images: [
      { src: '/images/project/project 1/product-mkt-1.jpg', alt: 'SEO優化策略執行' },
    ]
  },
  {
    type: 'text',
    title: '全球市場拓展成果',
    content: '透過完整的行銷矩陣：SEO 優化提升自然流量、KOL 合作建立品牌信任、EDM 精準觸達目標客群，成功將產品推向國際。針對不同市場特性調整在地化策略，最終成功進軍美國 Amazon、歐洲、日本等 7 國市場，流量轉換率翻倍成長。'
  },
  {
    type: 'gallery',
    images: [
      { src: '/images/project/project 1/product-mkt-2.jpg', alt: 'KOL合作與內容行銷' },
      { src: '/images/project/project 1/product-mkt-3.jpg', alt: 'EDM精準行銷' }
    ]
  },
  {
    type: 'services',
    title: '提供服務',
    subtitle: '打造專屬於你的行銷漏斗',
    description: '全方位營銷策略，獨家AI 自動化工具量產你的行銷內容，突破單點思維，用面的方式打造你內容：',
    services: [
      { name: '品牌官網' },
      { name: 'SEO' },
      { name: '文章' },
      { name: '社群經營' },
      { name: '廣告操盤' },
      { name: '口碑計畫' },
      { name: '聯盟行銷' }
    ]
  },
  {
    type: 'quote',
    content: '我不只懂產品策略與用戶洞察，更能從商業角度整合設計、開發與行銷，幫你打造出可賺錢的產品。',
    author: 'Yuga'
  }
] as const