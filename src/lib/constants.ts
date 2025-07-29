export const SITE_CONFIG = {
  name: 'YuDesign',
  title: '從設計到行銷，讓您的點子發光',
  description: '結合設計思維、AI/No‑Code 產品開發與行銷策略，幫助台灣品牌從零到一創造獨一無二的產品',
  url: process.env.NODE_ENV === 'production' 
    ? 'https://yudesigntw.github.io/official' // GitHub Pages 網址
    : 'http://localhost:3000', // 開發時使用
  email: 'yu.design.tw@gmail.com',
  social: {
    threads: 'https://www.threads.net/@yuga.haha?hl=zh-tw',
    medium: 'https://medium.com/@yuga.yg.chen',
    linkedin: 'https://www.linkedin.com/in/yuga-chen-570247146/',
    email: 'mailto:yu.design.tw@gmail.com',
  },
} as const

// 統一的按鈕文字管理
export const CTA_BUTTONS = {
  contact: '與我聯繫 →',
  consultation: '立即預約諮詢 →',
  learnMore: '了解服務內容 →',
} as const

// 外部連結管理
export const EXTERNAL_LINKS = {
  consultation: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1xJAiYovhU3xe0l7-D2C36ggtqpCTqUFfrDmNex1L02TObkZoGW6BFchZuPcPY-c6lNrWe4f_B',
  contact: '#contact', // 滾動到聯繫區塊
} as const

export const NAVIGATION = [
  { id: 'about', label: '關於我', href: '#about' },
  { id: 'services', label: '服務', href: '#services' },
  { id: 'process', label: '流程', href: '#process' },
  { id: 'results', label: '成果', href: '#results' },
] as const

export const SERVICES = [
  {
    id: 'design',
    title: '設計顧問',
    description: '從市場中挖掘需求、設計驗證的設計顧問服務',
    fullDescription: '從使用者體驗出發，透過設計思維解決問題，打造兼具美感與實用性的產品。包含品牌識別、使用者介面、使用者體驗設計。',
    icon: 'Palette',
    color: 'primary',
    features: [
      '設計研究: 找對問題，才能做對產品服務',
      '設計執行: 把想法具象化，交付有品質的設計',
      '體驗再造: 依據數據分析，建立優化指標'
    ],
  },
  {
    id: 'strategy',
    title: '商務策略',
    description: '數據化分析為品牌量身打造成長路徑',
    fullDescription: '透過差異化定位策略與AI行銷，協助品牌打造具持續成長的商業模型。以數據驅動的方式，打造整合性行銷策略，包含內容營銷、社群經營、廣告投放，確保產品有效觸及目標客群。',
    icon: 'TrendingUp',
    color: 'primary-light',
    features: [
      '商業健檢: 內部企業體質分析到外部市場規模預估分析',
      '品牌營運策略: 3W模型策略，從本質出發',
      '行銷策略: 導入自動化行銷內容生成、排程與追蹤'
    ],
  },
  {
    id: 'development',
    title: ' AI產品開發',
    description: '兩週把你的點子變服務，快速打造數位產品',
    fullDescription: '結合最新AI技術與No-Code工具，以低成本、高效率的方式快速開發產品原型和MVP，縮短產品上市時間。',
    icon: 'Code2',
    color: 'primary-dark',
    features: [
      '行銷工具打造: 自動化行銷系統與工具開發',
      '品牌官網建制: 響應式網站與品牌形象建立',
      'AI工具製作: 智能化產品功能整合與應用'
    ],
  },
] as const

export const PROCESS_STEPS = [
  {
    id: 1,
    title: '需求確認',
    description: '深入了解你的需求和目標，確定專案方向與範圍',
  },
  {
    id: 2,
    title: '策略規劃',
    description: '制定明確的執行策略和時程規劃，確保項目順利進行',
  },
  {
    id: 3,
    title: '設計開發執行',
    description: '運用專業技能進行設計開發，定期溝通進度與調整',
  },
  {
    id: 4,
    title: '成果交付',
    description: '完成最終交付並提供後續支援，確保達成預期成效',
  },
] as const

export const RESULTS = [
  {
    id: 'revenue',
    number: '200%+',
    title: '營收成長',
    description: '協助多家品牌實現營收顯著增長',
  },
  {
    id: 'acos',
    number: '80%',
    title: '節省廣告成本(ACOS)',
    description: '透過精準的廣告策略，將廣告成本從70%降低至13%',
  },
  {
    id: 'conversion',
    number: '4倍',
    title: '顧客轉換率',
    description: '優化用戶體驗和行銷漏斗，提高轉換率',
  },
] as const


export const SKILLS = [
  { name: '設計思維', level: 95 },
  { name: '產品管理', level: 90 },
  { name: 'AI/No-Code', level: 85 },
  { name: '行銷策略', level: 88 },
  { name: '數據分析', level: 82 },
  { name: '品牌設計', level: 92 },
] as const

export const ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  slideRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
  },
} as const

// Works 專案資料結構 - 易於維護的內容管理系統
export const PROJECTS = [
  {
    id: 'project-1',
    title: '品牌重塑專案',
    subtitle: '協助科技新創公司完整品牌形象重塑',
    description: '協助科技新創公司完整品牌形象重塑，包含識別設計、網站建置與行銷策略規劃。',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
    tags: ['品牌設計', 'UI/UX', '行銷策略'],
    duration: '3 個月',
    role: '品牌設計師 / 策略顧問',
    // 詳細內容區塊 - 支援多種內容類型
    detailBlocks: [
      {
        type: 'hero',
        title: '品牌重塑專案',
        subtitle: '從零開始打造科技新創的品牌識別',
        description: '為一家專注於AI解決方案的新創公司，重新定義品牌策略、視覺識別與數位體驗。'
      },
      {
        type: 'text',
        title: '專案背景',
        content: '客戶是一家剛成立兩年的AI技術公司，擁有優秀的技術團隊，但缺乏清晰的品牌定位和專業的視覺形象。隨著公司業務快速發展，急需建立能夠傳達專業性和創新性的品牌形象。'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&q=80',
        alt: '品牌設計過程',
        caption: '品牌識別設計發展過程'
      },
      {
        type: 'text',
        title: '解決方案',
        content: '我們從品牌策略開始，深入了解目標客群與市場定位，然後設計了完整的視覺識別系統，包含Logo、色彩、字體、應用規範等。最後建置了響應式網站，完整呈現品牌價值。'
      },
      {
        type: 'results',
        title: '專案成果',
        metrics: [
          { label: '品牌知名度提升', value: '300%' },
          { label: '網站轉換率', value: '4.2%' },
          { label: '客戶詢問增加', value: '250%' }
        ]
      }
    ]
  },
  {
    id: 'project-2',
    title: 'AI 驅動產品開發',
    subtitle: '2週內完成 MVP 開發功能產品',
    description: '運用AI 技術，2週內完成 MVP 開發功能產品。',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    tags: ['產品開發', 'AI整合', 'No-Code'],
    duration: '2 週',
    role: '產品經理 / 技術顧問',
    detailBlocks: [
      {
        type: 'hero',
        title: 'AI 驅動產品開發',
        subtitle: '快速原型到產品上線的完整流程',
        description: '運用最新的AI工具與No-Code平台，在短時間內將想法轉化為可運行的產品。'
      },
      {
        type: 'text',
        title: '挑戰與目標',
        content: '客戶需要在極短時間內驗證商業想法，傳統開發週期太長且成本過高。我們運用AI輔助開發和No-Code工具，大幅縮短開發時程。'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
        alt: 'AI開發流程',
        caption: 'AI輔助開發的完整工作流程'
      },
      {
        type: 'text',
        title: '技術實現',
        content: '結合OpenAI API、Bubble平台、Figma設計，建立了一套完整的快速開發流程。從需求分析到產品上線，全程運用AI工具提升效率。'
      }
    ]
  },
  {
    id: 'project-3',
    title: '電商平台優化',
    subtitle: '透過數據驅動提升用戶體驗',
    description: '透過使用者體驗優化與數據分析，將轉換率提升300%，營收成長6倍。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['電商優化', '數據分析', 'UX設計'],
    duration: '4 個月',
    role: 'UX顧問 / 數據分析師',
    detailBlocks: [
      {
        type: 'hero',
        title: '電商平台優化',
        subtitle: '數據驅動的用戶體驗改善',
        description: '透過深度數據分析與用戶研究，重新設計購物流程，大幅提升轉換率與營收。'
      },
      {
        type: 'text',
        title: '現況分析',
        content: '原有電商平台雖然流量不錯，但轉換率僅有1.2%，購物車放棄率高達78%。透過用戶行為分析發現了關鍵問題點。'
      },
      {
        type: 'results',
        title: '優化成果',
        metrics: [
          { label: '轉換率提升', value: '300%' },
          { label: '營收成長', value: '600%' },
          { label: '購物車放棄率降低', value: '45%' }
        ]
      }
    ]
  }
] as const

// 專案內容區塊的類型定義
export type ProjectBlock = 
  | { type: 'hero'; title: string; subtitle: string; description: string }
  | { type: 'text'; title: string; content: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'results'; title: string; metrics: readonly { label: string; value: string }[] }