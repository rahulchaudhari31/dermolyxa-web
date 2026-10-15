import { motion } from 'framer-motion'

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const paths = {
  consult: (
    <>
      <path {...stroke} d="M6 4h12a2 2 0 012 2v9a2 2 0 01-2 2H9l-5 4V6a2 2 0 012-2z" />
      <path {...stroke} d="M9 9h6M9 12h4" />
    </>
  ),
  analysis: (
    <>
      <circle {...stroke} cx="11" cy="11" r="6" />
      <path {...stroke} d="M20 20l-3.5-3.5M11 8v6M8 11h6" />
    </>
  ),
  design: (
    <>
      <path {...stroke} d="M4 16c3-6 13-6 16 0" />
      <path {...stroke} d="M4 16h16" />
      <path {...stroke} d="M12 4l1.5 3L17 8l-2 2.5L14 14l-2-2.5L10 14l-1-3.5L7 8l3.5-1z" />
    </>
  ),
  extraction: (
    <>
      <path {...stroke} d="M12 3v7" />
      <path {...stroke} d="M9 10l3 3 3-3" />
      <rect {...stroke} x="7" y="13" width="10" height="7" rx="2" />
      <path {...stroke} d="M10 16.5h4" />
    </>
  ),
  implant: (
    <>
      <path {...stroke} d="M12 21V9" />
      <path {...stroke} d="M12 9l-2.5-2.5M12 9l2.5-2.5" />
      <circle {...stroke} cx="12" cy="5" r="2.5" />
      <path {...stroke} d="M8 21h8" />
    </>
  ),
  recovery: (
    <>
      <path {...stroke} d="M12 21s-7-4.6-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.4-7 10-7 10z" />
      <path {...stroke} d="M9.5 11.5l1.8 1.8 3.4-3.6" />
    </>
  ),
  growth: (
    <>
      <path {...stroke} d="M12 21v-7" />
      <path {...stroke} d="M12 14c0-4 3-6 7-6 0 4-3 6-7 6z" />
      <path {...stroke} d="M12 14c0-3.5-2.6-5.5-6-5.5 0 3.5 2.6 5.5 6 5.5z" />
      <path {...stroke} d="M12 9V4" />
    </>
  ),
  prp: (
    <>
      <path {...stroke} d="M12 3v9" />
      <path {...stroke} d="M9 9.5c0 3 1.3 5.5 3 5.5s3-2.5 3-5.5" />
      <path {...stroke} d="M9 15h6" />
      <circle {...stroke} cx="12" cy="19.5" r="1.6" />
    </>
  ),
  meso: (
    <>
      <rect {...stroke} x="9" y="3" width="6" height="13" rx="2" />
      <path {...stroke} d="M12 16v4M10 8h4M10 11h4" />
      <path {...stroke} d="M17 6l3-3M17 9h4" />
    </>
  ),
  gf: (
    <>
      <circle {...stroke} cx="12" cy="12" r="3" />
      <circle {...stroke} cx="5" cy="7" r="1.4" />
      <circle {...stroke} cx="19" cy="8" r="1.4" />
      <circle {...stroke} cx="6" cy="17" r="1.4" />
      <circle {...stroke} cx="18" cy="17" r="1.4" />
      <path {...stroke} d="M7 8l3 2.5M17 9l-3 2M8 16l2.5-2M16 16l-2.5-2" />
    </>
  ),
  acne: (
    <>
      <circle {...stroke} cx="12" cy="12" r="8" />
      <circle {...stroke} cx="9.5" cy="10" r="1" />
      <circle {...stroke} cx="14.5" cy="14.5" r="1" />
      <path {...stroke} d="M12.5 7.5l.8 1.6M7.5 14l1.6.8" />
    </>
  ),
  pigment: (
    <>
      <circle {...stroke} cx="12" cy="12" r="8" />
      <path {...stroke} d="M12 4v16" />
      <path {...stroke} d="M12 4a8 8 0 010 16z" fill="currentColor" opacity="0.25" />
    </>
  ),
  antiage: (
    <>
      <path {...stroke} d="M12 3l2.4 5.2L20 9l-4 4 1 6-5-2.6L7 19l1-6-4-4 5.6-.8z" />
    </>
  ),
  hydra: (
    <>
      <path {...stroke} d="M12 3s5 6 5 10a5 5 0 01-10 0c0-4 5-10 5-10z" />
      <path {...stroke} d="M9.5 13.5a2.5 2.5 0 002.5 2.5" />
    </>
  ),
  laser: (
    <>
      <path {...stroke} d="M12 3v8" />
      <path {...stroke} d="M6 21l6-9 6 9" />
      <path {...stroke} d="M8 17h8" />
      <circle {...stroke} cx="12" cy="12" r="1.5" />
    </>
  ),
  peel: (
    <>
      <path {...stroke} d="M12 3c4 3 6 6 6 9a6 6 0 01-12 0c0-3 2-6 6-9z" />
      <path {...stroke} d="M12 8v9" />
      <path {...stroke} d="M9 13l3 2 3-2" />
    </>
  ),
  regen: (
    <>
      <path {...stroke} d="M12 21V10" />
      <path {...stroke} d="M12 10c3 0 5-2 5-5-3 0-5 2-5 5z" />
      <path {...stroke} d="M12 13c-3 0-5-2-5-5 3 0 5 2 5 5z" />
      <circle {...stroke} cx="12" cy="19" r="2" />
    </>
  ),
  institute: (
    <>
      <path {...stroke} d="M12 4L2 9l10 5 10-5-10-5z" />
      <path {...stroke} d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
      <path {...stroke} d="M22 9v6" />
    </>
  ),
  clinic: (
    <>
      <path {...stroke} d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path {...stroke} d="M12 8v6M9 11h6" />
    </>
  ),
  products: (
    <>
      <path {...stroke} d="M10 3h4v3l2 3v11a1 1 0 01-1 1H9a1 1 0 01-1-1V9l2-3V3z" />
      <path {...stroke} d="M8 13h8" />
      <path {...stroke} d="M11 16h2" />
    </>
  ),
}

export default function Icon({ name, className = 'w-9 h-9', animated = true }) {
  const content = paths[name] || paths.consult

  if (!animated) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        {content}
      </svg>
    )
  }

  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.g
        animate={{ y: [0, -1.2, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {content}
      </motion.g>
    </motion.svg>
  )
}
