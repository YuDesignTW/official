'use client'

import { useEffect, useState } from 'react'

/**
 * 資源載入狀態管理 Hook
 * 用於追蹤關鍵資源的載入進度
 */
export function useResourceLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadProgress, setLoadProgress] = useState(0)

  useEffect(() => {
    // 監聽 LoadingAnimation 的完成事件
    const handleLoadComplete = () => {
      setIsLoading(false)
      setLoadProgress(100)
    }

    // 使用自定義事件來通知載入完成
    window.addEventListener('resourcesLoaded', handleLoadComplete)

    return () => {
      window.removeEventListener('resourcesLoaded', handleLoadComplete)
    }
  }, [])

  return { isLoading, loadProgress }
}

