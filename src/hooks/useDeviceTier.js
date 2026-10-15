import { useState } from 'react'

function detectTier() {
  if (typeof window === 'undefined') return 'high'

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let webgl = false
  try {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('webgl2') || canvas.getContext('webgl')
    webgl = Boolean(ctx)
  } catch {
    webgl = false
  }

  const cores = navigator.hardwareConcurrency || 8
  const mem = navigator.deviceMemory || 8
  const mobile = window.matchMedia('(max-width: 640px)').matches

  if (!webgl || reducedMotion || cores <= 4 || mem <= 4) return 'low'
  if (mobile) return 'mid'
  return 'high'
}

export default function useDeviceTier() {
  const [tier] = useState(detectTier)
  return tier
}
