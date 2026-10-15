import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { scrollToId } from '../../lib/scroll'
import Icon from '../hair/Icons'

const easeLux = [0.22, 1, 0.36, 1]

export default function ConcernFinder({ data }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [done, setDone] = useState(false)

  const total = data.questions.length
  const question = data.questions[step]

  const result = useMemo(() => {
    if (!done || answers.length === 0) return null
    const tally = {}
    answers.forEach((t) => {
      tally[t] = (tally[t] || 0) + 1
    })
    const winner = Object.entries(tally).sort((a, b) => b[1] - a[1])[0][0]
    return data.results[winner] || Object.values(data.results)[0]
  }, [done, answers, data.results])

  function choose(treat) {
    const next = [...answers, treat]
    setAnswers(next)
    if (step < total - 1) {
      setStep(step + 1)
    } else {
      setDone(true)
    }
  }

  function restart() {
    setStep(0)
    setAnswers([])
    setDone(false)
  }

  return (
    <div className="container-lux">
      <div className="flex flex-col gap-3 max-w-2xl">
        <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.68rem]">
          {data.kicker}
        </span>
        <h3 className="text-[clamp(1.8rem,4vw,3.2rem)] leading-tight">{data.heading}</h3>
        <p className="text-ivory/70 leading-relaxed">{data.intro}</p>
      </div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 1, ease: easeLux }}
        className="mt-10 surface rounded-[1.5rem] p-6 md:p-10 max-w-3xl relative overflow-hidden"
      >
        <div className="flex items-center justify-between">
          <span className="label-caps text-[0.5rem] tracking-[0.4em] text-gold-light/70">
            {done ? data.resultLabel : `Question ${step + 1} / ${total}`}
          </span>
          <div className="flex gap-2">
            {data.questions.map((q, i) => (
              <span
                key={q.id}
                className="h-1.5 w-8 rounded-full transition-colors"
                style={{
                  background:
                    i <= step || done ? 'var(--gold-gradient, #d4af37)' : 'rgba(255,255,255,0.12)',
                }}
              />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: easeLux }}
              className="mt-7"
            >
              <h4 className="font-display text-2xl md:text-3xl">{question.question}</h4>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {question.options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => choose(opt.treat)}
                    className="group surface rounded-xl px-5 py-4 text-left text-ivory/85 hover:border-gold-light/60 hover:text-gold-light transition-colors"
                  >
                    <span className="flex items-center justify-between gap-3">
                      {opt.label}
                      <span className="text-gold-light/0 group-hover:text-gold-light transition-colors">
                        →
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeLux }}
              className="mt-7"
            >
              <div className="flex items-start gap-4">
                <div className="text-gold-light shrink-0">
                  <Icon name={result.icon} className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="font-display text-3xl text-gold-light">{result.title}</h4>
                  <p className="mt-3 text-ivory/80 leading-relaxed max-w-xl">
                    {result.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-3 surface rounded-full px-4 py-2">
                    <span className="label-caps text-[0.5rem] tracking-[0.34em] text-ivory/50">
                      Protocol
                    </span>
                    <span className="text-gold-light text-sm">{result.protocol}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToId(data.enquireTarget)}
                  className="px-8 py-3 text-[0.8rem] tracking-[0.22em] uppercase rounded-full bg-gold-gradient text-black"
                >
                  {data.enquireLabel}
                </button>
                <button
                  onClick={restart}
                  className="px-6 py-3 text-[0.75rem] tracking-[0.22em] uppercase rounded-full surface text-ivory/70"
                >
                  {data.restart}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
