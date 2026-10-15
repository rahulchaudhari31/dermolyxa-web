import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div
      className="fixed top-0 inset-x-0 h-[2.5px] z-[150] pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        className="h-full bg-gold-gradient origin-left shadow-[0_0_12px_rgba(245,215,122,0.8)]"
        style={{ scaleX }}
      />
    </div>
  )
}
