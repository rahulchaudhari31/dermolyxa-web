import { motion } from 'framer-motion'

export default function SerumMobileVisual() {
  return (
    <div className="relative w-full h-full min-h-[22rem] flex items-center justify-center p-6 select-none">
      {/* Background radial gold glow */}
      <div className="absolute w-56 h-56 rounded-full bg-gold/20 blur-[80px] pointer-events-none" />

      {/* Floating Bottle Assembly */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative flex flex-col items-center"
      >
        <svg
          viewBox="0 0 160 320"
          className="w-44 h-80 sm:w-52 sm:h-96 drop-shadow-[0_15px_35px_rgba(212,175,55,0.25)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldCapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9A7B1E" />
              <stop offset="50%" stopColor="#F5D77A" />
              <stop offset="100%" stopColor="#7A5C10" />
            </linearGradient>
            <linearGradient id="bottleGlassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(244,239,230,0.15)" />
              <stop offset="25%" stopColor="rgba(212,175,55,0.3)" />
              <stop offset="50%" stopColor="rgba(10,10,10,0.85)" />
              <stop offset="85%" stopColor="rgba(245,215,122,0.4)" />
              <stop offset="100%" stopColor="rgba(244,239,230,0.1)" />
            </linearGradient>
            <linearGradient id="serumFluidGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#7A5C10" />
              <stop offset="60%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#F5D77A" />
            </linearGradient>
          </defs>

          {/* Dropper Bulb */}
          <ellipse cx="80" cy="30" rx="14" ry="16" fill="url(#goldCapGrad)" />
          
          {/* Dropper Cap */}
          <rect x="66" y="46" width="28" height="34" rx="3" fill="url(#goldCapGrad)" />
          {/* Cap Ridges */}
          <line x1="72" y1="50" x2="72" y2="76" stroke="#5A4308" strokeWidth="1" />
          <line x1="80" y1="50" x2="80" y2="76" stroke="#FFF7DC" strokeWidth="1" strokeOpacity="0.7" />
          <line x1="88" y1="50" x2="88" y2="76" stroke="#5A4308" strokeWidth="1" />

          {/* Golden Collar Ring */}
          <rect x="62" y="80" width="36" height="8" rx="2" fill="url(#goldCapGrad)" stroke="#FFE89E" strokeWidth="0.5" />

          {/* Bottle Shoulder */}
          <path
            d="M 64 88 C 64 94 40 108 34 122 L 34 260 C 34 275 42 284 56 284 L 104 284 C 118 284 126 275 126 260 L 126 122 C 120 108 96 94 96 88 Z"
            fill="url(#bottleGlassGrad)"
            stroke="url(#goldCapGrad)"
            strokeWidth="1.5"
          />

          {/* Inner Glowing Liquid Serum */}
          <path
            d="M 40 145 C 40 145 60 142 80 145 C 100 148 120 145 120 145 L 120 256 C 120 268 114 276 102 276 L 58 276 C 46 276 40 268 40 256 Z"
            fill="url(#serumFluidGrad)"
            opacity="0.85"
          />

          {/* Pipette Tube */}
          <line x1="80" y1="88" x2="80" y2="245" stroke="#FFF" strokeOpacity="0.4" strokeWidth="3" />
          <line x1="80" y1="245" x2="80" y2="255" stroke="#F5D77A" strokeWidth="1.5" />

          {/* Front Luxury Label */}
          <rect x="44" y="160" width="72" height="60" rx="3" fill="#0A0A0A" stroke="#D4AF37" strokeWidth="0.75" />
          <text x="80" y="180" textAnchor="middle" fill="#F5D77A" fontSize="7" fontFamily="Cinzel, serif" fontWeight="600" letterSpacing="1.5">
            DERMOLYXA
          </text>
          <text x="80" y="192" textAnchor="middle" fill="#D4AF37" fontSize="5" fontFamily="Montserrat, sans-serif" letterSpacing="1">
            LABORATORY
          </text>
          <line x1="58" y1="198" x2="102" y2="198" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.6" />
          <text x="80" y="208" textAnchor="middle" fill="#FFF" fillOpacity="0.8" fontSize="4.5" fontFamily="Montserrat, sans-serif" letterSpacing="0.8">
            GF · 30 ML
          </text>

          {/* Glass Highlight Shine (Diagonal sweep) */}
          <path
            d="M 44 122 L 56 122 L 44 265 L 38 265 Z"
            fill="#FFF"
            opacity="0.12"
          />
        </svg>

        {/* Floating Pedestal Shadow */}
        <div className="w-32 h-3 rounded-full bg-gold/30 blur-sm mt-3" />
      </motion.div>
    </div>
  )
}
