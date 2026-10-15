const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const paths = {
  phone: (
    <>
      <path
        {...stroke}
        d="M6.5 3.5h3l1.5 4-2 1.4a13 13 0 006.1 6.1l1.4-2 4 1.5v3a2 2 0 01-2.2 2A17.5 17.5 0 014.5 5.7 2 2 0 016.5 3.5z"
      />
    </>
  ),
  whatsapp: (
    <path
      fill="currentColor"
      d="M19.11 17.07c-.25-.13-1.47-.73-1.7-.81s-.39-.13-.55.13-.63.81-.77.98-.29.19-.54.06c-.58-.29-1.2-.66-1.68-1.16-.62-.71-1.04-1.54-1.16-2.16-.01-.17.04-.33.16-.45.16-.19.25-.29.38-.48.13-.19.17-.32.25-.54.09-.22.04-.42-.02-.55s-.55-1.33-.75-1.82c-.2-.48-.4-.42-.55-.42h-.47c-.17 0-.44.06-.67.29-.23.23-.87.85-.87 2.07s.89 2.4 1.01 2.57c.13.17 1.74 2.66 4.22 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18s.21-1.08.15-1.18c-.06-.09-.23-.14-.48-.27zM16.01 4.03C9.4 4.03 4.03 9.4 4.03 16.01c0 2.1.55 4.07 1.51 5.8L4 28l6.33-1.66c1.67.91 3.62 1.44 5.68 1.44 6.61 0 11.98-5.37 11.98-11.98 0-6.61-5.37-11.98-11.98-11.98zm0 21.9c-1.87 0-3.61-.5-5.08-1.36l-.36-.22-3.75.98.99-3.66-.24-.38a9.88 9.88 0 01-1.52-5.27c0-5.48 4.46-9.94 9.94-9.94s9.94 4.46 9.94 9.94-4.46 9.94-9.94 9.94z"
    />
  ),
  mail: (
    <>
      <rect {...stroke} x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path {...stroke} d="M4 7l8 6 8-6" />
    </>
  ),
  instagram: (
    <>
      <rect {...stroke} x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle {...stroke} cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </>
  ),
  chat: (
    <>
      <path {...stroke} d="M6 4h12a2 2 0 012 2v9a2 2 0 01-2 2H9l-5 4V6a2 2 0 012-2z" />
      <path {...stroke} d="M9 9h6M9 12h4" />
    </>
  ),
  pin: (
    <>
      <path {...stroke} d="M12 21s-6.5-5.3-6.5-10.5a6.5 6.5 0 1113 0C18.5 15.7 12 21 12 21z" />
      <circle {...stroke} cx="12" cy="10.5" r="2.3" />
    </>
  ),
  clock: (
    <>
      <circle {...stroke} cx="12" cy="12" r="8" />
      <path {...stroke} d="M12 7.5V12l3 2" />
    </>
  ),
  check: <path {...stroke} d="M4.5 12.5l4.5 4.5 10.5-11" />,
  arrowLeft: <path {...stroke} d="M15 5l-7 7 7 7" />,
  arrowRight: <path {...stroke} d="M9 5l7 7-7 7" />,
  external: (
    <>
      <path {...stroke} d="M14 5h5v5" />
      <path {...stroke} d="M19 5l-8 8" />
      <path {...stroke} d="M18 14v4a1 1 0 01-1 1H6a1 1 0 01-1-1V7a1 1 0 011-1h4" />
    </>
  ),
}

export default function UiIcon({ name, className = 'w-5 h-5' }) {
  const content = paths[name] || paths.chat
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      {content}
    </svg>
  )
}
