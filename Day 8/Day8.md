# Day 8: Building an AI-Powered Environmental Health Dashboard

## 🚀 Overview
For Day 8 of the challenge, I transformed Claude into a full-stack application builder to create the **Personal Environmental Health Analyzer**. As someone who typically spends more time in the backend dealing with Spring Boot, SQL, and API logic, seeing a complete, interactive, and mobile-responsive frontend generated entirely through structured prompt engineering was incredible.

## Prompt Used

Act as a Senior Data Analyst, Environmental Researcher, UX Designer, and Frontend Dashboard Developer.
Create a Claude Artifact called:
🌍 Personal Environmental Health Analyzer
DATA RULES
If a dataset is provided, use it. If no dataset is provided, automatically search the web for the latest AQI and water-quality data for the user's current city/location. If location is unavailable, ask for the city name first. Use the most recent available data, cite sources, clean the data, handle missing values, and validate quality before analysis.
ANALYSIS
Generate: cleanest city, most polluted city, highest AQI city, lowest AQI city, average AQI, number of cities analyzed, trends, anomalies, most surprising observation, executive summary.
INTERACTIVE DASHBOARD
Create a fully interactive Claude Artifact with:
📊 Key Metrics: average AQI, highest AQI city, lowest AQI city, number of cities analyzed, environmental health score.
📈 Visualizations: AQI comparison chart, PM2.5 comparison chart, PM10 comparison chart, city ranking chart, AQI distribution chart.
🎛 Interactive Filters: city selector, AQI range filter, pollutant selector, health-risk filter, date filter (if available), city comparison mode.
📋 City Detail Cards: AQI, PM2.5, PM10, air-quality category, health score, water-quality score.
🚦 AQI Categories: Good (Green), Satisfactory (Light Green), Moderate (Yellow), Poor (Orange), Very Poor (Red), Severe (Dark Red).
ENVIRONMENTAL HEALTH ANALYSIS
For the selected city explain AQI impact on lungs, sleep, energy levels, exercise performance, long-term health, and water-quality impact on hair fall, hair dryness, scalp health, skin dryness, acne, and sensitive skin.
Use risk indicators: 🟢 Low, 🟡 Moderate, 🔴 High.
PERSONAL REPORT CARD
Generate an Environmental Health Score (0–100) with breakdowns for Air Quality Score, Water Quality Score, and Overall Environmental Score.
Assign grades for Air Quality (A–F), Water Quality (A–F), Hair Risk, and Skin Risk.
INSIGHTS PANEL
Include: top 3 cleanest cities, top 3 most polluted cities, biggest anomaly, most surprising observation, recommended actions.
PERSONALIZED RECOMMENDATIONS
Provide: daily actions, indoor air improvements, outdoor activity guidance, hair-care recommendations, skin-care recommendations, water-quality improvement suggestions.
DESIGN
Modern, professional, mobile responsive, dark theme, smooth animations, premium UI, clean typography, dashboard-style layout, highly visual, colourful, LinkedIn-shareable.
OUTPUT
Generate a complete downloadable HTML application that is fully responsive and ready to save as index.html.
IMPORTANT
Do not provide code snippets. Create a complete interactive Claude Artifact with working charts, filters, cards, insights, report cards, and dashboards that users can interact with directly.
## 📊 Key Insights & Observations

When testing the dashboard with real-world data (specifically analyzing the AQI and water quality metrics for Ghaziabad and surrounding NCR regions), a few things stood out:
1. **The Automation of Data Processing:** Claude seamlessly handled the instructions to fetch, clean, and visualize the data without needing a pre-cleaned CSV.
2. **Actionable Health Correlations:** The dashboard didn't just show numbers; it successfully mapped PM2.5 and PM10 levels to practical health impacts, like respiratory risks and skin/hair health based on local water hardness.
3. **Anomaly Detection:** The AI successfully highlighted sudden spikes in the AQI trends during peak traffic hours as key anomalies in the executive summary.

## 🧠 Key Learnings

* **Artifacts as a Product Tool:** Claude Artifacts bridge the gap between ideation and MVP. You can generate working, interactive applications rather than just static text outputs.
* **Prompt Architecture:** Building complex tools requires "Persona Stacking" (e.g., acting as a Data Analyst + UX Designer) and strict formatting rules to ensure the AI outputs functional code rather than explanatory snippets.
* **Rapid UI Prototyping:** I was able to generate a dark-themed, modern UI with smooth animations without writing any CSS or React code manually, saving hours of frontend development time.

## 💻 Generated HTML Application

The complete, downloadable interactive dashboard has been saved as an HTML file. 

[Download / View the index.html file here](./index.html)

