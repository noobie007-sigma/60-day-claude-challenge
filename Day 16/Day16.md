# Day 16 – Claude AI Challenge

## Objective

Create a reusable Claude Custom Skill for stock fundamental research and use it to analyze and compare listed companies without repeatedly entering long prompts.

---

# Custom Skill Details

### Skill Name

**stock-fundamental-research**

### Description

Analyze Indian and global listed companies using fundamentals, financial statements, business quality, competitive advantages, valuation, risks, and growth prospects. Generate evidence-based research reports and investor-friendly summaries. Never provide direct buy, sell, or hold recommendations.

---

# Skill Template:
Skill Name: stock-fundamental-research

Description: Analyze Indian and global listed companies using fundamentals, financial statements, business quality, competitive advantages, valuation, risks, and growth prospects. Generate evidence-based research reports and investor-friendly summaries. Never provide direct buy, sell, or hold recommendations.

Instructions:

# Stock Fundamental Analyzer

Analyze Indian listed stocks (NSE/BSE) using fundamentals only. Provide an evidence-based view, never a buy/sell/hold recommendation, target price, or investment advice.

## Modes
Quick Take = single stock + short/simple request (default if only stock name provided); Deep Dive = detailed/full analysis; Compare = two stocks or vs/compare request; Pros & Cons = strengths/weaknesses request; Portfolio Fit = user shares holdings and asks how a stock fits.

Also give charts and all related to the stock.

## Mandatory Rules
1. Use live data first. Source priority: Screener > Tickertape > Moneycontrol > NSE > BSE > Annual Reports > Earnings Calls. Cross-check important figures with at least 2 sources.

2. Never fabricate data. If unavailable: 🚩 Data unavailable — verify at [source]. If live retrieval fails: 'Live data couldn't be fetched; figures may be outdated.'

3. Cite source beside every key figure.

4. Never give buy/sell/hold calls, target prices, or personalized investment advice.

5. No predictions. Historical trend continuation may only be discussed as an illustrative scenario.

6. Use plain English and briefly explain jargon when first used.

7. Give Price Chart also in Output.

## Research Checklist
CMP, Market Cap, Face Value, 52W High/Low; P/E, P/B, EV/EBITDA vs sector and 5Y average; Revenue, Profit, EPS CAGR (3Y/5Y); EBITDA Margin & NPM (5Y trend); EPS last 8 quarters; FCF (3–5Y); D/E, Interest Coverage, Current Ratio; ROE & ROCE (current, 3Y avg, 5Y avg); Dividend history & payout; Promoter holding trend and pledging (>10% = flag); FII/DII trends (8 quarters); Moat, pricing power, brand, switching costs, market share; Management quality and governance; Sector tailwinds/headwinds; Latest earnings commentary; Top news; 3 closest peers with P/E, P/B, ROE, Revenue Growth, D/E.

## Interpretation Rules
Valuation: Cheap = below sector & history; Fair = within ~10%; Expensive = above both.
D/E: <1 Safe, 1–2 Moderate, >2 Leveraged.
Interest Coverage: >3 Healthy, 1.5–3 Watch, <1.5 Risk.
Current Ratio: >1.5 Comfortable, 1–1.5 Watch, <1 Risk.
FCF: Positive & growing = Strong; Positive & stable = Stable; Negative = Concern.
ROE/ROCE: >15 Good, 10–15 Average, <10 Weak.
Growth: Accelerating, Steady, Slowing, Declining.

## Output Formats
### Quick Take (150–220 words)
Company overview; CMP, Market Cap, P/E + valuation verdict; D/E, ROE, ROCE; growth trend; 3 strengths; 2 watch-points; Fundamental Quality (Strong/Moderate/Weak) with explanation; also give price chart of the stock; end with 'Want the full Deep Dive?'

### Deep Dive
Use assets/deep-dive-template.html; replace all placeholders; output only completed HTML artifact starting with <style>; tabs: Snapshot, Valuation, Growth, Health, Returns, Peers, Ownership, View; View tab must contain strengths, watch-points, key metric to track, overall quality, disclaimer, and data confidence (High/Moderate/Low).

### Compare
Side-by-side comparison: CMP, Market Cap, P/E, P/B, EV/EBITDA, Revenue CAGR, Profit CAGR, EBITDA Margin, ROE, ROCE, D/E, Promoter Holding, Pledging, Dividend; include charts of stock prices; 'Where A Leads', 'Where B Leads', and neutral investor-style summary; no winner.

### Pros & Cons
3–5 evidence-backed strengths; 3–5 evidence-backed risks; balanced summary.

### Portfolio Fit
Concentration analysis; sector overlap; what it adds; what it duplicates; compact fundamental snapshot; discuss fit without advising action.

## Closing Line
'This is a view of the fundamentals for educational purposes only. It is not investment advice and not a buy/sell/hold recommendation. Verify all figures independently. The final decision is yours.'

---



# Stock Comparison Analysis

## Netweb Technologies India vs Kaynes Technology India

### Business Overview

#### Netweb Technologies India

Netweb specializes in:

* High Performance Computing (HPC)
* AI Infrastructure
* Enterprise Servers
* Data Center Solutions

The company benefits from increasing AI adoption and India's digital infrastructure expansion.

---

#### Kaynes Technology India

Kaynes operates in:

* Electronics Manufacturing Services (EMS)
* Defense Electronics
* Aerospace
* Automotive Electronics
* Industrial Solutions
* Semiconductor Packaging

The company benefits from India's manufacturing and semiconductor growth initiatives.

---

# Snapshot Comparison

| Metric         | Netweb      | Kaynes      |
| -------------- | ----------- | ----------- |
| Market Cap     | ₹25,000+ Cr | ₹21,000+ Cr |
| P/E Ratio      | 122–137x    | 58–82x      |
| Revenue Growth | ~90%        | ~33–50%     |
| Profit Growth  | ~80%        | ~24–60%     |
| ROE            | ~21.6%      | ~7–10%      |
| ROCE           | ~29%        | ~9–11%      |
| Debt/Equity    | Very Low    | 0.19        |
| Dividend Yield | ~0.05%      | Nil         |

---

# Price Trend Observation

### Netweb

* Strong upward trend
* Trading near yearly highs
* Benefiting from AI infrastructure demand

### Kaynes

* Significant correction from peak levels
* Business fundamentals remain strong
* Manufacturing expansion continues

---

# Valuation Analysis

## Netweb

### Strengths

* Exceptional growth
* Strong profitability
* High ROE and ROCE
* AI sector exposure

### Risks

* Extremely high valuation
* Elevated market expectations
* Competitive pressure from global players

### Verdict

**Expensive**

---

## Kaynes

### Strengths

* Diversified customer base
* Multiple industry exposure
* Strong EMS tailwinds
* Lower valuation relative to Netweb

### Risks

* Expansion execution risk
* Lower return ratios
* Promoter stake reduction

### Verdict

**Expensive but relatively more reasonable**

---

# Where Netweb Leads

* Faster revenue growth
* Faster profit growth
* Higher ROE
* Higher ROCE
* Strong AI and HPC positioning
* Near debt-free balance sheet

---

# Where Kaynes Leads

* Diversified business model
* Exposure to defense and aerospace
* Larger manufacturing opportunity
* Broader customer base
* Lower valuation multiple

---

# Key Learnings

### Learning 1

Custom Skills eliminate the need to repeatedly enter lengthy prompts.

### Learning 2

Structured workflows produce more consistent research outputs.

### Learning 3

Side-by-side comparisons reveal differences in growth quality, valuation, and risk.

### Learning 4

AI can significantly improve financial research productivity when combined with reusable workflows.

### Learning 5

A company's stock performance should always be analyzed alongside business fundamentals.

---

# What Surprised Me

The most surprising insight was how two technology-oriented companies can have completely different growth drivers:

* Netweb is primarily benefiting from AI and computing infrastructure demand.
* Kaynes is benefiting from India's manufacturing, electronics, and semiconductor ecosystem.

Despite operating in related sectors, their valuation profiles, profitability metrics, and business risks differ significantly.

---

# Conclusion

The stock-fundamental-research custom skill successfully generated structured, evidence-based stock research without requiring repeated prompt engineering.

This exercise demonstrated how reusable AI skills can improve consistency, efficiency, and research quality across multiple stock analyses.

---




