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