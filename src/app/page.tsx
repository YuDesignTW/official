import { Navbar } from '@/components/features/navbar'
import { Hero } from '@/components/sections/hero'
import { Typewriter } from '@/components/sections/typewriter'
import { About } from '@/components/sections/about'
import { WhyUs } from '@/components/sections/why-us'
import { Services } from '@/components/sections/services'
import { Process } from '@/components/sections/process'
import { Works } from '@/components/sections/works'
import { Impacts } from '@/components/sections/impacts'
import { FAQ } from '@/components/sections/faq'
import { Footer } from '@/components/features/footer'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { BackToTop } from '@/components/ui/back-to-top'
import { NoiseBackground } from '@/components/ui/noise-background'

export default function HomePage() {
  return (
    <>
      <NoiseBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Typewriter />
        <About />
        <Services />
        <WhyUs />
        <Works />
        <Impacts />
        <Process />
        <FAQ />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}