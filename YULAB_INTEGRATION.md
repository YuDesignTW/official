# YULAB 專案整合說明

## 📁 專案結構

### 路由
- **URL**: `http://localhost:3000/yulab`
- **頁面位置**: `src/app/yulab/page.tsx`
- **Layout**: `src/app/yulab/layout.tsx`

### 組件位置
- **Yulab 組件**: `src/components/yulab/`
  - `sections/` - 所有頁面區塊組件
  - `ui/` - UI 組件
  - `LoadingAnimation.tsx` - 載入動畫
  - `hydration-provider.tsx` - Hydration 提供者

### Hooks
- **Yulab Hooks**: `src/hooks/yulab/`
  - `useActiveSection.ts` - 偵測當前區塊

### 公共資源
- **圖片/影片/字體**: `public/images/yulab/`
  - `image/` - 所有圖片資源
  - `video/` - 所有影片資源
  - `*.ttf` - 字體檔案
  - `*.png` - Logo 和其他圖片

## 🔄 路徑更新

### 圖片路徑
所有圖片路徑已從原本的格式更新為：
- `/image/xxx.png` → `/images/yulab/image/xxx.png`
- `/logo.png` → `/images/yulab/logo.png`
- `/hero_left.png` → `/images/yulab/hero_left.png`
- `/whyus.png` → `/images/yulab/whyus.png`
- `/cta.png` → `/images/yulab/cta.png`

### 影片路徑
- `/loginvideo.mp4` → `/images/yulab/loginvideo.mp4`
- `/video/*.mp4` → `/images/yulab/video/*.mp4`

### 字體路徑
- `/MantouSans-Regular.ttf` → `/images/yulab/MantouSans-Regular.ttf`
- `/hanwangmingheavy.ttf` → `/images/yulab/hanwangmingheavy.ttf`

## 📦 已複製的檔案

### 組件
- ✅ Navigation.tsx
- ✅ HeroSection.tsx
- ✅ StorySection.tsx
- ✅ ServiceSection.tsx
- ✅ From0to1Section.tsx
- ✅ ContactSection.tsx
- ✅ PartnerSection.tsx
- ✅ Footer.tsx
- ✅ LoadingAnimation.tsx
- ✅ hydration-provider.tsx

### 樣式
- ✅ globals.css (已更新字體路徑)

### 公共資源
- ✅ 所有圖片 (image/ 資料夾)
- ✅ 所有影片 (video/ 資料夾)
- ✅ 所有字體檔案
- ✅ Logo 檔案
- ✅ 其他資源

## 🚀 使用方式

1. **啟動開發伺服器**:
   ```bash
   cd "/Users/yuga/Desktop/SideProject/Personal Website/personal-website-v2"
   npm run dev
   # 或
   pnpm dev
   ```

2. **訪問 Yulab 頁面**:
   ```
   http://localhost:3000/yulab
   ```

## ⚠️ 注意事項

1. **依賴檢查**: 確保 personal-website-v2 專案已安裝所有必要的依賴
2. **Tailwind 配置**: 已確認 Tailwind 配置包含 `src/app/**/*.{js,ts,jsx,tsx,mdx}`
3. **字體載入**: 字體路徑已更新，確保字體正確載入
4. **圖片優化**: Next.js Image 組件會自動優化圖片

## 🔍 驗證清單

- [x] 創建 `/yulab` 路由
- [x] 複製所有組件到 `src/components/yulab/`
- [x] 複製所有 hooks 到 `src/hooks/yulab/`
- [x] 複製所有公共資源到 `public/images/yulab/`
- [x] 更新所有圖片路徑引用
- [x] 更新所有影片路徑引用
- [x] 更新所有字體路徑引用
- [x] 創建 page.tsx 和 layout.tsx
- [x] 更新 import 路徑

## 📝 後續步驟

1. 測試頁面是否正常運行
2. 檢查所有圖片是否正確顯示
3. 檢查所有動畫和互動是否正常
4. 檢查響應式設計在不同裝置上的表現
5. 如有需要，調整樣式或配置

## 🐛 可能的問題

### 如果圖片無法顯示
- 檢查圖片路徑是否正確
- 確認圖片檔案存在於 `public/images/yulab/` 目錄

### 如果字體無法載入
- 檢查 `globals.css` 中的字體路徑
- 確認字體檔案存在於 `public/images/yulab/` 目錄

### 如果樣式不正確
- 確認 `layout.tsx` 正確引入了 `globals.css`
- 檢查 Tailwind 配置是否包含正確的路徑

### 如果出現 import 錯誤
- 檢查所有 import 路徑是否正確
- 確認所有組件和 hooks 都已複製到正確位置
