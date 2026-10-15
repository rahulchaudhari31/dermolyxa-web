import { motion } from 'framer-motion'
import { useState } from 'react'
import { faq } from '../data/content'
import Divider from './Divider'
import ScrambleHeading from './ScrambleHeading'

const easeLux = [0.22, 1, 0.36, 1]

function PlusMinus({ open }) {
  return (
    <div className="relative w-5 h-5">
      <motion.span
        className="absolute top-1/2 left-0 w-full h-px bg-gold-light"
        style={{ y: '-50%' }}
      />
      <motion.span
        className="absolute top-0 left-1/2 h-full w-px bg-gold-light"
        style={{ x: '-50%' }}
        initial={false}
        animate={{ rotate: open ? 90 : 0, opacity: open ? 0 : 1 }}
        transition={{ duration: 0.3, ease: easeLux }}
      />
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative py-16 md:py-24">
      <div className="container-lux">
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.7rem]">
            {faq.eyebrow}
          </span>
          <ScrambleHeading as="h2" text={faq.title} className="text-[clamp(2rem,5vw,3.8rem)] leading-tight" />
        </div>

        <div className="mt-10 surface rounded-[1.25rem] overflow-hidden divide-y divide-white/5">
          {faq.items.map((item, idx) => {
            const isOpen = open === idx
            const panelId = `faq-panel-${idx}`
            const btnId = `faq-btn-${idx}`
            return (
              <div key={idx} className="flex flex-col">
                <button
                  id={btnId}
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-start justify-between gap-6"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-lg md:text-xl">{item.q}</h3>
                  </div>
                  <PlusMinus open={isOpen} />
                </button>
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-ivory/75 leading-relaxed max-w-3xl">{item.a}</p>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
      <Divider id="contact-divider" />
    </section>
  )
}
