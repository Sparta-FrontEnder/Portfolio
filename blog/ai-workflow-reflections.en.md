# From Hand-Coded Pages to AI Orchestration: How My Workflow Changed My Understanding of Engineering

In the second half of 2025, I began operating a design studio with a designer. My role resembled that of many full-stack engineers: understand the client's needs, propose a technical solution, and turn the design into a working product.

What a designer delivers is usually a set of screens. What a client needs is a business that works. Behind a product detail page are product publishing, purchasing, and data-management workflows. An internal platform must do more than look right; it must handle permissions, concurrency, and real operational use. My responsibility was to fill the gap between the design and the usable system.

The first problem I wanted to solve was also the most visible and repetitive one: how to reproduce Figma designs in code faster and more accurately.

## Stage One: AI as an Assistant

In mid-2025, AI coding capabilities were far less mature than they are today. I still wrote most of the frontend code myself. GPT and Gemini were mainly reference tools: they explained framework APIs, completed small pieces of implementation, and helped diagnose errors.

This was faster than working without AI, but it did not fundamentally change the job. I still rewrote common React navigation, component structures, and interactions. Every design section had to be manually decomposed, implemented, adjusted, and tested across responsive states.

That model was difficult to sustain for clients with limited budgets. Clients do not pay more because an engineer typed more code. They care about the result and how quickly it can be delivered.

I gradually reduced the amount of code I wrote manually. I captured the design section by section, provided layout, typography, spacing, and interaction details to the model, and let it generate a first implementation. I then adapted the result to the target platform, reorganized the code, and added the business logic.

This was the first major productivity gain. Human work did not disappear, however. It moved from writing every line to preparing context, correcting output, and reconstructing the implementation into a maintainable system.

## Stage Two: Cursor Changed the Delivery Environment

When I began using Cursor heavily, file decomposition, documentation, cross-file changes, and code completion could happen directly inside the project. I no longer had to move constantly between a chat window and an editor.

Delivery became faster, but new constraints emerged.

Capturing and describing designs was still slow. Responsive behavior, motion, and interactions still required repeated tuning. More importantly, output varied with the context window. The same project could produce inconsistent implementations across sessions. As a conversation grew, the model might forget an early constraint or overturn an architectural decision with a new local assumption.

This was especially challenging in custom client work. Every client had a different visual language, so I could not simply reuse the previous site. The code might not be reusable, but the lessons about widths, breakpoints, component boundaries, and visual fidelity should be.

## Stage Three: Figma MCP Reduced Context-Shuttling

As MCP became more widely adopted, Figma introduced its own MCP integration. An agent could retrieve node structure, dimensions, colors, and page information without depending entirely on my screenshots and written descriptions.

This reduced the manual work involved in collecting design information by roughly 80 percent. Tasks that once required me to capture, annotate, and explain every section could now be performed by the agent.

MCP solved the problem of obtaining information. It did not solve the problem of using that information consistently. Models could still hallucinate, and results could still drift between context windows. Better tools did not automatically create a reliable engineering process.

I began turning lessons from more than 20 client projects into explicit standards and skills: how responsive behavior should be checked, how container widths should be handled, where component boundaries should be drawn, and what qualified as a healthy implementation.

These rules were not intended to make every project look the same. They ensured that different designs, sessions, and agents still produced code that met a consistent engineering baseline.

At this point, I could work with six to eight clients of varying scope in the same month. At the beginning, I could support only one or two.

## The Turning Point: Building Was No Longer the Hardest Part

As implementation became faster, I noticed a counterintuitive shift: building the page was no longer the most time-consuming part. Verification was.

AI could generate a page quickly, but I still had to determine:

- whether it reproduced the design rather than merely looking similar;
- whether it behaved correctly at different viewport widths;
- whether fixing one section had broken another;
- whether dynamic content and real data would disrupt the layout;
- whether the code respected platform constraints and project standards.

The faster generation became, the greater the verification burden. The system could create more “nearly finished” work in less time, with each result potentially hiding small but consequential defects.

While reading research on LLM reasoning and multi-agent collaboration, I encountered a simple strategy that matched this problem: Agent A performs the work, Agent B independently evaluates it, and Agent A revises the work based on that evaluation.

The concept was not complicated, but it addressed the exact bottleneck I was experiencing.

## Stage Four: From Two Agents to an Orchestrated Loop

I built the first version of a two-agent workflow.

A working agent implemented the page according to a plan and maintained the status of each section. Once a section reached verification, I handed it to an independent verification agent. The verifier produced a Markdown log. The working agent applied the findings, and the verifier updated the section's status once it could no longer identify a problem.

A person still performed the final review after the page was complete.

This reduced repetitive testing work by nearly 80 percent, but it had an obvious limitation: the two sessions could not communicate automatically. I still had to move logs, state, and instructions from one window to the other.

AI was implementing and evaluating the work, while I was acting as the API between the agents.

The next step was orchestration.

I added a local orchestration system with one shared state for page decomposition, progress, verifier findings, and the working agent's response to each issue. A dashboard made the process observable without requiring a person to inspect every session.

When the agents disagree, the system stops rather than continuing on an uncertain foundation. A completed page still requires a final human review before the next page begins. Recurring issues can be promoted into rules and reused in future projects.

The current harness is intentionally focused on WordPress and Elementor. Lessons from earlier Shopify and React work influenced its design, but I chose not to sacrifice clear boundaries and reliable behavior merely to claim support for every platform.

The path from design to implementation was no longer a series of conversations that required constant manual prompting. It had become a delivery process with state, gates, circuit breakers, and explicit human decisions.

The person's role was reduced to a few critical actions:

1. Provide the project configuration and design context.
2. Observe the system and resolve disputes.
3. Perform the final page-level review.

## If AI Does Not Need Me to Type the Code, What Is My Value?

After building this system, I began to seriously consider what my role as a programmer meant when I could describe a system in natural language and let AI produce most of the implementation.

I once associated engineering ability closely with coding speed. I now see code as one representation of engineering decisions, not the decisions themselves.

The difference between an experienced engineer and someone without an engineering background is not simply who writes a better prompt. It appears in several deeper abilities.

### 1. Knowing How to Decompose a Complex Problem

AI can execute a task, but task boundaries determine the quality of the result. An engineer must decide how a page should be divided into sections, how a system should be separated into states, permissions, and responsibilities, and when further decomposition would create more coordination cost than value.

### 2. Placing New Tools on an Existing Technical Map

When I encountered multi-agent evaluation research, I could connect it to a bottleneck in my delivery process. When I saw MCP, I was less interested in its novelty than in whether it could eliminate the manual transfer of design context.

Experience helps us decide where a technology belongs, not merely recognize that it exists.

### 3. Establishing Engineering Constraints for Agents

A longer or more technical prompt is not automatically better. What matters is defining the agent's inputs, outputs, permissions, stopping conditions, and acceptance criteria.

When those constraints become state machines, schemas, read-only permissions, and deterministic checks, a prompt stops being a one-time instruction and becomes part of an engineering system.

### 4. Being “Lazy” Enough to Eliminate Repetition

This kind of laziness is not avoidance. It is an unwillingness to perform the same mechanical task for the third time.

The first occurrence may be solved manually. The second should produce a method. By the third, the system should be able to handle it. Many useful automations begin not with a grand technical vision, but with an engineer running out of patience for repetitive work.

## How I Now Think About Engineering in the AI Era

AI has not reduced the value of engineering ability. It has given experience greater leverage.

In the past, an architectural decision required a large amount of manually written code before it could affect the product. Today, the same decision can spread rapidly across multiple agents, pages, and projects. A poor decision can scale just as quickly.

The engineer's responsibility has therefore shifted from personally performing every step to:

- defining the right problem;
- creating executable boundaries;
- deciding what belongs to scripts, models, and people;
- building feedback loops that improve from real failures;
- stopping automation when it is no longer reliable.

I no longer interpret “not writing the code” as “not doing engineering.” If I define the state, permissions, verification, circuit breakers, and knowledge feedback—even when AI generates most of the implementation—I am still doing the core engineering work.

## Conclusion

Looking back, my workflow moved through four stages:

```text
handwritten code with AI assistance
                ↓
screenshot-driven code generation
                ↓
Cursor, Figma MCP, and engineering skills
                ↓
build/verify agents with orchestration
```

On the surface, this is a story about writing less code by hand. In reality, it is a story about repeatedly discovering a new constraint and turning that constraint into a system.

At first, I optimized how quickly I could build a page. Then I focused on how reliably I could deliver one. Now I am asking how experience can become an executable rule for the next project.

That may be my clearest understanding of AI engineering today: models create possibilities, engineering systems constrain those possibilities into reliable outcomes, and people decide which outcomes are worth accepting.
