# A Company Engineer Thought Her Job Title Was Wrong

“Should you talk to HR? I think your job title is wrong.”

A software engineer at the company said this after seeing the system she had built.

He assumed she was a newly hired developer whose employee profile had not been updated.

Her title was correct. She was a data scientist. A few months earlier, she knew SQL, basic Python, and the company's operational data, but she had never built a complete application independently.

While other people inside the company were experimenting with AI vibe coding and producing dashboards backed by fake data, she had delivered a real React and C#/.NET application. It connected to production data, included services and APIs, refreshed its data continuously, and reduced a roughly ten-minute wait to under one second.

The application later became a reference product. Other teams began using its structure as a template for their own internal tools.

The interesting part of this story is not that someone who “could not code” suddenly learned to code.

The more important question is this: When AI makes code cheaper, how much value can someone with deep business knowledge create under the guidance of an experienced engineer?

## She Had Never Built a Full Application, but She Understood the Hardest Part

I was consulting for a company that provides testing, repair, and logistics services for communication devices. My primary collaborator was this data scientist.

She did not have full-stack development experience. She did not initially know how React should communicate with a backend, why services and APIs needed boundaries, or how to maintain an application composed of a frontend, backend, and database.

She did understand what the company's data meant.

She knew the states a device moved through from intake and testing to repair and shipment. She knew which metrics could be combined and which definitions could never be mixed. She knew what management needed to see before making an operational decision.

That knowledge is difficult to extract from a codebase. Giving an AI the database schema does not automatically provide it.

An engineer can build a polished dashboard in days and still spend months learning why the numbers on it are correct. Her situation was the reverse. She did not yet know how to assemble the application, but she knew what a meaningful result looked like from the beginning.

Historically, that knowledge needed an engineer to translate it. The business expert described a problem, the engineer interpreted it, and software eventually emerged. Context was lost at every handoff.

AI changed that value chain. It gave her a way to turn business judgment into working software more directly.

## A Dashboard With Fake Data Is Not a Product

Other people at the company were also beginning to experiment with vibe coding.

Generating a page from a prompt was easy. Add charts, metric cards, and fake data, and something that looked like a product appeared quickly.

There was still a large distance between a demo and a product.

A real internal application has to answer:

- Where does the data come from, and how often does it update?
- How does the frontend communicate with the backend?
- What does the page show when an API fails?
- How do operational states map into reporting definitions?
- What happens when queries are too slow?
- Who owns logging, debugging, and maintenance?
- Will anyone modify the system after the original author leaves?

Fake data is never late, never missing a field, and never violates a business rule. Production data does all three.

Vibe coding can move someone quickly to “ready for a demo.” Moving from a demo to something the company can depend on still requires a complete engineering process.

What she built was not a page wrapped around sample data. It was an application in which the frontend, services, APIs, cache, and AI analysis worked together against continuously refreshed business data.

That is why the company engineer thought her title was wrong. He was not looking at a data science experiment. He was looking at the kind of product he expected a software engineer to deliver.

## AI Did Not Train Her by Itself

If I had simply given her Cursor and said, “Use AI to build the system,” the result might have looked like every other vibe-coded dashboard.

AI can generate code. It does not automatically teach someone:

- where the current task belongs in the larger system;
- why the frontend and backend should remain separate;
- why a feature belongs behind a service;
- where logging and error handling are necessary;
- which outputs can be accepted and which must be rejected;
- how to prove that a plausible number is actually correct.

My role was not to write everything for her, and it was not to watch her regenerate the same feature repeatedly.

I started by giving her a map:

```text
business need → frontend → API → service → database and cache
```

Before implementing a feature, she needed to know which layer she was changing, what entered that layer, and what depended on its output. With that map, AI-generated code was no longer an unexplained block dropped into the repository.

We then decomposed real requirements into verifiable tasks. Define the page behavior. Confirm the API contract. Identify the source data. Handle empty states, errors, and timeouts.

AI could produce a draft, but she had to read and explain it:

- What does this code do?
- Why does it belong in this layer?
- What happens when the dataset is empty?
- What will the user see when the API fails?
- How can we prove that the result matches the business definition?

Code she could not explain was not merged. When something failed, she inspected logs, responses, and real data before asking AI. Repeatedly pressing “try again” was not a debugging method.

As the project progressed, I handed her increasingly independent modules. She started by changing frontend behavior, then added services and APIs, and eventually debugged issues and explained the system architecture herself.

AI increased her speed. A process that required understanding, verification, and review produced the growth.

## From Ten Minutes to One Second Required More Than Another Prompt

The clearest demonstration of senior engineering value came from a performance problem.

The database queries and refresh workflow behind the dashboard took roughly ten minutes. If every page load waited for that process, the application had little practical value even if every feature was technically correct.

The obvious answer was Redis. An AI assistant could suggest it instantly.

Company policy did not allow Redis.

A vibe-coding response might ask the model to rewrite the query, add threads, switch libraries, or quietly introduce a component that violated policy. If the local demo became slightly faster, the problem appeared solved.

An experienced engineer asks different questions:

- Why is expensive data preparation happening in the user request path?
- Which data must be current, and which can refresh periodically?
- Can the application serve the previous snapshot when refresh fails?
- What is the simplest maintainable option when Redis is prohibited?

We stopped trying to squeeze more speed from the ten-minute path and changed the data flow.

The system periodically pushed frequently used data into an application-side SQLite cache. Expensive preparation happened outside the request, while the dashboard and AI analysis read from a hot path.

The result reduced a roughly ten-minute wait to under one second.

SQLite was not fashionable, but it satisfied company policy and fit the data volume, refresh model, and team's maintenance capacity. The correct architecture is not the one with the most impressive technology names. It is the one that solves the problem under real constraints.

Real optimization often does not mean making the old path slightly faster. It means recognizing that the work should never happen when the user clicks.

## Why Business Experts Become More Valuable

AI lowers the barrier to producing a first implementation. It does not lower the barriers to correctness, production readiness, or diagnosis.

As first-draft code becomes easier to obtain, value moves toward what happens before the code.

Business experts know:

- which problem is worth solving;
- which metric actually matters;
- which data definitions cannot be mixed;
- when a feature is truly complete;
- whether users will rely on it.

Someone who writes code without understanding the business can execute a low-value requirement perfectly. Someone who understands the business and can use AI can shorten the distance between the problem and a working implementation.

She created a reference product not because she suddenly acquired every programming skill, but because she already possessed the hardest part to copy: operational context and the ability to judge correctness.

AI made that judgment executable.

## Why Senior Engineers Remain Essential

If business knowledge is becoming more valuable, does engineering matter less?

No.

AI is reducing the scarcity of routine implementation. Senior engineering was never valuable only because senior engineers could type code.

### They Define the Real Problem

“The dashboard is slow” is a complaint.

“The user request repeats roughly ten minutes of data preparation under a policy that prohibits Redis” is an engineering problem.

### They Treat Constraints as Architecture

Security policy, cost, team ability, deployment environment, and maintenance are inputs from the first day. AI often provides a technically valid solution that cannot be used inside the organization.

### They Design for Failure

A complete application must handle API failures, stale data, refresh errors, and unavailable dependencies. A demo has to run once. A product has to run every day.

### They Design for Handoff

Service boundaries, API contracts, logs, and documentation determine whether anyone can understand and modify the system after its author leaves.

### They Know When to Stop the AI

When the numbers do not reconcile, two approaches conflict, or repeated generations produce no improvement, experienced engineers stop writing code and return to the data and assumptions.

AI can answer how to write something quickly. These decisions determine why it should be written that way and whether it deserves to reach production.

## From One Person's Project to a Company Template

By the end of the project, she could modify the frontend, add services and APIs, and investigate failures through logs.

More importantly, the application did not become an abandoned black box after the consulting engagement. The company continued using it, and other teams began treating it as a template for similar internal products.

That changed how I think about developing another person.

Success is not teaching someone to copy my code or requiring them to memorize an entire framework. Success is leaving them able to understand the system, judge its output, continue building, and transfer the method to others.

The engineer who thought her title was wrong had accidentally described the result.

She had not changed her title. She had expanded what someone with that title could do.

## The Best Combination Is Not One Side Replacing the Other

This story does not prove that business specialists should replace engineers.

It shows that AI is moving value toward both sides of the code.

Before the code, business specialists decide:

- what to build;
- why it matters;
- whether the data is correct;
- whether the result is useful.

After the code, senior engineers ensure:

- the architecture fits the constraints;
- performance supports real usage;
- failure can be handled;
- the system can be maintained and handed off.

AI produces much of the implementation in the middle.

The best combination is neither a business specialist vibe coding alone nor a senior engineer owning every task. It is:

> Business experts decide what to build and whether it is correct. Senior engineers provide the map, architecture, and engineering gates. AI produces the first draft quickly.

## Conclusion

AI did not turn her into a senior engineer overnight.

AI made her business judgment executable. Guidance from an experienced engineer turned the generated code into a product that was reliable, maintainable, and reusable.

While other vibe-coded projects at the company remained dashboards with fake data, she delivered a complete application connected to real operations and made it a template for other teams.

Simply knowing how to produce code will become less defensible as a professional advantage.

The scarce people will be those who understand the business and those who can reliably turn that understanding into a system.

The most valuable people will learn to do both.
