# 🚀 Yuga 個人網站 v2.0

一個高互動性的現代化個人網站，展示設計、開發與行銷能力。

## ✨ 特色功能

### 🎨 高互動體驗
- **3D 粒子背景** - 使用 Three.js 打造沉浸式 Hero 區域
- **打字機動畫** - 動態文字效果展示核心價值
- **自定義游標** - 磁性跟隨效果提升互動體驗
- **視差滾動** - 流暢的滾動動畫和視覺效果
- **懸浮互動** - 3D 卡片翻轉和懸浮效果

### 🎯 用戶體驗優化
- **深色/淺色模式** - 自適應主題切換
- **響應式設計** - 完美適配所有設備
- **無障礙支援** - 符合 WCAG 標準
- **SEO 優化** - 搜尋引擎友好的結構
- **效能優化** - 快速載入和流暢動畫

### 🛠 技術特色
- **Next.js 15** - 最新的 App Router 架構
- **React 18** - 穩定版本確保相容性
- **TypeScript** - 嚴格類型檢查
- **Framer Motion** - 流暢的動畫效果
- **Canvas 2D API** - 高效能粒子系統
- **Tailwind CSS** - 現代化樣式框架

## 🏗 架構設計

基於 CLAUDE.md 中的現代化開發原則：

```
src/
├── app/                    # Next.js App Router
├── components/
│   ├── ui/                 # 原子化 UI 組件
│   ├── common/             # 通用組合組件
│   └── features/           # 業務邏輯組件
├── contexts/               # React Context 提供者
├── hooks/                  # 自定義 Hooks
├── lib/                    # 工具函數和配置
├── services/               # API 服務層
└── types/                  # TypeScript 類型定義
```

## 🚀 快速開始

### 環境要求
- Node.js 18.0.0 或更高版本
- pnpm（推薦的包管理器）

### 安裝與運行

```bash
# 安裝依賴
pnpm install

# 啟動開發服務器
pnpm dev

# 編譯生產版本
pnpm build

# 運行生產版本
pnpm start

# 檢查代碼格式
pnpm lint

# 類型檢查
pnpm type-check
```

訪問 [http://localhost:3000](http://localhost:3000) 查看網站

## 🎨 設計系統

### 主色調
- **Primary**: #0066CC (藍色主調)
- **Secondary**: #FF6B00 (活力橙色)
- **Background Light**: #F9FAFB
- **Background Dark**: #1E293B

### 動畫原則
- **漸入動畫**: 0.6s ease-out
- **懸浮效果**: scale(1.05) + shadow
- **頁面過渡**: 300ms smooth
- **粒子動畫**: 持續性 3D 運動

### 響應式斷點
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📝 內容管理

### 個人化設定
修改 `src/lib/constants.ts` 中的以下內容：

```typescript
export const SITE_CONFIG = {
  name: '你的名字',
  title: '你的專業標語',
  description: '你的服務描述',
  email: 'your@email.com',
  // ...其他設定
}
```

### 服務項目
在 `SERVICES` 常數中添加或修改服務項目：

```typescript
export const SERVICES = [
  {
    id: 'your-service',
    title: '服務標題',
    description: '服務描述',
    icon: 'IconName', // Lucide React 圖標
    features: ['特色1', '特色2', '特色3'],
  },
  // ...更多服務
]
```

## 🎯 SEO 與效能

### 已優化項目
- ✅ Meta tags 和 Open Graph
- ✅ 結構化數據 (JSON-LD)
- ✅ 圖片懶加載和優化
- ✅ 字體預載入
- ✅ 程式碼分割
- ✅ 靜態生成 (SSG)

### Lighthouse 分數目標
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🔧 開發指南

### 組件開發
遵循單一職責原則 (SRP)：

```typescript
// ❌ 錯誤：混合業務邏輯和 UI
function BadComponent() {
  const [data, setData] = useState()
  
  useEffect(() => {
    fetch('/api/data').then(setData)
  }, [])
  
  return <div>{data?.title}</div>
}

// ✅ 正確：分離關注點
function GoodComponent() {
  const { data } = useDataHook() // 業務邏輯在 Hook 中
  return <DataDisplay data={data} /> // UI 組件純粹
}
```

### 動畫開發
使用 Framer Motion 的最佳實踐：

```typescript
// 預定義動畫變量
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

// 在組件中使用
<motion.div {...fadeIn}>
  內容
</motion.div>
```

## 📱 自定義功能

### 添加新的互動效果
1. 在 `src/components/ui/` 創建新組件
2. 使用 Framer Motion 添加動畫
3. 在需要的地方引入使用

### 整合第三方服務
1. 在 `src/services/` 創建服務模組
2. 使用 React Query 管理狀態
3. 在 Hook 中封裝業務邏輯

## 🚀 部署

### Vercel (推薦)
```bash
# 安裝 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### Netlify
```bash
# 建置
pnpm build

# 上傳 .next 資料夾到 Netlify
```

### 自建主機
```bash
# 建置
pnpm build

# 啟動 PM2
pm2 start npm --name "yuga-website" -- start
```

## 🤝 貢獻指南

1. Fork 此專案
2. 創建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 開啟 Pull Request

## 📄 授權條款

此專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 文件

## 📞 聯絡資訊

- **作者**: Yuga
- **Email**: your@email.com
- **網站**: https://yuga.dev

---

🎨 **設計精美 × 🚀 效能卓越 × ✨ 體驗流暢**