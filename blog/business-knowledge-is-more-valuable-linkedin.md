# LinkedIn Post: A Company Engineer Thought Her Job Title Was Wrong

“Should you talk to HR? I think your job title is wrong.”

A company engineer told her this after seeing the system she built.

He assumed she was a newly hired software engineer whose profile had not been updated.

Her title was correct. She was a data scientist.

A few months earlier, she knew SQL, basic Python, and the company's operations, but had never built a complete application.

Other people inside the company were also experimenting with AI vibe coding. Most results stopped at a dashboard backed by fake data.

She delivered something different:

- a React and C#/.NET application
- services and APIs
- continuously refreshed production data
- an AI analysis layer
- a hot data path that reduced a roughly 10-minute wait to under 1 second

The application became a reference product. Other teams began using its structure as a template.

AI did not create that result by itself.

I first gave her a map of the system, then broke real features into verifiable tasks. AI produced drafts, but she had to explain the code, validate it against business data, inspect failures, and defend her decisions during review.

The performance fix also required more than another prompt.

Redis was the obvious suggestion, but company policy prohibited it. Instead of endlessly tuning the same slow request, we moved expensive preparation outside the user path and served hot data from an application-side SQLite cache.

This experience changed how I think about value in the AI era.

AI makes first-draft code cheap. It does not make business correctness, architecture, optimization, or handoff cheap.

Business experts decide what to build and whether the result is correct.

Senior engineers provide the map, architecture, and engineering gates.

AI produces the first draft quickly.

She did not change her job title. She expanded what someone with that title could do.

Full article in the first comment.
