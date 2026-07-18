# Day 48 – The Verdict Engine

## Overview

Today I built **The Verdict Engine**, an AI-powered decision intelligence application that helps users compare multiple real-world options using verified information instead of fabricated scores.

Unlike traditional comparison tools, the application makes every recommendation transparent by exposing the research process, citations, and assumptions used to generate rankings.

For this implementation, the application compares:

* MacBook Pro 14" (M4 Pro)
* Dell XPS 15 (9530)
* ASUS ProArt Studiobook 16 OLED
* Lenovo ThinkPad P1 Gen 7

for professional video and photo editing workloads.

---

# Prompt Used

```text
Compare & Decide Builder

You are an expert research analyst, data journalist, UX designer, and frontend developer.

Before generating anything, interview the user ONE QUESTION AT A TIME in quiz form (MCQs only).

1. What are you trying to decide between? (Ask for the general category, then present four realistic examples of comparable options in that category.)
2. Who is this tool for, and what's the one decision they need to walk away confident about?
3. What criteria matter in this comparison? (Ask for at least four measurable criteria, e.g. cost, time, risk, quality, availability.)
4. Where should the underlying data come from? (Ask the user to name at least two real, citable sources per criterion, or confirm you should research and cite real sources yourself.)
5. Should the user be able to weight criteria by personal priority, or see one fixed ranking?

After collecting the answers:

1. Research and verify real data points for each option against each criterion, using only sources you can name and cite. Do not invent numbers, benchmarks, or scores.

2. Build a premium single-file HTML application (HTML/CSS/JavaScript only, no external libraries) that lets the user adjust criteria weights and see a ranked result update live.

The application should:
- Display a visible sources panel listing every citation used.
- Flag clearly if any data point is an estimate or a synthetic placeholder rather than sourced fact.
- Handle loading states, empty states, and edge cases gracefully.
- Be fully responsive with clean, professional visual design.

3. Add a collapsible "How this was researched" panel explaining where each data point came from and any conflicts between sources you had to resolve.

Generate the complete application only after all interview questions have been answered.

Return ONLY the complete HTML inside one code block.
```

---

# Features

* Interactive criteria weight sliders
* Live ranking updates
* Multiple weighting presets
* Premium responsive interface
* Real-world comparison of four creator laptops
* Transparent scoring methodology
* Source panel containing every citation
* Estimate labels for subjective scoring
* Research methodology section
* Conflict resolution documentation
* Empty-state handling
* Loading-state support

---

# Research Sources

The comparison uses publicly available information from official manufacturer documentation and reputable review sources, including:

* Apple
* Dell
* ASUS
* Lenovo
* Notebookcheck
* RTINGS
* Tom's Hardware
* PCMag
* TechRadar
* Laptop Mag
* Ultrabook Review

All specifications, pricing information, benchmark references, and battery data were verified against named sources wherever possible.

---

# Key Learnings

* AI systems become significantly more trustworthy when every claim is backed by a verifiable source.
* Transparency is as important as recommendation quality.
* Allowing users to control weighting creates personalized decision-making instead of one-size-fits-all rankings.
* Conflicting information across multiple sources should be documented instead of hidden.
* Responsive visualizations make complex comparisons easier to understand.
* Separating sourced facts from estimated values improves credibility.
* Evidence-driven AI applications provide more value than opaque recommendation systems.

---
