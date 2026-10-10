# Project Separation Proposals

This file records project separation proposals and their approval status. A dedicated `projects/<slug>/` record must not be created for a pending proposal until the user explicitly approves it.

## Proposal A — School Gradebook / Class Journal

### Result
**APPROVED — 2026-09-27**

A dedicated project record was created at:
`projects/school-gradebook/`

The project covers the independent “Журнал оцінок учнів” application and its gradebook/class-journal workflow.

### Boundary
This project is separate from Tutor Schedule and School Attendance.

### Source status
The actual production/source repository is still **NOT CONNECTED / NOT VERIFIED**.

---

## Proposal B — Math Assessment / Quizizz-Wayground

### Result
**APPROVED — 2026-09-27**

A dedicated project record was created at:
`projects/math-assessment/`

The project covers mathematics assessment question banks, Excel import workflows and Quizizz/Wayground-oriented assessment generation/validation.

### Boundary
This project is separate from School Gradebook / Class Journal, Tutor Schedule and School Attendance.

### Source status
The actual production/source repository or current platform configuration is still **NOT CONNECTED / NOT VERIFIED**.

---

## Proposal C — Multiplication Practice Web App

### Result
**PENDING USER APPROVAL — 2026-10-10**

No dedicated project folder or Supabase project record has been created for this proposal.

### Why a separate project is recommended
This is a standalone mobile-first learning application: students enter using teacher-issued credentials, take timed leveled multiplication tests, review their personal attempts, and may opt individual attempts into a class or school leaderboard. Teachers manage students/classes and review results. This is a different product from `math-assessment`, whose current documented scope is mathematics content/question banks and Quizizz/Wayground Excel-import workflows. The multiplication app has its own runtime, authentication, game logic, results schema, privacy model and leaderboard behavior.

### Proposed scope
- Student login using a teacher-issued code and password; teacher/admin management of students and classes.
- Multiple test levels where higher levels increase question count and difficulty, reduce thinking time and allow fewer mistakes.
- Server-validated answers and results, with each attempt stored separately.
- Student history showing all their own attempts, visually distinct from other students' public leaderboard entries.
- Per-attempt optional leaderboard participation, changeable later.
- Four display choices for a shared attempt: real name, generated nickname, anonymous label `Учень`, or not participating.
- Separate class and school leaderboards; class TOP only includes that class, school TOP only includes that school.
- Teacher dashboard with class/student results and progress.
- Mobile-first responsive web app; PWA can be evaluated if helpful.
- User-selected target stack: GitHub for source/version history and static deployment (GitHub Pages/Actions under consideration), Supabase for PostgreSQL, Auth and server-side functions.
- Strict preference for free components available continuously. This must be treated as a design constraint, not as a guarantee that free plans provide uninterrupted 24/7 service; provider quotas, idle suspension and policy changes need verification.

### Current status
**PLANNED / NOT IMPLEMENTED.** Earlier chat messages contain a preliminary requirements/architecture plan, but no dedicated source repository, application schema or working implementation has been verified for this product.

### Approval requested
Approve or reject creating `projects/multiplication-practice/` with the standard project-context files. If approved, the Hub project list and matching structured Supabase context record can then be created/updated according to the Hub's project-addition procedure.

---

## Separation decision
The approved School Gradebook and Math Assessment projects remain independent records.

Python-learning lessons, generic website questions and generic Apps Script URL questions remain supporting topics unless the user defines them as independent products.

The multiplication practice web app remains a **pending proposal** until the user explicitly approves its dedicated record.
