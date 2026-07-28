import { useRef } from 'react'
import { EnvelopeSimple, Phone, MapPin, DownloadSimple, LinkedinLogo } from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const pageRef = useRef(null)
  useScrollReveal(pageRef)

  return (
    <div ref={pageRef} className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <p className="reveal text-sm text-muted">Contact</p>
      <h1 className="reveal mt-3 font-display text-3xl text-ink md:text-5xl">
        Open to full-stack and AI engineering roles.
      </h1>
      <p className="reveal mt-6 text-base text-muted">
        The fastest way to reach me is email. I'll usually reply within a day.
      </p>

      <div className="reveal mt-10 space-y-4">
        <a
          href="mailto:max.jian.ma@gmail.com"
          className="flex items-center gap-3 rounded-2xl border border-hairline bg-surface px-5 py-4 text-sm text-ink hover:border-[var(--color-clay)]"
        >
          <EnvelopeSimple size={18} className="text-accent" />
          max.jian.ma@gmail.com
        </a>
        <a
          href="tel:+12147960660"
          className="flex items-center gap-3 rounded-2xl border border-hairline bg-surface px-5 py-4 text-sm text-ink hover:border-[var(--color-clay)]"
        >
          <Phone size={18} className="text-accent" />
          214-796-0660
        </a>
        <a
          href="https://www.linkedin.com/in/ma-jian-8bb978348"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl border border-hairline bg-surface px-5 py-4 text-sm text-ink hover:border-[var(--color-clay)]"
        >
          <LinkedinLogo size={18} className="text-accent" />
          linkedin.com/in/ma-jian-8bb978348
        </a>
        <div className="flex items-center gap-3 rounded-2xl border border-hairline bg-surface px-5 py-4 text-sm text-ink">
          <MapPin size={18} className="text-accent" />
          Austin, TX
        </div>
      </div>

      <a
        href="/Jian_Ma_Resume.pdf"
        download
        className="reveal mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#fbfaf5] transition-transform active:scale-[0.98]"
      >
        <DownloadSimple size={16} />
        Download resume
      </a>
    </div>
  )
}
