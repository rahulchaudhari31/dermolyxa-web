import { Suspense, lazy, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Divisions from './components/Divisions'
import ClinicServices from './components/ClinicServices'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import FilmGrain from './components/FilmGrain'
import Footer from './components/Footer'
import MobileBar from './components/MobileBar'
import { initLenis } from './lib/lenis'

// Performance: Code-split below-the-fold heavy sections
const HairTransplantProcess = lazy(() => import('./components/HairTransplantProcess'))
const SkinCare = lazy(() => import('./components/SkinCare'))
const AestheticCare = lazy(() => import('./components/AestheticCare'))
const BeforeAfter = lazy(() => import('./components/BeforeAfter'))
const Institute = lazy(() => import('./components/Institute'))
const Products = lazy(() => import('./components/Products'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const FAQ = lazy(() => import('./components/FAQ'))
const Contact = lazy(() => import('./components/Contact'))

function SectionFallback() {
  return (
    <div className="py-24 container-lux flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border border-gold-light/40 border-t-gold-light animate-spin" />
    </div>
  )
}

export default function App() {
  useEffect(() => {
    initLenis()
  }, [])

  return (
    <div className="min-h-screen bg-black text-ivory relative selection:bg-gold/30 selection:text-white">
      {/* Page-Wide Effects */}
      <FilmGrain />
      <ScrollProgress />
      <Cursor />

      {/* Main Structural Layout */}
      <Navbar />

      <main id="main-content">
        <Hero />
        <Divisions />
        <ClinicServices />

        <Suspense fallback={<SectionFallback />}>
          <HairTransplantProcess />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <SkinCare />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <AestheticCare />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <BeforeAfter />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Institute />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Products />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <MobileBar />
    </div>
  )
}
