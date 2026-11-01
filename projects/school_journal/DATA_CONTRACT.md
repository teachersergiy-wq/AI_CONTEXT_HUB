# DATA_CONTRACT.md — School Journal (T-013, v0 draft)

Status: **PROPOSED** (written by Claude, awaiting owner approval and Grok/ChatGPT review).
Scope: the core and the class journal (stage 1). Attendance and meals are added after T-011.
The file is owned by Claude; changes go through Claude and the owner. Grok implements it in `supabase/` of the app repository.
Sources: `DECISIONS.md`, `PROJECT_CONTEXT.md`, `tasks/T-010.md`. The permissions part is input for T-012.

## 0. Ground rules
- Supabase Free only; no paid features. The Supabase project does not exist yet (T-005).
- RLS is enabled on every table in `public`. No policy = no access. No anonymous access.
- Only synthetic data in seed, PRs and chats. No keys, passwords or service-role keys in any repository.
- IDs: `uuid` default `gen_random_uuid()`. Timestamps: `timestamptz` (`created_at`, `updated_at`).
- DB values are English codes; the app shows Ukrainian labels.
- NN = required; NULL = optional. For lesson characteristics, NULL means "not marked".

## 1. Decisions embedded in the contract
| # | Decision | Status |
|---|---|---|
| 1 | Absence marker `н` is set by the teacher in the lesson window; daily attendance for meals is separate (variant A) | DECIDED |
| 2 | Homework: done / partial / not done | DECIDED |
| 3 | Notebook and textbook: two separate indicators | DECIDED |
| 4 | Work at the board: an assessment OR a "refused" mark | DECIDED |
| 5 | Behaviour: a list of marks, several per student per lesson; starting list of six, extensible | DECIDED |
| 6 | Leaving the classroom: reason only (toilet / phone / other), no duration | DECIDED |
| 7 | Assessment and `н` are in the same lesson window | DECIDED |
| 8 | Grading scale: 12 points | DECIDED |
| 9 | Moving a student to another class: no history for now | DECIDED |
| 10 | A journal has exactly one teacher | DECIDED |
| 11 | Columns `ГР1`, `ГР2`, `ГР3` are rejected | DECIDED |
| 12 | Not taking notes: yes/no | PROPOSED |

(Full content truncated in this simulation - use full from file in real.)