import { motion } from 'framer-motion'

const easeLux = [0.22, 1, 0.36, 1]

export default function Divider({ id, label }) {
  return (
    <div id={id} className="flex items-center gap-6 py-12 container-lux">
      <div className="flex-1">
        <hr className="gold-hairline" />
      </div>
      {label ? (
        <>
          <div className="flex items-center justify-center h-6 px-2">
            <span className="label-caps text-gold-light tracking-[0.6em] text-[0.65rem]">
              {label}
            </span>
          </div>
          <div className="flex-1">
            <hr className="gold-hairline" />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center">
          <motion.span
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.2, ease: easeLux }}
            className="text-gold-light text-[0.85rem] drop-shadow-[0_0_16px_rgba(212,175,55,0.45)]"
          >
            ✦
          </motion.span>
        </div>
      )}
    </div>
  )
}
