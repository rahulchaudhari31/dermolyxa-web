import { motion } from 'framer-motion'
import { loading } from '../data/content'

export default function Loading({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center gap-8">
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.5rem,6vw,4.5rem)] tracking-[0.16em] uppercase text-gold-gradient text-glow-gold"
            >
              {loading.wordmark}
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 gold-hairline origin-center"
          />
        </div>

        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="label-caps text-gold-light/80 tracking-[0.52em] text-[0.68rem] text-center"
        >
          {loading.sub}
        </motion.span>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="label-caps tracking-[0.46em] text-[0.6rem] text-ivory/40"
        >
          {loading.kicker}
        </motion.span>
      </div>
    </motion.div>
  )
}
