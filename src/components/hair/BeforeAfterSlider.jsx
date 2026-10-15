import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function BeforeAfterSlider({ before, after, beforeLabel, afterLabel, className = '' }) {
  const [pos, setPos] = useState(50)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function onMove(clientX) {
      const rect = el.getBoundingClientRect()
      const p = ((clientX - rect.left) / rect.width) * 100
      setPos(Math.min(100, Math.max(0, p)))
    }

    function start(e) {
      e.preventDefault()
      move(e)
      window.addEventListener('mousemove', move)
      window.addEventListener('touchmove', move, { passive: false })
      window.addEventListener('mouseup', end)
      window.addEventListener('touchend', end)
    }
    function move(e) {
      const x = e.touches ? e.touches[0].clientX : e.clientX
      onMove(x)
    }
    function end() {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('touchmove', move)
      window.removeEventListener('mouseup', end)
      window.removeEventListener('touchend', end)
    }

    el.addEventListener('mousedown', start)
    el.addEventListener('touchstart', start, { passive: false })
    return () => {
      el.removeEventListener('mousedown', start)
      el.removeEventListener('touchstart', start)
      end()
    }
  }, [])

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`surface rounded-[1.25rem] overflow-hidden ${className}`}
    >
      <div ref={ref} className="relative w-full h-72 md:h-[26rem] select-none cursor-ew-resize">
        <img src={before} alt={`${beforeLabel} — illustrative imagery`} className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img src={after} alt={`${afterLabel} — illustrative imagery`} className="absolute inset-0 w-full h-full object-cover" />
        </div>

        <div className="absolute top-4 left-4 label-caps bg-black/45 px-3 py-1 rounded-full text-gold-light tracking-[0.4em] text-[0.55rem]">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 label-caps bg-black/45 px-3 py-1 rounded-full text-gold-light tracking-[0.4em] text-[0.55rem]">
          {afterLabel}
        </div>

        <div className="absolute top-0 bottom-0 w-[2px] bg-gold-light/90 shadow-glow" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gold-gradient flex items-center justify-center shadow-glow-lg ring-1 ring-white/40">
            <span className="text-black text-[0.7rem] tracking-tighter">◀▶</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
