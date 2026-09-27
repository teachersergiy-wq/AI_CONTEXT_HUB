# School Attendance — DECISIONS

## 2026-09-25 — Separate project context
Decision: School attendance/meal automation is kept separate from Rozklad.
Reason: attendance and meals have a different workflow and data model from private tutoring lesson management.
Status: active

## Historical database boundary
Decision: earlier Excel/Access and Google Sheets/Apps Script designs are historical proposals, not production truth.
Reason: the actual repository and production schema are not yet verified.
Status: active

## 2026-09-27 — Context consolidation
Decision: preserve the school class-journal/gradebook history as related but potentially separate context until the user approves a dedicated project boundary.
Reason: grading/assessment has a different product workflow from attendance/meals.
Status: awaiting project-separation approval.
