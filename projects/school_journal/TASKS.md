# Task board — School Journal

Priority: **class journal first**, attendance and meals second. Everything must be free. Single user for now, ready for several teachers; repository stays public.
Status legend: PLANNED, IN PROGRESS, REVIEW, ACCEPTED, REWORK, BLOCKED, DEFERRED, DONE, PARTIAL.
Last reviewed by Claude: 2026-11-21.

## Phase 0 — Decisions and foundation
| ID | Who | Task | Status |
|---|---|---|---|
| T-001 | Owner + Claude | Decide D1–D3, priority and the free-only rule | DONE (2026-10-31) |
| T-002 | Claude | Create `projects/school_journal/`, update `PROJECTS.md`, mark old projects as merged | DONE (2026-10-31) |
| [T-003](tasks/T-003.md) | Owner | Locate legacy sources, without real student data | PLANNED |
| [T-004](tasks/T-004.md) | Owner | Create the repository `school_journal` | DONE (2026-11-01; stays PUBLIC, see DECISIONS) |
| [T-005](tasks/T-005.md) | Owner + Claude | Create the separate free Supabase project | DONE (2026-11-01) |
| [T-006](tasks/T-006.md) | Claude proposes, Owner decides | Free hosting and keep-alive | IN PROGRESS (Pages workflow and keep-alive migrations applied; Owner steps remain: repository variables, expose `ops` in Data API, manual workflow run, Supabase Auth Site URL and Redirect URLs) |
| — | Owner + Claude | Site URL and redirect URLs | IN PROGRESS (GitHub Pages is deployed; Owner still must set Supabase Auth Site URL and Redirect URLs; invitation link previously pointed to localhost) |
| [T-007](tasks/T-007.md) | Owner | Disable public signup in Supabase Auth | DONE (verified 2026-11-14 from the owner's screenshot: new-user signup, manual linking, and anonymous sign-ins disabled; email confirmation enabled; Save inactive) |
| [T-008](tasks/T-008.md) | Owner | Public-repository safeguards: secret scanning, push protection, branch protection on `main` | DONE (VERIFIED 2026-11-08) |

## Phase 1 — Requirements (journal first)
| ID | Who | Task | Status |
|---|---|---|---|
| [T-010](tasks/T-010.md) | Claude + Owner | Open journal questions | DONE in the contract (2026-11-01); UI points (edit/delete, context menu) still open |
| [T-012](tasks/T-012.md) | Claude | Roles and permissions matrix | PARTIAL (contract section 5; to be simplified for one user in T-014) |
| [T-013](tasks/T-013.md) | Claude (Grok reviews) | `DATA_CONTRACT.md` v0 | DONE (ACCEPTED 2026-11-01) |
| [T-014](tasks/T-014.md) | Claude + Owner | Contract v1.1: teacher-ready single user, journal uniqueness, assessment kinds, record decisions | DONE (owner accepted DATA_CONTRACT v1.1 on 2026-11-21) |
| [T-011](tasks/T-011.md) | Claude + Owner | Attendance and meals details | DEFERRED |

## Phase 2 — Database (Grok)
| ID | Task | Status |
|---|---|---|
| T-020 | Core schema, RPC, view, Auth trigger, starter seed | DONE (live schema; security hardening and board_exclusivity applied) |
| T-021 | Journal schema | DONE (delivered in T-020; hardened after T-023A; board_exclusivity applied) |
| [T-023A](tasks/T-023A.md) | **Security hardening migration (P0), keeps teacher policies** | DONE (applied 2026-11-14; `20261101232000_security_hardening`; history version `20261114200113`) |
| [T-023B](tasks/T-023B.md) | Row-Level Security verification: owner, anonymous user, non-owner | DONE (Claude verified 2026-11-17 and repeated 2026-11-21 after migrations: owner, anon, user without profile, role change, board grade/refusal rule, and `ops.keepalive()` for anon; two-teacher isolation remains untested under T-050) |
| [T-024](tasks/T-024.md) | Synthetic demo data | DONE (applied 2026-11-17: 1 journal, 5 lessons with `[ДЕМО]` prefix, 50 records, assessments of all five kinds) |
| T-022 | Attendance and meals schema | DEFERRED (after T-011) |
| T-025 | Report views | DEFERRED (after T-022) |
| T-050 | Enable several teachers: custom SMTP, invitations, owner screen to assign journals, two-teacher RLS test, privacy requirements | DEFERRED (when the owner decides) |

## Phase 3 — Application (ChatGPT or Codex)
| ID | Task | Status |
|---|---|---|
| [T-030](tasks/T-030.md) | PWA skeleton on mock data | DONE (PR #3 merged 2026-11-15; CI passed) |
| T-031 | MVP-1 journal: journals list and lesson dates from Supabase | IN PROGRESS (code merged in PR #8; live sign-in check not yet performed) |
| T-032 | MVP-1 journal: lesson window with the characteristics, `н`, save through RPC | PLANNED (write through RPC `save_lesson_record`) |
| T-033 | MVP-1 journal: edit/delete lesson, context menu, assessments, export | BLOCKED until T-032 |
| T-034 | MVP-2: attendance submission | DEFERRED |
| T-035 | MVP-2: meals and reports | DEFERRED |

## Phase 4 — Quality and launch
| ID | Who | Task | Status |
|---|---|---|---|
| T-040 | Claude | End-to-end acceptance on synthetic data | PLANNED |
| T-041 | Claude + Grok | Security and personal-data review | PLANNED |
| T-042 | Owner | Pilot in one class | PLANNED |
| T-043 | Grok | Free backup/export | PARTIAL (docs on branch `grok/T-023-docs`) |
