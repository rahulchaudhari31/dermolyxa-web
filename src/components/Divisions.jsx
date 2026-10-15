import { useGSAP } from '@gsap/react'
import { animate, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import { divisions } from '../data/content'
import { getLenis } from '../lib/lenis'
import { scrollToId } from '../lib/scroll'
import Icon from './hair/Icons'
import Divider from './Divider'
import ScrambleHeading from './ScrambleHeading'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function TiltCard({ item }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  function onMove(e) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    setTilt({ rx: -py * 13, ry: px * 17 })
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      className="group relative [perspective:1200px] h-full"
    >
      <div
        className="relative h-full surface rounded-[1.5rem] overflow-hidden transition-transform duration-300 ease-out will-change-transform"
        style={{ transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
      >
        <span className="trace-border pointer-events-none absolute -inset-px rounded-[1.5rem] opacity-0 group-hover:opacity-100 group-hover:[animation:trace-spin_3s_linear_infinite]" />
        <span
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
          style={{
            background:
              'radial-gradient(320px circle at var(--mx,50%) var(--my,50%), rgba(245,215,122,0.2), transparent 45%)',
          }}
        />

        <div className="relative h-52 overflow-hidden">
          <img
            src={item.image}
            alt={`${item.name} — illustrative imagery`}
            loading="lazy"
            decoding="async"
            width="600"
            height="350"
            className="w-full h-full object-cover opacity-70 transition-transform duration-500 ease-out"
            style={{
              transform: `translate(${tilt.ry * -0.9}px, ${tilt.rx * -0.9}px) scale(1.12)`,
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.85))]" />
          <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />

          <div className="absolute top-5 left-5 flex items-center gap-3 z-10">
            <span className="label-caps tracking-[0.4em] text-gold-light text-[0.6rem]">
              {item.index}
            </span>
            <span className="label-caps tracking-[0.34em] text-ivory/60 text-[0.55rem]">
              {item.subtitle}
            </span>
          </div>

          {item.badge ? (
            <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gold-gradient text-black label-caps tracking-[0.3em] text-[0.5rem] shadow-glow">
              {item.badge}
            </span>
          ) : null}

          <div
            className="absolute bottom-5 right-5 z-10 text-gold-light transition-transform duration-500 ease-out"
            style={{ transform: `translate(${tilt.ry * 0.7}px, ${tilt.rx * 0.7}px)` }}
          >
            <Icon name={item.icon} className="w-11 h-11" animated={false} />
          </div>
        </div>

        <div className="relative z-10 p-6 flex flex-col gap-4">
          <h3 className="font-display text-xl md:text-2xl leading-tight">{item.name}</h3>
          <p className="text-ivory/75 leading-relaxed">{item.description}</p>
          <ul className="flex flex-col gap-2 text-ivory/70">
            {item.points.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="text-gold-light">✦</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => scrollToId(item.href.slice(1))}
            className="mt-1 self-start label-caps tracking-[0.4em] text-gold-light text-[0.65rem] hover:tracking-[0.5em] transition-[letter-spacing] duration-700"
          >
            Discover →
          </button>
        </div>
      </div>
    </div>
  )
}

function Counter({ value, suffix = '', label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return undefined
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl text-gold-gradient">
        {n}
        {suffix}
      </div>
      <div className="label-caps text-[0.55rem] tracking-[0.38em] text-ivory/60 mt-2">
        {label}
      </div>
    </div>
  )
}

function Marquee({ items }) {
  const row = [...items, ...items]
  return (
    <div className="relative overflow-hidden py-6 border-y border-gold-light/10">
      <div className="flex w-max animate-marquee">
        {row.map((it, i) => (
          <span
            key={`${it}-${i}`}
            className="flex items-center gap-8 pr-8 label-caps tracking-[0.5em] text-[0.8rem] text-gold-light/70 whitespace-nowrap"
          >
            {it}
            <span className="text-gold-light/80">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-[linear-gradient(90deg,#000,transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-[linear-gradient(270deg,#000,transparent)]" />
    </div>
  )
}

function Backdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div data-depth="a" className="absolute -inset-x-16 -top-10 h-[130%] opacity-50">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none" className="w-full h-full">
          <path d="M-50 200 C 300 120, 500 360, 800 240 S 1200 120, 1500 260" fill="none" stroke="#9a7b1e" strokeWidth="1" />
          <path d="M-50 420 C 260 340, 560 560, 860 430 S 1240 340, 1500 480" fill="none" stroke="#d4af37" strokeWidth="0.8" />
          <path d="M-50 640 C 320 560, 520 760, 900 640 S 1260 560, 1500 700" fill="none" stroke="#7a5c10" strokeWidth="0.6" />
        </svg>
      </div>
      <div data-depth="b" className="absolute -inset-x-16 -top-10 h-[130%] opacity-40">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none" className="w-full h-full">
          <g stroke="#d4af37" strokeWidth="0.7" fill="none">
            <line x1="180" y1="180" x2="360" y2="120" />
            <line x1="360" y1="120" x2="520" y2="230" />
            <line x1="180" y1="180" x2="520" y2="230" />
            <line x1="980" y1="520" x2="1180" y2="440" />
            <line x1="1180" y1="440" x2="1320" y2="560" />
            <line x1="980" y1="520" x2="1320" y2="560" />
          </g>
          <g fill="#f5d77a">
            <circle cx="180" cy="180" r="3" />
            <circle cx="360" cy="120" r="2.2" />
            <circle cx="520" cy="230" r="3" />
            <circle cx="980" cy="520" r="3" />
            <circle cx="1180" cy="440" r="2.2" />
            <circle cx="1320" cy="560" r="3" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(212,175,55,0.10),transparent_55%)]" />
    </div>
  )
}

export default function Divisions() {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const cards = gsap.utils.toArray('.divisions-card')
      const layerA = sectionRef.current?.querySelector('[data-depth="a"]')
      const layerB = sectionRef.current?.querySelector('[data-depth="b"]')

      if (reduced) {
        gsap.set(cards, { opacity: 1, clearProps: 'all' })
        return
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      tl.fromTo(
        cards,
        { z: -820, y: 90, opacity: 0, rotateY: 42 },
        {
          z: 0,
          y: 0,
          opacity: 1,
          rotateY: 0,
          stagger: 0.18,
          duration: 1,
          ease: 'power3.out',
        },
      )
        .to(layerA, { yPercent: -22, ease: 'none', duration: 1 }, 0)
        .to(layerB, { yPercent: -48, ease: 'none', duration: 1 }, 0)

      const lenis = getLenis()
      if (lenis) lenis.on('scroll', ScrollTrigger.update)

      return () => {
        if (lenis) lenis.off('scroll', ScrollTrigger.update)
      }
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} id="divisions" className="relative overflow-hidden">
      <div ref={pinRef} className="relative min-h-[100svh] flex flex-col justify-center py-20">
        <Backdrop />

        <div className="container-lux relative">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.7rem]">
              {divisions.eyebrow}
            </span>
            <ScrambleHeading
              as="h2"
              text={divisions.title}
              className="text-[clamp(2.2rem,5vw,4rem)] leading-tight"
            />
            <p className="text-ivory/75 leading-relaxed max-w-2xl">{divisions.intro}</p>
          </div>
        </div>

        <div className="container-lux relative mt-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 [perspective:1400px] [transform-style:preserve-3d]">
            {divisions.items.map((item) => (
              <div key={item.id} className="divisions-card">
                <TiltCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Marquee items={divisions.marquee} />

      <div className="container-lux py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {divisions.counters.map((c) => (
            <Counter key={c.label} value={c.value} suffix={c.suffix} label={c.label} />
          ))}
        </div>
      </div>

      <Divider id="clinic-divider" />
    </section>
  )
}
