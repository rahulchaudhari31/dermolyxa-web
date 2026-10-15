export function scrollToId(id, offset = -90) {
  const el = document.getElementById(id)
  if (!el) return

  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset })
    return
  }

  const y = el.getBoundingClientRect().top + window.pageYOffset + offset
  window.scrollTo({ top: y, behavior: 'smooth' })
}
