import { brand, footer } from '../data/content'
import { scrollToId } from '../lib/scroll'

export default function Footer() {
  return (
    <footer id="footer" className="relative pt-12 pb-28 md:pb-16">
      <div className="container-lux">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('hero', -20)
              }}
              className="flex flex-col leading-none"
            >
              <span className="font-display text-xl md:text-2xl tracking-[0.14em] uppercase">
                {brand.name}
                <span className="ml-[0.1em]">{brand.trademark}</span>
              </span>
              <span className="label-caps text-gold-light/70 tracking-[0.52em] mt-1 text-[0.52rem]">
                {brand.tagline}
              </span>
            </a>
            <p className="text-ivory/65 max-w-sm leading-relaxed">{footer.blurb}</p>
            <span className="label-caps text-[0.55rem] tracking-[0.4em] text-gold-light/70">
              {brand.imageryNote}
            </span>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <div className="label-caps text-[0.6rem] tracking-[0.42em] text-gold-light">{col.title}</div>
              <div className="flex flex-col gap-2">
                {col.links.map((link) => {
                  const external = link.href.startsWith('http') || link.href.startsWith('mailto') || link.href.startsWith('tel')
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          scrollToId(link.href.slice(1))
                        }
                      }}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noreferrer noopener' : undefined}
                      className="text-ivory/70 hover:text-gold-light transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                })}
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-3">
            <div className="label-caps text-[0.6rem] tracking-[0.42em] text-gold-light">Legals</div>
            <div className="flex flex-col gap-2">
              {footer.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-ivory/60 hover:text-gold-light transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2">
          {footer.notices.map((n, i) => (
            <p key={i} className="text-ivory/45 text-xs leading-relaxed max-w-4xl">
              {n}
            </p>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <span className="text-ivory/50 text-sm">{footer.copyright}</span>
          <span className="text-ivory/40 text-sm">{footer.credit}</span>
        </div>
      </div>
    </footer>
  )
}
