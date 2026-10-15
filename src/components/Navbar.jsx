import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { nav } from '../data/content'
import { scrollToId } from '../lib/scroll'
import Magnetic from './Magnetic'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-[120] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
      <div className="container-lux">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className={`flex items-center justify-between gap-4 mt-2 md:mt-3 px-3 sm:px-5 md:px-6 py-2 rounded-[1.5rem] ring-1 transition-all duration-500 backdrop-blur-xl ${
            scrolled
              ? 'surface shadow-[0_12px_40px_rgba(0,0,0,0.45)] ring-gold-light/20'
              : 'bg-black/50 ring-white/10'
          }`}
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('hero', -20)
            }}
            className="flex shrink-0 items-center"
            aria-label="DERMOLYXA home"
          >
            <img
              src="/dermolyxa-logo.jpeg"
              alt="DERMOLYXA — Skin, Hair, Aesthetic"
              className="h-16 md:h-[4.75rem] w-auto max-w-[38vw] object-contain"
              decoding="async"
            />
          </a>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {nav.links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId(link.id)
                }}
                className="label-caps text-[0.62rem] tracking-[0.42em] text-ivory/70 hover:text-gold-light transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Magnetic strength={0.25} className="hidden sm:inline-flex">
              <button
                onClick={() => {
                  setOpen(false)
                  scrollToId('contact')
                }}
                className="px-6 py-2 text-[0.68rem] tracking-[0.22em] uppercase font-sans font-medium rounded-full bg-gold-gradient text-black shadow-glow transition-transform duration-500 hover:scale-105"
              >
                {nav.cta.label}
              </button>
            </Magnetic>

            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden surface px-3 py-2 rounded-full focus-visible:ring-2 focus-visible:ring-gold-light"
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="#f5d77a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </motion.nav>
      </div>

      {open ? (
        <div className="lg:hidden container-lux mt-2">
          <div className="surface rounded-2xl p-4 flex flex-col gap-2">
            {nav.links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId(link.id)
                  setOpen(false)
                }}
                className="px-3 py-2 label-caps tracking-[0.42em] text-[0.65rem] text-ivory/80"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                scrollToId('contact')
                setOpen(false)
              }}
              className="mt-2 px-6 py-3 text-center text-[0.72rem] tracking-[0.22em] uppercase rounded-full bg-gold-gradient text-black"
            >
              {nav.cta.label}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
