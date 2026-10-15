import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { testimonials } from '../data/content'
import Divider from './Divider'
import UiIcon from './UiIcons'
import ScrambleHeading from './ScrambleHeading'
import Magnetic from './Magnetic'

const easeLux = [0.22, 1, 0.36, 1]

export default function Testimonials() {
  const items = testimonials.items
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)

  const goTo = (i) => {
    setIndex((i + items.length) % items.length)
  }

  useEffect(() => {
    const start = () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        if (!paused) {
          goTo(index + 1)
        }
      }, testimonials.autoMs || 5200)
    }
    start()
    return () => clearInterval(intervalRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused])

  const t = items[index]

  return (
    <section id="testimonials" className="relative py-16 md:py-24">
      <div className="container-lux">
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.7rem]">
            {testimonials.eyebrow}
          </span>
          <ScrambleHeading as="h2" text={testimonials.title} className="text-[clamp(2rem,5vw,3.8rem)] leading-tight" />
          <p className="label-caps text-[0.5rem] tracking-[0.34em] text-ivory/40 mt-1">
            {testimonials.illustrative}
          </p>
        </div>

        <div
          className="mt-10 relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-[1.25rem] surface">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.7, ease: easeLux }}
                className="p-8 md:p-12 flex flex-col gap-6"
              >
                <div className="flex items-center gap-1 text-gold-light">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed text-ivory/90">
                  “{t.quote}”
                </blockquote>
                <div className="flex flex-col">
                  <div className="font-display text-xl">{t.name}</div>
                  <div className="label-caps text-[0.55rem] tracking-[0.38em] text-ivory/60 mt-1">
                    {t.role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {items.map((item, i) => (
              <button
                key={item.id}
                onClick={() => goTo(i)}
                className={`px-4 py-2 rounded-full label-caps text-[0.55rem] tracking-[0.38em] border transition ${
                  i === index ? 'border-gold-light text-gold-light bg-gold-light/10' : 'border-white/10 text-ivory/50'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-3">
              <Magnetic strength={0.35}>
                <button
                  onClick={() => goTo(index - 1)}
                  className="surface px-3.5 py-2.5 rounded-full hover:border-gold-light/40 transition-colors focus-visible:ring-2 focus-visible:ring-gold-light"
                  aria-label="Previous testimonial"
                >
                  <UiIcon name="arrowLeft" className="w-4 h-4 text-gold-light" />
                </button>
              </Magnetic>
              <Magnetic strength={0.35}>
                <button
                  onClick={() => goTo(index + 1)}
                  className="surface px-3.5 py-2.5 rounded-full hover:border-gold-light/40 transition-colors focus-visible:ring-2 focus-visible:ring-gold-light"
                  aria-label="Next testimonial"
                >
                  <UiIcon name="arrowRight" className="w-4 h-4 text-gold-light" />
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
      <Divider id="faq-divider-alt" />
    </section>
  )
}
