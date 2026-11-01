# DATA_CONTRACT.md — School Journal (T-013, v0)

Status: **READY FOR ACCEPT** (owner answered Q1–Q5 on 2026-11-01).
Scope: core + class journal (stage 1). Attendance/meals after T-011.
Implemented by Grok in `supabase/` of the app repo. Changes only via Claude + owner.

## Owner answers (2026-11-01) — closed open items
| Q | Answer |
|---|---|
| Q1 Behaviour marks | Starting set of 6 codes (disrupts, talks, uses_phone, rude, active, helps); extensible via dictionary |
| Q2 Scale | 12-point; kinds: `current`, `thematic`, `board` |
| Q3 Class moves | No history in stage 1 (`students.class_id` only) |
| Q4 Board work | Either assessment (`kind='board'`) **or** refusal flag (`lesson_records.board_refused`) |
| Q5 Teachers per journal | Exactly one |

Full field-level contract (Ukrainian) lives in the app repository: `teachersergiy-wq/school_journal/DATA_CONTRACT.md`.
That file is the authoritative version after the owner answers.

## Key schema consequences of Q4
- Removed simple boolean `board_work`.
- Added `lesson_records.board_refused boolean default false`.
- Board grade goes into `assessments` with `kind = 'board'`.
- Mutual exclusion: refused flag and board assessment cannot both be set.

## Next
Owner ACCEPTs the contract → Grok starts T-020 (core schema) on branch `grok/T-020`.
