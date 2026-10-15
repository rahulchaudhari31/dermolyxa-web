import { useEffect, useRef } from 'react'

export default function Cursor() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Check if pointer is fine (mouse/trackpad) and motion is not reduced
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!isFinePointer) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    document.body.classList.add('has-custom-cursor')

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    function handleResize() {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize, { passive: true })

    // Mouse coordinates and trailing history
    let mouseX = -100
    let mouseY = -100
    let cursorX = -100
    let cursorY = -100
    let isHovering = false
    let isClicking = false

    const TRAIL_LENGTH = prefersReducedMotion ? 0 : 16
    const trail = []

    function onMouseMove(e) {
      mouseX = e.clientX
      mouseY = e.clientY
      if (cursorX === -100) {
        cursorX = mouseX
        cursorY = mouseY
      }
    }

    function onMouseDown() {
      isClicking = true
    }

    function onMouseUp() {
      isClicking = false
    }

    function checkHover(e) {
      const target = e.target
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.interactive-target'))
      ) {
        isHovering = true
      } else {
        isHovering = false
      }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mousedown', onMouseDown, { passive: true })
    window.addEventListener('mouseup', onMouseUp, { passive: true })
    window.addEventListener('mouseover', checkHover, { passive: true })

    let animId

    function render() {
      ctx.clearRect(0, 0, width, height)

      // Lerp main cursor position towards target mouse
      cursorX += (mouseX - cursorX) * 0.28
      cursorY += (mouseY - cursorY) * 0.28

      // Add to trail if within window
      if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        if (!prefersReducedMotion) {
          trail.unshift({ x: cursorX, y: cursorY, time: Date.now() })
          if (trail.length > TRAIL_LENGTH) {
            trail.pop()
          }
        }
      }

      // Render the glowing light trail
      if (trail.length > 2) {
        ctx.beginPath()
        ctx.moveTo(trail[0].x, trail[0].y)
        for (let i = 1; i < trail.length - 1; i++) {
          const xc = (trail[i].x + trail[i + 1].x) / 2
          const yc = (trail[i].y + trail[i + 1].y) / 2
          ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc)
        }
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.45)'
        ctx.lineWidth = isHovering ? 5 : 2.5
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.shadowColor = '#F5D77A'
        ctx.shadowBlur = 12
        ctx.stroke()

        // Secondary tight highlight trail
        ctx.beginPath()
        ctx.moveTo(trail[0].x, trail[0].y)
        for (let i = 1; i < trail.length - 1; i++) {
          const xc = (trail[i].x + trail[i + 1].x) / 2
          const yc = (trail[i].y + trail[i + 1].y) / 2
          ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc)
        }
        ctx.strokeStyle = 'rgba(255, 245, 214, 0.75)'
        ctx.lineWidth = 1
        ctx.shadowBlur = 4
        ctx.stroke()
      }

      // Render cursor halo and center jewel
      if (cursorX > 0 && cursorY > 0) {
        const radius = isClicking ? 14 : isHovering ? 22 : 12

        // Outer glow circle
        ctx.beginPath()
        ctx.arc(cursorX, cursorY, radius, 0, Math.PI * 2)
        ctx.strokeStyle = isHovering
          ? 'rgba(245, 215, 122, 0.85)'
          : 'rgba(212, 175, 55, 0.4)'
        ctx.lineWidth = 1.2
        ctx.shadowColor = '#D4AF37'
        ctx.shadowBlur = isHovering ? 16 : 8
        ctx.stroke()

        if (isHovering) {
          ctx.fillStyle = 'rgba(212, 175, 55, 0.1)'
          ctx.fill()
        }

        // Inner solid gold core
        ctx.beginPath()
        ctx.arc(cursorX, cursorY, isClicking ? 4 : 3, 0, Math.PI * 2)
        ctx.fillStyle = '#F5D77A'
        ctx.shadowColor = '#F5D77A'
        ctx.shadowBlur = 10
        ctx.fill()
      }

      animId = requestAnimationFrame(render)
    }

    render()

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('mouseover', checkHover)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] w-full h-full"
      aria-hidden="true"
    />
  )
}
