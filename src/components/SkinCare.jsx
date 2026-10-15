import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { skinCare } from '../data/content'
import Icon from './hair/Icons'
import { scrollToId } from '../lib/scroll'
import ScrambleHeading from './ScrambleHeading'
import Magnetic from './Magnetic'

const easeLux = [0.22, 1, 0.36, 1]

function Tile({ item, onOpen }) {
  const ref = useRef(null)

  const handleMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }, [])

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onClick={() => onOpen(item)}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: easeLux }}
      className={`group relative text-left surface rounded-[1.25rem] p-6 overflow-hidden flex flex-col justify-between min-h-[10rem] ${
        item.span || ''
      } ${item.featured ? 'sm:col-span-2 sm:row-span-2' : ''}`}
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(340px circle at var(--mx,50%) var(--my,50%), rgba(212,175,55,0.22), transparent 45%)',
        }}
      />

      {item.featured && item.image ? (
        <img
          src={item.image}
          alt={`${item.title} — illustrative imagery`}
          className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
        />
      ) : null}
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.6))]" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="text-gold-light">
          <Icon name={item.icon} className={item.featured ? 'w-12 h-12' : 'w-9 h-9'} />
        </div>
        <span className="label-caps text-[0.5rem] tracking-[0.34em] text-gold-light/70">
          {item.tag}
        </span>
      </div>

      <div className="relative">
        <h4 className={`font-display ${item.featured ? 'text-3xl md:text-4xl' : 'text-xl'} leading-tight`}>
          {item.title}
        </h4>
        {item.featured ? (
          <p className="mt-3 text-ivory/75 leading-relaxed max-w-md">{item.description}</p>
        ) : null}
        <span className="mt-4 inline-flex items-center gap-2 label-caps text-[0.5rem] tracking-[0.34em] text-gold-light/0 group-hover:text-gold-light transition-colors duration-500">
          View details
          <span>→</span>
        </span>
      </div>

      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px gold-hairline opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
    </motion.button>
  )
}

function Modal({ item, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClose}
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
    >
      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.6, ease: easeLux }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl surface rounded-[1.5rem] overflow-hidden"
      >
        <div className="relative h-44 overflow-hidden">
          <img
            src={item.image}
            alt={`${item.title} — illustrative imagery`}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.9))]" />
          <div className="absolute bottom-5 left-6 flex items-center gap-4">
            <div className="text-gold-light">
              <Icon name={item.icon} className="w-10 h-10" animated={false} />
            </div>
            <div>
              <div className="label-caps text-gold-light/80 tracking-[0.4em] text-[0.55rem]">
                {item.tag}
              </div>
              <h3 className="font-display text-2xl md:text-3xl">{item.title}</h3>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <p className="text-ivory/80 leading-relaxed">{item.description}</p>

          <div className="mt-5 label-caps text-[0.55rem] tracking-[0.4em] text-gold-light/80">
            {skinCare.services.modalDetailsLabel}
          </div>
          <ul className="mt-3 grid gap-2">
            {item.details.map((d) => (
              <li key={d} className="flex items-center gap-3 text-ivory/75">
                <span className="text-gold-light">✦</span>
                {d}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="surface rounded-xl px-4 py-3">
              <div className="label-caps text-[0.5rem] tracking-[0.34em] text-ivory/50">
                Duration
              </div>
              <div className="text-gold-light">{item.duration}</div>
            </div>
            <div className="surface rounded-xl px-4 py-3">
              <div className="label-caps text-[0.5rem] tracking-[0.34em] text-ivory/50">
                Sessions
              </div>
              <div className="text-gold-light">{item.sessions}</div>
            </div>
          </div>

          <Magnetic strength={0.3}>
            <button
              onClick={() => {
                onClose()
                scrollToId(skinCare.services.modalCtaTarget)
              }}
              className="mt-6 px-8 py-3 text-[0.8rem] tracking-[0.22em] uppercase font-sans font-medium rounded-full bg-gold-gradient text-black shadow-glow transition-transform duration-500 hover:scale-105"
            >
              {skinCare.services.modalCta}
            </button>
          </Magnetic>
        </div>

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 border border-gold-light/40 text-gold-light flex items-center justify-center"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  )
}

export default function SkinCare() {
  const [openItem, setOpenItem] = useState(null)

  return (
    <section id="skin" className="relative py-16 md:py-24">
      <div className="container-lux">
        <motion.div
          initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
          whileInView={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 1.1, ease: easeLux }}
          className="relative flex flex-col gap-4 max-w-3xl"
        >
          <span className="pointer-events-none absolute -top-6 left-0 w-40 h-40 bg-gold-light/10 blur-[80px]" />
          <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.7rem]">
            {skinCare.eyebrow}
          </span>
          <ScrambleHeading
            as="h2"
            text={skinCare.title}
            className="text-[clamp(2rem,5vw,3.8rem)] leading-tight"
          />
          <p className="text-ivory/75 leading-relaxed max-w-2xl">{skinCare.intro}</p>
        </motion.div>

        <div className="mt-12 flex flex-col gap-3 max-w-2xl">
          <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.68rem]">
            {skinCare.services.kicker}
          </span>
          <h3 className="text-[clamp(1.8rem,4vw,3.2rem)] leading-tight">
            {skinCare.services.heading}
          </h3>
          <p className="text-ivory/70 leading-relaxed">{skinCare.services.intro}</p>
        </div>

        <div className="relative mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[10rem] lg:auto-rows-[11rem] gap-4">
          {skinCare.services.items.map((item) => (
            <Tile key={item.id} item={item} onOpen={setOpenItem} />
          ))}
        </div>

        <p className="mt-5 label-caps text-[0.5rem] tracking-[0.34em] text-ivory/40">
          {skinCare.imageryNote}
        </p>
      </div>

      <AnimatePresence>
        {openItem ? <Modal item={openItem} onClose={() => setOpenItem(null)} /> : null}
      </AnimatePresence>
    </section>
  )
}
