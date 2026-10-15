import { motion, useScroll } from 'framer-motion'
import { lazy, Suspense, useRef, useState } from 'react'
import { hairTransplant } from '../data/content'
import useDeviceTier from '../hooks/useDeviceTier'
import Divider from './Divider'
import BeforeAfterSlider from './hair/BeforeAfterSlider'
import HairTimeline from './hair/HairTimeline'
import RegenerationCards from './hair/RegenerationCards'
import { scrollToId } from '../lib/scroll'

const ScalpModel = lazy(() => import('./hair/ScalpModel'))
const FollicleGrowth = lazy(() => import('./hair/FollicleGrowth'))

const easeLux = [0.22, 1, 0.36, 1]

import ScalpMobileVisual from './hair/ScalpMobileVisual'
import Lazy3DContainer from './Lazy3DContainer'
import ScrambleHeading from './ScrambleHeading'
import Magnetic from './Magnetic'

export default function HairTransplantProcess() {
  const tier = useDeviceTier()
  const show3D = tier !== 'low'

  const data = hairTransplant
  const [activeSpot, setActiveSpot] = useState('hairline')
  const [phaseIndex, setPhaseIndex] = useState(2)

  const scalpWrapRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scalpWrapRef,
    offset: ['start end', 'end start'],
  })

  const current = data.scalp.hotspots.find((s) => s.id === activeSpot) || data.scalp.hotspots[1]
  const phase = data.growth.phases[phaseIndex]

  return (
    <section id="process" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container-lux">
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.7rem]">
            {data.eyebrow}
          </span>
          <ScrambleHeading
            as="h2"
            text={data.title}
            className="text-[clamp(2rem,5vw,3.8rem)] leading-tight"
          />
          <p className="text-ivory/75 leading-relaxed max-w-2xl">{data.intro}</p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.stats.map((stat) => (
            <div key={stat.label} className="surface rounded-2xl p-4 text-center">
              <div className="font-display text-2xl md:text-3xl text-gold-light">
                {stat.value}
              </div>
              <div className="label-caps text-[0.55rem] tracking-[0.38em] text-ivory/60 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 1 — Interactive scalp */}
      <div ref={scalpWrapRef} className="container-lux mt-16">
        <div className="flex flex-col gap-3 max-w-2xl">
          <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.68rem]">
            {data.scalp.kicker}
          </span>
          <h3 className="text-[clamp(1.8rem,4vw,3.2rem)] leading-tight">
            {data.scalp.heading}
          </h3>
          <p className="text-ivory/70 leading-relaxed">{data.scalp.intro}</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          <div className="surface rounded-[1.25rem] overflow-hidden relative min-h-[22rem] lg:min-h-[32rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.12),transparent_65%)]" />
            {show3D ? (
              <Lazy3DContainer
                fallback={<ScalpMobileVisual spots={data.scalp.hotspots} activeId={activeSpot} onSelect={setActiveSpot} />}
              >
                <Suspense fallback={<ScalpMobileVisual spots={data.scalp.hotspots} activeId={activeSpot} onSelect={setActiveSpot} />}>
                  <ScalpModel
                    spots={data.scalp.hotspots}
                    activeId={activeSpot}
                    onSelect={setActiveSpot}
                    progress={scrollYProgress}
                  />
                </Suspense>
              </Lazy3DContainer>
            ) : (
              <ScalpMobileVisual spots={data.scalp.hotspots} activeId={activeSpot} onSelect={setActiveSpot} />
            )}
            <span className="absolute bottom-4 left-4 label-caps text-[0.5rem] tracking-[0.34em] text-ivory/50">
              {data.scalp.hint}
            </span>
          </div>

          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeLux }}
            className="surface rounded-[1.25rem] p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold-gradient text-black flex items-center justify-center font-display text-sm">
                  {current.code}
                </span>
                <span className="label-caps text-gold-light tracking-[0.42em] text-[0.6rem]">
                  {current.name}
                </span>
              </div>
              <h4 className="font-display text-3xl mt-5">{current.title}</h4>
              <p className="mt-4 text-ivory/75 leading-relaxed">{current.description}</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {current.metrics.map((m) => (
                <div key={m.label} className="surface rounded-xl p-4">
                  <div className="font-display text-xl text-gold-light">{m.value}</div>
                  <div className="label-caps text-[0.5rem] tracking-[0.34em] text-ivory/55 mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {data.scalp.hotspots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setActiveSpot(spot.id)}
                  className={`px-3 py-1.5 rounded-full label-caps text-[0.5rem] tracking-[0.3em] border transition ${
                    activeSpot === spot.id
                      ? 'border-gold-light text-gold-light bg-gold-light/10'
                      : 'border-white/12 text-ivory/55 hover:border-gold-light/50'
                  }`}
                >
                  {spot.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2 — Horizontal timeline */}
      <div className="mt-16">
        <HairTimeline data={data.timeline} />
      </div>

      {/* 3 — Regeneration flip cards */}
      <div className="mt-16">
        <RegenerationCards data={data.regeneration} />
      </div>

      {/* 4 & 5 — Before/after + growth */}
      <div className="container-lux mt-16 grid gap-6 lg:grid-cols-2 items-stretch">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.68rem]">
              {data.beforeAfter.kicker}
            </span>
            <h3 className="text-[clamp(1.6rem,3.4vw,2.6rem)] leading-tight">
              {data.beforeAfter.heading}
            </h3>
            <p className="text-ivory/70">{data.beforeAfter.intro}</p>
          </div>
          <BeforeAfterSlider
            before={data.beforeAfter.before}
            after={data.beforeAfter.after}
            beforeLabel={data.beforeAfter.beforeLabel}
            afterLabel={data.beforeAfter.afterLabel}
          />
          <span className="label-caps text-[0.5rem] tracking-[0.34em] text-ivory/45">
            {data.beforeAfter.case}
          </span>
        </div>

        <div className="surface rounded-[1.25rem] p-6 flex flex-col">
          <div className="flex flex-col gap-2">
            <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.68rem]">
              {data.growth.kicker}
            </span>
            <h3 className="text-[clamp(1.6rem,3.4vw,2.6rem)] leading-tight">
              {data.growth.heading}
            </h3>
            <p className="text-ivory/70">{data.growth.intro}</p>
          </div>

          <div className="relative mt-4 h-64 rounded-2xl overflow-hidden bg-black flex-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(212,175,55,0.14),transparent_65%)]" />
            {show3D ? (
              <Lazy3DContainer fallback={null} className="w-full h-full">
                <Suspense fallback={null}>
                  <FollicleGrowth progress={phase.progress} />
                </Suspense>
              </Lazy3DContainer>
            ) : null}
            <div className="absolute top-4 left-4">
              <div className="font-display text-xl text-gold-light">{phase.month}</div>
              <div className="label-caps text-[0.5rem] tracking-[0.34em] text-ivory/60">
                {phase.title}
              </div>
            </div>
          </div>

          <p className="mt-4 text-ivory/75 text-sm leading-relaxed">{phase.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {data.growth.phases.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setPhaseIndex(i)}
                className={`px-3 py-1.5 rounded-full label-caps text-[0.5rem] tracking-[0.3em] border transition ${
                  i === phaseIndex
                    ? 'border-gold-light text-gold-light bg-gold-light/10'
                    : 'border-white/12 text-ivory/55 hover:border-gold-light/50'
                }`}
              >
                {p.month}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-lux mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 surface rounded-[1.25rem] p-6 md:p-8">
        <div>
          <p className="text-ivory/85 font-serif text-xl">{data.disclaimer}</p>
          <p className="label-caps text-[0.5rem] tracking-[0.34em] text-ivory/45 mt-2">
            DERMOLYXA™ · Regenerative Trichology
          </p>
        </div>
        <Magnetic strength={0.3}>
          <button
            onClick={() => scrollToId(data.cta.target)}
            className="px-8 py-3 text-[0.8rem] tracking-[0.22em] uppercase font-sans font-medium rounded-full bg-gold-gradient text-black shadow-glow transition-transform duration-500 hover:scale-105"
          >
            {data.cta.label}
          </button>
        </Magnetic>
      </div>

      <Divider id="skin-divider" />
    </section>
  )
}
