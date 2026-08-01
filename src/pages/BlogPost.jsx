import { useMemo, useRef } from 'react'
import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowLeft } from '@phosphor-icons/react'
import { getPost, normalizeLang } from '../data/posts'
import { useScrollReveal } from '../hooks/useScrollReveal'

function formatDate(date, lang) {
  return new Intl.DateTimeFormat(lang === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}

export default function BlogPost() {
  const { slug } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const lang = normalizeLang(searchParams.get('lang'))
  const post = getPost(slug)

  const heroRef = useRef(null)
  const pageRef = useRef(null)

  const markdown = useMemo(() => (post ? post.body[lang] : ''), [post, lang])

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const targets = gsap.utils.toArray('.hero-in')
      if (reduceMotion) {
        gsap.set(targets, { autoAlpha: 1, y: 0 })
        return
      }
      gsap.set(targets, { autoAlpha: 0, y: 20 })
      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
      })
    },
    { scope: heroRef, dependencies: [slug, lang], revertOnUpdate: true },
  )

  useScrollReveal(pageRef)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const setLang = (nextLang) => {
    const next = new URLSearchParams(searchParams)
    if (nextLang === 'en') {
      next.delete('lang')
    } else {
      next.set('lang', nextLang)
    }
    setSearchParams(next, { replace: true })
  }

  return (
    <div ref={pageRef} className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <header ref={heroRef}>
        <Link
          to="/blog"
          className="hero-in inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} />
          All posts
        </Link>

        <div className="hero-in mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            <span>{formatDate(post.date, lang)}</span>
            <span aria-hidden="true">/</span>
            <span>{post.category}</span>
          </div>

          <div
            className="inline-flex rounded-full border border-hairline p-1 text-sm"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded-full px-3 py-1 transition-colors ${
                lang === 'en' ? 'bg-accent text-[#fbfaf5]' : 'text-muted hover:text-ink'
              }`}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('zh')}
              className={`rounded-full px-3 py-1 transition-colors ${
                lang === 'zh' ? 'bg-accent text-[#fbfaf5]' : 'text-muted hover:text-ink'
              }`}
              aria-pressed={lang === 'zh'}
            >
              中文
            </button>
          </div>
        </div>

        <h1 className="hero-in mt-5 font-display text-3xl leading-tight text-ink md:text-5xl">
          {post.titles[lang]}
        </h1>
        <p className="hero-in mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {post.excerpts[lang]}
        </p>
      </header>

      <article className="reveal blog-prose mt-12 border-t border-hairline pt-12">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>

      <div className="reveal mt-16 border-t border-hairline pt-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} />
          Back to blog
        </Link>
      </div>
    </div>
  )
}
