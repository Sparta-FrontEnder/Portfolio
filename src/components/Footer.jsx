import { EnvelopeSimple, Phone, LinkedinLogo } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-page">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg text-ink">Jian Ma</p>
          <p className="mt-1 text-sm text-muted">Full-stack &amp; AI systems engineer, Austin TX</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <a
            href="mailto:max.jian.ma@gmail.com"
            className="flex items-center gap-2 text-ink hover:text-accent"
          >
            <EnvelopeSimple size={16} />
            max.jian.ma@gmail.com
          </a>
          <a href="tel:+12147960660" className="flex items-center gap-2 text-ink hover:text-accent">
            <Phone size={16} />
            214-796-0660
          </a>
          <a
            href="https://www.linkedin.com/in/ma-jian-8bb978348"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-ink hover:text-accent"
          >
            <LinkedinLogo size={16} />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-hairline px-6 py-4 text-xs text-muted">
        <div className="mx-auto max-w-6xl">© {new Date().getFullYear()} Jian Ma.</div>
      </div>
    </footer>
  )
}
