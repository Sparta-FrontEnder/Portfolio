import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowRight } from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { posts } from '../data/posts'

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}

export default function Blog() {
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
      gsap.set(targets, { autoAlpha: 0, y: 22 })
      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.05,
      })
    },
    { scope: heroRef },
  )

  useScrollReveal(pageRef)

  return (
    <div ref={pageRef} className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <header ref={heroRef} className="max-w-2xl">
        <p className="hero-in text-sm text-muted">Blog</p>
        <h1 className="hero-in mt-3 font-display text-3xl leading-tight text-ink md:text-5xl">
          Notes on AI delivery systems, verification, and engineering judgment.
        </h1>
        <p className="hero-in mt-5 max-w-xl text-base text-muted">
          Long-form writing from building client platforms and an agent harness where code generation
          is cheap, but reliable delivery is not.
        </p>
      </header>

      <div className="mt-16 border-t border-hairline">
        {posts.map((post) => (
          <article key={post.slug} className="reveal border-b border-hairline py-10">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
              <span>{formatDate(post.date)}</span>
              <span aria-hidden="true">/</span>
              <span>{post.category}</span>
            </div>
            <h2 className="mt-3 max-w-2xl font-display text-2xl leading-snug text-ink md:text-3xl">
              <Link
                to={`/blog/${post.slug}`}
                className="transition-colors hover:text-accent"
              >
                {post.titles.en}
              </Link>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {post.excerpts.en}
            </p>
            <Link
              to={`/blog/${post.slug}`}
              className="mt-5 inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-accent"
            >
              Read article
              <ArrowRight size={14} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
