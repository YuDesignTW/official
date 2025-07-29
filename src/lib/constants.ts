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
  contact: 'mailto:yu.design.tw@gmail.com', // 直接發送郵件
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
    title: '海外破百萬月營收的產品，從0開始打造',
    subtitle: '全球首款雙模式 PC 攝影機的完整產品旅程',
    description: '從無到有打造自有攝影鏡頭產品，主導「市場需求 → MVP驗證 → 上市營運」完整旅程，成功進軍 7 國市場。',
    image: './images/project/project 1/product-2.jpg',
    tags: ['產品開發', 'IoT產品', '跨境電商', '營運策略', '敏捷行銷'],
    duration: '12 個月',
    role: '產品經理 / 商業策略顧問',
    // 詳細內容區塊 - 支援多種內容類型
    detailBlocks: [
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
          { src: './images/project/project 1/product-1.jpg', alt: '雙模式攝影機產品展示' },
          { src: './images/project/project 1/product-2.jpg', alt: '產品功能特寫' }
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
          { src: './images/project/project 1/product-mkt-1.jpg', alt: 'SEO優化策略執行' },
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
          { src: './images/project/project 1/product-mkt-2.jpg', alt: 'KOL合作與內容行銷' },
          { src: './images/project/project 1/product-mkt-3.jpg', alt: 'EDM精準行銷' }
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
    ]
  },
  {
    id: 'project-2',
    title: '從靈感到 70 萬營收：只花12小時打造的災備工具',
    subtitle: '一人完成產品開發、設計與推廣的完整實戰',
    description: '因應2025年地震大預言，我發現防災資訊分散問題，12小時內打造出「居家避難準備指南」工具，創造70萬營收。',
    image: './images/project/project 2/project.png',
    tags: ['AI工具開發', '快速實作', 'MVP驗證', '內容電商', '社群成長'],
    duration: '9 小時',
    role: '全端開發者 / 產品設計師',
    detailBlocks: [
      {
        type: 'hero',
        title: '從靈感到 70 萬營收：只花12小時打造的災備工具',
        subtitle: '一人完成產品開發、設計與推廣的完整實戰',
        description: '你可能會想：「一人能完成產品開發、設計與推廣嗎？」我會說：可以，而且還能賺錢。'
      },

      {
        type: 'text',
        title: '快速開發實現',
        content: '我用 9 小時打造出「居家避難準備指南」網頁工具，整合了多項技術與商業策略：AI 協作產出資訊架構、自行設計 UI、圖像與 RWD 前端、串連蝦皮賣場精選高CP防災商品。'
      },
      {
        type: 'video',
        src: './images/project/project 2/project.mp4',
        alt: '災備工具操作演示',
        caption: '完整的災備工具使用流程展示'
      },
      {
        type: 'link-preview',
        url: 'https://yudesigntw.github.io/Disaster_Preparation_List/landing',
        title: '居家避難準備指南',
        description: '12小時打造的災備工具，整合防災資訊與商品推薦的完整解決方案',
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
    ]
  },
  {
    id: 'project-3',
    title: '鄉村民宿也能數位轉型：打造不需要工程師的訂房系統',
    subtitle: '用最簡單的方式解決偏鄉旅宿經營痛點',
    description: '為桃園鄉間民宿打造 Google Sheets 整合的訂房系統，搭配圈層行銷策略，讓偏鄉民宿也能數位轉型。',
    image: './images/project/project 3/project3.png',
    tags: ['旅宿品牌', 'NoCode開發', '品牌影像', '圈層行銷', '數位轉型'],
    duration: '2 天',
    role: 'NoCode 開發者 / 品牌策略顧問',
    detailBlocks: [
      {
        type: 'hero',
        title: '鄉村民宿也能數位轉型：打造不需要工程師的訂房系統',
        subtitle: '兩天完成 NoCode 開發，解決偏鄉旅宿經營痛點',
        description: '你是否曾想過：小型民宿也能擁有專屬的訂房網站，還能不用進後台就完成管理？這是我為桃園鄉間民宿量身打造的數位轉型解決方案。'
      },
      {
        type: 'text',
        title: '發現真實痛點',
        content: '這是一間位在桃園鄉間的民宿，他們長期透過手動對帳與 IG 私訊接單，錯漏不斷、耗費大量時間。傳統的訂房系統對小型民宿來說太複雜且成本過高，但手動管理又效率低落，這個矛盾正是我需要解決的核心問題。'
      },
      {
        type: 'text',
        title: '技術解決方案',
        content: '為了解決業者的實際痛點快速開發了一套連接 Google Sheets 的訂房網站。這套系統實現了兩個關鍵功能：訪客可即時查看房況並完成訂房，業者只需打開 Google Sheets 即可編輯房型與價格，完全不必進後台管理。'
      },
      {
        type: 'video',
        src: './images/project/project 3/project3.mov',
        alt: 'JiSpace 鄉間民宿訂房系統演示',
        caption: 'JiSpace 鄉間民宿訂房系統操作流程'
      },
      {
        type: 'link-preview',
        url: 'https://jispace.webflow.io/',
        title: 'JiSpace 鄉間民宿訂房系統',
        description: '整合 Google Sheets 的 NoCode 訂房解決方案，讓小型民宿也能輕鬆數位化經營',
        domain: 'jispace.webflow.io'
      },
      {
        type: 'text',
        title: '圈層行銷策略',
        content: '幫助客戶在流量沙漠的偏鄉經營民宿品牌，不只技術解決方案，我也串連在地品牌與設計師，執行「圈層式行銷」策略。透過品牌影像重塑與精準的內容策略，讓品牌在 YouTube 獲得超過萬次曝光，成功吸引都市工作者下鄉入住。'
      },
      {
        type: 'video',
        src: './images/project/project 3/project3-mkt.mp4',
        alt: '品牌影片',
        caption: '品牌影片'
      },

      {
        type: 'results',
        title: '數位轉型成果',
        metrics: [
          { label: '網紅合作', value: '3+' },
          { label: '管理效率提升', value: '80%' }
        ]
      },
      {
        type: 'services',
        title: '提供服務',
        subtitle: 'NoCode 快速開發與品牌策略',
        description: '專為中小企業量身打造的數位轉型解決方案，結合技術開發與行銷策略：',
        services: [
          { name: 'NoCode 系統開發' },
          { name: 'Google Sheets 整合' },
          { name: '品牌影像設計' },
          { name: '圈層行銷策略' },
          { name: '內容行銷規劃' },
          { name: '社群媒體經營' }
        ]
      },
      {
        type: 'quote',
        content: '真正的數位轉型不是導入最先進的技術，而是找到最適合企業現況的解決方案，讓科技真正為業務服務。',
        author: 'Yuga'
      }
    ]
  }
] as const

// 專案內容區塊的類型定義
export type ProjectBlock = 
  | { type: 'hero'; title: string; subtitle: string; description: string }
  | { type: 'text'; title: string; content: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'video'; src: string; alt: string; caption?: string }
  | { type: 'link-preview'; url: string; title: string; description: string; domain: string }
  | { type: 'results'; title: string; metrics: readonly { label: string; value: string }[] }
  | { type: 'services'; title: string; subtitle: string; description: string; services: readonly { name: string }[] }
  | { type: 'gallery'; images: readonly { src: string; alt: string }[] }
  | { type: 'quote'; content: string; author?: string }