import { useState, useEffect, RefObject } from 'react'

export type SectionName = 'hero' | 'story' | 'service' | 'from0to1' | 'contact' | 'partner' | 'footer'

interface SectionRefs {
  hero?: RefObject<HTMLElement>
  story?: RefObject<HTMLElement>
  service?: RefObject<HTMLElement>
  from0to1?: RefObject<HTMLElement>
  contact?: RefObject<HTMLElement>
  partner?: RefObject<HTMLElement>
  footer?: RefObject<HTMLElement>
}

export function useActiveSection(sectionRefs: SectionRefs): SectionName {
  const [activeSection, setActiveSection] = useState<SectionName>('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // 導航列高度偏移

      // 按順序檢查每個 section
      const sections: Array<{ name: SectionName; ref: RefObject<HTMLElement> | undefined }> = [
        { name: 'footer', ref: sectionRefs.footer },
        { name: 'partner', ref: sectionRefs.partner },
        { name: 'contact', ref: sectionRefs.contact },
        { name: 'from0to1', ref: sectionRefs.from0to1 },
        { name: 'service', ref: sectionRefs.service },
        { name: 'story', ref: sectionRefs.story },
        { name: 'hero', ref: sectionRefs.hero },
      ]

      // 從下往上檢查，找到第一個頂部在視窗上方的 section
      for (const section of sections) {
        if (section.ref?.current) {
          const rect = section.ref.current.getBoundingClientRect()
          const sectionTop = rect.top + window.scrollY

          if (scrollPosition >= sectionTop) {
            setActiveSection(section.name)
            break
          }
        }
      }
    }

    handleScroll() // 初始化
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionRefs])

  return activeSection
}
