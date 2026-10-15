import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

const easeLux = [0.22, 1, 0.36, 1]

export default function SkinLayers({ data }) {
  const [active, setActive] = useState(data.items[0].id)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const stackRef = useRef(null)

  const current = data.items.find((l) => l.id === active) || data.items[0]

  function onMove(e) {
    const el = stackRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: -py * 10, y: px * 14 })
  }

  return (
    <div className="container-lux grid gap-12 lg:grid-cols-2 items-center">
      <div>
        <div className="flex flex-col gap-3 max-w-xl">
          <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.68rem]">
            {data.kicker}
          </span>
          <h3 className="text-[clamp(1.8rem,4vw,3.2rem)] leading-tight">{data.heading}</h3>
          <p className="text-ivory/70 leading-relaxed">{data.intro}</p>
        </div>

        <motion.div
          ref={stackRef}
          onMouseMove={onMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
          whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 1.1, ease: easeLux }}
          className="mt-10 [perspective:1200px]"
        >
          <div
            className="flex flex-col gap-3 [transform-style:preserve-3d] transition-transform duration-300"
            style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          >
            {data.items.map((layer) => {
              const isActive = layer.id === active
              return (
                <button
                  key={layer.id}
                  onMouseEnter={() => setActive(layer.id)}
                  onFocus={() => setActive(layer.id)}
                  onClick={() => setActive(layer.id)}
                  className="relative text-left rounded-2xl border px-6 py-5 overflow-hidden transition-all duration-500"
                  style={{
                    borderColor: isActive ? layer.color : 'rgba(212,175,55,0.18)',
                    background: `linear-gradient(115deg, ${layer.color}${isActive ? '2e' : '12'}, rgba(10,10,10,0.6))`,
                    boxShadow: isActive ? `0 0 60px ${layer.color}44, inset 0 0 40px ${layer.color}22` : 'none',
                    transform: isActive ? 'translateZ(40px)' : 'translateZ(0px)',
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: layer.color, boxShadow: `0 0 14px ${layer.color}` }}
                      />
                      <span className="font-display text-xl md:text-2xl">{layer.name}</span>
                    </div>
                    <span className="label-caps text-[0.5rem] tracking-[0.34em] text-ivory/55">
                      {layer.depth}
                    </span>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: easeLux }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 text-ivory/75 leading-relaxed max-w-lg">
                      {layer.description}
                    </p>
                  </motion.div>

                  <span
                    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 opacity-0 hover:opacity-100"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${layer.color}33, transparent)`,
                    }}
                  />
                </button>
              )
            })}
          </div>

          <span className="mt-4 block label-caps text-[0.5rem] tracking-[0.4em] text-ivory/45">
            {data.hint}
          </span>
        </motion.div>
      </div>

      <motion.div
        key={current.id}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: easeLux }}
        className="surface rounded-[1.25rem] p-7 md:p-9 relative overflow-hidden"
      >
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-56 h-56 rounded-full blur-[90px]"
          style={{ background: `${current.color}44` }}
        />
        <span className="label-caps text-[0.55rem] tracking-[0.42em]" style={{ color: current.color }}>
          {current.name}
        </span>
        <h4 className="font-display text-3xl mt-4">{current.depth}</h4>
        <p className="mt-4 text-ivory/75 leading-relaxed">{current.description}</p>

        <div className="mt-7 label-caps text-[0.55rem] tracking-[0.4em] text-gold-light/80">
          {data.targetedLabel}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {current.treatments.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-full border text-ivory/80"
              style={{ borderColor: `${current.color}66`, background: `${current.color}14` }}
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
