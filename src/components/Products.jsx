import { AnimatePresence, motion } from 'framer-motion'
import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { products } from '../data/content'
import Divider from './Divider'
import useDeviceTier from '../hooks/useDeviceTier'
import UiIcon from './UiIcons'
import SerumMobileVisual from './products/SerumMobileVisual'
import Lazy3DContainer from './Lazy3DContainer'
import ScrambleHeading from './ScrambleHeading'
import Magnetic from './Magnetic'

const SerumBottle = lazy(() => import('./products/SerumBottle'))

const easeLux = [0.22, 1, 0.36, 1]

function useCountdown(target) {
  const [state, setState] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, passed: false })

  useEffect(() => {
    const end = new Date(target)
    function tick() {
      const now = Date.now()
      const diff = end.getTime() - now
      if (diff <= 0) {
        setState({ days: 0, hours: 0, minutes: 0, seconds: 0, passed: true })
        return
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24))
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const m = Math.floor((diff / (1000 * 60)) % 60)
      const s = Math.floor((diff / 1000) % 60)
      setState({ days: d, hours: h, minutes: m, seconds: s, passed: false })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  return state
}

function CountDown() {
  const { teaser } = products
  const cd = useCountdown(teaser.countdownTarget)
  const units = teaser.countdownUnits

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.8, ease: easeLux }}
      className="surface rounded-[1.25rem] p-6 flex flex-col gap-4"
    >
      <div className="flex flex-col">
        <span className="label-caps text-[0.55rem] tracking-[0.38em] text-gold-light">
          {teaser.countdownLabel}
        </span>
        {cd.passed && (
          <span className="font-display text-xl md:text-2xl mt-2 text-gold-light">
            {teaser.countdownPassed}
          </span>
        )}
      </div>
      {!cd.passed && (
        <div className="grid grid-cols-4 gap-3">
          {[cd.days, cd.hours, cd.minutes, cd.seconds].map((v, i) => (
            <div key={i} className="surface rounded-xl p-3 text-center flex flex-col items-center">
              <span className="font-display text-2xl md:text-3xl shimmer-gold animate-pulse-glow">
                {String(v).padStart(2, '0')}
              </span>
              <span className="label-caps text-[0.5rem] tracking-[0.34em] text-ivory/55 mt-1">
                {units[i]}
              </span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { waitlist } = products
  const inputRef = useRef(null)

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const showError = touched && !isValid

  function onSubmit(e) {
    e.preventDefault()
    setTouched(true)
    if (!isValid) return
    setSubmitted(true)
    setTimeout(() => {
      if (inputRef.current) inputRef.current.blur()
    }, 120)
  }

  function reset() {
    setEmail('')
    setTouched(false)
    setSubmitted(false)
  }

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.8, ease: easeLux }}
      className="surface rounded-[1.25rem] p-6 md:p-7 flex flex-col gap-5 relative overflow-hidden"
    >
      <div className="flex flex-col gap-1">
        <span className="label-caps text-[0.55rem] tracking-[0.38em] text-gold-light">
          {waitlist.kicker}
        </span>
        <h3 className="font-display text-2xl md:text-3xl">{waitlist.heading}</h3>
        <p className="text-ivory/70 leading-relaxed">{waitlist.intro}</p>
      </div>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: easeLux }}
            className="flex flex-col sm:flex-row items-stretch gap-3"
          >
            <div className="flex-1 flex flex-col gap-1">
              <input
                ref={inputRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched(true)}
                placeholder={waitlist.placeholder}
                className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold-light/60"
                aria-invalid={showError ? 'true' : 'false'}
              />
              {showError && (
                <span className="label-caps text-[0.5rem] tracking-[0.34em] text-gold-light">
                  {waitlist.invalid}
                </span>
              )}
            </div>
            <Magnetic strength={0.25}>
              <button
                type="submit"
                className="px-8 py-3 text-[0.8rem] tracking-[0.22em] uppercase font-sans font-medium rounded-full bg-gold-gradient text-black shadow-glow flex items-center justify-center gap-2 transition-transform duration-500 hover:scale-105"
              >
                {waitlist.submit}
              </button>
            </Magnetic>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: easeLux }}
            className="flex flex-col items-start gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold-light/60 flex items-center justify-center bg-gold-light/10">
                <UiIcon name="check" className="w-5 h-5 text-gold-light" />
              </div>
              <p className="text-ivory/85 leading-relaxed max-w-xl">{waitlist.success}</p>
            </div>
            <button
              onClick={reset}
              className="label-caps text-[0.55rem] tracking-[0.38em] text-gold-light hover:text-gold-light/80"
            >
              Join another email
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <p className="text-ivory/50 text-sm">{waitlist.note}</p>
    </motion.div>
  )
}

export default function Products() {
  const tier = useDeviceTier()
  const show3D = tier !== 'low'
  const { teaser, eyebrow, title, intro, badge } = products

  return (
    <section id="products" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container-lux">
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.7rem]">
              {eyebrow}
            </span>
            <span className="label-caps text-[0.5rem] tracking-[0.4em] px-3 py-1 rounded-full border border-gold-light/40 text-gold-light bg-gold-light/10">
              {badge}
            </span>
          </div>
          <ScrambleHeading as="h2" text={title} className="text-[clamp(2rem,5vw,3.8rem)] leading-tight" />
          <p className="text-ivory/75 leading-relaxed max-w-2xl">{intro}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 items-stretch">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.9, ease: easeLux }}
            className="surface rounded-[1.25rem] overflow-hidden relative min-h-[20rem] lg:min-h-[28rem] flex flex-col justify-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.16),transparent_65%)]" />
            <div className="absolute inset-0">
              {show3D ? (
                <Lazy3DContainer
                  fallback={<SerumMobileVisual />}
                  className="w-full h-full"
                >
                  <Suspense fallback={<SerumMobileVisual />}>
                    <SerumBottle quality={tier === 'mid' ? 'mid' : 'high'} />
                  </Suspense>
                </Lazy3DContainer>
              ) : (
                <SerumMobileVisual />
              )}
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
              <span className="font-display text-lg text-gold-light">{teaser.serum.name}</span>
              <span className="label-caps text-[0.55rem] tracking-[0.38em] text-ivory/55">
                {teaser.serum.volume} · {teaser.serum.note}
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.9, ease: easeLux, delay: 0.05 }}
              className="surface rounded-[1.25rem] p-6 md:p-8 flex flex-col gap-5"
            >
              <div>
                <h3 className="font-display text-2xl md:text-3xl">{teaser.heading}</h3>
                <span className="text-gold-light text-lg mt-1 block">{teaser.sub}</span>
                <p className="mt-3 text-ivory/75 leading-relaxed">{teaser.body}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {teaser.highlights.map((h, idx) => (
                  <motion.div
                    key={h.id}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-120px' }}
                    transition={{ duration: 0.7, ease: easeLux, delay: idx * 0.05 }}
                    className="surface rounded-2xl p-4 flex flex-col gap-2"
                  >
                    <span className="text-gold-light">✦</span>
                    <span className="font-display text-lg">{h.title}</span>
                    <p className="text-ivory/65 text-sm leading-relaxed">{h.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <CountDown />
            <WaitlistForm />
          </div>
        </div>

        <p className="mt-8 label-caps text-[0.5rem] tracking-[0.34em] text-ivory/40">
          {products.note}
        </p>
      </div>
      <Divider id="faq-divider" />
    </section>
  )
}
