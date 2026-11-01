# Task board — School Journal

Priority: **class journal first**, attendance and meals second. Everything must be free. Single user (owner only).
Status legend: PLANNED, IN PROGRESS, REVIEW, ACCEPTED, REWORK, BLOCKED, DEFERRED, DONE.
Cards exist in `tasks/` for tasks that can start now.

## Phase 0 — Decisions and foundation
| ID | Who | Task | Status |
|---|---|---|---|
| T-001 | Owner + Claude | Decide D1–D3, priority and the free-only rule; record them | DONE (2026-10-31) |
| T-002 | Claude | Create `projects/school_journal/`, update PROJECTS | DONE |
| T-003 | Owner | Locate legacy sources without real student data | PLANNED |
| T-004 | Owner | Create repo school_journal | DONE (exists, PUBLIC) |
| T-005 | Owner + Claude | Create free Supabase project | DONE (`dtpyvyedcptdkdsowmco`, eu-central-1) |
| T-006 | Claude proposes, Owner decides | Free hosting + keep-alive plan | PLANNED |
| [T-007](tasks/T-007.md) | Owner | Disable public signup in Supabase Auth | PLANNED (P0) |

## Phase 1 — Requirements (journal first)
| ID | Who | Task | Status |
|---|---|---|---|
| T-010 | Claude + Owner | Close open journal questions | largely DONE |
| T-012 | Claude | Roles matrix | superseded by single-user decision |
| T-013 | Claude | DATA_CONTRACT v0 | ACCEPTED then needs v1.1 |
| [T-014](tasks/T-014.md) | Claude + Owner | DATA_CONTRACT v1.1 (single user) | PLANNED |
| T-011 | Claude + Owner | Attendance and meals details | DEFERRED |

## Phase 2 — Database (Grok)
| ID | Task | Status |
|---|---|---|
| T-020 | Core schema | DONE (merged to main, applied on live) |
| [T-023A](tasks/T-023A.md) | Security hardening migration (single-user) | PLANNED (P0, Grok) |
| [T-023B](tasks/T-023B.md) | RLS verification (single-user) | PLANNED (after T-023A) |
| [T-024](tasks/T-024.md) | Synthetic demo data for journal | PARTIAL |
| T-021 / T-022 | Further journal / attendance schema | after contract v1.1 |
| T-043 | Free backup/export | docs drafted |

## Phase 3 — Application
| ID | Who | Task | Status |
|---|---|---|---|
| [T-030](tasks/T-030.md) | ChatGPT/Codex | PWA skeleton (journal first) | PLANNED |
| T-031+ | ChatGPT | Journal MVP screens | after skeleton |
