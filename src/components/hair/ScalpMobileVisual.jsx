export default function ScalpMobileVisual({ spots, activeId, onSelect }) {
  return (
    <div className="relative w-full h-full min-h-[22rem] flex flex-col items-center justify-center p-6 select-none">
      {/* Background glow */}
      <div className="absolute w-56 h-56 rounded-full bg-gold/15 blur-[60px] pointer-events-none" />

      {/* Anatomical Head Vector */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-gold-light/40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {/* Scalp Contour */}
          <path
            d="M 50 140 C 40 100 45 45 100 45 C 155 45 160 100 150 140 C 145 165 125 180 100 180 C 75 180 55 165 50 140 Z"
            stroke="url(#scalpGrad)"
            strokeWidth="1.5"
          />

          {/* Latitude / Grid lines for 3D illusion */}
          <ellipse cx="100" cy="75" rx="42" ry="16" strokeDasharray="3 3" />
          <ellipse cx="100" cy="105" rx="50" ry="20" strokeDasharray="4 4" />
          <ellipse cx="100" cy="135" rx="46" ry="18" strokeDasharray="3 3" />
          <line x1="100" y1="45" x2="100" y2="180" strokeDasharray="2 3" />

          <defs>
            <linearGradient id="scalpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D77A" />
              <stop offset="100%" stopColor="#9A7B1E" />
            </linearGradient>
          </defs>
        </svg>

        {/* Hotspot 1: Hairline Design (Top Front) */}
        <button
          onClick={() => onSelect('hairline')}
          className="absolute top-12 left-1/2 -translate-x-1/2 group flex flex-col items-center"
          aria-label="Hairline Design"
        >
          <span className="relative flex h-6 w-6 items-center justify-center">
            {activeId === 'hairline' && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-light opacity-75" />
            )}
            <span
              className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center text-[0.65rem] font-bold border transition-colors ${
                activeId === 'hairline'
                  ? 'bg-gold-light text-black border-gold-light shadow-glow'
                  : 'bg-black/80 text-gold-light border-gold-light/60'
              }`}
            >
              B
            </span>
          </span>
          <span
            className={`mt-1 px-2 py-0.5 rounded text-[0.55rem] tracking-wider label-caps transition ${
              activeId === 'hairline'
                ? 'bg-gold-light/20 text-gold-light border border-gold-light/40'
                : 'text-ivory/60'
            }`}
          >
            Hairline
          </span>
        </button>

        {/* Hotspot 2: Recipient Area (Mid-Scalp) */}
        <button
          onClick={() => onSelect('recipient')}
          className="absolute top-28 left-[62%] group flex flex-col items-center"
          aria-label="Recipient Area"
        >
          <span className="relative flex h-6 w-6 items-center justify-center">
            {activeId === 'recipient' && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-light opacity-75" />
            )}
            <span
              className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center text-[0.65rem] font-bold border transition-colors ${
                activeId === 'recipient'
                  ? 'bg-gold-light text-black border-gold-light shadow-glow'
                  : 'bg-black/80 text-gold-light border-gold-light/60'
              }`}
            >
              C
            </span>
          </span>
          <span
            className={`mt-1 px-2 py-0.5 rounded text-[0.55rem] tracking-wider label-caps transition ${
              activeId === 'recipient'
                ? 'bg-gold-light/20 text-gold-light border border-gold-light/40'
                : 'text-ivory/60'
            }`}
          >
            Recipient
          </span>
        </button>

        {/* Hotspot 3: Donor Area (Occipital / Lower Rear) */}
        <button
          onClick={() => onSelect('donor')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 group flex flex-col items-center"
          aria-label="Donor Area"
        >
          <span className="relative flex h-6 w-6 items-center justify-center">
            {activeId === 'donor' && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-light opacity-75" />
            )}
            <span
              className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center text-[0.65rem] font-bold border transition-colors ${
                activeId === 'donor'
                  ? 'bg-gold-light text-black border-gold-light shadow-glow'
                  : 'bg-black/80 text-gold-light border-gold-light/60'
              }`}
            >
              A
            </span>
          </span>
          <span
            className={`mt-1 px-2 py-0.5 rounded text-[0.55rem] tracking-wider label-caps transition ${
              activeId === 'donor'
                ? 'bg-gold-light/20 text-gold-light border border-gold-light/40'
                : 'text-ivory/60'
            }`}
          >
            Donor Area
          </span>
        </button>
      </div>

      {/* Switcher pills */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {spots.map((spot) => (
          <button
            key={spot.id}
            onClick={() => onSelect(spot.id)}
            className={`px-3 py-1 rounded-full label-caps text-[0.55rem] tracking-[0.25em] border transition ${
              activeId === spot.id
                ? 'border-gold-light bg-gold-light/15 text-gold-light'
                : 'border-white/10 text-ivory/60 hover:text-gold-light'
            }`}
          >
            {spot.code} · {spot.name}
          </button>
        ))}
      </div>
    </div>
  )
}
