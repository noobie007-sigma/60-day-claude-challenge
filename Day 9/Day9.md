# Day 9 — Build & Enhance an AI Nutrition Analytics App

## Challenge

Build an AI-powered Nutrition Analytics Application (NutriScope) using Claude Artifacts and iterative development.

## Objective

Learn how professional AI builders develop applications:

1. Build a working MVP first.
2. Validate functionality.
3. Enhance incrementally through focused prompts.
4. Compare outputs and improvements.

---

## MVP Version

### Features

* User Profile Inputs

  * Age
  * Gender
  * Height
  * Weight
  * Activity Level
  * Dietary Preference

* Food Logging

  * Add Food
  * Quantity
  * Unit Selection
  * Editable Table
  * Remove Entries

* Nutrition Database

  * 20 Common Foods

* Analytics

  * Calories
  * Protein
  * Carbohydrates
  * Fat
  * Fiber
  * Iron
  * Calcium
  * Vitamin C
  * Vitamin D
  * Vitamin B12

* Dashboard

  * Energy Progress
  * Macro Tracking
  * Nutrient Completion
  * Deficiency Detection

* Recommendations

  * Food Additions
  * Food Swaps
  * Portion Suggestions

---

## Enhanced Version

### Additional Features

* CSV Upload Support
* Expanded Food Database (+40 Foods)
* Additional Micronutrients
* 2-Day Meal Planner
* Nutrition Risk Analysis
* Educational Disclaimer
* Nutrition Information Sources
* Advanced Charts
* Enhanced Recommendation Engine

---


## Prompt Used:
### ROLE
Act as a warm, encouraging Registered Dietitian-Nutritionist + frontend engineer.

#### STEP 1 — RUN A SHORT WIZARD (do NOT build yet)
Interview the user in a few grouped messages — NOT one question at a time, and NOT everything at once. After each group, briefly acknowledge their answers, then STOP and wait for their reply before continuing. Never answer your own questions or jump ahead to the app. Tell them they can say "default/skip" for anything.

1. First message — ask together: age, sex, weight, height, and location (for regional foods & guidelines).
2. Second message — ask together: activity level (sedentary/light/moderate/active), diet preference (veg/non-veg/eggetarian/vegan), goal (maintain/lose/gain), and — only if relevant — pregnant or lactating.
3. Third message — "Now walk me through your whole day: everything you ate and drank, with rough amounts (cups, grams, pieces) — breakfast through to snacks and drinks." If their answer is vague or skips meals, ask ONE quick follow-up to fill gaps.

Then give a short recap of their profile + food log and ask: "Ready for me to build your nutrition dashboard, or want to change anything?" Build ONLY after they confirm.

#### STEP 2 — BUILD THE APP (after confirmation)
Build a single self-contained .html file (vanilla HTML/CSS/JS) the user can save and run instantly by double-clicking — no setup, build step, or server. Load libraries (Chart.js, SheetJS, PapaParse) via CDN <script> tags as UMD/global builds, NOT ES modules, so it runs from a local file. Keep state in memory; wrap any localStorage in try/catch.

Pre-load the app with everything from the wizard: fill the editable profile with their answers, and convert the day they described into logged food items with best-estimate quantities and per-100g nutrient values — so the dashboard shows THEIR real analytics on open (no generic sample data). Add these foods to the database so they stay editable.

The app must:
1. Let the user keep logging/adjusting food TWO ways: (a) Excel/CSV upload with a downloadable template, and (b) manual searchable entry with quantity + unit (auto-convert cups/pieces/grams). Include an embedded offline food database (~50–70 common foods, regional + global, per 100g, approximate) plus custom foods.
2. Estimate macros (energy, protein, carbs, fat, fiber) + key micros (vitamin A, C, D, B12, folate, calcium, iron, potassium, sodium, magnesium, zinc).
3. Compute personalized daily targets (Mifflin-St Jeor for energy, RDA/DRI values adjusted for age/sex/activity/pregnancy) and show each nutrient as % of target met.
4. Live dashboard that recalculates instantly on any change: top-5 under-target + top-5 over-target, color-coded progress bars, a macro donut, an energy gauge.
5. For flagged nutrients: a one-line "why it matters," a corrective action (food/portion change matching their diet preference + region), and a brief over/under risk note (e.g., excess potassium→hyperkalemia, iron→overload, vitamin A→toxicity, fiber→GI issues; low iron/B12→anemia, low calcium/D→bone health).
6. A 1–2 day meal plan + snacks matched to their preference and current gaps.
7. A concise daily report (expandable detail) that prints to PDF, plus a "Sources & assumptions" panel naming guidelines used (e.g., ICMR-NIN for India, US DRI / WHO fallback) and flagging all values as estimates.

### RULES
- Comment the core functions: parse input, estimate intake, compute targets, compare, report.
- Educational only, not medical advice — persistent disclaimer. Supportive, non-judgmental tone; never frame results in a way that encourages extreme dieting.
- Modern, clean, responsive design.


## Comparison Notes

| Feature         | MVP      | Enhanced |
| --------------- | -------- | -------- |
| Food Database   | 20 Foods | 60 Foods |
| CSV Upload      | ❌        | ✅        |
| Meal Planner    | ❌        | ✅        |
| Risk Analysis   | ❌        | ✅        |
| Micronutrients  | Basic    | Expanded |
| Charts          | Standard | Advanced |
| Recommendations | Basic    | Advanced |

---

## Key Learnings

### 1. MVP First Works Better

Building a functional version first helps validate requirements before adding complexity.

### 2. Iterative Prompting Produces Better Results

Breaking development into multiple focused prompts improves consistency and quality.

### 3. Claude Artifacts Are Powerful

Claude can generate complete interactive applications with modern UI and analytics capabilities.

### 4. AI Product Development Is About Process

The quality of outcomes depends heavily on how requirements are structured and delivered to AI.

---

## Reflection

This challenge demonstrated that successful AI-assisted development is not about generating the final product in a single prompt. The real advantage comes from iterative improvement, testing, and enhancement.

The MVP-to-Enhanced workflow mirrors real-world software development practices and produces significantly better results.

#60DayClaudeChallenge
