# DATA_CONTRACT.md — School Journal (T-013, v1.1 proposed)

Status: **v0 ACCEPTED (2026-11-01); v1.1 PROPOSED (2026-11-16), awaiting owner confirmation.**
Scope: core + class journal (stage 1). Attendance/meals after T-011.
Implemented by Grok in `supabase/` of the app repo. Changes only via Claude + owner.

## Owner answers (2026-11-01) — closed open items
| Q | Answer |
|---|---|
| Q1 Behaviour marks | Starting set of 6 codes (disrupts, talks, uses_phone, rude, active, helps); extensible via dictionary |
| Q2 Scale | 12-point; kinds: `current`, `independent`, `control`, `thematic`, `board`; `current` is the default. Owner expanded the kinds on 2026-11-15 (T-014) |
| Q3 Class moves | No history in stage 1 (`students.class_id` only) |
| Q4 Board work | Either assessment (`kind='board'`) **or** refusal flag (`lesson_records.board_refused`) |
| Q5 Journal uniqueness | Unique by `(class_id, subject_id, teacher_id)`, matching the current database constraint; no schema change (owner decision, 2026-11-16). With one user there is one journal. For multiple visible journals for the same class and subject, the picker shows the teacher's name (T-050) |

## Current access model
Only the owner account is active. The `teacher` role is prepared but inactive; there are no teacher accounts yet (T-050). The application never filters data by teacher or role; access is restricted only by the database through Row-Level Security. Row-Level Security helper functions live in the `private` schema, which is not exposed in the Data API.

Full field-level contract (Ukrainian) lives in the app repository: `teachersergiy-wq/school_journal/DATA_CONTRACT.md`.
That file is the authoritative version after the owner answers.

## Key schema consequences of Q4
- Removed simple boolean `board_work`.
- Added `lesson_records.board_refused boolean default false`.
- Board grade goes into `assessments` with `kind = 'board'`.
- Mutual exclusion: refused flag and board assessment cannot both be set.

## Next
Owner ACCEPTs the contract → Grok starts T-020 (core schema) on branch `grok/T-020`.
