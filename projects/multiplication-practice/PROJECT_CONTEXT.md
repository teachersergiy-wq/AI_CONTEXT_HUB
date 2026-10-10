# Multiplication Practice — PROJECT_CONTEXT

## Goal
Build a mobile-first web application for school students to practise and be assessed on the multiplication table, using teacher-issued access credentials and optional class/school leaderboards.

## Product description
Students:
- sign in with a code and password provided by the teacher;
- take timed tests across progressively harder levels;
- see the result of every attempt and their complete personal history;
- optionally share a particular attempt to a class leaderboard, school leaderboard, or both;
- choose how a shared attempt is displayed: real name, generated nickname, or the anonymous label `Учень`;
- later change the leaderboard participation/privacy setting for an individual attempt.

Teachers:
- manage schools/classes and student access;
- provide or reset student credentials;
- view the results and progress of students they are allowed to manage;
- filter results by class, student, level and date;
- access class/school ranking and teaching-oriented statistics.

The student's own records must be visually distinct (bold and a different color) from other students' shared leaderboard results. Private attempts must not appear to other students.

## Project boundary
This is a separate product from:
- `math-assessment` — mathematics question banks and Quizizz/Wayground import workflows;
- `school-gradebook` — lesson and assessment records;
- `school-attendance` — attendance/meals/reporting;
- `tutor-schedule` — private tutoring schedule and lesson management.

The app has its own runtime, student authentication, timed test engine, attempt history, privacy model and leaderboards.

## Architecture — PLANNED
User-approved technology direction: **GitHub + Supabase**.

- Frontend candidate: React + TypeScript + Vite, designed mobile-first.
- Source/version history: a dedicated GitHub repository (not created or connected yet).
- Static hosting candidate: GitHub Pages deployed by GitHub Actions, subject to route/auth callback validation.
- Backend candidate: Supabase PostgreSQL, Supabase Auth and server-side Edge Functions for privileged actions and test result calculation.
- Database access must use Row Level Security (RLS) and least-privilege policies.
- Never expose a Supabase service-role/secret key in frontend code or repository.
- The existing Supabase project `tutor-calendar` is already used by Tutor Schedule and AI_CONTEXT_HUB. Do not add this application's operational tables to that project; a dedicated app project/database must be evaluated and created separately with cost/organization approval.

## Core test behavior
- Every test attempt is a separate durable record.
- Higher levels should generally contain more questions, allow less thinking time per answer and permit fewer mistakes.
- Questions, answer correctness, elapsed time, passed/failed status and final score must be validated/calculated server-side; the browser must not be trusted to submit a score.
- Unanswered questions/timeouts count according to the configured level rules.
- Students should be able to retry levels; each retry remains a separate attempt.
- In the first release, leaderboard comparisons should be separated by level rather than compare unlike test difficulties.
- A leaderboard should not let one student's multiple attempts occupy every position; candidate rule is the student's best eligible published attempt for that level.

### Example level values — PROVISIONAL, NOT APPROVED FINAL CONFIGURATION
Earlier planning suggested five levels:
- Level 1: 10 questions, 15 seconds/question, up to 3 errors, 70% minimum correct.
- Level 2: 15 questions, 12 seconds/question, up to 3 errors, 80% minimum correct.
- Level 3: 20 questions, 10 seconds/question, up to 2 errors, 85% minimum correct.
- Level 4: 25 questions, 8 seconds/question, up to 2 errors, 90% minimum correct.
- Level 5: 30 questions, 5 seconds/question, up to 1 error, 95% minimum correct.
These are starter proposals from design discussion. They must be configurable and confirmed before final implementation.

## Leaderboard and privacy rules
- Publication is voluntary and belongs to an individual attempt, not to the student's entire account.
- Participation state may be changed later for that specific attempt.
- Support class scope, school scope, and optionally both, separately from the display identity mode.
- Display modes for a published result: student's name, generated nickname, or `Учень`.
- A private attempt remains visible to its owner and authorized teachers, but not to other students.
- Class TOP contains only eligible results from the current student's class; school TOP contains only eligible results from the same school.
- Do not expose access codes, password data, email/auth identifiers, or private profile information in leaderboards.
- The student must always be able to identify their own results, even when they choose an anonymous public label.

## Free / 24/7 constraint
The user's hard requirement is that all components should be free and available 24/7. Treat this as an acceptance constraint to investigate, not as an automatically satisfied promise. Free plans can have quotas, suspension policies or platform changes. Before production deployment, verify current limits and decide whether the required availability can honestly be met without cost. Do not add artificial traffic or workarounds that violate provider policies.

## Implementation truth labels
Current status is **PLANNED / NOT IMPLEMENTED**. Requirements in this context are not proof that source code, schema, auth, rankings or hosting exist.

## Important files and links
- Context Hub record: https://github.com/teachersergiy-wq/AI_CONTEXT_HUB/tree/main/projects/multiplication-practice
- Proposed separation decision: https://github.com/teachersergiy-wq/AI_CONTEXT_HUB/blob/main/PROJECT_PROPOSALS.md
- Dedicated application repository: NOT CREATED / NOT CONNECTED
- Dedicated Supabase application project: NOT CREATED / NOT CONNECTED

## What must not be changed
- Do not mix this app's data with `tutor-calendar` or the operational Tutor Schedule tables.
- Do not treat the proposed test thresholds as final without confirmation.
- Do not claim 24/7 uptime on free tiers without current evidence.
- Do not publish a student's result without the per-attempt publication choice.
- Do not treat anything as implemented until source/test verification.
