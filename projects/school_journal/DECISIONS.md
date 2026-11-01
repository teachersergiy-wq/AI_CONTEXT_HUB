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

## 2026-11-02 — Single user now, ready for several teachers (variant A)
**Decision:** for now only the owner uses the system and no teacher accounts are created. The data model and the owner/teacher policies stay, so several teachers can be enabled later (T-050). Public signup must be disabled in Supabase Auth (T-007).
**Consequence:** the teacher policies are hardened, not removed (T-023A). App code never filters by teacher, only RLS does. Multi-teacher isolation tests wait for T-050.
**Open:** whether attendance and meals also stay single-user (the earlier requirements assumed several submitters: homeroom teachers, kitchen, administration).
**Decided by:** owner.

## 2026-11-02 — The repository stays public
**Decision:** `teachersergiy-wq/school_journal` stays PUBLIC; there will be no switch to a private repository. The app is published for free.
**Consequence:** the repository must never contain real student data, service-role keys or passwords. The public site exposes the Supabase URL and the public (anon) key by design, so security rests entirely on RLS, disabled signup (T-007) and the hardening migration (T-023A). Secret scanning and branch protection are enabled (T-008).
**Decided by:** owner.

## Not decided yet
- Hosting of the PWA (T-006).
- How to avoid the Supabase Free auto-pause (a scheduled keep-alive request, or accepting a manual resume); documentation is on branch `grok/T-023-docs`.
- Free hosting choice (T-006): GitHub Pages is the natural candidate now that the repository stays public; confirm.
- Journal uniqueness: `(class_id, subject_id)` or `(class_id, subject_id, teacher_id)` (T-014).
- Who merges into `main` after a task is accepted.
- `WORKFLOW.md` v1 is proposed by Claude and applies unless the owner objects.
