import { motion } from 'framer-motion'
import { useState } from 'react'
import Icon from './Icons'

function FlipCard({ card, index }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="h-80 [perspective:1600px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className="relative h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d]"
        style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        <div className="absolute inset-0 surface rounded-[1.25rem] p-6 flex flex-col justify-between [backface-visibility:hidden]">
          <div className="flex items-center justify-between">
            <div className="text-gold-light">
              <Icon name={card.icon} className="w-11 h-11" />
            </div>
            <span className="label-caps text-[0.5rem] tracking-[0.34em] text-ivory/50">
              {card.meta}
            </span>
          </div>
          <div>
            <div className="label-caps text-gold-light tracking-[0.4em] text-[0.55rem]">
              {card.subtitle}
            </div>
            <h4 className="font-display text-2xl mt-2">{card.title}</h4>
            <p className="mt-3 text-ivory/75 leading-relaxed">{card.front}</p>
            <span className="mt-4 inline-block label-caps text-[0.5rem] tracking-[0.34em] text-gold-light/70">
              Hover to reveal
            </span>
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-[1.25rem] p-6 flex flex-col justify-between [backface-visibility:hidden]"
          style={{
            transform: 'rotateY(180deg)',
            background:
              'linear-gradient(150deg, rgba(154,123,30,0.22), rgba(212,175,55,0.1) 45%, rgba(10,10,10,0.9))',
            border: '1px solid rgba(245,215,122,0.35)',
          }}
        >
          <div className="flex items-center justify-between">
            <span className="label-caps text-gold-light tracking-[0.4em] text-[0.55rem]">
              Protocol
            </span>
            <div className="text-gold-light">
              <Icon name={card.icon} className="w-8 h-8" animated={false} />
            </div>
          </div>
          <div>
            <h4 className="font-display text-2xl text-gold-light">{card.title}</h4>
            <p className="mt-3 text-ivory/85 leading-relaxed">{card.back}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function RegenerationCards({ data }) {
  return (
    <div className="container-lux">
      <div className="flex flex-col gap-3 max-w-2xl">
        <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.68rem]">
          {data.kicker}
        </span>
        <h3 className="text-[clamp(1.8rem,4vw,3.2rem)] leading-tight">{data.heading}</h3>
        <p className="text-ivory/70 leading-relaxed">{data.intro}</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {data.cards.map((card, idx) => (
          <FlipCard key={card.id} card={card} index={idx} />
        ))}
      </div>
    </div>
  )
}
