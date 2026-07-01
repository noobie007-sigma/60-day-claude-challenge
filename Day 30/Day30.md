# Day 30 — Supply Chain Optimization with Claude

## Challenge

**Build a Supply Chain Optimizer**

This project demonstrates how AI can generate an interactive enterprise simulation that teaches supply chain optimization through real business decisions.

---

# Project Overview

The application allows users to optimize an existing supply chain by making decisions across multiple operational areas.

Rather than creating a company from scratch, users improve an existing supply chain while balancing several business objectives:

* Cost
* Delivery Speed
* Operational Risk
* Customer Satisfaction
* Sustainability

Each playthrough generates a new company profile, making every simulation unique.

---

# Features

* Interactive React application
* Single HTML file
* React via CDN + Babel
* Runs completely offline
* Random company generation
* Beginner-friendly explanations before every decision
* Live KPI dashboard
* Animated progress bars
* Premium enterprise dark UI
* Responsive design
* Replay functionality
* Overall Supply Chain Score
* Business strengths analysis
* Weakness analysis
* Risk identification
* Optimization recommendations

---

# Supply Chain Decisions

Users optimize:

* Supplier Strategy

  * Single Supplier
  * Multiple Suppliers

* Factory Location

* Warehouse Strategy

* Transportation Method

  * Road
  * Rail
  * Sea
  * Air

* Inventory Strategy

  * Low Inventory
  * Balanced Inventory
  * High Inventory

Each decision immediately updates business metrics to demonstrate real-world operational trade-offs.

---

# Business Metrics

The simulator tracks:

* Cost
* Delivery Speed
* Supply Chain Risk
* Customer Satisfaction
* Sustainability

---

# Final Dashboard

The optimization report includes:

* Overall Supply Chain Score (0–100)
* Performance Summary
* Key Strengths
* Operational Weaknesses
* Biggest Business Risk
* Three Actionable Improvement Recommendations

---

# Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* React (CDN)
* Babel JSX

---

# Prompt Used

```text
You are an expert frontend developer, UX designer, game designer, and supply chain consultant.

Build a complete single-file HTML app named 'Supply Chain Builder'.

Design it so a complete beginner can understand supply chains. Before every decision, explain what the concept means, why it matters, and how it affects a business.

Requirements:

* Output ONLY one HTML file.
* React via CDN + Babel JSX.
* Plain HTML, CSS, and JavaScript only.
* No Tailwind, npm, backend, APIs, images, or external assets.
* Runs offline by opening the HTML file.
* No placeholders or incomplete features.

Flow:

1. Welcome screen introducing supply chains in simple language.
2. Generate a random company (industry, products, countries served, demand level).
3. Guide the player through building their supply chain by choosing:
   * Number of suppliers (single or multiple)
   * Factory location
   * Warehouse strategy
   * Transportation method (road, rail, sea, air)
   * Inventory strategy (low, balanced, high)
4. After every choice, explain the trade-offs in plain English.
5. Display live business metrics that update after each decision:
   * Cost
   * Delivery Speed
   * Risk
   * Customer Satisfaction
   * Sustainability
6. At the end, generate a dashboard with an Overall Supply Chain Score (0-100), strengths, weaknesses, biggest risk, and three practical improvements.

Design:

* Premium enterprise dashboard.
* Dark theme.
* Responsive.
* Smooth transitions.
* Rounded cards.
* Hover effects.
* Animated progress bars.
* Replay button.

Randomize company details each playthrough. Organize the app into reusable React components using useState. Ensure every button works and return ONLY the complete HTML inside one code block.
```

---


# Key Learnings

* Supply chain optimization is about improving existing operations rather than rebuilding them.
* Every business decision involves trade-offs across cost, speed, risk, and customer satisfaction.
* Diversifying suppliers reduces operational risk but can increase costs.
* Warehouse placement significantly affects delivery performance.
* Transportation choices influence both sustainability and delivery timelines.
* Inventory strategies require balancing storage costs against stock availability.
* AI can generate realistic enterprise simulations that simplify complex business concepts into interactive learning experiences.

---


# Outcome

This project demonstrates how AI-assisted development can rapidly create educational enterprise simulations that teach supply chain management through hands-on decision-making, real-time KPI tracking, and business optimization analysis.
