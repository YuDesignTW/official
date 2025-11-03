'use client'

import { useState, useEffect, useRef } from 'react'
import { Navigation } from '../../components/yulab/sections/Navigation'
import { HeroSection } from '../../components/yulab/sections/HeroSection'
import { StorySection } from '../../components/yulab/sections/StorySection'
import { ServiceSection } from '../../components/yulab/sections/ServiceSection'
import { From0to1Section } from '../../components/yulab/sections/From0to1Section'
import { ContactSection } from '../../components/yulab/sections/ContactSection'
import { PartnerSection } from '../../components/yulab/sections/PartnerSection'
import { Footer } from '../../components/yulab/sections/Footer'
import { useActiveSection } from '../../hooks/yulab/useActiveSection'
import { LoadingAnimation } from '../../components/yulab/LoadingAnimation'

export default function YulabPage() {
  const [scrollY, setScrollY] = useState(0)
  const [storyProgress, setStoryProgress] = useState(0)
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 })
  const [isFromSectionVisible, setIsFromSectionVisible] = useState(false)
  const [isContactSectionVisible, setIsContactSectionVisible] = useState(false)
  const [isPartnerSectionVisible, setIsPartnerSectionVisible] = useState(false)
  const [contactScrollOffset, setContactScrollOffset] = useState(0)

  const heroSectionRef = useRef<HTMLElement>(null)
  const storySectionRef = useRef<HTMLElement>(null)
  const serviceSectionRef = useRef<HTMLElement>(null)
  const fromSectionRef = useRef<HTMLElement>(null)
  const contactSectionRef = useRef<HTMLElement>(null)
  const partnerSectionRef = useRef<HTMLElement>(null)
  const footerSectionRef = useRef<HTMLElement>(null)

  const activeSection = useActiveSection({
    hero: heroSectionRef,
    story: storySectionRef,
    service: serviceSectionRef,
    from0to1: fromSectionRef,
    contact: contactSectionRef,
    partner: partnerSectionRef,
    footer: footerSectionRef,
  })

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })

    const handleScroll = () => {
      setScrollY(window.scrollY)

      if (storySectionRef.current) {
        const rect = storySectionRef.current.getBoundingClientRect()
        const sectionHeight = storySectionRef.current.offsetHeight
        const windowHeight = window.innerHeight
        const scrollStart = -rect.top
        const scrollRange = sectionHeight - windowHeight
        let progress = scrollStart / scrollRange
        progress = Math.max(0, Math.min(1, progress))
        setStoryProgress(progress)
      }

      if (contactSectionRef.current) {
        const rect = contactSectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const sectionHeight = contactSectionRef.current.offsetHeight

        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrollStart = Math.max(0, windowHeight - rect.top)
          const scrollRange = windowHeight + sectionHeight
          const scrollProgress = Math.min(1, scrollStart / scrollRange)
          setContactScrollOffset(scrollProgress * 600)
        } else if (rect.bottom <= 0) {
          setContactScrollOffset(600)
        } else {
          setContactScrollOffset(0)
        }
      }
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const fromObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFromSectionVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContactSectionVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const partnerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPartnerSectionVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (fromSectionRef.current) {
      fromObserver.observe(fromSectionRef.current)
    }

    if (contactSectionRef.current) {
      contactObserver.observe(contactSectionRef.current)
    }

    if (partnerSectionRef.current) {
      partnerObserver.observe(partnerSectionRef.current)
    }

    return () => {
      fromObserver.disconnect()
      contactObserver.disconnect()
      partnerObserver.disconnect()
    }
  }, [])

  return (
    <>
      <LoadingAnimation />
      <div className="min-h-screen bg-white opacity-0 animate-contentFadeIn">
        <Navigation activeSection={activeSection} />
        <HeroSection scrollY={scrollY} heroSectionRef={heroSectionRef} />
        <StorySection
          storySectionRef={storySectionRef}
          storyProgress={storyProgress}
          windowSize={windowSize}
        />
        <ServiceSection serviceSectionRef={serviceSectionRef} />
        <From0to1Section
          fromSectionRef={fromSectionRef}
          isFromSectionVisible={isFromSectionVisible}
          windowSize={windowSize}
        />
        <ContactSection
          contactSectionRef={contactSectionRef}
          isContactSectionVisible={isContactSectionVisible}
          contactScrollOffset={contactScrollOffset}
          windowSize={windowSize}
        />
        <PartnerSection
          partnerSectionRef={partnerSectionRef}
          isPartnerSectionVisible={isPartnerSectionVisible}
        />
        <Footer footerSectionRef={footerSectionRef} />
      </div>
    </>
  )
}
