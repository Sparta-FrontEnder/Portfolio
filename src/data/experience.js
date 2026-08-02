export const roles = [
  {
    id: 'popping-art',
    company: 'Popping Art Design',
    role: 'Full-Stack Engineer & AI Solutions Lead',
    period: 'Apr 2025 - Present',
    location: 'Austin, TX',
    oneLiner:
      'Engineering half of a two-person design studio. Own architecture and delivery for AI systems, an ERP platform, and 15+ client web builds sold through social content in China and the US.',
    stack: [
      'Next.js',
      'React',
      'C# / .NET',
      'Spring Boot',
      'Claude API',
      'DeepSeek',
      'AWS',
      'Redis',
      'Shopify',
      'WordPress',
      'Multi-agent',
    ],
    highlights: [
      'Built agent-harness, a reusable multi-agent delivery engine for WordPress / Elementor work: orchestrated build→gate→verify→fix loops, fresh-session verification, dispute hard-stops, page-level human approval, and rule promotion so recurring defects become deterministic checks across projects.',
      'Designed a dual-agent Claude reporting pipeline (generate, then independently validate) behind a .NET/Next.js ops dashboard for a telecom device-repair client, cutting report turnaround from 2+ hours to one click.',
      'Built an AWS-deployed RAG knowledge base over a ~400-page internal document corpus, answering quoting and customer-service questions in natural language via DeepSeek.',
      'Architected a multi-store ERP (Spring Boot, Next.js, Redis, AWS) for a three-location retail business, using distributed locking to keep concurrent staff edits consistent.',
      'Shipped 15+ client web platforms across Shopify, WordPress, and Next.js, building directly from a design partner’s UI/UX comps in 1-2 week agile cycles.',
    ],
  },
  {
    id: 'apple',
    company: 'Apple - Online Store',
    role: 'Software Engineer (Onsite Vendor)',
    period: 'Mar 2022 - Feb 2025',
    location: 'Austin, TX',
    oneLiner:
      'Backend engineer on the content ingestion and publishing platform behind Apple Online Store’s global storefronts, working under senior engineer and PM review.',
    stack: ['Java', 'Spring Boot', 'Kafka', 'ZooKeeper', 'Solr', 'Splunk'],
    highlights: [
      'Migrated a Kafka content-ingestion pipeline from push-based consumption to manual polling and added ZooKeeper distributed locking, cutting duplicate processing events by ~95% and peak infrastructure provisioning by ~40%.',
      'Diagnosed a systemic schema-drift bug across 12+ database tables that broke content rollback, then redesigned the state-table structure and migrated 30+ inconsistent transitions.',
      'Owned lifecycle work across content creation, scheduling, versioning, and multi-region publishing on a high-stability, launch-critical system.',
    ],
  },
  {
    id: 'soonest',
    company: 'Soonest Express Inc',
    role: 'Software Engineer',
    period: 'Feb 2021 - Dec 2021',
    location: 'Onsite, North America ops',
    oneLiner:
      'Full-stack engineer at a listed multinational freight forwarder, modernizing internal tools from a CLI-era system to a Spring Boot + React operations platform.',
    stack: ['Java', 'Spring Boot', 'React', 'MySQL', 'Cassandra'],
    highlights: [
      'Built real-time warehouse operations tracking with barcode-scanner integration across inbound, inspection, container loading, and outbound.',
      'Connected booking workflows to accounting so commercial orders produced billable, consistent charge lines under multi-country compliance rules.',
      'Stood up CI/CD from scratch for a five-person engineering team, automating checks and deployment for the new web stack.',
    ],
  },
  {
    id: 'bays-gulfs',
    company: 'Bays & Gulfs LLC',
    role: 'Junior Software Engineer',
    period: 'Dec 2019 - Dec 2020',
    location: 'Early career',
    oneLiner:
      'Junior engineer helping a company stand up its own e-commerce platform, with product listing and shelving as a core workflow.',
    stack: ['Java', 'Spring Boot', 'REST APIs', 'SQL'],
    highlights: [
      'Built RESTful APIs for e-commerce workflows, including product listing and shelving into a sellable storefront state.',
      'First full software-development-lifecycle experience, turning business requirements into production APIs.',
    ],
  },
]
