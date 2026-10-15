import { hero } from '../data/content'
import Magnetic from './Magnetic'

export default function WhatsAppButton({ number = hero.whatsapp.number, message = hero.whatsapp.message }) {
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed z-[100] bottom-24 right-4 sm:bottom-7 sm:right-7 pointer-events-auto">
      <Magnetic strength={0.35}>
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-3 pl-4 pr-5 h-12 rounded-full bg-gold-gradient shadow-glow-lg ring-1 ring-white/20 text-black font-medium transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_0_90px_rgba(245,215,122,0.45)] focus-visible:ring-2 focus-visible:ring-gold-light"
          aria-label={hero.whatsapp.label}
        >
          <svg width="22" height="22" viewBox="0 0 32 32" aria-hidden="true">
            <path
              fill="#000"
              d="M19.11 17.07c-.25-.13-1.47-.73-1.7-.81s-.39-.13-.55.13-.63.81-.77.98-.29.19-.54.06c-.58-.29-1.2-.66-1.68-1.16-.62-.71-1.04-1.54-1.16-2.16-.01-.17.04-.33.16-.45.16-.19.25-.29.38-.48.13-.19.17-.32.25-.54.09-.22.04-.42-.02-.55s-.55-1.33-.75-1.82c-.2-.48-.4-.42-.55-.42h-.47c-.17 0-.44.06-.67.29-.23.23-.87.85-.87 2.07s.89 2.4 1.01 2.57c.13.17 1.74 2.66 4.22 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18s.21-1.08.15-1.18c-.06-.09-.23-.14-.48-.27zM16.01 4.03C9.4 4.03 4.03 9.4 4.03 16.01c0 2.1.55 4.07 1.51 5.8L4 28l6.33-1.66c1.67.91 3.62 1.44 5.68 1.44 6.61 0 11.98-5.37 11.98-11.98 0-6.61-5.37-11.98-11.98-11.98zm0 21.9c-1.87 0-3.61-.5-5.08-1.36l-.36-.22-3.75.98.99-3.66-.24-.38a9.88 9.88 0 01-1.52-5.27c0-5.48 4.46-9.94 9.94-9.94s9.94 4.46 9.94 9.94-4.46 9.94-9.94 9.94z"
            />
          </svg>
          <span className="text-[0.85rem] tracking-[0.12em] uppercase font-sans">
            {hero.whatsapp.label}
          </span>
        </a>
      </Magnetic>
    </div>
  )
}
