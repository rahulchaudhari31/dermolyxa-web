import { hero } from '../../data/content'

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  x: (index * 37 + 13) % 100,
  y: (index * 61 + 7) % 100,
  delay: `${-(index % 13) * 0.7}s`,
  duration: `${7 + (index % 8) * 1.25}s`,
  drift: `${((index % 5) - 2) * 14}px`,
  size: index % 6 === 0 ? '3px' : '2px',
}))

export default function HeroBackdrop({ modeIndex = 0 }) {
  const mode = hero.modes[modeIndex]

  return (
    <div
      className="hero-atmosphere"
      style={{ '--hero-accent': mode.color }}
      aria-hidden="true"
    >
      <div className="hero-atmosphere__wash" />
      <div className="hero-atmosphere__halo">
        <div className="hero-atmosphere__core" />
        <span className="hero-atmosphere__ring hero-atmosphere__ring--outer" />
        <span className="hero-atmosphere__ring hero-atmosphere__ring--middle" />
        <span className="hero-atmosphere__ring hero-atmosphere__ring--inner" />
      </div>
      <div className="hero-atmosphere__particles">
        {particles.map((particle) => (
          <i
            key={particle.id}
            style={{
              '--x': `${particle.x}%`,
              '--y': `${particle.y}%`,
              '--delay': particle.delay,
              '--duration': particle.duration,
              '--drift': particle.drift,
              '--particle-size': particle.size,
            }}
          />
        ))}
      </div>
      <div className="hero-atmosphere__horizon" />
    </div>
  )
}
