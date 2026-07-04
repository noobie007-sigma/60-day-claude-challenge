# Day 34 — Marketing Analytics with Claude

## Marketing Detective

### Objective

Build an interactive detective-style web application that teaches marketing analytics through investigation, campaign analysis, and evidence-based decision making.

---

# Project Overview

Marketing Detective transforms traditional marketing education into an engaging investigation game.

Players receive fictional marketing cases, examine campaign performance, organize evidence, identify marketing mistakes, and learn best practices through interactive gameplay.

Unlike a traditional dashboard, the application presents every campaign as a mystery that must be solved using customer behavior, campaign metrics, and marketing evidence.

---

# Features

* Interactive marketing investigation
* Detective-themed interface
* Randomized marketing cases
* Drag-and-drop investigation board
* Campaign performance metrics
* Customer comment analysis
* Social media performance evaluation
* Animated investigation flow
* Learning report after each case
* Replay with new investigations
* Responsive UI
* Multiple color themes including Claude Orange

---

# Technologies Used

* HTML5
* CSS3
* JavaScript
* React (CDN)
* Babel
* Responsive Design

---

# Skills Learned

* Marketing Analytics
* Campaign Performance Analysis
* Customer Behavior Analysis
* Marketing Funnel Evaluation
* Evidence-Based Decision Making
* UX Design
* Interactive Learning Design
* Frontend Development

---

# Key Learnings

* Marketing decisions should always be supported by measurable evidence.
* High impressions and reach do not necessarily lead to business growth.
* Customer feedback often provides valuable insights into campaign performance.
* Audience targeting has a greater impact than simply increasing advertising spend.
* Marketing metrics should be analyzed collectively rather than individually.
* Continuous testing and optimization are essential for successful campaigns.
* Storytelling can make complex analytics easier to understand and remember.

---

# Prompt Used

```text
You are an expert frontend developer, UX designer, instructional designer, and marketing strategist.

Ask the user to choose a color theme from a few presets (including Claude Orange).

Create a beautiful single-file HTML application called 'Marketing Detective'.

Use React via CDN + Babel. However, if React/Babel would prevent the app from running reliably as a standalone local HTML file, automatically switch to an equivalent implementation using pure HTML, CSS and vanilla JavaScript. Do not use Tailwind, npm, backend, APIs, databases, images or external assets.

The application should feel like a polished detective game, not a business dashboard. Every interaction should create curiosity before revealing the next clue.

Generate 10 detailed fictional marketing cases. If output quota allows, expand to 15–20 cases. Store them inside a JavaScript array and randomly load a new case each replay.

Each case must contain:
• Company Name
• Industry
• Campaign Objective
• Target Audience
• Marketing Channels
• Budget Allocation
• Campaign Metrics (Reach, CTR, Engagement, Conversions, Sales)
• Customer Comments
• Social Media Performance
• One Primary Marketing Mistake
• Three Supporting Clues
• Correct Explanation
• Suggested Improvements

User Flow:
1. Case Assignment
2. Investigation Board
3. Interactive Investigation with draggable evidence
4. Solve the Case
5. Case Closed animation
6. Learning Report

Design a premium dark detective aesthetic using corkboards, folders, sticky notes, push pins, paper textures, glowing accents, smooth transitions, hover effects, progress indicators, animated charts, and responsive layout.

Reuse React components wherever possible.

Before returning the final HTML, internally verify there are no syntax or runtime errors and that the application runs correctly as a standalone HTML file.

Return ONLY the complete HTML file.
```

---

# Outcome

Successfully built an interactive marketing analytics simulator that teaches campaign investigation through immersive detective-style gameplay.

The project demonstrates how complex marketing concepts can be transformed into engaging learning experiences using interactive frontend development.
