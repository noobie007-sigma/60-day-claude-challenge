# Day 18 – Brain Dump Action Planner Skill

## Challenge Objective

Create a reusable Claude Custom Skill that converts unstructured information into organized dashboards containing summaries, action items, risks, blockers, decisions, and open questions.

---

## Skill Name

brain-dump-action-planner

---

## What I Built

A custom Claude Skill capable of transforming:

* Meeting transcripts
* Brainstorming notes
* Voice memo transcripts
* Project discussions
* Stream-of-consciousness notes

into structured project dashboards.

---

## Test Scenario

### Input

AI Productivity Platform Strategy Meeting

Topics Discussed:

* User growth slowdown
* Onboarding improvements
* Performance optimization
* AI Copilot launch planning
* Engineering resource constraints
* Hiring approvals
* SOC 2 compliance preparation

- Transcript:
AI Productivity Platform Strategy Meeting

CEO: Thanks everyone for joining. Our AI productivity platform now has 12,500 active users, but growth has slowed during the last two months. We need to identify what's limiting adoption before Q3 planning begins.

Head of Growth: User acquisition is still strong. Website traffic increased by 41% compared to last quarter, and free trial signups increased by 28%.

CEO: Then why isn't user growth accelerating?

Head of Growth: Trial-to-paid conversion dropped from 14% to 9%. Most users are signing up but not completing onboarding.

Product Manager: User feedback indicates that onboarding feels overwhelming. New users are presented with too many configuration options during their first session.

CEO: What changes are we considering?

Product Manager: We want to introduce a guided onboarding flow and AI-generated setup recommendations.

Engineering Manager: The onboarding redesign is feasible, but the engineering team is already committed to the AI Copilot launch scheduled for August.

CEO: How much engineering capacity remains?

Engineering Manager: Approximately 15%. Any additional work will require reprioritization or external contractors.

CFO: Before approving contractors, I'd like a cost estimate and projected ROI.

Product Manager: We can prepare that by next Wednesday.

Customer Success Lead: Support ticket volume increased by 37% this quarter. Most complaints relate to slow dashboard loading times and confusion around AI workflow templates.

CEO: Is performance becoming a business risk?

Customer Success Lead: Yes. Several enterprise customers mentioned performance concerns during renewal discussions.

Head of Sales: Prospective customers have raised similar concerns during product demonstrations.

CEO: Then performance optimization should be treated as a priority.

CTO: Engineering has already identified the root cause. Large workflow histories are generating inefficient database queries.

Engineering Manager: We estimate three weeks to implement the required optimization.

Product Manager: That may delay some lower-priority feature releases.

CEO: Which features would be affected?

Product Manager: Team Collaboration Templates and Automated Report Builder.

Head of Growth: Delaying those features could impact marketing campaigns planned for September.

CFO: What is the projected revenue impact if onboarding improvements are delayed instead?

Head of Growth: We estimate a potential loss of approximately $120,000 in annual recurring revenue.

CEO: That suggests onboarding improvements should remain a priority.

CTO: In that case, we need to decide whether performance optimization or feature development receives engineering resources first.

Engineering Manager: We cannot realistically deliver all initiatives simultaneously with the current team size.

HR Director: Recruiting requested approval for four additional engineers, but department budgets currently support only two hires.

CFO: Budget approvals for hiring are still under review.

CEO: Let's postpone hiring decisions until next month's financial planning session.

Head of Sales: Another concern is enterprise customers requesting advanced security certifications.

CTO: SOC 2 compliance preparation is underway, but completion may take longer than originally planned.

Head of Sales: Without certification, several enterprise opportunities may remain blocked.

CEO: What's the revised timeline?

CTO: Not specified yet. The compliance audit schedule is still being finalized.

Product Manager: We also need clarity on whether the AI Copilot launch remains fixed for August.

Engineering Manager: If performance optimization becomes the top priority, the August launch date may be at risk.

Head of Growth: Marketing campaigns have already been planned around that launch.

CEO: That creates a scheduling conflict we need to resolve.

CFO: We should review projected revenue impact before making a final decision.

CEO: Agreed. Let's prepare a decision document comparing onboarding improvements, performance optimization, and AI Copilot launch priorities.

Product Manager: I'll coordinate the analysis.

CEO: Excellent. We'll review recommendations during next week's leadership meeting.

---

## Prompt Template:

Skill Name: brain-dump-action-planner

Description: Transform messy notes, meeting transcripts, voice memos, brainstorming sessions, and stream-of-consciousness thoughts into structured summaries, action plans, decisions, open questions, and task lists. Organize information clearly without inventing, assuming, or filling gaps. Preserve all names, dates, numbers, and terminology exactly as provided.

Instructions:

### Output Requirement

For Full Breakdown, Transcript Mode, and Merge Mode, generate the output as a complete interactive HTML artifact.

Requirements:

* Output a self-contained HTML artifact starting with <style>.
* Use a modern dashboard layout.
* Mobile responsive.
* Use cards, sections, badges, tables, and visual indicators.
* Do not use markdown.
* Use clean typography and strong visual hierarchy.
* Highlight important items using colored status badges.
* Make action items visually prominent.
* Use collapsible sections for long notes.
* Output only the HTML artifact.

### Required Sections

1. Summary

* Short overview of the note, meeting, transcript, or brain dump.

2. Key Takeaways

* Display as cards or structured highlights.

3. Action Items

* Interactive table containing:
* Task
* Owner
* Deadline
* Status

4. Open Questions

* Display unresolved topics and pending decisions.

5. Risks / Blockers

* Display dependencies, blockers, risks, and concerns.

6. Conflicts

* Display conflicting deadlines, owners, decisions, or information.

7. Additional Notes

* Supporting context that does not fit elsewhere.

8. Source Information (Merge Mode only)

* Display merged sources.

### Status Badges

Use:

* 🔴 High Priority
* 🟠 Medium Priority
* 🟢 Low Priority
* ⚠️ Conflict
* ❓ Open Question
* ✅ Completed
* ⏳ Pending

### Missing Information

If information is missing display:

'Not specified'

Never invent values.

### Transcript Mode

Include:

* Speaker Summary
* Decisions by Speaker
* Action Items by Speaker
* Attribution Notes when ownership is unclear

Use speaker labels exactly as provided.

### Merge Mode

Include:

* Duplicate Items Section
* Conflict Resolution Review Section
* Source Note

Never automatically resolve conflicts.

### Design Goals

The final artifact should feel like:

* Notion
* ClickUp
* Linear
* Asana
* Airtable
* Modern Project Dashboard

Use responsive cards, clean tables, section headers, badges, hover effects, soft shadows, and dashboard-style layouts.

Everything displayed must come directly from the provided notes.

Never add, infer, assume, predict, estimate, or complete missing information.

Generate the complete HTML directly starting with <style>.


## Dashboard Output Highlights

### Summary

The skill generated a concise executive summary highlighting:

* Growth challenges
* Conversion rate decline
* Engineering capacity limitations
* Product roadmap conflicts
* Revenue risks

### Speaker Analysis

Generated speaker-by-speaker breakdowns for:

* CEO
* Head of Growth
* Product Manager
* Engineering Manager
* CFO
* CTO
* Customer Success Lead
* Head of Sales
* HR Director

---

## Action Items Identified

| Owner             | Task                              | Deadline                       |
| ----------------- | --------------------------------- | ------------------------------ |
| Product Manager   | Prepare onboarding ROI analysis   | Next Wednesday                 |
| Product Manager   | Create priority decision document | Before next leadership meeting |
| CTO / Engineering | Finalize SOC 2 audit schedule     | Not specified                  |
| CFO               | Complete hiring budget review     | Next planning session          |
| CEO               | Review recommendations            | Next week                      |

---

## Decisions Captured

* Performance optimization treated as a business priority.
* Onboarding improvements remain a priority due to revenue impact.
* Hiring decisions postponed until financial planning review.
* Cost estimates required before contractor approval.

---

## Risks & Blockers

### High Priority Risks

1. Enterprise customers reporting performance concerns.
2. AI Copilot launch date may be delayed.
3. Engineering team operating at limited capacity.
4. SOC 2 certification timeline remains uncertain.
5. Potential revenue loss if onboarding improvements are delayed.

---

## Open Questions

* Which initiative should receive engineering priority?
* Can the August AI Copilot launch remain on schedule?
* What is the final SOC 2 completion timeline?
* Will additional engineering hires be approved?
* What is the projected ROI of contractor support?

---

## Key Learnings

* Claude Skills eliminate repetitive prompt engineering.
* Complex workflows can be converted into reusable systems.
* Large meeting transcripts can be transformed into actionable dashboards instantly.
* Risks, blockers, and ownership become significantly easier to track.
* Merge Mode can identify conflicts across multiple information sources.
* Structured dashboards improve decision-making and project visibility.

---


## Conclusion

The Brain Dump Action Planner demonstrated how Claude Skills can function as reusable productivity tools. By automatically converting unstructured notes into organized dashboards, the skill significantly reduces manual effort while improving clarity, accountability, and project execution.
