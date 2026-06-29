# Day 28 – Hospital Admission Readiness Simulator

## Overview

Today I built a **Hospital Admission Readiness Simulator**, an interactive browser-based application that teaches the workflow involved in preparing a patient for hospital admission.

The simulator models the coordination required between providers, physicians, insurance companies, utilization review teams, nursing staff, and administrative personnel before a patient can be admitted.

---

# Objective

Understand the operational and administrative processes involved in hospital admissions through an interactive workflow simulation.

---

# Technologies Used

* HTML5
* Tailwind CSS (CDN)
* Vanilla JavaScript

---

# Prompt Used
```
Hospital Admission Readiness Simulator

Single-file HTML app. HTML, Tailwind CSS CDN, Vanilla JavaScript.
style: same as previously established
Healthcare simulation design system. Task-first — no dashboard on load.
User plays Hospital Admission Coordinator.

Setup — collect:
- Provider, Attending Physician
- Diagnosis: Acute MI / CHF / Pneumonia / Elective Surgery / Hip Fracture
- Admission Type: Inpatient / Observation / Emergency / ICU / Same-Day Surgery
- PA Status, Admission Date

Observation Status must always show: 'CMS 2-Midnight Rule applies — different cost-sharing, SNF eligibility, and billing than inpatient. Medicare patients require written MOON notification.'
Label all provider/payer names as illustrative training data.

Button: 🏥 Analyze Admission Readiness

Initial Analysis
Generate status for: PA, Insurance, Bed, Documentation, Physician Orders, Consent.
Readiness Score 30–60%. Do not reveal final decision yet.

Score Weighting:
PA Status 25% · Clinical Documentation 20% · Physician Orders 20% · Insurance 15% · Consent 10% · Bed 10%
Denied PA + ICU admission cannot reach 70% from admin tasks alone.

PA Branches:
Approved → continue.
Pending → Follow Up, Upload Docs, Contact Physician.
Denied → Review Reason, Contact Insurance, Submit Appeal.
Successful appeal converts to Approved.

Workflow Actions:
Assign Bed / Verify Insurance / Upload Documentation / Complete Consent / Contact Physician / Notify Nursing / Prepare Patient Arrival

Acute MI and CHF trigger a criteria note:
'InterQual/Milliman thresholds apply — ensure documentation meets medical necessity standards before UR review.'

Timeline milestones:
PA Review → Insurance Verification → Bed Assignment → Documentation → Consent → Patient Arrival → Registration → Clinical Assessment → Admission Complete

Care Coordination Cards:
Attending / Case Manager / Nursing / Utilization Review / Discharge Planner
UR card must name: concurrent review, denial risk identification, InterQual, Milliman.

Risk Tracking:
Documentation Risk / Insurance Risk / Bed Risk / Clinical Risk
Clinical Risk weighted higher for Acute MI, CHF, ICU.

At Readiness ≥ 75% show Governance Snapshot:
'Industry benchmarks (estimates only): PA turnaround 3–5 days · Inpatient denial rate ~8–10% (CMS) · PA rework cost ~$11/transaction (CAQH)'

Final Decision:
≥ 90% → ✅ Admit — full summary.
< 90% → ⚠ Not Ready — missing items, required actions, remaining risks.
```


---


# Features Implemented

## Patient Admission Setup

* Provider Information
* Attending Physician
* Diagnosis Selection

  * Acute MI
  * CHF
  * Pneumonia
  * Elective Surgery
  * Hip Fracture
* Admission Type

  * Inpatient
  * Observation
  * Emergency
  * ICU
  * Same-Day Surgery
* Prior Authorization Status
* Admission Date

---

## Admission Readiness Analysis

The simulator evaluates:

* Prior Authorization
* Insurance Verification
* Bed Availability
* Clinical Documentation
* Physician Orders
* Patient Consent

An initial readiness score is generated before workflow tasks begin.

---

## Workflow Simulation

Interactive actions include:

* Assign Bed
* Verify Insurance
* Upload Documentation
* Complete Consent
* Contact Physician
* Notify Nursing
* Prepare Patient Arrival

Each completed task improves the readiness score.

---

## Prior Authorization Scenarios

Supported scenarios include:

* Approved
* Pending
* Denied
* Appeal Process

Successful appeals convert denied requests into approved admissions.

---

## Care Coordination

The simulator models collaboration between:

* Attending Physician
* Case Manager
* Nursing
* Utilization Review
* Discharge Planner

---

## Risk Management

Tracks:

* Documentation Risk
* Insurance Risk
* Bed Risk
* Clinical Risk

Acute MI, CHF, and ICU admissions carry higher clinical risk weighting.

---

## Timeline Workflow

The simulated admission progresses through:

1. Prior Authorization Review
2. Insurance Verification
3. Bed Assignment
4. Documentation Completion
5. Consent
6. Patient Arrival
7. Registration
8. Clinical Assessment
9. Admission Complete

---

## Governance Snapshot

When readiness exceeds the required threshold, the simulator displays operational benchmarks including:

* Prior Authorization turnaround estimates
* Inpatient denial rate estimates
* Prior Authorization administrative cost estimates

---

# What I Learned

* Hospital admissions involve significant administrative coordination in addition to clinical care.
* Prior Authorization can become the largest bottleneck in the admission process.
* High-quality clinical documentation reduces denial risk.
* Insurance verification and physician orders directly impact admission readiness.
* Utilization Review helps ensure medical necessity before approval.
* Governance metrics help hospitals monitor operational performance.

---

# Key Takeaways

* Learned the complete hospital admission readiness workflow.
* Explored how Prior Authorization affects patient admissions.
* Understood the importance of documentation quality and insurance verification.
* Simulated healthcare operations using an interactive AI-generated application.
* Gained practical insight into care coordination and hospital risk management.

---
