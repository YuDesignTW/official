# Works 內容管理指南

## 📁 新架構說明

### 文件結構
```
src/content/works/
├── project-1/
│   └── metadata.ts          # 專案 Meta 資訊
├── project-2/
│   └── metadata.ts
└── project-3/
    └── metadata.ts

src/lib/works.ts             # Works 資料管理系統
```

---

## 🔧 如何新增作品

### 步驟 1：建立專案資料夾
```bash
mkdir src/content/works/project-4
```

### 步驟 2：建立 metadata.ts
```typescript
// src/content/works/project-4/metadata.ts
export const projectMetadata = {
  id: 'project-4',
  title: '你的專案標題',
  subtitle: '專案副標題',
  description: '詳細的專案描述，這會被用於 SEO meta description',
  keywords: ['關鍵字1', '關鍵字2', '關鍵字3'],
  ogImage: '/images/works/project-4/og-image.jpg',
  publishDate: '2024-04-01',
  category: '專案分類',
  client: '客戶名稱',
  duration: '專案時長',
  role: '你的角色',
  tags: ['標籤1', '標籤2', '標籤3'],
  image: '/images/project/project4/thumbnail.jpg',
  featured: true, // 是否為精選作品
  status: 'published', // published | draft
  order: 4 // 顯示順序
}
```

### 步驟 3：更新 works.ts
```typescript
// 在 src/lib/works.ts 中添加 import
import { projectMetadata as project4 } from '@/content/works/project-4/metadata'

// 在 allProjects 陣列中添加
const allProjects: ProjectMetadata[] = [
  project1,
  project2,
  project3,
  project4 // 新增這行
]
```

---

## 📝 如何編輯作品內容

### 修改 Meta 資訊
直接編輯對應的 `metadata.ts` 檔案即可：

```typescript
// 例如修改 project-1 的標題
export const projectMetadata = {
  // ...
  title: '新的專案標題',
  description: '更新後的專案描述...',
  // ...
}
```

### 控制顯示狀態
```typescript
status: 'draft'     // 隱藏作品
status: 'published' // 顯示作品
```

### 設定精選作品
```typescript
featured: true   // 會在首頁精選區顯示
featured: false  // 只在作品頁顯示
```

### 調整顯示順序
```typescript
order: 1  // 數字越小越前面
```

---

## 🎯 SEO 優化重點

### 每個作品現在都有獨立的：

1. **頁面標題**: 直接使用 metadata.title
2. **Meta 描述**: 使用 metadata.description (建議 150-160 字)
3. **關鍵字**: metadata.keywords 陣列
4. **OG 圖片**: metadata.ogImage (建議 1200x630)
5. **結構化數據**: 自動生成 article schema
6. **發布時間**: metadata.publishDate
7. **正規網址**: 自動生成 canonical URL

### SEO 最佳實踐：

1. **標題 (title)**：
   - 保持在 60 字以內
   - 包含主要關鍵字
   - 具有吸引力

2. **描述 (description)**：
   - 150-160 字最佳
   - 包含關鍵字但不堆疊
   - 吸引用戶點擊

3. **關鍵字 (keywords)**：
   - 5-10 個相關關鍵字
   - 包含主要服務和技術
   - 避免重複

4. **OG 圖片 (ogImage)**：
   - 尺寸：1200x630px
   - 包含專案名稱
   - 視覺吸引力

---

## 🚀 部署後的效果

### Google 搜尋結果優化：
- 每個作品都有獨立的搜尋結果頁面
- 更好的關鍵字排名
- 豐富的 snippet 顯示

### 社群分享優化：
- Facebook/LinkedIn 分享時顯示正確的標題、描述和圖片
- Twitter Card 完整支援

### 網站地圖：
- 自動更新 sitemap.xml
- 包含發布時間和優先級

---

## ⚠️ 注意事項

1. **檔案命名**：metadata.ts 檔名固定，不可更改
2. **ID 唯一性**：每個專案的 id 必須是唯一的
3. **圖片路徑**：確保圖片檔案存在於指定路徑
4. **發布時間**：使用 YYYY-MM-DD 格式
5. **更新後重新部署**：修改後需要重新部署才會生效

---

## 📋 範例檢查清單

新增作品時請確認：
- [ ] 建立專案資料夾
- [ ] 建立 metadata.ts 並填寫完整資訊
- [ ] 在 works.ts 中 import 並添加到陣列
- [ ] 確認圖片檔案存在
- [ ] 測試 SEO meta 資訊是否正確
- [ ] 檢查在 sitemap.xml 中是否出現

這樣的架構讓每個作品都能被 Google 完美索引，同時方便你管理內容！