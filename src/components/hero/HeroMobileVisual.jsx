import { motion } from 'framer-motion'
import { hero } from '../../data/content'

export default function HeroMobileVisual({ modeIndex, onActivate }) {
  const mode = hero.modes[modeIndex]

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-auto">
      {/* Deep radial ambient glow */}
      <div
        className="absolute w-[22rem] h-[22rem] rounded-full blur-[90px] transition-colors duration-1000 opacity-30"
        style={{ backgroundColor: mode.color }}
      />

      <div
        onClick={onActivate}
        className="relative flex flex-col items-center justify-center cursor-pointer select-none"
      >
        {/* Outer slow-spinning decorative ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-gold-light/20 border-dashed"
        />

        {/* Counter-rotating dashed ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full border border-gold/30 [border-spacing:8px]"
        />

        {/* Central Monogram Frame */}
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full surface ring-1 ring-gold-light/40 flex flex-col items-center justify-center shadow-glow"
        >
          <span className="font-display text-7xl sm:text-8xl text-gold-gradient font-light select-none">
            D
          </span>

          {/* Active Mode Indicator Dot */}
          <div className="absolute bottom-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-gold-light/30">
            <span
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: mode.color }}
            />
            <span className="label-caps text-[0.5rem] tracking-[0.3em] text-gold-light">
              {mode.name}
            </span>
          </div>
        </motion.div>

        {/* Tap hint */}
        <span className="mt-6 label-caps text-[0.55rem] tracking-[0.4em] text-gold-light/70 animate-pulse">
          Tap emblem to cycle mode
        </span>
      </div>
    </div>
  )
}
