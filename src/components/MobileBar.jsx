import { mobileBar } from '../data/content'
import { scrollToId } from '../lib/scroll'
import UiIcon from './UiIcons'

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-[140] lg:hidden">
      <div className="px-2 pb-2">
        <div className="surface rounded-2xl px-1 py-1 flex items-center justify-between gap-1">
          {mobileBar.items.map((item) => {
            const common = 'flex flex-col items-center gap-1 flex-1 py-2 rounded-xl transition-colors'
            if (item.action === 'scroll') {
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToId(item.target, -90)}
                  className={`${common} text-ivory/80 hover:text-gold-light`}
                >
                  <UiIcon name={item.icon} className="w-5 h-5 text-gold-light" />
                  <span className="label-caps text-[0.5rem] tracking-[0.32em]">{item.label}</span>
                </button>
              )
            }
            const external = item.external
            return (
              <a
                key={item.id}
                href={item.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer noopener' : undefined}
                className={`${common} text-ivory/80 hover:text-gold-light`}
              >
                <UiIcon name={item.icon} className="w-5 h-5 text-gold-light" />
                <span className="label-caps text-[0.5rem] tracking-[0.32em]">{item.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
