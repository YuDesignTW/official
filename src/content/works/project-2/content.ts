import type { ProjectBlock } from '@/lib/constants'

export const projectContent: readonly ProjectBlock[] = [
  {
    type: 'hero',
    title: '從靈感到 70 萬營收：只花12小時打造的災備工具',
    subtitle: '一人完成產品開發、設計與推廣的完整實戰',
    description: '你可能會想：「一人能完成產品開發、設計與推廣嗎？」我會說：可以，而且還能賺錢。'
  },
  {
    type: 'text',
    title: '快速開發實現',
    content: '快速打造出「居家避難準備指南」網頁工具，整合了多項技術與商業策略：AI 協作產出資訊架構、自行設計 UI、圖像與 RWD 前端、串連蝦皮賣場精選高CP防災商品。'
  },
  {
    type: 'video',
    src: '/images/project/project%202/project.mp4',
    alt: '災備工具操作演示',
    caption: '完整的災備工具使用流程展示'
  },
  {
    type: 'link-preview',
    url: 'https://yudesigntw.github.io/Disaster_Preparation_List/landing',
    title: '居家避難準備指南',
    description: '打造的災備工具，整合防災資訊與商品推薦的完整解決方案',
    domain: 'yudesigntw.github.io'
  },
  {
    type: 'results',
    title: '驚人成果表現',
    metrics: [
      { label: '社群觸及流量', value: '15萬+' },
      { label: '兩個月營收', value: '70+萬' },
      { label: '社群分享數', value: '3,000+' }
    ]
  },
  {
    type: 'text',
    title: '技術整合與商業洞察',
    content: '這個案例不只展示了我的技術整合力，更說明：當我們用心為需求者設計，市場自然會有回饋。收到國外使用者主動詢問授權合作，證明產品的國際化潛力。'
  },
  {
    type: 'quote',
    content: '真正的產品力不在於技術有多複雜，而在於能否精準解決用戶痛點，並快速驗證市場需求。',
    author: 'Yuga'
  }
] as const