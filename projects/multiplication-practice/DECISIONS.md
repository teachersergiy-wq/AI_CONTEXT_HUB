# Multiplication Practice — DECISIONS

## 2026-10-10 — Dedicated project approved

**Decision:** Create `multiplication-practice` as an independent project in AI_CONTEXT_HUB.

**Reason:** The product is not the same as Math Assessment question-bank/import work. It has its own student accounts, timed tests, result history, publication controls, class/school leaderboards and teacher dashboard.

**Consequences:** Use `projects/multiplication-practice/` for durable context. Keep Math Assessment, School Gradebook, School Attendance and Tutor Schedule as separate projects.

**Status:** active.

## 2026-10-10 — Technology direction

**Decision:** The target technology direction is GitHub + Supabase.

**Reason:** The user explicitly selected these platforms.

**Consequences:** A dedicated application repository and a dedicated Supabase application project are still needed. GitHub Pages + GitHub Actions is a hosting candidate; Supabase PostgreSQL/Auth/Edge Functions are backend candidates. Validate compatibility, quotas and costs before choosing final deployment details.

**Status:** active; implementation not started.

## 2026-10-10 — Free components and 24/7 availability

**Decision:** Zero recurring cost and 24/7 availability are hard user constraints.

**Reason:** The app is intended for school use and should not depend on paid hosting or a teacher's personal computer staying on.

**Consequences:** Do not assume free plans guarantee uninterrupted 24/7 service. Verify current quotas, idle-suspension policies and outages; disclose any conflict with the hard constraint before production.

**Status:** active.

## 2026-10-10 — Each attempt has independent publication settings

**Decision:** A student may independently opt an individual completed attempt into class TOP, school TOP, both, or neither, and may change that decision later.

**Reason:** The user explicitly required the ability to toggle participation for any individual attempt at any time.

**Consequences:** Store publication settings separately from the attempt itself; keep private attempts out of other students' views. Display a shared result as the student's name, a generated nickname or `Учень`.

**Status:** active.

## 2026-10-10 — Server calculates outcomes

**Decision:** The server, not browser-submitted totals, is authoritative for answer correctness, timeouts, passed/failed status and final score.

**Reason:** Prevent trivial client-side score manipulation and make rankings consistent.

**Consequences:** Do not expose answer keys before appropriate submission; enforce access and publication rules in database policies/server functions.

**Status:** active.

## 2026-10-10 — Candidate levels are provisional

**Decision:** Treat the previously suggested 5-level counts/time/error/threshold table as a draft, not an approved fixed configuration.

**Reason:** Those exact figures were assistant-proposed examples and may need teacher adjustment.

**Consequences:** Make level settings configurable; confirm values before treating them as final.

**Status:** active.
