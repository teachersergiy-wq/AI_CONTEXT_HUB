# Decisions — School Journal

## 2026-10-31 — D1: Merge into one project
**Decision:** `school-attendance` and `school-gradebook` are merged into one project named **School Journal**, slug `school_journal`.
**Supersedes:** the 2026-09-27 decision to keep them separate and the "boundary rule" derived from it.
**Consequence:** the old project records stay as historical context; new work happens in `projects/school_journal/`.
**Decided by:** owner.

## 2026-10-31 — D2: Platform and accounts
**Decision:** web application (PWA) with Supabase. Code in GitHub `teachersergiy-wq/school_journal`; database in the Supabase organization `yijbifjfvujcwzeqwzfd`.
**Decided by:** owner.

## 2026-10-31 — D3: AI write access
**Decision:** Grok and ChatGPT may commit to GitHub themselves.
**Consequence:** a branch + review workflow is needed so Claude can check work before it reaches `main` (see `WORKFLOW.md`).
**Decided by:** owner.

## 2026-10-31 — Team roles
**Decision:** Owner controls and takes important decisions; Claude coordinates, plans, creates tasks and controls quality; Grok owns the database; ChatGPT owns the code.
**Decided by:** owner.

## 2026-10-31 — Priority: the class journal first
**Decision:** the class journal (gradebook) is built first; attendance and meals follow. The data core is still designed for both modules from the start.
**Decided by:** owner.

## 2026-10-31 — The project must be fully free
**Decision:** the whole project must run at no cost. No paid plans or paid APIs.
**Consequence:** Supabase Free plan and a free hosting option; backups and keep-alive handled by us (see PROJECT_CONTEXT.md, T-006, T-043).
**Decided by:** owner.

## 2026-10-31 — Absence marker: variant A (T-010, question 1)
**Decision:** the absence marker `н` is set by the teacher on the lesson in the journal. Daily attendance (used for meals) is a separate, independent record. Linking the two (daily attendance feeding the journal automatically) is not part of the first version and can be added later.
**Decided by:** owner.

## 2026-11-01 — Data contract accepted (T-010 and T-013)
**Decision:** the owner accepted the data contract. The journal decisions are recorded in `DATA_CONTRACT.md` of the app repository (sections 1 and 8) and are authoritative there: homework in three levels (done / partial / not done); notebook and textbook as two separate indicators; behaviour as a list of marks (starting set of 6, extendable through a dictionary); exits from the classroom with a reason only (toilet / phone / other, several per lesson, no duration); 12-point grading scale with kinds `current`, `thematic`, `board`; board work is either a grade (`kind = 'board'`) or a refusal flag, never both; no class-move history in stage 1; one teacher per journal; `н` and grades in the lesson window; columns ГР1–ГР3 cancelled.
**Decided by:** owner (recorded here by the coordinator on 2026-11-02; the Hub previously held these only in the contract).

## 2026-11-02 — Single-user system
**Decision:** only the owner will use the system (one user). The `teacher` role stays in the schema but is dormant: no teacher accounts will be created. Public signup must be disabled in Supabase Auth (T-007).
**Consequence:** row-level security is simplified to owner-only; multi-teacher isolation tests are dropped; the roles part of the contract is simplified (T-014).
**Open:** whether the same applies to attendance and meals (the earlier requirements assumed several submitters: homeroom teachers, kitchen, administration).
**Decided by:** owner.

## Not decided yet
- Hosting of the PWA (T-006).
- How to avoid the Supabase Free auto-pause (a scheduled keep-alive request, or accepting a manual resume); documentation is on branch `grok/T-023-docs`.
- Whether the repository `school_journal` stays PUBLIC (it is public now; the plan recommended private) or becomes private. Free GitHub Pages needs a public repository on a free plan.
- Journal uniqueness: `(class_id, subject_id)` or `(class_id, subject_id, teacher_id)` (T-014).
- Who merges into `main` after a task is accepted.
- `WORKFLOW.md` v1 is proposed by Claude and applies unless the owner objects.
