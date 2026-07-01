# Day 29 — Operation Lifeline: Supply Chain Crisis Lab

## Enterprise Business Simulations with Claude

### Project Overview

Operation Lifeline is an interactive enterprise simulation that teaches supply chain management through realistic crisis scenarios. Players take the role of an operations leader responsible for navigating unexpected disruptions while maintaining profitability, customer satisfaction, and business continuity.

The application was generated with Claude AI as a single self-contained HTML file using React via CDN and Babel, requiring no backend or external dependencies.

---

# Features

* Random fictional company generation
* Multiple supply chain crisis scenarios
* Interactive War Room decision making
* Four-round supplier negotiation system
* CEO leadership assessment
* AI investment strategy selection
* Executive performance dashboard
* Business KPI tracking
* Personalized recommendations
* Replayable randomized simulations
* Responsive enterprise dashboard
* Offline execution

---

# Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* React (CDN)
* React Hooks (useState)
* Babel JSX


---

## CEO Boardroom

> Add screenshot here

```
screenshots/ceo-boardroom.png
```

---

## AI Strategy Selection

> Add screenshot here

```
screenshots/ai-strategy.png
```

---

## Executive Dashboard

> Add screenshot here

```
screenshots/executive-dashboard.png
```

---

# What I Learned

* Supply chain disruptions require balancing operational efficiency, customer expectations, supplier relationships, and financial performance.
* Strategic decisions often involve trade-offs between short-term costs and long-term resilience.
* Supplier negotiations influence trust, pricing, and delivery timelines.
* Leadership decisions during crises significantly affect business outcomes.
* AI can improve forecasting, procurement, inventory optimization, and risk monitoring.
* React's component-based architecture is well suited for building complex business simulations.
* Claude AI can rapidly generate production-quality educational applications with modern UI and interactive logic.

---

# Prompt Used

```
You are an expert frontend developer, UX designer, game designer, and supply chain consultant.

Build it so a complete beginner can play it — plain language, context before every decision, 'why does this matter' explanations, and guidance that makes you feel smart rather than lost.

Build a complete single-file HTML app named "Operation Lifeline: Supply Chain Crisis Lab".

Requirements:
• Output ONLY one HTML file.
• React via CDN + Babel JSX.
• Plain HTML, CSS, and JavaScript only.
• No Tailwind, npm, backend, APIs, images, or external assets.
• Must run offline by opening the HTML file.
• No placeholders or incomplete features.

Flow:
1. Welcome screen with title, subtitle, and Start Simulation.
2. Generate a random fictional company.
3. Generate one random supply chain crisis.
4. Crisis War Room with six response actions; player selects three.
5. Four-round supplier negotiation.
6. CEO Boardroom with five leadership questions.
7. AI investment selection.
8. Final executive dashboard showing business KPIs and personalized feedback.

Design:
• Premium dark enterprise dashboard
• Responsive
• Rounded cards
• Progress bars
• Hover effects
• Smooth animations
• Replay support
• Randomized scenarios

Structure the application using reusable React components with useState. Ensure every button functions correctly and the app runs offline as a single HTML file.
```

---