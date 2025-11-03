"use client"

import { useEffect } from 'react'

interface HydrationProviderProps {
  children: React.ReactNode
}

export function HydrationProvider({ children }: HydrationProviderProps) {
  useEffect(() => {
    // 在開發環境中抑制由瀏覽器擴展造成的 hydration 警告
    if (process.env.NODE_ENV === 'development') {
      const originalConsoleError = console.error
      console.error = function (...args) {
        const errorMessage = args[0]?.toString?.() || ''
        
        // 抑制由瀏覽器擴展造成的特定 hydration 警告
        if (
          errorMessage.includes('Hydration') &&
          errorMessage.includes('aqua-ext-enabled')
        ) {
          return
        }
        
        // 抑制其他已知的瀏覽器擴展相關警告
        if (
          errorMessage.includes('className') &&
          (errorMessage.includes('ext-enabled') || 
           errorMessage.includes('extension') || 
           errorMessage.includes('adblock') ||
           errorMessage.includes('adblocker'))
        ) {
          return
        }
        
        originalConsoleError.apply(console, args)
      }
      
      // 清理
      return () => {
        console.error = originalConsoleError
      }
    }
  }, [])

  return <>{children}</>
}