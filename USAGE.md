# 🚀 使用指南

## 快速開始

### 1. 啟動開發伺服器
```bash
# 方法 1: 使用便利腳本
./start.sh dev

# 方法 2: 直接使用 pnpm
pnpm dev
```

訪問: **http://localhost:3000** 或 **http://localhost:3001**

### 2. 個人化設定

編輯 `src/lib/constants.ts` 來自定義內容：

```typescript
export const SITE_CONFIG = {
  name: '你的名字',
  title: '你的專業標語', 
  description: '你的服務描述',
  email: 'your@email.com',
  social: {
    facebook: 'https://facebook.com/你的帳號',
    twitter: 'https://twitter.com/你的帳號',
    linkedin: 'https://linkedin.com/in/你的帳號',
    // ...
  }
}
```

### 3. 修改服務內容

在 `SERVICES` 陣列中編輯你的服務項目：

```typescript
export const SERVICES = [
  {
    id: 'design',
    title: '你的服務標題',
    description: '你的服務描述',
    icon: 'Palette', // Lucide React 圖標名稱
    features: ['特色1', '特色2', '特色3'],
  },
  // 添加更多服務...
]
```

### 4. 更新技能展示

修改 `SKILLS` 陣列：

```typescript
export const SKILLS = [
  { name: '技能名稱', level: 90 }, // level: 0-100
  // 添加更多技能...
]
```

## 🎨 自定義樣式

### 顏色調整
編輯 `tailwind.config.ts` 中的顏色設定：

```typescript
colors: {
  primary: {
    DEFAULT: '#你的主色',
    dark: '#你的深色',
    light: '#你的淺色',
  },
  secondary: {
    DEFAULT: '#你的次要色',
    // ...
  },
}
```

### 字體更換
在 `src/app/layout.tsx` 中更換 Google Fonts：

```typescript
import { 你的字體 } from 'next/font/google'

const customFont = 你的字體({
  subsets: ['latin'],
  // 配置...
})
```

## 📱 響應式調整

在 `src/app/globals.css` 中調整斷點樣式：

```css
/* 手機版 */
@media (max-width: 768px) {
  /* 你的樣式 */
}

/* 平板版 */
@media (min-width: 769px) and (max-width: 1024px) {
  /* 你的樣式 */
}

/* 桌面版 */
@media (min-width: 1025px) {
  /* 你的樣式 */
}
```

## 🚀 部署

### Vercel (推薦)
1. 推送到 GitHub
2. 連接 Vercel 帳號
3. 自動部署

### Netlify
```bash
pnpm build
# 上傳 .next 資料夾
```

### 自建主機
```bash
pnpm build
pnpm start
```

## 🛠 開發指令

```bash
# 開發模式
pnpm dev

# 程式碼檢查
pnpm lint

# 類型檢查  
pnpm type-check

# 建置專案
pnpm build

# 啟動生產伺服器
pnpm start

# 清理快取
pnpm clean
```

## 📸 截圖功能

使用瀏覽器開發者工具的 Device Mode 來測試不同裝置的顯示效果。

## 🔧 故障排除

### 常見問題

1. **Port 被佔用**
   - 網站會自動使用下一個可用的 port
   - 或手動停止佔用 3000 port 的程序

2. **依賴版本衝突**
   ```bash
   pnpm install --force
   ```

3. **型別錯誤**
   ```bash
   pnpm type-check
   ```

4. **樣式不顯示**
   - 檢查 Tailwind 類別名稱
   - 確認 CSS 檔案已正確導入

### 取得幫助

遇到問題時，請檢查：
1. 瀏覽器開發者工具 Console
2. 終端機錯誤訊息
3. Next.js 官方文檔

---

💡 **提示**: 修改任何檔案後，開發伺服器會自動重新載入！