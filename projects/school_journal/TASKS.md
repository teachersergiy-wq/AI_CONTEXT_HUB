# Task board — School Journal

Priority: **class journal first**, attendance and meals second. Everything must be free.
Status legend: PLANNED, IN PROGRESS, REVIEW, ACCEPTED, REWORK, BLOCKED, DEFERRED, DONE.
Cards exist in `tasks/` for tasks that can start now. Cards for later tasks are written when their dependencies are accepted.

## Phase 0 — Decisions and foundation
| ID | Who | Task | Status |
|---|---|---|---|
| T-001 | Owner + Claude | Decide D1–D3, priority and the free-only rule; record them | DONE (2026-10-31) |
| T-002 | Claude | Create `projects/school_journal/`, update `PROJECTS.md`, mark old projects as merged | DONE (2026-10-31, applied by hand) |
| [T-003](tasks/T-003.md) | Owner | Locate legacy sources (`journal_gui.py`, Google Sheets / Apps Script, Excel / Access), without real student data | PLANNED |
| [T-004](tasks/T-004.md) | Owner | Create the empty private repository `school_journal` and give the GitHub integration access | PLANNED |
| [T-005](tasks/T-005.md) | Owner + Claude | Create the separate free Supabase project (owner chooses the region) | PLANNED |
| [T-006](tasks/T-006.md) | Claude proposes, Owner decides | Choose free hosting for the PWA and a plan against the Supabase auto-pause | PLANNED |

## Phase 1 — Requirements (journal first)
| ID | Who | Task | Status |
|---|---|---|---|
| [T-010](tasks/T-010.md) | Claude + Owner | Close open journal questions (**priority 1**) | IN PROGRESS (1 of 10) |
| [T-012](tasks/T-012.md) | Claude | Roles and permissions matrix, journal part first | PLANNED |
| [T-013](tasks/T-013.md) | Claude (Grok reviews) | `REQUIREMENTS.md` and `DATA_CONTRACT.md` v0 for the core and the journal | PLANNED |
| [T-011](tasks/T-011.md) | Claude + Owner | Attendance and meals details | DEFERRED until the journal MVP-1 requirements are settled |

## Phase 2 — Database (Grok) — starts after T-013 and T-005
| ID | Task | Done when |
|---|---|---|
| T-020 | Core schema: students, classes, teachers, subjects, lessons/schedule, users/roles | Migrations apply from scratch; match the contract |
| T-021 | **Journal schema:** lesson records, characteristic values, assessments | Matches the contract |
| T-023 | RLS and roles (journal first) | Test: a teacher sees only their own classes |
| T-024 | Synthetic seed data (2–3 classes) | No real data |
| T-022 | Attendance and meals schema | After T-011; matches the contract |
| T-025 | Report views: student-days, attendance %, kitchen report | After T-022; matches a manual count on the seed data |

## Phase 3 — Application (ChatGPT) — starts after the relevant Phase 2 tasks
| ID | Task | Done when |
|---|---|---|
| T-030 | PWA skeleton, sign-in, class selection | Works on a phone |
| T-031 | **MVP-1 journal:** choose subject + class, list of lesson dates | Matches the 2026-10-31 requirements |
| T-032 | **MVP-1 journal:** lesson window with the 7 characteristics and `н` | Matches the decisions of T-010 |
| T-033 | **MVP-1 journal:** edit/delete lesson, context menu, assessments, journal export | Known old GUI problems are gone; export opens in Excel |
| T-034 | MVP-2: attendance submission (large buttons, surnames, who/when, substitution) | Scenarios from T-011 pass |
| T-035 | MVP-2: meals, kitchen and administration reports | Kitchen report matches the data |

## Phase 4 — Quality and launch
| ID | Who | Task |
|---|---|---|
| T-040 | Claude | End-to-end acceptance on synthetic data (after MVP-1, then after MVP-2) |
| T-041 | Claude + Grok | Security and personal-data review |
| T-042 | Owner | Pilot in one class |
| T-043 | Grok | Free backup/export (the free Supabase plan has no daily backups) |
