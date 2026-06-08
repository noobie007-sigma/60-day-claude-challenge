# Day 8: Building an AI-Powered Environmental Health Dashboard

## 🚀 Overview
For Day 8 of the challenge, I transformed Claude into a full-stack application builder to create the **Personal Environmental Health Analyzer**. As someone who typically spends more time in the backend dealing with Spring Boot, SQL, and API logic, seeing a complete, interactive, and mobile-responsive frontend generated entirely through structured prompt engineering was incredible.


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

