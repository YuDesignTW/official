import type { ProjectBlock } from '@/lib/constants'

export const projectContent: readonly ProjectBlock[] = [
  {
    type: 'hero',
    title: '鄉村民宿也能數位轉型：打造不需要工程師的訂房系統',
    subtitle: '交付 NoCode 產品，解決偏鄉旅宿經營痛點',
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
    src: '/images/project/project 3/project3.mov',
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
    content: '幫助客戶在流量沙漠的偏鄉經營民宿品牌，不只技術解決方案，也串連在地品牌與設計師，執行「圈層式行銷」策略。'
  },
  {
    type: 'video',
    src: '/images/project/project 3/project3-mkt.mp4',
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
] as const