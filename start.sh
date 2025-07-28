#!/bin/bash

# 個人網站啟動腳本
# 用法: ./start.sh [dev|build|start]

set -e

# 檢查 pnpm 是否安裝
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm 未安裝，請先安裝 pnpm"
    echo "   npm install -g pnpm"
    exit 1
fi

# 顏色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 環境參數，預設為 dev
MODE=${1:-dev}

echo -e "${BLUE}🚀 Yuga 個人網站啟動中...${NC}"
echo -e "${YELLOW}📦 模式: $MODE${NC}"

# 確保依賴安裝
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 安裝依賴中...${NC}"
    pnpm install
fi

case $MODE in
    "dev")
        echo -e "${GREEN}🔧 啟動開發伺服器...${NC}"
        pnpm dev
        ;;
    "build")
        echo -e "${YELLOW}🏗️  建置專案...${NC}"
        pnpm lint
        pnpm type-check
        pnpm build
        echo -e "${GREEN}✅ 建置完成！${NC}"
        ;;
    "start")
        echo -e "${GREEN}🚀 啟動生產伺服器...${NC}"
        pnpm start
        ;;
    "lint")
        echo -e "${YELLOW}🔍 程式碼檢查...${NC}"
        pnpm lint
        pnpm type-check
        echo -e "${GREEN}✅ 程式碼檢查通過！${NC}"
        ;;
    *)
        echo -e "${RED}❌ 未知模式: $MODE${NC}"
        echo -e "${YELLOW}可用模式: dev, build, start, lint${NC}"
        exit 1
        ;;
esac