import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowRight } from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/projects'

const featuredIds = ['apple-cms', 'multi-store-erp', 'cozy-nook']
const featured = featuredIds
  .map((id) => projects.find((p) => p.id === id))
  .filter(Boolean)

export default function Home() {
  const heroRef = useRef(null)
  const pageRef = useRef(null)

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const targets = gsap.utils.toArray('.hero-in')
      if (reduceMotion) {
        gsap.set(targets, { autoAlpha: 1, y: 0 })
        return
      }
      gsap.set(targets, { autoAlpha: 0, y: 24 })
      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.1,
      })
    },
    { scope: heroRef },
  )

  useScrollReveal(pageRef)

  return (
    <div ref={pageRef}>
      <section ref={heroRef} className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
        <p className="hero-in text-sm text-muted">Full-stack &amp; AI systems engineer</p>
        <h1 className="hero-in mt-4 max-w-3xl font-display text-4xl leading-tight text-ink md:text-6xl">
          I build backend systems and <em className="italic leading-[1.1] pb-1 inline-block text-accent">AI products</em> that ship.
        </h1>
        <p className="hero-in mt-6 max-w-xl text-base text-muted md:text-lg">
          Five years across Apple's CMS and an engineering practice I help run, shipping AI,
          an ERP, and client platforms.
        </p>
        <div className="hero-in mt-8 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#fbfaf5] transition-transform active:scale-[0.98]"
          >
            View projects
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 text-sm font-medium text-ink transition-transform active:scale-[0.98]"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <section className="border-t border-hairline bg-surface">
        <div className="reveal mx-auto max-w-3xl px-6 py-20">
          <p className="font-display text-2xl leading-relaxed text-ink md:text-3xl">
            I started on Apple Online Store's content platform, then went on to co-run a small
            studio where I own architecture end to end: AI reporting pipelines, a multi-store
            ERP, and the client web builds that keep the lights on.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="reveal font-display text-2xl text-ink md:text-3xl">Selected work</h2>
        <div className="mt-8 divide-y divide-[var(--color-line)] border-t border-hairline">
          {featured.map((project) => (
            <div key={project.id} className="reveal flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:justify-between md:gap-8">
              <div className="md:max-w-xl">
                <p className="text-xs uppercase tracking-[0.14em] text-accent">{project.category}</p>
                <h3 className="mt-1 font-display text-xl text-ink">{project.title}</h3>
                <p className="mt-2 text-sm text-muted">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {project.stack.slice(0, 3).map((tech) => (
                  <span key={tech} className="rounded-full border border-hairline px-3 py-1 text-xs text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/projects"
          className="reveal mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent"
        >
          See all projects
          <ArrowRight size={16} />
        </Link>
      </section>

      <section className="border-t border-hairline bg-surface">
        <div className="reveal mx-auto flex max-w-6xl flex-col gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              Four roles, one thread: ship, then own what breaks.
            </h2>
            <p className="mt-3 max-w-md text-sm text-muted">
              From Apple's storefront CMS to founding an engineering practice.
            </p>
          </div>
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 text-sm font-medium text-ink"
          >
            Read the full timeline
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
