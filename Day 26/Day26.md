# Day 26 – Prior Authorization Workflow Simulator

## Objective

Build an interactive simulator demonstrating the US Healthcare Prior Authorization workflow using only HTML, CSS, and Vanilla JavaScript.

---

## Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript
* HTML5 Drag & Drop API

---

## Features

* Three workflow lanes (Patient, Provider, Payer)
* Interactive drag-and-drop case movement
* Multiple randomized patient scenarios
* Medical necessity evaluation
* Prior Authorization document collection
* Intelligent workflow progression
* Approval, Pending, Denial, Appeal, and Peer-to-Peer Review paths
* Progress tracker
* Elapsed day counter
* Efficiency score
* Educational explanations
* Celebration animation
* Responsive modern UI
* Restart with new patient scenario

---


## Dashboard

![Dashboard](dashboard.html)



---

## Key Learnings

* Learned how Prior Authorization coordinates communication between patients, providers, and payers.
* Understood the importance of complete documentation and medical necessity in healthcare approvals.
* Practiced implementing drag-and-drop interactions using the HTML5 Drag & Drop API.
* Built a state-driven workflow simulation entirely with Vanilla JavaScript.
* Designed a responsive, gamified interface that makes complex healthcare operations easier to understand.

---

## Prompt Used

```
Prior Authorization Workflow Simulator (gamified, drag-and-drop)

Build a single-file, self-contained HTML application (HTML + CSS + vanilla JavaScript, no external dependencies, no build step) that visually simulates the US healthcare Prior Authorization (PA) workflow as an interactive, gamified, drag-and-drop experience.

The simulator should include:

• Three workflow lanes: Patient, Provider, and Payer.
• Interactive drag-and-drop movement of cases between stages.
• Multiple patient scenarios (elective surgery, MRI, specialty medication, inpatient admission).
• Medical necessity evaluation.
• Prior Authorization document collection.
• Submission to payer.
• Review outcomes including Approval, Pend, Denial, Appeal, and Peer-to-Peer Review.
• Educational explanations after every step.
• Progress tracker across the top.
• Days elapsed counter.
• Efficiency score.
• Celebration animation on approval.
• Workflow summary on completion.
• Responsive modern UI using shades of blue with black text.
• Working Restart / New Patient button.
• Fully functional buttons and interactions.

Technical Requirements:
- Single HTML file.
- HTML, CSS and Vanilla JavaScript only.
- No frameworks.
- No CDNs.
- No localStorage.
- All workflow state managed in JavaScript memory.
- Well-commented code.
- Scenario data stored in an editable array near the top.
- Output only the complete HTML file without truncation.
```
