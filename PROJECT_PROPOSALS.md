# Project Separation Proposals

This file contains proposed project boundaries only. It does NOT create project records under projects/ and does NOT create entries in any project registry.

## Proposal A — School Gradebook / Class Journal

### Why a separate project is justified

Prior chats describe an independent software product called “Журнал оцінок учнів”:
- Python desktop application with future Android use;
- lesson dates and absence marker “н”;
- grade/result columns such as ГР1/ГР2/ГР3;
- independent work, homework and tests;
- subject management;
- ongoing GUI development with editing, lesson management and context-menu requirements.

This has a distinct product goal, data model and code lifecycle from both Tutor Schedule and School Attendance / Meals.

### Historical context

The user also discussed learning Python from zero and later using Codex to build applications. Those learning activities are not automatically a separate product; they are supporting context for the gradebook/game development work.

### Status

PLANNED — waiting for explicit human approval before creating projects/school-gradebook/.

---

## Proposal B — Math Assessment / Quizizz-Wayground

### Why a separate project is justified

Prior chats contain a substantial independent assessment-content workstream:
- Excel import formats for Quizizz/Wayground;
- large question banks (100 and 1000 tasks);
- random selection of a subset for each student;
- mobile student participation;
- automatic grading;
- five answer options with plausible distractors;
- rational-number addition/subtraction tasks;
- practical-content word problems requiring construction of mathematical expressions;
- balanced task categories such as geometric, physical, quantitative, financial, work and household contexts.

This is a different product/content workflow from the gradebook application and from the tutoring schedule.

### Status

PLANNED — waiting for explicit human approval before creating projects/math-assessment/.

---

## Decision rule

No new project directories or project records for these two candidates should be created until the user explicitly approves the separation.

Python-learning lessons, generic website questions, and generic Apps Script URL questions remain supporting topics unless the user later defines them as independent products.
