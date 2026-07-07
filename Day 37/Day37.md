# Day 37 – Task Compass

## Objective

Built an interactive organizational learning simulation using Claude AI that teaches ownership, delegation, workflow thinking, and collaboration through a management-style game.

---

## Prompt Template
```
You are an expert educational game designer, UI/UX designer, organizational consultant and frontend developer.

Before generating anything, ask the user ONE question:

"What type of workplace would you like to explore?"

Options: Tech Company, Startup, Corporate Office, Café / Restaurant, Retail Business, Hospital / Healthcare, School / University, Manufacturing, Media / Creative Agency, Freelancer / Small Business, Other (one sentence).

Wait for the user's answer.

Then generate a beautiful single-file HTML application called: Task Compass

Subtitle:
Learn how work flows through real organizations.

IMPORTANT

Generate ONLY one self-contained HTML file.

Use only: HTML, CSS, Vanilla JavaScript.

Do NOT use: React, Tailwind, npm, Babel, external libraries or APIs.

Everything must work completely offline.

Internally verify there are no syntax or runtime errors before returning the code.

OBJECTIVE

The goal is NOT to test job titles.

The goal is to teach: ownership, delegation, collaboration, escalation and how work moves through organizations.

The experience should feel like a management simulation rather than a quiz.

GAMEPLAY

The application contains THREE stages.

Each stage becomes slightly more realistic.

Display progress throughout.

STAGE 1

Who Owns This? (do 3 questions of this only)

Display one realistic workplace task at a time.

Example:

"A customer reports that payments fail only on iPhones."

Present 6-8 role cards.

Examples for a tech company: Frontend Developer, Backend Developer, QA Engineer, Product Manager, UX Designer, Customer Support, Engineering Manager.

The player drags ONE role into the highlighted ownership slot.

After submission reveal:

✓ Primary Owner

✓ Why they own it

✓ Which roles may assist.

Never simply say Correct or Wrong.

Always explain the reasoning.

Include 8-10 different task cards.

STAGE 2

Task Routing (do 3 questions of this only)

Now the player manages incoming work.

A task appears.

The player must build the workflow.

Example:

Customer Support ↓ QA ↓ Backend ↓ Product Manager ↓ Customer

The player drags role cards into the correct order.

Some tasks may only need three steps.

Others may need five.

After submission animate the task moving through the organization.

Explain why this order is commonly used.

STAGE 3

Collaboration Challenge (do 3 questions of this only)

Present larger situations.

Examples:

Customer satisfaction suddenly drops

Sales increase dramatically

Negative reviews appear online

A major feature is delayed.

Instead of choosing one owner, allow players to assign up to FOUR departments or roles.

The player should think about collaboration.

After submission display:

Primary Owner

Supporting Teams

Reasoning

Possible Communication Flow.

Emphasize that complex problems usually require multiple people.

SCORING

Instead of points, award understanding.

Categories:

Ownership

Delegation

Collaboration

Workflow Thinking.

Display a radar or bar chart at the end using only HTML, CSS and JavaScript.

FINAL REFLECTION

Instead of a score, generate:

What you understood well

Where you tended to over-assign responsibility

Where you underestimated collaboration

One insight about how organizations actually work.

Example:

"Many real workplace problems are solved by teams rather than individuals."

Avoid absolute language.

GAME FEEL

The experience should feel satisfying.

Use:

drag-and-drop

animated cards

smooth transitions

satisfying snap animations

subtle sounds using CSS/JS only if possible (optional)

hover effects

progress indicator

completion celebration.

Avoid making it feel like an exam.

It should feel like a modern strategy game.

DESIGN

Premium modern UI.

Dark mode.

Glassmorphism.

Rounded cards.

Animated gradients.

Distinct colors for each department.

Role cards should feel collectible.

Task cards should resemble work tickets.

Use icons or emojis where appropriate.

TECHNICAL REQUIREMENTS

Store all scenarios in JavaScript objects.

Reuse components wherever possible.

Optimize code size for Claude Free.

If necessary, reduce the number of scenarios instead of reducing functionality.

Everything must remain offline.

Before returning:

Verify drag-and-drop works.

Verify scoring works.

Verify animations work.

Verify no syntax errors.

Verify responsive layout.

Return ONLY the complete HTML inside one code block.
```

## Workplace Selected

**Tech Company**

---



## Features

* Three-stage interactive gameplay
* Drag-and-drop role assignment
* Workflow routing simulation
* Collaboration challenge
* Organizational Thinking Dashboard
* Reflection-based learning
* Dark modern UI
* Glassmorphism design
* Fully offline HTML application
* Responsive layout

---



## Key Learnings

* Ownership should be assigned to the role best positioned to solve the primary problem rather than to the most senior person.
* Effective delegation improves efficiency by directing work to the appropriate specialists.
* Organizational workflows often involve multiple departments before a task reaches completion.
* Complex workplace challenges usually require collaboration between technical, product, customer support, and management teams.
* Clear communication pathways reduce delays and improve coordination.
* Successful organizations rely on structured processes rather than individual effort alone.

---

## Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript

---

