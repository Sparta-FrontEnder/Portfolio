import architectureEn from '../../blog/agent-harness-architecture.en.md?raw'
import architectureZh from '../../blog/agent-harness-architecture.zh.md?raw'
import reflectionsEn from '../../blog/ai-workflow-reflections.en.md?raw'
import reflectionsZh from '../../blog/ai-workflow-reflections.zh.md?raw'
import agiOptimismEn from '../../blog/agi-cautious-optimism.en.md?raw'
import agiOptimismZh from '../../blog/agi-cautious-optimism.zh.md?raw'
import businessValueEn from '../../blog/business-knowledge-is-more-valuable.en.md?raw'
import businessValueZh from '../../blog/business-knowledge-is-more-valuable.zh.md?raw'

function stripLeadingTitle(markdown) {
  return markdown.replace(/^#\s+.+\n+/, '').trim()
}

export const posts = [
  {
    slug: 'business-knowledge-is-more-valuable',
    category: 'Engineering',
    date: '2026-08-11',
    titles: {
      en: 'A Company Engineer Thought Her Job Title Was Wrong',
      zh: '公司程序员以为她的 Title 写错了',
    },
    excerpts: {
      en: 'A data scientist with no full-app experience built a production system that became a company template, with AI drafts and senior engineering guidance.',
      zh: '一位从未开发过完整应用的 Data Scientist，在 AI 和资深工程师指导下，做出了全公司的样板产品。',
    },
    body: {
      en: stripLeadingTitle(businessValueEn),
      zh: stripLeadingTitle(businessValueZh),
    },
  },
  {
    slug: 'agi-cautious-optimism',
    category: 'Perspectives',
    date: '2026-08-04',
    titles: {
      en: 'Is AGI Really as Frightening as We Imagine?',
      zh: 'AGI 真的有我们想象中那么可怕吗？',
    },
    excerpts: {
      en: 'AI risk deserves serious attention, but worst-case scenarios are not settled outcomes. A case for capability and safety evolving together.',
      zh: 'AI 风险值得严肃对待，但最坏情景并非确定结局。技术能力与安全机制应当同步演进。',
    },
    body: {
      en: stripLeadingTitle(agiOptimismEn),
      zh: stripLeadingTitle(agiOptimismZh),
    },
  },
  {
    slug: 'agent-harness-architecture',
    category: 'Architecture',
    date: '2026-08-01',
    titles: {
      en: 'When Coding Is No Longer the Bottleneck: Designing a Verifiable AI Agent Delivery Engine',
      zh: '当写代码不再是瓶颈：我如何设计一套可验证的 AI Agent 交付引擎',
    },
    excerpts: {
      en: 'Code generation stopped being the hard part. Verification, state, and knowing when to stop became the real engineering problem.',
      zh: '生成代码不再是难点。验证、状态管理，以及知道什么时候该停下来，才是真正的工程问题。',
    },
    body: {
      en: stripLeadingTitle(architectureEn),
      zh: stripLeadingTitle(architectureZh),
    },
  },
  {
    slug: 'ai-workflow-reflections',
    category: 'Reflections',
    date: '2026-08-01',
    titles: {
      en: 'From Hand-Coded Pages to AI Orchestration: How My Workflow Changed My Understanding of Engineering',
      zh: '从手写页面到编排 AI：我的工作流进化，以及我对程序员价值的重新理解',
    },
    excerpts: {
      en: 'A year of shipping client work with AI, from screenshots to Cursor to dual agents, and what still belongs to the engineer.',
      zh: '一年用 AI 交付客户项目：从截图到 Cursor，再到双 Agent，以及工程师仍然不可替代的部分。',
    },
    body: {
      en: stripLeadingTitle(reflectionsEn),
      zh: stripLeadingTitle(reflectionsZh),
    },
  },
]

export function getPost(slug) {
  return posts.find((post) => post.slug === slug) ?? null
}

export function normalizeLang(value) {
  return value === 'zh' ? 'zh' : 'en'
}
