# School Attendance — DECISIONS

## 2026-09-25 — Separate project context
Decision: School attendance/meal automation is kept separate from Rozklad.
Reason: attendance and meals have a different workflow and data model from private tutoring lesson management.
Status: active

## Historical database boundary
Decision: earlier Excel/Access and Google Sheets/Apps Script designs are historical proposals, not production truth.
Reason: the actual repository and production schema are not yet verified.
Status: active

## 2026-09-27 — School Gradebook separation approved
Decision: the historical School Gradebook / Class Journal workstream is now a separate official AI_CONTEXT_HUB project: `projects/school-gradebook/`.
Reason: grading/assessment application workflow is distinct from attendance/meals.
Status: active

## Boundary rule
Do not move gradebook requirements into School Attendance merely because both concern school records. Cross-reference the separate project instead.
