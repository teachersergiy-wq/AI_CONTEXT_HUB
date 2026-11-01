# School Attendance — DECISIONS

## 2026-10-31 — MERGED into school_journal
Decision: this project is merged with School Gradebook into one project, **School Journal** (`projects/school_journal/`). This record is kept as historical context only; do not start new work here.
Supersedes: the boundary rule below and the 2026-09-27 "School Gradebook separation approved" decision.
Decided by: owner.
Status: active

## 2026-09-25 — Separate project context
Decision: school attendance/meal automation is kept separate from Rozklad.
Reason: attendance and meals have a different workflow and data model from private tutoring lesson management.
Status: active (still true for Rozklad; School Attendance itself is now part of School Journal)

## Historical database boundary
Decision: earlier Excel/Access and Google Sheets/Apps Script designs are historical proposals, not production truth.
Reason: the actual repository and production schema are not yet verified.
Status: active

## 2026-09-27 — School Gradebook separation approved
Decision: the historical School Gradebook / Class Journal workstream is now a separate official AI_CONTEXT_HUB project: `projects/school-gradebook/`.
Reason: grading/assessment application workflow is distinct from attendance/meals.
Status: SUPERSEDED on 2026-10-31 (merged into school_journal)

## Boundary rule
Do not move gradebook requirements into School Attendance merely because both concern school records. Cross-reference the separate project instead.
Status: SUPERSEDED on 2026-10-31 (merged into school_journal)
