import { motion } from 'framer-motion'
import { hero } from '../data/content'
import Divider from './Divider'
import WhatsAppButton from './WhatsAppButton'
import { scrollToId } from '../lib/scroll'

import HeroBackdrop from './hero/HeroBackdrop'
import Magnetic from './Magnetic'

const easeLux = [0.22, 1, 0.36, 1]

const headlineStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const wordReveal = {
  hidden: { y: 110, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: easeLux },
  },
}

const fadeUp = {
  hidden: { y: 14, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: easeLux, delay: 0.6 },
  },
}

function ScrollHint() {
  return (
    <div className="mt-10 flex flex-col items-center gap-2 text-gold-light/70">
      <span className="label-caps tracking-[0.48em] text-[0.6rem]">
        {hero.scrollHint}
      </span>
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="opacity-70"
      >
        <path
          d="M10 3.75V16M10 16L5 11M10 16L15 11"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </div>
  )
}

export default function Hero() {
  const mode = hero.modes[0]

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-black">
      <HeroBackdrop />

      <div className="relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-16 pointer-events-none">
        <div className="container-lux flex flex-col items-center text-center gap-10 pointer-events-auto">
          <motion.div
            variants={headlineStagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-4"
          >
            <motion.span
              variants={wordReveal}
              className="label-caps text-gold-light/90 tracking-[0.62em] text-[0.7rem]"
            >
              {hero.eyebrow}
            </motion.span>

            <h1 className="text-[clamp(2.8rem,7.6vw,7rem)] leading-[0.95] tracking-tight">
              <span className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                {hero.headline.map((word, i) => (
                  <motion.span
                    key={`${word.text}-${i}`}
                    variants={wordReveal}
                    className={`inline-block ${
                      word.shimmer ? 'shimmer-gold text-glow-gold' : ''
                    }`}
                  >
                    {word.text}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-3xl text-lg md:text-xl text-ivory/80 leading-relaxed"
            >
              {hero.sub}
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {hero.ctas.map((cta) => (
              <Magnetic key={cta.label} strength={0.3}>
                <button
                  onClick={() => scrollToId(cta.target)}
                  className={`group relative px-8 py-3 text-[0.85rem] tracking-[0.22em] uppercase font-sans rounded-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${
                    cta.variant === 'solid'
                      ? 'bg-gold-gradient text-black shadow-glow font-medium'
                      : 'surface text-ivory ring-1 ring-gold-light/40 hover:text-gold-light'
                  }`}
                >
                  <span className="relative z-10">{cta.label}</span>
                </button>
              </Magnetic>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="w-full max-w-3xl px-5"
          >
            <div className="surface rounded-[1.25rem] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 text-left">
              <div className="flex flex-col gap-1">
                <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.65rem]">
                  {hero.corePrompt}
                </span>
                <div className="flex items-center gap-3 mt-1">
                  <motion.span
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-gold-light drop-shadow-[0_0_14px_rgba(212,175,55,0.45)]"
                  >
                    ◈
                  </motion.span>
                  <h3 className="font-display text-2xl md:text-3xl text-gold-light">
                    {mode.title}
                  </h3>
                  <span className="label-caps text-gold-light/70 tracking-[0.5em] text-[0.6rem]">
                    {mode.code} · {mode.name}
                  </span>
                </div>
                <p className="mt-3 text-ivory/75 leading-relaxed max-w-2xl">
                  {mode.caption}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 md:ml-auto">
                {mode.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="surface px-4 py-3 rounded-xl text-center"
                  >
                    <div className="text-gold-light font-display text-lg md:text-xl">
                      {metric.value}
                    </div>
                    <div className="mt-1 label-caps text-[0.55rem] tracking-[0.38em] text-ivory/60">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <ScrollHint />
        </div>
      </div>

      <WhatsAppButton />
      <Divider id="divisions-divider" />
    </section>
  )
}
