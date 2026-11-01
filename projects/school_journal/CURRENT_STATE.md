# Current State — School Journal

**Status:** Core schema, RPC and lesson-window view are APPLIED to the Supabase Free project. Starter synthetic seed is loaded. PR #1 remains open without a formal review at last check; merge/acceptance and RLS/API security verification remain pending.
**Last updated:** 2026-11-01 21:57 (Europe/Kyiv)

## Repository
- `teachersergiy-wq/school_journal` — PUBLIC.
- Branch `grok/T-020` contains core schema + RLS + seed + RPC + `v_lesson_window`.
- [PR #1](https://github.com/teachersergiy-wq/school_journal/pull/1) is OPEN; GitHub review and issue-comment lists were empty at 21:57 Kyiv time.
- DATA_CONTRACT.md: ACCEPTED.

## Database (VERIFIED)
- Project: `school_journal`; ref `dtpyvyedcptdkdsowmco`.
- Organization: `yijbifjfvujcwzeqwzfd`; plan Free ($0); region `eu-central-1` (Frankfurt).
- Project status at last check: `ACTIVE_HEALTHY`; PostgreSQL 17.11.
- Applied `20261101190138_core_schema` (migration history version `20261101194215`).
- Applied `20261101190500_save_lesson_record_rpc` (migration history version `20261101194221`).
- Applied `20261101215100_v_lesson_window` (migration history version `20261101195655`).
- Verified 11 public base tables and RLS enabled on all 11.
- Verified synthetic starter seed: 6 behavior marks, 2 subjects, 1 class (8-А, school year 2026), 10 fictional students (`Учень 01`–`Учень 10`). Seed was already applied; it was not rerun during the view step.
- Verified `public.v_lesson_window` exists with `security_invoker=true`; explicit SELECT grant exists for `authenticated`.
- Effective privilege check also reports `anon` has SELECT on `v_lesson_window`, consistent with the broad default table/view grants recorded in the database apply report.
- Current seed does not create journals, lessons or lesson records: counts are 0/0/0. Consequently the view returned 0 rows in the current database check; row-level output has not been functionally tested with an authenticated teacher and lesson.
- No real student data, passwords, API keys, tokens or service-role keys recorded in Hub.

## Security / Quality — ACTION REQUIRED
- Security Advisor still reports 3 SECURITY DEFINER helpers callable by `anon` and by `authenticated`: `current_app_role()`, `is_class_teacher(uuid)`, `is_journal_teacher(uuid)`.
- Security Advisor still reports mutable/unpinned `search_path` for `public.set_updated_at()`.
- Earlier direct policy query showed all 32 RLS policies target `{public}`, including write policies.
- Earlier direct privilege checks showed `anon` and `authenticated` have SELECT and INSERT on `public.students`, and can execute helper/RPC functions.
- Performance Advisor still reports 2 unindexed foreign keys, 6 RLS init-plan warnings, 25 multiple-permissive-policy warnings and 10 unused-index INFO findings.
- `v_lesson_window` uses SECURITY INVOKER as recommended by Supabase, so underlying-table RLS applies; however effective SELECT for `anon` on the view is also present due existing default grants. Recheck/restrict after the grant-remediation migration.
- Do not add real student records or use this as a production app until least-privilege grants/policy roles, RLS isolation and Data API access are verified.

Detailed queries/findings: [DATABASE_APPLY_REPORT.md](DATABASE_APPLY_REPORT.md).

## Requirements and acceptance
- DATA_CONTRACT.md: ACCEPTED.
- T-020: schema, RPC and view migrations are applied; PR #1 is still open and has no formal GitHub review submission/comment at last check. Do not describe T-020 as ACCEPTED without Claude/Owner's explicit verdict.
- RLS enabled: VERIFIED. RLS isolation/correctness across owner/teacher/anon: NOT VERIFIED.
- Data API HTTP behavior: NOT VERIFIED.
- View creation/security_invoker option: VERIFIED. View result for an actual lesson with authenticated teacher: NOT VERIFIED.

## Next
1. Grok: corrective migration for least-privilege EXECUTE/default/table/view grants, SECURITY DEFINER helper access, safe function search_path, and intended RLS policy role targets.
2. Claude/Owner: review PR #1 and corrective migration; explicitly record ACCEPT or REWORK.
3. Run T-023 matrix with owner, two distinct test teachers, and anon; verify cross-class/journal isolation and CRUD cases.
4. Verify actual Data API access, including whether anon is denied access to the lesson-window view, after grant remediation.
5. Create only synthetic test journal/lesson/auth-linked records to verify `v_lesson_window` returns the expected active students, records, behavior, exits and assessments.
6. Review performance findings; keep unused-index conclusions provisional until workload exists.
7. T-006: free PWA hosting + keep-alive; T-043: backup/export.
