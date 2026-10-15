import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { institute } from '../data/content'
import Divider from './Divider'
import { scrollToId } from '../lib/scroll'
import UiIcon from './UiIcons'
import ScrambleHeading from './ScrambleHeading'
import Magnetic from './Magnetic'

const easeLux = [0.22, 1, 0.36, 1]

function CourseCard({ course, index, onEnquire }) {
  return (
    <motion.article
      layout
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -12, opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, ease: easeLux, delay: index * 0.05 }}
      className="surface rounded-2xl p-6 flex flex-col gap-5 group"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg md:text-xl leading-snug max-w-3xl">{course.title}</h3>
        <span className="label-caps text-[0.55rem] tracking-[0.38em] text-gold-light flex items-center gap-2">
          {course.level}
        </span>
      </div>
      <p className="text-ivory/70 leading-relaxed text-sm">{course.description}</p>
      <ul className="flex flex-col gap-1.5">
        {course.outcomes.map((outcome) => (
          <li key={outcome} className="flex items-center gap-2 text-ivory/65 text-sm">
            <span className="text-gold-light">✦</span>
            {outcome}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between pt-1">
        <span className="flex items-center gap-2 label-caps text-[0.55rem] tracking-[0.38em] text-ivory/55">
          <UiIcon name="clock" className="w-4 h-4" />
          {course.duration}
        </span>
        <button
          onClick={onEnquire}
          className="group/btn flex items-center gap-2 label-caps text-[0.55rem] tracking-[0.38em] text-gold-light hover:text-gold-light/80 transition-colors"
        >
          {institute.enquireLabel}
          <span className="transition-transform group-hover/btn:translate-x-0.5">→</span>
        </button>
      </div>
    </motion.article>
  )
}

function Tabs() {
  const [active, setActive] = useState(institute.tabs[0].id)
  const tab = institute.tabs.find((t) => t.id === active)

  const onEnquire = useCallback(() => {
    scrollToId(institute.enquireTarget, -90)
  }, [])

  return (
    <div className="mt-10 flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-3">
        {institute.tabs.map((t) => {
          const isActive = active === t.id
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`relative px-5 py-2.5 rounded-full border transition overflow-hidden ${
                isActive ? 'border-gold-light bg-gold-light/10 text-gold-light' : 'border-white/10 text-ivory/60 hover:border-gold-light/40 hover:text-gold-light'
              }`}
            >
              <span className="relative z-10 label-caps text-[0.55rem] tracking-[0.38em]">{t.label}</span>
              {isActive && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute inset-x-0 bottom-0 h-px bg-gold-gradient"
                />
              )}
            </button>
          )
        })}
      </div>

      <motion.div
        key={tab.id}
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: easeLux }}
        className="surface rounded-[1.25rem] p-6 md:p-8 flex flex-col gap-5"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <span className="label-caps text-[0.55rem] tracking-[0.42em] text-gold-light">
              {institute.tabBlurbLabel}
            </span>
            <h3 className="font-display text-2xl md:text-3xl mt-2">{tab.label}</h3>
            <p className="mt-2 text-ivory/70 max-w-2xl leading-relaxed">{tab.blurb}</p>
          </div>
          <span className="label-caps text-[0.55rem] tracking-[0.38em] text-ivory/55">
            {tab.courses.length} {institute.courseCountLabel}
          </span>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence>
            {tab.courses.map((course, idx) => (
              <CourseCard key={course.id} course={course} index={idx} onEnquire={onEnquire} />
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}

function FacultyCarousel() {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const members = institute.faculty.members

  const scrollToIndex = useCallback(
    (i) => {
      const track = trackRef.current
      if (!track) return
      const clamped = (i + members.length) % members.length
      const children = Array.from(track.children)
      const child = children[clamped]
      if (child) {
        track.scrollTo({
          left: child.offsetLeft - track.offsetLeft,
          behavior: 'smooth',
        })
      }
      setIndex(clamped)
    },
    [members.length],
  )

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf = 0
    function onScroll() {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const children = Array.from(track.children)
        if (children.length === 0) return
        const center = track.scrollLeft + track.clientWidth / 2
        let nearest = 0
        let best = Infinity
        children.forEach((c, i) => {
          const mid = c.offsetLeft - track.offsetLeft + c.clientWidth / 2
          const d = Math.abs(mid - center)
          if (d < best) {
            best = d
            nearest = i
          }
        })
        setIndex(nearest)
      })
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="mt-10 flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="label-caps text-[0.55rem] tracking-[0.42em] text-gold-light">
            {institute.faculty.kicker}
          </span>
          <h3 className="font-display text-2xl md:text-3xl mt-2">{institute.faculty.heading}</h3>
          <p className="mt-2 text-ivory/70 max-w-2xl leading-relaxed">{institute.faculty.intro}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToIndex(index - 1)}
            className="surface px-3 py-2 rounded-full flex items-center gap-2"
            aria-label={institute.faculty.prevLabel}
          >
            <UiIcon name="arrowLeft" className="w-4 h-4 text-gold-light" />
          </button>
          <span className="label-caps text-[0.55rem] tracking-[0.38em] text-ivory/55">
            {index + 1} / {members.length}
          </span>
          <button
            onClick={() => scrollToIndex(index + 1)}
            className="surface px-3 py-2 rounded-full flex items-center gap-2"
            aria-label={institute.faculty.nextLabel}
          >
            <UiIcon name="arrowRight" className="w-4 h-4 text-gold-light" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2"
      >
        {members.map((m, i) => (
          <motion.article
            key={m.id}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.8, ease: easeLux, delay: i * 0.05 }}
            className="snap-start shrink-0 basis-[82%] sm:basis-[46%] lg:basis-[30%] surface rounded-[1.25rem] overflow-hidden flex flex-col"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={m.portrait}
                alt={m.name}
                loading="lazy"
                decoding="async"
                width="400"
                height="400"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 to-transparent" />
            </div>
            <div className="p-6 flex flex-col gap-1">
              <h4 className="font-display text-xl">{m.name}</h4>
              <span className="label-caps text-[0.55rem] tracking-[0.38em] text-gold-light">{m.role}</span>
              <span className="text-ivory/60 text-sm mt-1">{m.credentials}</span>
            </div>
          </motion.article>
        ))}
      </div>
      <p className="label-caps text-[0.5rem] tracking-[0.34em] text-ivory/40">{institute.faculty.note}</p>
    </div>
  )
}

export default function Institute() {
  const onApply = useCallback(() => {
    scrollToId(institute.cta.target, -90)
  }, [])

  return (
    <section id="institute" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container-lux">
        <div className="flex flex-col gap-5 max-w-3xl">
          <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.7rem]">
            {institute.eyebrow}
          </span>
          <ScrambleHeading as="h2" text={institute.title} className="text-[clamp(2rem,5vw,3.8rem)] leading-tight" />
          <p className="text-ivory/75 leading-relaxed max-w-2xl">{institute.intro}</p>
        </div>

        <Tabs />

        <FacultyCarousel />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 1, ease: easeLux }}
            className="surface rounded-[1.25rem] overflow-hidden"
          >
            <img
              src={institute.image}
              alt="DERMOLYXA Institute — medical training"
              loading="lazy"
              decoding="async"
              width="800"
              height="500"
              className="w-full h-[18rem] md:h-[22rem] object-cover opacity-85"
            />
          </motion.div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {institute.points.map((pt, idx) => (
                <motion.div
                  key={pt.label}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.8, ease: easeLux, delay: idx * 0.05 }}
                  className="surface rounded-2xl p-4 text-center"
                >
                  <div className="font-display text-xl md:text-2xl text-gold-light">{pt.value}</div>
                  <div className="label-caps text-[0.55rem] tracking-[0.38em] text-ivory/60 mt-1">{pt.label}</div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.8, ease: easeLux }}
              className="surface rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
            >
              <div>
                <div className="label-caps text-[0.55rem] tracking-[0.38em] text-gold-light">Training Notes</div>
                <ul className="mt-2 flex flex-col gap-1.5 text-ivory/70 text-sm leading-relaxed">
                  {institute.notices.map((n, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gold-light mt-0.5">✦</span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Magnetic strength={0.3}>
                <button
                  onClick={onApply}
                  className="self-start px-8 py-3 text-[0.8rem] tracking-[0.22em] uppercase font-sans font-medium rounded-full bg-gold-gradient text-black shadow-glow transition-transform duration-500 hover:scale-105"
                >
                  {institute.cta.label}
                </button>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </div>
      <Divider id="products-divider" />
    </section>
  )
}
