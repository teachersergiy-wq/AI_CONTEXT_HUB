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

## Not decided yet (proposed by Claude, awaiting the owner)
- Hosting of the PWA (T-006).
- How to avoid the Supabase Free auto-pause (for example a scheduled keep-alive request, or accepting manual resume).
- Who merges into `main` after a task is accepted.
- `WORKFLOW.md` v1 is proposed by Claude and applies unless the owner objects.
