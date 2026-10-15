import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const GLYPHS = '✦·◊—0123456789ABCDEF'

export default function ScrambleHeading({
  text,
  as: Component = 'h2',
  className = '',
  shimmer = false,
  once = true,
}) {
  const [displayText, setDisplayText] = useState(text)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once, margin: '-60px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || (once && hasAnimated.current)) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) return

    hasAnimated.current = true

    let iteration = 0
    const maxIterations = text.length * 3
    const intervalTime = 30

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration / 3) {
              return text[index]
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          })
          .join('')
      )

      if (iteration >= maxIterations) {
        setDisplayText(text)
        clearInterval(interval)
      }

      iteration += 1
    }, intervalTime)

    return () => clearInterval(interval)
  }, [isInView, text, once])

  return (
    <Component
      ref={containerRef}
      className={`${className} ${shimmer ? 'shimmer-gold' : ''}`}
      aria-label={text}
    >
      <span aria-hidden="true">{displayText}</span>
    </Component>
  )
}
