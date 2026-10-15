import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { contact } from '../data/content'
import Divider from './Divider'
import UiIcon from './UiIcons'
import ScrambleHeading from './ScrambleHeading'
import Magnetic from './Magnetic'

const easeLux = [0.22, 1, 0.36, 1]

function SuccessAnimation({ onAnother }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeLux }}
      className="flex flex-col items-center gap-5 text-center"
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: easeLux, delay: 0.1 }}
        className="relative w-16 h-16 rounded-full border border-gold-light/70 bg-gold-light/10 flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-gold-light">
          <motion.path
            d="M4.5 12.5l4.5 4.5 10.5-11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: easeLux, delay: 0.25 }}
          />
        </svg>
      </motion.div>
      <div>
        <h3 className="font-display text-2xl md:text-3xl text-gold-light">{contact.success.title}</h3>
        <p className="mt-2 text-ivory/75 leading-relaxed max-w-md">{contact.success.message}</p>
      </div>
      <button
        onClick={onAnother}
        className="label-caps text-[0.55rem] tracking-[0.38em] text-gold-light hover:text-gold-light/80"
      >
        {contact.sendAnother}
      </button>
    </motion.div>
  )
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', phone: '', interest: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function validate() {
    const next = {}
    if (!values.name.trim()) next.name = contact.fields.find((f) => f.id === 'name')?.error || 'Required'
    const phone = values.phone.trim()
    if (!phone) {
      next.phone = contact.fields.find((f) => f.id === 'phone')?.error || 'Required'
    } else {
      // allow digits, spaces, +, -, ()
      const digits = phone.replace(/[^\d+]/g, '')
      if (digits.length < 7) {
        next.phone = contact.fields.find((f) => f.id === 'phone')?.error || 'Required'
      }
    }
    if (!values.interest) next.interest = contact.fields.find((f) => f.id === 'interest')?.error || 'Required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function onSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 420)
  }

  function onAnother() {
    setSubmitted(false)
    setValues({ name: '', phone: '', interest: '', message: '' })
    setErrors({})
  }

  function update(id, v) {
    setValues((prev) => ({ ...prev, [id]: v }))
    setErrors((prev) => ({ ...prev, [id]: undefined }))
  }

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="container-lux">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.7rem]">
              {contact.eyebrow}
            </span>
            <ScrambleHeading as="h2" text={contact.title} className="text-[clamp(2rem,5vw,3.8rem)] leading-tight" />
            <p className="text-ivory/75 leading-relaxed max-w-xl">{contact.intro}</p>

            <div className="mt-4 flex flex-col gap-2">
              {contact.channels.map((ch) => {
                const external = ch.external
                return (
                  <a
                    key={ch.id}
                    href={ch.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer noopener' : undefined}
                    className="surface rounded-2xl p-4 flex items-center justify-between hover:border-gold-light/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gold-light">
                        <UiIcon name={ch.icon} className="w-5 h-5" />
                      </span>
                      <div>
                        <div className="label-caps text-[0.55rem] tracking-[0.38em] text-ivory/50">
                          {ch.label}
                        </div>
                        <div className="text-ivory/85 mt-0.5">{ch.value}</div>
                      </div>
                    </div>
                    {external && <UiIcon name="external" className="w-4 h-4 text-ivory/40" />}
                  </a>
                )
              })}
            </div>

            <div className="surface rounded-2xl p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="label-caps text-[0.55rem] tracking-[0.38em] text-gold-light">
                    {contact.map.kicker}
                  </div>
                  <div className="font-display text-xl mt-1">{contact.map.heading}</div>
                  <div className="text-ivory/60 text-sm mt-1">{contact.map.address}</div>
                </div>
              </div>
              <div className="mt-3 relative h-48 rounded-xl overflow-hidden border border-white/5 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_70%),repeating-linear-gradient(0deg,rgba(255,255,255,0.02)_0_1px,transparent_1px_18px),repeating-linear-gradient(90deg,rgba(255,255,255,0.02)_0_1px,transparent_1px_18px)]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <motion.div
                    animate={{ y: [0, -4, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-gold-light"
                  >
                    <UiIcon name="pin" className="w-8 h-8" />
                  </motion.div>
                  <span className="label-caps text-[0.55rem] tracking-[0.38em] text-ivory/70">
                    {contact.map.placeholder}
                  </span>
                </div>
              </div>
              <p className="label-caps text-[0.5rem] tracking-[0.34em] text-ivory/40 mt-1">
                {contact.map.note}
              </p>
            </div>
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 1, ease: easeLux }}
            className="surface rounded-[1.25rem] p-6 md:p-8 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1">
              <span className="label-caps text-[0.55rem] tracking-[0.38em] text-gold-light">
                {contact.formKicker}
              </span>
            </div>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: easeLux }}
                  className="flex flex-col gap-5"
                >
                  {contact.fields.map((field) => (
                    <div key={field.id} className="flex flex-col gap-2">
                      <label className="label-caps text-[0.55rem] tracking-[0.38em] text-gold-light/80">
                        {field.label}
                        {field.required ? ' *' : ''}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          value={values[field.id]}
                          onChange={(e) => update(field.id, e.target.value)}
                          placeholder={field.placeholder}
                          className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold-light/60 min-h-[120px]"
                          rows={5}
                        />
                      ) : field.type === 'select' ? (
                        <select
                          value={values[field.id]}
                          onChange={(e) => update(field.id, e.target.value)}
                          className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-gold-light/60"
                        >
                          <option value="" className="bg-black">
                            {field.placeholder || 'Select'}
                          </option>
                          {field.options.map((opt) => (
                            <option key={opt} value={opt} className="bg-black">
                              {opt}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          value={values[field.id]}
                          onChange={(e) => update(field.id, e.target.value)}
                          placeholder={field.placeholder}
                          className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold-light/60"
                        />
                      )}
                      {errors[field.id] && (
                        <span className="label-caps text-[0.5rem] tracking-[0.34em] text-gold-light">
                          {errors[field.id]}
                        </span>
                      )}
                    </div>
                  ))}
                  <Magnetic strength={0.3}>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="mt-2 px-8 py-3 text-[0.8rem] tracking-[0.22em] uppercase font-sans font-medium rounded-full bg-gold-gradient text-black self-start shadow-glow disabled:opacity-60 transition-transform duration-500 hover:scale-105"
                    >
                      {submitting ? 'Sending…' : contact.submit}
                    </button>
                  </Magnetic>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: easeLux }}
                >
                  <SuccessAnimation onAnother={onAnother} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <Divider id="footer-divider" />
    </section>
  )
}
