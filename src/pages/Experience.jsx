import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { roles } from '../data/experience'

export default function Experience() {
  const pageRef = useRef(null)
  useScrollReveal(pageRef)

  return (
    <div ref={pageRef} className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <p className="reveal text-sm text-muted">Experience</p>
      <h1 className="reveal mt-3 max-w-2xl font-display text-3xl text-ink md:text-5xl">
        Five years, four teams, one habit of owning what breaks.
      </h1>

      <div className="mt-16 border-t border-hairline">
        {roles.map((role) => (
          <article key={role.id} className="reveal border-b border-hairline py-12">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h2 className="font-display text-2xl text-ink">{role.company}</h2>
              <span className="text-sm text-muted">{role.period}</span>
            </div>
            <p className="mt-1 text-sm text-accent">{role.role}</p>
            <p className="mt-1 text-xs text-muted">{role.location}</p>

            <p className="mt-5 max-w-2xl text-base text-ink">{role.oneLiner}</p>

            <ul className="mt-6 space-y-3">
              {role.highlights.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-muted">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {role.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-hairline px-3 py-1 text-xs text-muted">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
