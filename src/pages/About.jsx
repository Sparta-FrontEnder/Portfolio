import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skillGroups = [
  { label: 'Languages', items: ['Java', 'TypeScript', 'Python', 'C#', 'SQL'] },
  { label: 'Frontend', items: ['Next.js', 'React', 'Angular', 'Tailwind CSS', 'WordPress', 'Shopify'] },
  { label: 'Backend', items: ['Spring Boot', 'Spring MVC', 'Node.js', '.NET', 'REST APIs', 'Microservices', 'Kafka', 'ZooKeeper'] },
  { label: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'Cassandra', 'Solr'] },
  { label: 'AI / ML', items: ['Claude API', 'OpenAI API', 'DeepSeek', 'RAG', 'LangChain', 'Vector databases'] },
  { label: 'Cloud & DevOps', items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'Splunk'] },
]

export default function About() {
  const pageRef = useRef(null)
  useScrollReveal(pageRef)

  return (
    <div ref={pageRef} className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <p className="reveal text-sm text-muted">About</p>
      <h1 className="reveal mt-3 max-w-2xl font-display text-3xl text-ink md:text-5xl">
        Same instinct, three chapters: enterprise CMS, market CMS, my own CMS.
      </h1>

      <div className="reveal mt-10 grid max-w-3xl gap-8 md:grid-cols-[180px_1fr] md:items-start md:gap-10">
        <img
          src="/jian-ma.jpg"
          alt="Jian Ma"
          width={400}
          height={400}
          className="aspect-square w-40 rounded-2xl object-cover md:w-full"
        />
        <div className="space-y-5 text-base text-muted">
          <p>
            I'm a full-stack engineer based in Austin, TX, five years in, with a habit of ending up
            responsible for the systems other people are afraid to touch: publishing pipelines,
            state machines, anything where a bad deploy is visible to customers immediately.
          </p>
          <p>
            At Apple I worked inside Online Store's content platform: the CMS that creates,
            schedules, versions, and publishes product pages across global storefronts. That
            taught me what a content system actually needs to hold up under launch traffic.
          </p>
          <p>
            Today I co-run Popping Art Design with a UI/UX partner. She designs, I architect and
            build: AI reporting pipelines, an ERP, and 15+ Shopify and WordPress storefronts for
            clients. It's the same CMS thinking from Apple, applied to the market's tools, and now
            to our own studio's internal systems as we build our own.
          </p>
        </div>
      </div>

      <div className="mt-16 border-t border-hairline pt-12">
        <h2 className="reveal font-display text-xl text-ink">Skills</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="reveal">
              <p className="text-xs uppercase tracking-[0.14em] text-accent">{group.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-hairline px-3 py-1 text-xs text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal mt-16 border-t border-hairline pt-12">
        <h2 className="font-display text-xl text-ink">Education</h2>
        <p className="mt-3 text-sm text-muted">
          B.S. Computer Science, The University of Texas at Arlington - Sep 2017 to Dec 2020
        </p>
      </div>
    </div>
  )
}
