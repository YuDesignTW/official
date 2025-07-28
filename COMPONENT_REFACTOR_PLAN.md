# 🏗️ 組件重構計劃：輕量化架構

## 📊 現有 vs 目標組件對應

| 現有組件 | 目標組件 | 重構動作 | 輕量化策略 |
|---------|---------|----------|------------|
| `hero-section.tsx` | `hero.tsx` | ✂️ 拆分 + 簡化 | 移除動畫依賴，純 CSS 效果 |
| `services-section.tsx` | `services.tsx` | 🔧 重構 | 移除複雜動畫，簡化狀態管理 |
| `about-section.tsx` | `about.tsx` | ✂️ 拆分 | 技能條分離，圖片懶載入 |
| `process-section.tsx` | `process.tsx` | 🔧 簡化 | 移除 3D 效果，改為簡潔步驟 |
| `results-section.tsx` | `works.tsx` + `impacts.tsx` | ✂️ 分離 | 作品展示 + 數據成效分離 |
| `cta-section.tsx` | `reviews.tsx` | 🔄 轉換 | 改為客戶評價區塊 |

## 🎯 新架構設計

### 1. **Hero Section** - 極簡首屏
```typescript
// 移除：複雜動畫、粒子系統、TypeAnimation
// 保留：純 CSS 動畫、靜態背景紋理
const Hero = () => (
  <section className="h-screen flex items-center">
    <StaticBackground />
    <HeroContent />
  </section>
)
```

### 2. **Services** - 極簡服務展示
```typescript
// 移除：Framer Motion 複雜動畫、懸浮效果
// 保留：展開/收縮功能（純 CSS）
const Services = () => (
  <section>
    <ServicesList />
  </section>
)
```

### 3. **About** - 個人介紹
```typescript
// 移除：複雜技能條動畫、3D 效果
// 保留：基本資訊、靜態圖片
const About = () => (
  <section>
    <PersonalInfo />
    <StaticSkills />
  </section>
)
```

### 4. **Process** - 工作流程
```typescript
// 移除：複雜時間線動畫
// 保留：簡潔步驟展示
const Process = () => (
  <section>
    <ProcessSteps />
  </section>
)
```

### 5. **Works** - 作品集
```typescript
// 全新組件：展示專案作品
const Works = () => (
  <section>
    <ProjectGrid />
  </section>
)
```

### 6. **Impacts** - 成效數據
```typescript
// 從 results 分離：純數據展示
const Impacts = () => (
  <section>
    <MetricsDisplay />
  </section>
)
```

### 7. **Reviews** - 客戶評價
```typescript
// 取代 CTA：客戶見證
const Reviews = () => (
  <section>
    <TestimonialList />
  </section>
)
```

## 🚀 輕量化策略

### 依賴項削減
- ❌ 移除：`TypeAnimation`、複雜 Framer Motion 動畫
- ❌ 移除：粒子系統、3D 效果
- ✅ 保留：基本 motion 組件、Intersection Observer

### 性能優化
- 🖼️ **圖片懶載入**：使用 Next.js Image 最佳化
- 🔄 **動態導入**：非關鍵組件延遲載入
- 📦 **Bundle 分割**：獨立組件打包
- 🎯 **代碼分離**：樣式與邏輯分離

### 文件結構
```
src/components/sections/
├── hero/
│   ├── index.tsx          // 主組件
│   ├── background.tsx     // 背景效果
│   └── content.tsx        // 內容區域
├── services/
│   ├── index.tsx
│   ├── service-item.tsx
│   └── service-details.tsx
├── about/
│   ├── index.tsx
│   ├── personal-info.tsx
│   └── skills.tsx
├── process/
│   ├── index.tsx
│   └── step-item.tsx
├── works/
│   ├── index.tsx
│   ├── project-card.tsx
│   └── project-filter.tsx
├── impacts/
│   ├── index.tsx
│   └── metric-item.tsx
└── reviews/
    ├── index.tsx
    ├── testimonial-card.tsx
    └── review-slider.tsx
```

## 📈 預期性能提升

- 🚀 **First Load JS**: 174KB → ~120KB (-30%)
- ⚡ **LCP**: 改善 0.5-1秒
- 📱 **移動設備**: 載入速度提升 40%
- 🧠 **記憶體使用**: 減少 25%

## 🎨 設計一致性

- 保持極簡黑白風格
- 統一字體系統
- 一致的間距與佈局
- 響應式設計完整

---

**下一步**: 開始逐步重構各組件 🛠️