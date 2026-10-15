import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { getLenis } from '../../lib/lenis'
import Icon from './Icons'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function HairTimeline({ data }) {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const barRef = useRef(null)

  useGSAP(
    () => {
      const track = trackRef.current
      const section = sectionRef.current
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!track || !section || reduced) return

      const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 48)

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => '+=' + getDistance(),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (barRef.current) {
              barRef.current.style.transform = `scaleX(${self.progress})`
            }
          },
        },
      })

      const lenis = getLenis()
      if (lenis) lenis.on('scroll', ScrollTrigger.update)

      return () => {
        tween.scrollTrigger?.kill()
        tween.kill()
        if (lenis) lenis.off('scroll', ScrollTrigger.update)
      }
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="min-h-[100svh] flex flex-col justify-center py-20">
        <div className="container-lux">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="label-caps text-gold-light/80 tracking-[0.5em] text-[0.68rem]">
              {data.kicker}
            </span>
            <h3 className="text-[clamp(1.8rem,4vw,3.2rem)] leading-tight">
              {data.heading}
            </h3>
            <p className="text-ivory/70 leading-relaxed">{data.intro}</p>
          </div>
        </div>

        <div className="mt-12">
          <div
            ref={trackRef}
            className="flex gap-6 lg:gap-8 px-[5vw] will-change-transform overflow-x-auto lg:overflow-visible [scrollbar-width:none]"
          >
            {data.steps.map((step) => (
              <article
                key={step.id}
                className="group relative shrink-0 w-[80vw] sm:w-[60vw] md:w-[42vw] lg:w-[30vw] xl:w-[26rem] surface rounded-[1.25rem] overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={step.image}
                    alt={`${step.title} — illustrative imagery`}
                    className="w-full h-full object-cover opacity-70 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.85))]" />
                  <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
                  <div className="absolute top-4 left-4 flex items-center gap-3">
                    <span className="label-caps text-gold-light tracking-[0.4em] text-[0.6rem]">
                      {step.step}
                    </span>
                    <span className="label-caps text-ivory/60 tracking-[0.34em] text-[0.55rem]">
                      {step.duration}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 text-gold-light">
                    <Icon name={step.icon} className="w-10 h-10" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h4 className="font-display text-xl md:text-2xl">{step.title}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-ivory/75 leading-relaxed">{step.description}</p>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-px gold-hairline opacity-40" />
              </article>
            ))}
          </div>
        </div>

        <div className="container-lux mt-8">
          <div className="h-px w-full bg-white/10 relative overflow-hidden">
            <div
              ref={barRef}
              className="absolute inset-0 origin-left bg-gold-gradient"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>
          <div className="mt-3 label-caps text-[0.55rem] tracking-[0.4em] text-ivory/50">
            Scroll to advance the protocol
          </div>
        </div>
      </div>
    </section>
  )
}
