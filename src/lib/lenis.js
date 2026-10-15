import Lenis from 'lenis'

let lenisInstance = null

export function getLenis() {
  return lenisInstance
}

export function initLenis({ smoothWheel = true, smoothTouch = false } = {}) {
  if (typeof window === 'undefined') return null
  if (lenisInstance) return lenisInstance

  lenisInstance = new Lenis({
    smoothWheel,
    smoothTouch,
    lerp: 0.08,
  })

  window.__lenis = lenisInstance

  function raf(time) {
    lenisInstance?.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  return lenisInstance
}
