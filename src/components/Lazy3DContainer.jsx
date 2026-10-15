import { useEffect, useRef, useState } from 'react'

export default function Lazy3DContainer({
  children,
  fallback = null,
  rootMargin = '250px',
  className = 'w-full h-full',
}) {
  const [isInView, setIsInView] = useState(() => {
    if (typeof window === 'undefined') return false
    return !('IntersectionObserver' in window)
  })
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <div ref={containerRef} className={className}>
      {isInView ? children : fallback}
    </div>
  )
}
