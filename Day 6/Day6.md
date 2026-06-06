# Day 6: AI Resume Optimizer

## 📊 ATS Analysis Recap

**Previous Score:** 58/100
**Optimized Score:** 88/100

### Key Improvements Made:
*   **Added a Professional Summary:** Established the target role immediately (Backend Engineer, Java, Spring Boot, Microservices) to boost early match probability.
*   **Standardized Tech Stack Keywords:** Explicitly listed Apache Kafka, Keycloak, OAuth2, Spring Cloud, Spring AI, and React under clear categories.
*   **Removed Unparseable Characters:** Replaced icons and symbols that parse as garbage text with plain-text separators.
*   **Action-Oriented Bullets:** Replaced weak phrasing with strong action verbs (Developed, Engineered, Automated, Architected).
*   **Standardized Headings:** Used canonical headings (PROFESSIONAL SUMMARY, EXPERIENCE, TECHNICAL SKILLS) for accurate ATS mapping.
*   **Quantified Achievements in Plain Text:** Ensured metrics like 40% latency reduction and 250+ tests were clearly readable.
*   **Consistent Date Formatting:** Applied MM YYYY format to prevent experience length miscalculations.

---

## 💡 Key Learnings
1.  **Categorization Matters:** Grouping database and cloud skills explicitly under labeled categories yields a higher ATS score than burying them in free-form project bullets.
2.  **Plain Text is King:** Icons and complex formatting might look visually appealing to a human, but they corrupt data extraction for ATS engines.
3.  **Top-Third Real Estate:** The professional summary is crucial because ATS systems heavily weight the top third of the document.

---

## Prompt Used for Resume Optimization:
You are an ATS optimization expert and resume writer.

Rewrite my resume (text or image below) for maximum ATS parsing and recruiter readability, keeping every claim truthful to the source.

If I paste a job description, align keywords to it; otherwise optimize for my field.

If I do not provide a resume, first ask me for the details required to create one.

Output EXACTLY two parts, nothing else:

PART 1 — ATS SCORE (keep short, no full report)

- Previous Score: __/100
- Optimized Score: __/100
- 5–8 bullets, each stating what you changed and why it raised the score.

PART 2 — FINAL RESUME

Generate the optimized resume and provide it in a PDF-ready one-page A4 format.

Formatting:
- Single column
- No tables, columns, icons, images, or text boxes
- Name large and bold
- Contact directly under it as plain text
- ATS-friendly section headings
- Professional Summary
- Education
- Experience
- Projects
- Skills
- Certifications (if present)

Rules:
- Use ONLY information from the resume.
- Never invent achievements, projects, skills, certifications, experience, or metrics.
- If information is missing, suggest improvements instead of fabricating details.
- Use strong action verbs.
- Remove redundancy.
- Keep everything truthful.
- Must fit on ONE A4 page.
- Optimize for ATS and recruiter readability.

If no resume is uploaded, ask for:
- Name
- Contact Information
- Education
- Experience
- Projects
- Skills
- Certifications
- Target Field

Then generate the resume.






# Resources:
1) https://drive.google.com/file/d/1B4I9rSPFA7b3JxEoBkhXdVa6YUzCb5jA/edit
2) geeksforgeeks.org/blogs/what-is-prompt-engineering-the-ai-revolution