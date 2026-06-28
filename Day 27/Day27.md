# Day 27 – Prior Authorization Story Simulator

## Challenge

**Interactive Storytelling with Claude – Day 27**

Build a Prior Authorization Story Simulator that teaches healthcare workflows through interactive conversations.

---

# Project Overview

This project demonstrates how AI can convert complex healthcare processes into engaging educational experiences.

The simulator follows **Rahul**, a patient diagnosed with Rheumatoid Arthritis, while **Priya**, a healthcare operations specialist, explains every step of the Prior Authorization (PA) workflow through interactive conversations.

The application was developed as a **single HTML file** using:

* HTML5
* Tailwind CSS CDN
* Vanilla JavaScript
* Dynamic DOM creation using `createElement()` and `appendChild()`
* No `innerHTML` used for chat messages

---

# Features

* Interactive healthcare storytelling
* 8 guided story chapters
* Dynamic chat interface
* Branching conversation choices
* Progress bar
* Patient and healthcare specialist conversations
* Centered narrator and doctor messages
* Beginner-friendly healthcare explanations
* Responsive modern UI
* Restart story option

---

# Story Flow

1. Doctor Visit
2. Insurance Roadblock
3. What is Prior Authorization?
4. Insurance Review
5. Denial
6. Appeal
7. Approval
8. Final Takeaways

---




# Key Learnings

* Prior Authorization helps insurers verify that treatments are medically necessary.
* Providers submit PA requests directly to the payer.
* Missing documentation is one of the most common reasons for denials.
* A denial is not always final and can often be overturned through an appeal.
* Appeals require supporting clinical documentation and a Letter of Medical Necessity.
* Approved Prior Authorizations are stored for future reference.
* Healthcare organizations monitor operational metrics such as:

  * Denial Rate
  * Appeal Rate
  * Resolution Time
  * Approval Rate

---

# Technical Learnings

During this project, I learned how to:

* Build append-only chat interfaces
* Create dynamic UI elements using JavaScript
* Design branching conversation flows
* Implement progress tracking
* Build educational simulations using AI-generated code
* Structure healthcare workflows into interactive experiences
* Improve user engagement through storytelling

---

# Prompt Used

## Prior Authorization Story Simulator

```text
Single-file HTML app. HTML, Tailwind CSS CDN, Vanilla JavaScript.

Use createElement + appendChild for every new chat bubble.
Never call innerHTML = on the chat container.

Design: same as previously established.

Characters

👦 Rahul — patient. Appears left.

👧 Priya — healthcare operations specialist. Appears right.

Narrators and doctors appear as centered italic text only, never chat bubbles.

Story — 8 scenes with append-only chat feed and progress bar:

1. Doctor Visit — Rahul visits City Medical Center. Dr. Patel diagnoses Rheumatoid Arthritis, prescribes Humira.

2. Insurance Roadblock — Dr. Patel's office submits PA directly to StarCare Health (payer). No pharmacy involved. Flow:
Provider → PA Request → Payer

Approved PA is saved on file permanently.

3. What is PA? — Priya explains in plain language. Include:
Step therapy isn't just bureaucracy—for aggressive diagnoses, delays can affect disease progression.

Reference:
AMA 2023 PA Survey:
PA causes treatment delays in the majority of cases.

4. Insurance Review

Explain:
- Eligibility
- Clinical documentation
- ICD-10 diagnosis
- Step therapy history

5. Denial

Denied because of missing step therapy documentation.

Mention:

PA denials cost physician offices 2+ staff hours to resolve.

6. Appeal

Gather documents.

Letter of Medical Necessity.

Formal appeal.

7. Approval

PA approved.

Reference number generated.

No repeat PA required for Humira.

8. Takeaways

Patient perspective.

Healthcare system perspective.

After every scene provide two choices.

Use beginner-friendly language.

Healthcare education design system.
```

---

# Outcome

This project demonstrated how conversational AI can simplify complex healthcare workflows through interactive storytelling. Instead of presenting static documentation, the simulator provides an engaging, user-friendly learning experience that improves understanding of the Prior Authorization process.

---

**#60DayClaudeChallenge**
