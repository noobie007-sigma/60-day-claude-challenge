# PROJECT-STRUCTURE.md — StockSense

**Status:** Finalized Day 2.

## 1. Full Folder Structure

```
stocksense/
├── index.html                # The single page — all UI markup lives here
├── style.css                 # All styling (single file — no CSS framework/build step)
├── script.js                 # All application logic — search, rule engine, rendering
│
├── data/
│   └── stocks.json           # Curated static dataset (~15-20 stocks) — see SCHEMA.md
│
├── assets/
│   └── (icons/images, if any are added — none required for v1.0 core)
│
├── docs/
│   ├── PRD.md                # (or .docx, from Day 1)
│   ├── ARCHITECTURE.md        # This design set, from Day 2
│   ├── SCHEMA.md
│   ├── API.md
│   ├── UI-WIREFRAMES.md
│   ├── PROJECT-STRUCTURE.md
│   └── Implementation_Blueprint_Day2-10.md
│
├── TESTING.md                 # Created Day 8 — test checklist and results log
├── README.md                  # Project overview, live link, screenshots (finalized Day 10)
└── .gitignore
```

## 2. What Each Part Is Responsible For

| Path | Responsibility |
|---|---|
| `index.html` | The only HTML page. Contains the search bar, and empty containers (`<div id="results">`, etc.) that `script.js` fills in dynamically. No other HTML files are needed since there's only one screen. |
| `style.css` | All visual styling: layout (flexbox/grid), the card/section design system, color-coded ratio/flag indicators, and responsive rules for mobile widths. One file is enough at this project's scale — splitting into multiple CSS files would add complexity with no real benefit. |
| `script.js` | All behavior: fetching `data/stocks.json` once, the search function, the ratio rule engine, the red-flag rule engine, the formatting helpers, and all DOM rendering. Organized internally into clearly-commented sections (per API.md's function list) rather than split into multiple JS files — keeps things simple for a static site with no module bundler. |
| `data/stocks.json` | The entire "database." Structure defined in SCHEMA.md. This is the only file that needs periodic manual updates to refresh stock data. |
| `assets/` | Reserved for any icons or images if visual polish work (Day 6/7) calls for them. Empty is a perfectly valid state for v1.0. |
| `docs/` | Every planning and design document produced across the capstone lives here, so the repo itself tells the full story of the project — useful for the demo and for any future AI conversation picking up mid-build. |
| `TESTING.md` | Created on Day 8 specifically — the bug-bash checklist and log described in the Implementation Blueprint. |
| `README.md` | The public face of the repo — finalized on Day 10 with the live link, screenshots, and feature list. |

## 3. Where Future Code Will Live

- **Day 3 (Setup):** `data/stocks.json` gets populated with the first batch of curated stock records; `script.js` gets its first `fetch()` + console-log-only test.
- **Day 4 (Snapshot):** New rendering code added to `script.js` under a clearly-commented `// --- Snapshot rendering ---` section; new CSS rules added to `style.css` under `/* Snapshot card */`.
- **Day 5 (Ratios):** New logic under `// --- Ratio rule engine ---` in `script.js`; new styles under `/* Ratio rows */`.
- **Day 6 (Red Flags + cohesion pass):** New logic under `// --- Red flag rule engine ---`; cohesion-pass CSS edits touch shared variables/classes across the file, not new files.
- **Day 7 (Stretch, if reached):** Any Chart.js integration is added as a new `<script>` CDN tag in `index.html` plus a `// --- Price chart (stretch) ---` section in `script.js`. No new files unless the codebase clearly outgrows a single JS file (unlikely at this scope).
- **Day 8–10:** No new source files expected — only fixes within the existing three core files, plus the `TESTING.md` and finalized `README.md`.

## 4. Why This Structure Was Chosen

- **Matches the "no backend, static site" architecture exactly** — there is no `server/`, `routes/`, or `models/` folder because none of those concepts exist in this project.
- **Flat and shallow on purpose.** With only 3 core code files, deep nesting (`src/components/...`) would add navigation overhead with zero benefit at this scale, and would work against the 1–2 hr/day time budget.
- **`docs/` centralizes planning artifacts** so the repository is self-explanatory to anyone (including a future AI assistant in a fresh conversation) without needing this chat history.
- **Easy to extend later without restructuring.** If a real backend or framework is ever introduced post-capstone (see PRD Future Scope), this flat structure can be migrated into a more complex one at that time — it doesn't need to be over-engineered now for a possibility that's explicitly out of scope today.