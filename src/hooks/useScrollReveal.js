import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function useScrollReveal(scopeRef, selector = '.reveal') {
  useGSAP(
    () => {
      const items = gsap.utils.toArray(selector)
      if (items.length === 0) return

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduceMotion) {
        gsap.set(items, { autoAlpha: 1, y: 0 })
        return
      }

      gsap.set(items, { autoAlpha: 0, y: 28 })
      ScrollTrigger.batch(items, {
        start: 'top 85%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.12,
            overwrite: true,
          }),
      })
    },
    { scope: scopeRef },
  )
}
