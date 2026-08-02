import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowSquareOut } from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { linkedProjects, aiProjects, internalProjects } from '../data/projects'

function ProjectCard({ project }) {
  const link = project.link
  return (
    <article className="reveal flex flex-col rounded-2xl border border-hairline bg-surface p-8">
      <p className="text-xs uppercase tracking-[0.14em] text-accent">{project.category}</p>
      <h2 className="mt-3 font-display text-xl text-ink">{project.title}</h2>
      <p className="mt-3 flex-1 text-sm text-muted">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-full border border-hairline px-3 py-1 text-xs text-muted">
            {tech}
          </span>
        ))}
      </div>
      {link?.internal ? (
        <Link
          to={link.href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
        >
          {link.label}
          <ArrowRight size={15} />
        </Link>
      ) : link ? (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
        >
          {link.label}
          <ArrowSquareOut size={15} />
        </a>
      ) : null}
    </article>
  )
}

export default function Projects() {
  const pageRef = useRef(null)
  useScrollReveal(pageRef)

  return (
    <div ref={pageRef} className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <p className="reveal text-sm text-muted">Projects</p>
      <h1 className="reveal mt-3 max-w-2xl font-display text-3xl text-ink md:text-5xl">
        AI pipelines, enterprise systems, and the client sites I've shipped.
      </h1>

      <section className="mt-16">
        <h2 className="reveal font-display text-2xl text-ink md:text-3xl">AI systems</h2>
        <p className="reveal mt-2 max-w-xl text-sm text-muted">
          Multi-agent delivery, verification loops, and applied AI products.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {aiProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-hairline pt-16">
        <h2 className="reveal font-display text-2xl text-ink md:text-3xl">Linked work</h2>
        <p className="reveal mt-2 max-w-xl text-sm text-muted">
          Projects with a live site or public source link.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {linkedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-hairline pt-16">
        <h2 className="reveal font-display text-2xl text-ink md:text-3xl">Internal systems</h2>
        <p className="reveal mt-2 max-w-xl text-sm text-muted">
          Company and client platforms without a public link.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {internalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}
