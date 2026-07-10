# Day 40 – AI Assistant Builder

## Challenge

Build a custom AI Assistant using Claude by designing the user interview flow, production-grade system prompt, premium UI, and live Claude integration.

---

# Objective

Today focused on understanding how modern AI products are built from end to end rather than simply calling an LLM.

The assistant was designed through:

* User interview
* Prompt engineering
* UX design
* Frontend development
* Documentation
* Claude integration

---

# Workflow Completed

* Read the provided resources
* Watched the solution video
* Opened Claude
* Set effort level to **Low**
* Started a new conversation
* Used the AI Assistant Builder prompt
* Completed the interview using MCQ selections
* Generated the complete HTML application
* Tested the assistant
* Reviewed the generated system prompt
* Explored the documentation panel
* Took screenshots
* Saved the generated HTML
* Uploaded all required deliverables to GitHub

---

# AI Assistant Prompt Used

```text
AI Assistant Builder

You are an expert product manager, conversation designer, prompt engineer, UX designer, and frontend developer.

Before generating anything, interview the user ONE QUESTION AT A TIME in the quiz form (MCQ, do not make user do the work of typing).

1. What kind of assistant do you want to build? (Ask their domain and then niche, then give 4 suitable options.)
2. Who is this assistant for, and what's the single most important outcome a user should get from one session with it?
3. What inputs will people give it? (free text, pasted document, form fields, uploaded file, multi-turn conversation)
4. What should the output look like? (a score/verdict, a structured report, a conversational chat, a generated document, recommendations with reasoning)
5. Any tone or personality preference? (professional, friendly, blunt/expert, playful)

Then design and build:

1. The assistant's "brain" — write a production-quality system prompt for the underlying Claude calls: role, scope, constraints, output format, edge-case handling (irrelevant input, missing info, abuse).

2. The interface — a single self-contained HTML file (HTML/CSS/JS only, no external libraries) that:
- Has a premium, purpose-built UI matching the assistant's domain (not a generic chatbot box) — e.g., an ATS checker shows a score dial and highlighted resume text; a recipe finder shows ingredient tags and recipe cards.
- Calls the Claude API live via fetch to https://api.anthropic.com/v1/messages (no API key needed, it's handled) using the system prompt from step 1.
- Handles loading states, errors, and empty states gracefully.
- Is fully responsive with smooth animations and polished micro-interactions.

3. Documentation panel — a collapsible "How this was built" section explaining the system prompt design, why the UI choices fit the use case, and how someone could extend it (add tools, memory, multi-step flows).

Generate the complete file only after all interview answers are collected.
```

---


# Key Learnings

## 1. AI products begin with user understanding

A good assistant starts with interviewing the user to understand the actual problem before generating responses.

---

## 2. System prompts define assistant behavior

Production-quality prompts include:

* Role definition
* Scope
* Constraints
* Response formatting
* Missing information handling
* Edge cases
* Safety rules

---

## 3. User experience matters as much as AI

Purpose-built interfaces provide a significantly better experience than generic chat windows by surfacing the most relevant information.

---

## 4. Prompt Engineering is Product Design

Modern AI applications combine:

* Product thinking
* UX
* Prompt engineering
* Frontend development
* Documentation

---

## 5. Documentation improves maintainability

Including explanations for prompt design and UI architecture makes future enhancements easier.
