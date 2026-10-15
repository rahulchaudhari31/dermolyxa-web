import { motion } from 'framer-motion'
import { skinCare } from '../data/content'
import ConcernFinder from './aesthetic/ConcernFinder'
import SkinLayers from './aesthetic/SkinLayers'
import Divider from './Divider'

const easeLux = [0.22, 1, 0.36, 1]

function LightSweep() {
  return (
    <div className="container-lux my-14">
      <div className="relative h-px w-full overflow-hidden bg-white/5">
        <span className="animate-sweep absolute inset-y-0 left-0 w-1/3 bg-gold-gradient" />
      </div>
    </div>
  )
}

export default function AestheticCare() {
  return (
    <section id="aesthetic" className="relative py-16 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute top-1/4 -left-40 w-[32rem] h-[32rem] rounded-full bg-gold/10 blur-[160px]" />

      <motion.div
        initial={{ clipPath: 'inset(0 0 0 100%)' }}
        whileInView={{ clipPath: 'inset(0 0 0 0%)' }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: easeLux }}
      >
        <SkinLayers data={skinCare.layers} />
      </motion.div>

      <LightSweep />
      <ConcernFinder data={skinCare.quiz} />
      <LightSweep />

      <div className="container-lux">
        <div className="grid gap-4 md:grid-cols-3">
          {skinCare.gallery.map((img, idx) => (
            <motion.figure
              key={img}
              initial={{ y: 40, opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
              whileInView={{ y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 1, ease: easeLux, delay: idx * 0.1 }}
              className="surface rounded-[1.25rem] overflow-hidden"
            >
              <img
                src={img}
                alt="Aesthetic care — DERMOLYXA, illustrative imagery"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
                className="w-full h-[16rem] md:h-[20rem] object-cover opacity-85 transition-transform duration-700 hover:scale-105"
              />
            </motion.figure>
          ))}
        </div>
        <p className="mt-5 label-caps text-[0.5rem] tracking-[0.34em] text-ivory/40">
          {skinCare.imageryNote}
        </p>
      </div>

      <Divider id="results-divider" />
    </section>
  )
}
