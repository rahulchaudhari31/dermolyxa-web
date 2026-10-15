import { motion } from 'framer-motion'
import { clinicServices } from '../data/content'
import Divider from './Divider'
import ScrambleHeading from './ScrambleHeading'

export default function ClinicServices() {
  return (
    <section id="clinic" className="relative py-16 md:py-24">
      <div className="container-lux">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-5">
            <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.7rem]">
              {clinicServices.eyebrow}
            </span>
            <ScrambleHeading
              as="h2"
              text={clinicServices.title}
              className="text-[clamp(2rem,5vw,3.8rem)] leading-tight"
            />
            <p className="text-ivory/75 leading-relaxed max-w-xl">
              {clinicServices.intro}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {clinicServices.services.map((service, idx) => (
                <motion.article
                  key={service.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
                  className="surface rounded-2xl p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl">{service.title}</h3>
                    <span className="label-caps text-gold-light text-[0.55rem] tracking-[0.38em]">
                      {service.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-ivory/70 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-3 label-caps text-ivory/50 text-[0.55rem] tracking-[0.38em]">
                    {service.sessions}
                  </div>
                </motion.article>
              ))}
            </div>

            <p className="mt-4 text-ivory/40 text-sm">{clinicServices.note}</p>
          </div>

          <div className="relative">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="surface rounded-[1.25rem] overflow-hidden shadow-glow"
            >
              <img
                src={clinicServices.image}
                alt="DERMOLYXA clinic — precision aesthetic treatment room"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                className="w-full h-[22rem] md:h-[28rem] lg:h-[34rem] object-cover opacity-85"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <Divider id="process-divider" />
    </section>
  )
}
