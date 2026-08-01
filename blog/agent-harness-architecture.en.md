# When Coding Is No Longer the Bottleneck: Designing a Verifiable AI Agent Delivery Engine

Over the past year, I have been exploring how AI can improve the path from a Figma design to production code. The original question was straightforward: how can a model reproduce a design more accurately? As models, Cursor, and Figma MCP improved, however, I found that code generation was no longer the main constraint. Reliable verification was.

A model can produce a page quickly without consistently delivering a correct, maintainable, design-faithful implementation. It may miss responsive states, misunderstand dynamic content, or break one section while fixing another. When the same agent both implements and reviews the work, it can also inherit its own assumptions and fail to recognize its mistakes.

That led me to build `agent-harness`, a local AI delivery engine focused on WordPress and Elementor projects. Its purpose is not to create one all-powerful agent. It turns delivery into an observable state machine in which work can be verified, interrupted, reviewed, and improved over time.

## The Hard Problem Is Coordination, Not Generation

An early version of the workflow looked like this:

1. Read the design from Figma.
2. Implement the widget in one Cursor session.
3. Review it in another session.
4. Manually copy findings and instructions between the two agents.

This worked, but it exposed four structural problems.

First, a person was still the orchestrator. Separate sessions had no reliable handoff mechanism, so the engineer had to make technical decisions while also acting as a message queue.

Second, verification was inconsistent. A verifier that retained prior context could anchor on an earlier conclusion. A pure screenshot diff could identify changed pixels, but not explain whether the cause was a layout error, dynamic content, or rendering noise.

Third, lessons did not accumulate. Responsive rules, Elementor constraints, and recurring implementation mistakes discovered for one client had to be rediscovered for the next.

Fourth, the system did not know when to stop. If the builder and verifier disagreed, continuing the loop could compound work on top of an unresolved assumption.

`agent-harness` makes those implicit responsibilities explicit.

## One State, Not Multiple Versions of the Truth

The system treats `state.json` as its only authoritative state. Pages, sections, attempts, verification results, disputes, and human approvals are recorded there. The plan, dashboard, and logs are projections of that state—not independent sources of truth.

This is a simple rule with significant consequences. If the builder considers a section complete, the verifier considers it unresolved, and the dashboard says it is awaiting approval, more automation only creates more confusion.

With one source of truth, each section follows a defined lifecycle:

```text
pending → building → gating → verifying → fixing → passed
                                      ↘ disputed → halted
```

The orchestrator advances the state. Agents report outcomes, but they cannot bypass gates or grant themselves permission to continue.

## The Build–Gate–Verify–Fix Loop

A normal run has four stages.

### Build: Keep the Agent Focused on Implementation

The builder receives the design context, project standards, and the current section task. It creates or modifies the implementation. Multiple sections may be built as a batch to reduce session startup and repeated context-loading costs.

Batching implementation does not mean batching acceptance. Verification, failures, and disputes remain section-specific so that one successful area cannot hide another area's defects.

### Gate: Do Not Spend Model Reasoning on Deterministic Facts

Before invoking a verifier, the engine runs deterministic checks, including:

- whether required files and artifacts exist;
- whether PHP, JSON, and configuration structures are valid;
- whether required fields and constraints are satisfied;
- whether promoted project rules have been violated;
- whether agent responses conform to their schemas.

LLMs are useful for evaluating visual hierarchy, design intent, and implementation tradeoffs. They should not be asked to repeatedly determine whether a file exists or JSON parses. Scripts are faster, cheaper, reproducible, and easier to debug.

### Verify: Start From a Clean Context Every Time

Each verification round runs in a separate process with a fresh session and read-only tools. It does not inherit the builder's reasoning or the previous verifier's conclusion.

The goal is to reduce anchoring. If a previous review incorrectly accepted a spacing decision, a context-carrying verifier may keep finding reasons to defend it. A clean session must re-evaluate the design, implementation, and checklist from the available evidence.

The verifier emits structured findings rather than a general critique. Every finding identifies its location, severity, evidence, and expected action, giving the builder a concrete contract for the next round.

### Fix: Every Finding Requires a Response

The builder addresses the findings and writes a structured response explaining what changed. If it disagrees with a finding, it cannot silently ignore it; it must open a dispute.

The engine also enforces attempt limits and no-progress circuit breakers. If repeated rounds are not reducing the problem set, execution stops instead of consuming tokens indefinitely.

## A Dispute Stops the Entire Queue

I deliberately chose not to let other sections continue when one section enters a dispute.

A disagreement between the builder and verifier may expose a global misunderstanding about the design, technical constraints, or project conventions. Allowing other tasks to continue on top of that assumption can multiply the eventual rework.

When a dispute occurs, the system enters a halted state and waits for a person to resolve it. Reliable automation is not just the ability to keep running; it is the ability to recognize when continuing would be unsafe.

## Passing Every Section Does Not Complete the Page

Even after every section passes verification, the engine does not automatically advance to the next page. It enters `AWAITING_APPROVAL` and requests a final human review.

Local correctness is not the same as page-level quality. The remaining questions often concern:

- rhythm and hierarchy across sections;
- whether motion feels intentional;
- how the content behaves in realistic scenarios;
- whether templates and dynamic data work across multiple samples;
- whether independently correct components conflict when composed.

The person's role is therefore not to shuttle logs or repeatedly inspect every CSS declaration. It is to make page-level product, visual, and business judgments.

## Turning Repeated Mistakes Into Rules

If the engine only accelerates the current project, its long-term value is limited. It also needs a way to retain operational knowledge.

Rules in `agent-harness` follow an explicit lifecycle:

```text
observed → candidate → enforced → retired
```

When a human review catches a missed issue, or the same defect appears across multiple projects, the system records the problem, cause, and frequency. Once the evidence is strong enough, a `promote` operation can turn it into a deterministic check, a verification rule, or an engineering knowledge entry.

For example, a recurring Elementor container-width mistake may begin as a verifier comment. After repeated occurrences, it can become a script-level check. Future projects no longer depend on a model remembering the lesson.

The feedback loop becomes:

```text
human identifies a miss
        ↓
record the issue and cause
        ↓
score and promote the rule
        ↓
create a check or explicit instruction
        ↓
prevent the issue in future projects
```

I prefer this version-controlled, reviewable, and reversible knowledge to the vague promise of an agent's long-term memory.

## Why I Have Not Adopted a General Agent Framework Yet

Frameworks such as LangGraph offer graph execution, persistence, and orchestration primitives. The current challenge, however, is not adding more nodes. It is enforcing hard boundaries:

- the verifier must remain read-only;
- a dispute must halt the system;
- passing sections still requires page approval;
- deterministic gate results must be merged with model findings;
- client projects must not create a second copy of the rules.

For now, a small purpose-built orchestrator makes those constraints easier to reason about. The engine also intentionally supports only WordPress and Elementor rather than claiming simultaneous support for Shopify, React, and every frontend stack. Narrow scope produces clearer state and verification semantics.

## Current Limitations

The engine already includes state management, deterministic gates, the agent loop, dispute handling, page approval, a dashboard, and rule promotion. Several areas remain incomplete.

Screenshot capture is not yet reliably automated in every environment. The dashboard can display Figma and implementation screenshots, but visual verification remains incomplete when those artifacts are missing.

A passing dry run only means that deterministic checks were clean. It does not prove that a visual review occurred. A green state must communicate exactly what was verified rather than create false confidence.

Finally, the architecture itself proves very little. The system must be tested through real client projects, varied page types, and repeated feedback cycles.

## Conclusion

The purpose of `agent-harness` is not simply to let AI build an entire website unattended. It redistributes responsibility across the delivery process:

- the orchestrator owns state, ordering, and interruption;
- scripts own objective facts;
- LLMs handle semantic and visual judgment;
- people resolve disputes and approve page-level quality;
- the rule system carries lessons into future projects.

As code generation becomes cheaper, more engineering value moves into constraints, verification, state management, and knowledge accumulation. A reliable AI engineering system does not give the model maximum freedom. It places each decision with the mechanism best equipped to make it—and stops when certainty runs out.
