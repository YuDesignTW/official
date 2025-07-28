// 獲取基礎路徑（用於 GitHub Pages 部署）
export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/official' : ''
}

// 獲取完整的資源路徑
export const getAssetPath = (path: string) => {
  const basePath = getBasePath()
  // 確保路徑以 / 開頭
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}