import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { beforeAfter } from '../data/content'
import Divider from './Divider'
import ScrambleHeading from './ScrambleHeading'

export default function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function onDown(e) {
      e.preventDefault()
      onMove(e)
      window.addEventListener('mousemove', onMove)
      window.addEventListener('touchmove', onMove, { passive: false })
      window.addEventListener('mouseup', onUp)
      window.addEventListener('touchend', onUp)
      window.addEventListener('mouseleave', onUp)
    }

    function onMove(e) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const rect = el.getBoundingClientRect()
      const p = ((clientX - rect.left) / rect.width) * 100
      setPos(Math.min(100, Math.max(0, p)))
    }

    function onUp() {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
      window.removeEventListener('mouseleave', onUp)
    }

    el.addEventListener('mousedown', onDown)
    el.addEventListener('touchstart', onDown, { passive: false })
    return () => {
      el.removeEventListener('mousedown', onDown)
      el.removeEventListener('touchstart', onDown)
      onUp()
    }
  }, [])

  return (
    <section id="results" className="relative py-16 md:py-24">
      <div className="container-lux">
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.7rem]">
            {beforeAfter.eyebrow}
          </span>
          <ScrambleHeading
            as="h2"
            text={beforeAfter.title}
            className="text-[clamp(2rem,5vw,3.8rem)] leading-tight"
          />
          <p className="text-ivory/75 leading-relaxed max-w-2xl">
            {beforeAfter.intro}
          </p>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 surface rounded-[1.25rem] overflow-hidden"
        >
          <div
            ref={ref}
            className="relative w-full h-[18rem] md:h-[26rem] lg:h-[32rem] select-none"
            role="region"
            aria-label="Before and after interactive comparison slider"
          >
            <img
              src={beforeAfter.comparator.before}
              alt="Before clinical treatment — illustrative outcome"
              loading="lazy"
              decoding="async"
              width="1200"
              height="800"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src={beforeAfter.comparator.after}
                alt="After clinical treatment — illustrative outcome"
                loading="lazy"
                decoding="async"
                width="1200"
                height="800"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute top-0 bottom-0 w-px bg-gold-light/80"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute -top-3 -bottom-3 left-1/2 -translate-x-1/2 flex flex-col justify-between py-2">
                <div className="w-9 h-9 rounded-full bg-gold-gradient flex items-center justify-center shadow-glow">
                  <span className="text-black text-xs">◀▶</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-gold-gradient flex items-center justify-center shadow-glow">
                  <span className="text-black text-xs">◀▶</span>
                </div>
              </div>
            </div>
            <div className="absolute top-4 left-4 label-caps bg-black/40 px-3 py-1 rounded-full text-gold-light tracking-[0.4em] text-[0.6rem]">
              {beforeAfter.comparator.beforeLabel}
            </div>
            <div className="absolute top-4 right-4 label-caps bg-black/40 px-3 py-1 rounded-full text-gold-light tracking-[0.4em] text-[0.6rem]">
              {beforeAfter.comparator.afterLabel}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {beforeAfter.cases.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
              className="surface rounded-2xl p-5"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl">{c.title}</h3>
                <span className="label-caps text-gold-light text-[0.55rem] tracking-[0.38em]">
                  {c.tone}
                </span>
              </div>
              <div className="mt-2 text-ivory/70">{c.area} • {c.detail}</div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-ivory/40 text-sm">{beforeAfter.disclaimer}</p>
      </div>
      <Divider id="institute-divider" />
    </section>
  )
}
