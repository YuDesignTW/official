import './globals.css'
import { HydrationProvider } from '../../components/yulab/hydration-provider'

export const metadata = {
  title: '有料研究室 | YU LAB',
  description: 'AI 幫你整合「有料的行銷」',
}

export default function YulabLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <HydrationProvider>
      {children}
    </HydrationProvider>
  )
}
