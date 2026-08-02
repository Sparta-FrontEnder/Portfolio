# LinkedIn Post: Agent Harness Architecture

I spent the past year trying to make AI better at turning Figma into production code.

The surprising conclusion: generation was never the hard part. Verification was.

A model can produce a page quickly and still miss responsive states, break neighboring sections, or fail to notice its own mistakes. When the same agent both builds and reviews the work, it inherits its own assumptions.

So I built `agent-harness`: a local AI delivery engine for WordPress and Elementor projects. Not one all-powerful agent. An observable state machine.

The core ideas:

1. One authoritative state (`state.json`), not multiple versions of the truth  
2. Deterministic gates before LLM judgment  
3. A fresh verifier session every round, so it cannot anchor on prior conclusions  
4. Disputes halt the whole queue  
5. Section pass still requires human page approval  
6. Repeated mistakes get promoted into reusable rules

The loop is simple:

```text
build → gate → verify → fix
```

But reliability comes from the constraints around it: attempt limits, no-progress circuit breakers, read-only verification, and an explicit place for people to decide.

I also deliberately kept the scope narrow. Narrow scope makes state and verification semantics clearer than claiming support for every frontend stack.

The point is not "AI builds the website alone."

It is redistributing responsibility:

- orchestrator owns state and interruption  
- scripts own objective facts  
- LLMs handle judgment  
- people approve page-level quality  
- rules carry lessons into the next project

As code generation gets cheaper, engineering value moves into constraints, verification, and knowing when to stop.

Full write-up here:  
[your blog URL]/blog/agent-harness-architecture
