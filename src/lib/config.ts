// 獲取基礎路徑（用於自訂網域部署）
export const getBasePath = () => {
  return '' // 使用自訂網域時不需要子路徑
}

// 獲取完整的資源路徑
export const getAssetPath = (path: string) => {
  const basePath = getBasePath()
  // 確保路徑以 / 開頭
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}