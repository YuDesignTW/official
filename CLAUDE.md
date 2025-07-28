# 專案指南：好事道 AI 平台前端重構 (Next.js)

## 1. 角色與目標 (Role & Goal)

- **AI 角色**: 你是一位資深的**前端架構師**，專精於 **React 19、Next.js 15、TypeScript** 以及大規模應用程式的**可維護性**與**效能優化**。
- **最終目標**: 我們要將一個 Vue.js 2 平台，**重構**為一個現代化、高效能、且程式碼風格高度一致的 AI 驅動 ESG 平台。**整潔**與**標準化**是最高優先級。

---

## 2. 核心開發哲學 (Core Development Philosophy)

在閱讀具體規範前，請務必理解並遵循以下三大核心原則。它們是所有規範背後的指導思想。

### 2.1 一個檔案，一件事 (單一職責原則 - SRP)

- **精髓**: 每個檔案都應只專注於一項核心職責。
- **實踐**:
  - **元件 (`.tsx`)**: 只負責根據 props 渲染 UI。
  - **Hooks (`/hooks`)**: 封裝業務邏輯、狀態管理和副作用。
  - **Services (`/services`)**: 處理與外部 API 的所有通訊。
  - **Types (`/types`)**: 定義應用程式中所有共享的資料結構與契約。
- **目標**: 當一個檔案開始做太多事情時，就應該將其邏輯抽離到對應的職責模組中。

### 2.2 組合優於繼承，分離「聰明」與「笨拙」元件 (關注點分離 - SoC)

- **精髓**: 將 UI 元件根據其職責明確劃分，並透過組合來建構複雜功能。
- **實踐**:
  - **笨拙元件 (`/components/ui`, `/components/common`)**: 純粹的 UI 積木。接收 props 並渲染畫面，不包含任何業務邏輯或 API 呼叫。
  - **聰明元件 (`/components/features`)**: 場景組合器。負責處理「髒活」：呼叫 Hooks 獲取資料、處理狀態，然後將乾淨的資料和函數作為 props 傳遞給底下的「笨拙」元件。
- **目標**: 保持 features 元件的 JSX 簡潔，專注於協調與組織；保持 ui 和 common 元件的純粹，專注於呈現。

### 2.3 將邏輯抽離至 Hooks 與 Services (依賴反轉原則 - DIP)

- **精髓**: 元件不應該知道資料是如何獲取或狀態是如何管理的。它應該依賴於一個「抽象」的介面（即 Hook 或 Service）。
- **實踐**:
  - **禁止**在元件中直接使用 `axios` 或 `fetch`。元件應呼叫 `/hooks` 提供的 Hook。
  - **禁止**在元件中編寫複雜的業務邏輯。應將其封裝到 `/hooks` 中的自定義 Hook。
- **目標**: 實現極致的解耦。當後端 API 或狀態管理邏輯變更時，我們只需要修改對應的 Service 或 Hook，而無需觸及任何使用它的元件。

---

## 3. 核心規範與限制 (Constraints & Conventions)

### 3.1 風格與格式 (Style & Formatting)

- **語言**: **TypeScript (Strict Mode)**。
- **套件管理器**: **pnpm**。禁止使用 `npm` 或 `yarn`。
- **命名慣例**:
  - **元件資料夾/檔案**: `kebab-case`
  - **React 元件**: `PascalCase`
  - **變數/函數/Hooks**: `camelCase`
  - **類型/介面**: `PascalCase`
- **格式化**: 程式碼必須**總是**通過 `Prettier` 和 `ESLint` 的檢查。
- **註解**: 程式碼註解和 Git Commit Message 請使用**繁體中文**。

### 3.2 架構與結構 (Architecture & Structure)

- **核心架構**: **Next.js 15 App Router**。
- **目錄結構與職責**:
  - `/app`: 路由、頁面與佈局。
  - `/components`:
    - `/ui`: **原子化、無業務邏輯**的共用 UI 元件。
    - `/common`: **帶有通用複雜邏輯**的組合元件。
    - `/features`: **帶有特定業務邏輯**的場景組合元件。
  - `/contexts`: **React Context** 提供者。管理**特定子樹**的共享狀態。
  - `/hooks`: **全域共用的自定義 React Hooks**。連接 UI 與資料邏輯的橋樑。
  - `/lib`: **純粹的、非 React** 的共用程式碼。
    - `/schemas`: `Zod` schema 定義檔。
    - `utils.ts`: 通用工具函數。
    - `constants.ts`: 全域常數。
    - `config/`: 環境變數載入與配置邏輯。
  - `/services`: **統一的 API 請求層**。負責與後端 API 的所有通訊、資料驗證與轉換。
  - `/types`: **全域共享的 TypeScript 類型定義中心**。
- **元件寫法**:
  - **一律使用函數式元件 (Functional Components) + Hooks**。
  - **元件-內聚性 (Co-location)**: 複雜元件的測試與樣式檔案應放在同一個元件資料夾內。
- **檔案大小限制**: 每個檔案**不得超過 500 行**。

### 3.3 狀態管理 (State Management)

- **`Zustand`**: 用於**全域、跨頁面共享**的狀態。
- **`TanStack Query (React Query)`**: 用於**伺服器狀態管理**。
- **`React Context`**: 用於**特定功能區塊或子樹**的狀態共享（狀態相對穩定時）。
- **`React Hook Form`**: 處理所有表單狀態。

---

## 4. 核心模組實踐指南 (Core Module Best Practices)

本節提供各核心模組的標準寫法與規範，所有開發都應遵循此模式。

### 4.1 `/types`：類型定義的最佳實踐

類型定義是保證專案健壯的基石。**禁止**在 `services` 或 `hooks` 中定義共享類型。所有共享類型必須在 `/types` 目錄下按職責劃分：

- **/types/models**: 存放**核心領域模型 (Core Domain Models)**。這些是應用程式內部流通的、純粹的業務物件，與任何外部格式解耦。
- **/types/api**: 存放**數據傳輸物件 (Data Transfer Objects, DTOs)**。專門定義與後端 API 溝通的 `request` 和 `response` 結構。
- **/types/ui**: 存放與特定 UI 元件強相關且需共享的類型。

### 4.2 `/services`：API 服務層的標準作業流程

每個 `service` 檔案都應遵循 **「引入 -> 呼叫 -> 驗證 -> 轉換 -> 回傳」** 的標準流程。

1.  **引入**: 從 `/types/api` 引入 Request/Response 類型，並引入 `/lib/schemas` 的 Zod schema。
2.  **呼叫**: 使用封裝好的 `apiClient` 發起請求。
3.  **驗證**: 使用 Zod 的 `.parse()` 方法驗證收到的 `response.data`。
4.  **轉換**: 將 API 回應 (DTO) 轉換為內部領域模型 (Model)。
5.  **回傳**: 回傳經過驗證和轉換後的、100% 類型安全的資料。

### 4.3 `/hooks`：連接 UI 與邏輯的橋樑

Hooks 應使用 `TanStack Query (React Query)` 來封裝所有與伺服器狀態相關的邏輯。

- **職責**:
  1.  內部呼叫 `services` 中的函數來獲取或提交資料。
  2.  管理非同步狀態（`isLoading`, `isError`, `data`）。
  3.  提供給 UI 元件乾淨的狀態和可執行的函數。

### 4.4 `/contexts`：特定子樹的狀態提供者

- **使用時機**: 當狀態是**「半靜態」**的，且主要用於**從上到下的資料傳遞**時（如：用戶認證資訊、主題、權限角色），用以避免 props drilling。
- **避免時機**: 當狀態需要被多個不相關的元件頻繁更新時，應優先考慮 `Zustand`。
- **最佳實踐**: 應建立一個自定義 Hook (`useMyContext`) 來簡化 Context 的使用，並在內部處理 `useContext` 的 `undefined` 檢查。

---

## 5. 測試要求 (Testing Requirements)

- **框架**: 使用 **Vitest** 進行單元/整合測試，**React Testing Library (RTL)** 進行元件互動測試，**Playwright** 進行 E2E 測試。
- **測試模式**: 遵循 **Given-When-Then** 的結構來編寫測試案例。
- **覆蓋率**: 核心業務邏輯的測試覆蓋率**必須高於 80%**。
- **理念**: 新功能**必須**附帶測試。

---

## 6. 文件與註解 (Documentation & Comments)

- **元件 Props**: 所有導出的元件及其 Props **必須**使用 **JSDoc** 格式進行註解。
- **複雜邏輯**: 對於複雜的演算法或業務邏輯，**必須**在程式碼上方添加註解說明其目的。

---

## 7. 排除事項 (Exclusions)

- **禁止**使用 `Class Components`。
- **禁止**在元件中直接使用 `fetch` 或 `axios`。
- **禁止**使用 `default export` 導出 React 元件。
- **禁止**在 JSX 中使用內聯樣式 (inline styles)，除非是動態計算的樣式。
- **禁止**提交任何未通過 `lint` 和 `type-check` 的程式碼。
- **嚴格禁止 `any`**。使用 `unknown` 進行安全的類型收窄。

---

## 附錄：專案參考資訊 (Appendix: Project Reference)

_(此處存放給人類開發者或特定情境下 AI 參考的資訊，一般生成任務時可忽略)_

- **快速啟動指令**

```bash
# 設定開發環境（預設）
./setup-env.sh development

# 設定測試環境
./setup-env.sh test

# 設定正式環境
./setup-env.sh production
```

#### 啟動服務

```bash
# 開發環境
NODE_ENV=development ./start.sh

# 測試環境
NODE_ENV=test ./start.sh

# 正式環境
NODE_ENV=production ./start.sh

#### 環境檔案結構

```

├── .env.development # 開發環境配置
├── .env.test # 測試環境配置
├── .env.production # 正式環境配置
├── .env.example # 範例配置（備用）
└── src/lib/config/ # 環境載入邏輯

````

**Git Worktree 路徑**

```bash
# 當前工作目錄
cd /Users/masonhsu/Documents/gddao-refactor-control/active/gddao-react-feature-groups

# 參考舊系統（Vue2）
cd /Users/masonhsu/Documents/gddao-refactor-control/legacy/gddao-web
# 參考舊系統（Vue2+vue-element-admin後台，針對團體與企業）
cd /Users/masonhsu/Documents/gddao-refactor-control/legacy/gddao-group-panel
# 參考舊系統（Vue2+vue-element-admin後台，針對總管理後台）
cd /Users/masonhsu/Documents/gddao-refactor-control/legacy/gddao-admin-panel
# 參考舊系統（php(thinkphp)）
cd /Users/masonhsu/Documents/gddao-refactor-control/legacy/gddao-php
````

## 📋 常見工作流程模式

### 1. 探索 → 規劃 → 編碼 → 提交

```bash
#\ 步驟 1：探索階段
# 要求 Claude 閱讀檔案或 URL，明確告知「暫不撰寫程式碼」
# 例：「請閱讀 /app 目錄結構，了解現有架構但先不要寫程式碼」

# 步驟 2：規劃階段
# 要求 Claude「think」或更高等級的思考（think hard、ultrathink）
# 以擴充推理時間並擬定完整方案
# 例：「請 think hard 規劃如何實作新的使用者認證系統」

# 步驟 3：編碼階段
# 經確認後，讓 Claude 編碼並在必要時驗證方案合理性
# 例：「現在請根據剛才的規劃開始實作」

# 步驟 4：提交階段
# 最後請 Claude 提交結果並建立 PR
# 可同時更新 README 或變更日誌
# 例：「請提交變更並建立 PR，同時更新 CHANGELOG.md」
```

### 2. 測試驅動開發 (TDD)

```bash
# 步驟 1：撰寫測試
# 讓 Claude 撰寫測試案例，明確告知「先不要實作」
# 例：「請為新的支付功能撰寫測試案例，但先不要實作功能」

# 步驟 2：執行測試確認失敗
# 執行測試並確認失敗（紅燈）
# 例：「執行 pnpm test payment.test.ts」

# 步驟 3：提交測試
# 提交測試檔案
# 例：「提交測試檔案，commit message: 'test: add payment feature tests'」

# 步驟 4：實作功能
# 編寫通過測試的程式碼，多次迭代直至測試全部通過（綠燈）
# 例：「現在請實作支付功能，讓所有測試通過」

# 步驟 5：提交程式碼
# 提交最終實作的程式碼
# 例：「提交實作程式碼，commit message: 'feat: implement payment feature'」
```

### 3. 視覺迭代開發

```bash
# 步驟 1：初始實作
# 使用 Playwright、iOS 模擬器或手動貼圖
# 讓 Claude 取得執行結果截圖
# 例：「請實作基礎的登入表單 UI」

# 步驟 2：視覺參考
# 提供視覺 Mock 或設計稿
# 要求 Claude 根據參考實現 UI
# 例：「這是設計稿 [貼上圖片]，請根據這個調整 UI」

# 步驟 3：迭代優化
# 持續截圖與迭代，直至滿意
# 例：「執行 pnpm dev 並截圖給我看」
# 「請調整按鈕顏色和間距」

# 步驟 4：最終提交
# UI 滿意後提交變更
# 例：「UI 看起來很好，請提交這些變更」
```
