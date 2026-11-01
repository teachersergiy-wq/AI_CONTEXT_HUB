# Current State — School Journal

**Status:** Supabase Free project active; T-020 schema and RPC migrations applied; starter synthetic seed loaded. Security remediation, T-020 review/acceptance, RLS isolation tests and Data API verification remain pending.
**Last updated:** 2026-11-01 21:48 (Europe/Kyiv)

## Repository
- `teachersergiy-wq/school_journal` exists, PUBLIC.
- Branch `grok/T-020` contains core schema + RLS + seed + RPC.
- [PR #1](https://github.com/teachersergiy-wq/school_journal/pull/1) is OPEN; no formal review submissions were present at last check.
- DATA_CONTRACT.md: ACCEPTED by owner (Q1–Q5).

## Database
- Supabase project: `school_journal`, ref `dtpyvyedcptdkdsowmco`.
- Organization: `yijbifjfvujcwzeqwzfd` (Free plan); region `eu-central-1` (Frankfurt).
- Last project check: `ACTIVE_HEALTHY`; PostgreSQL 17.11.
- Quoted project cost: $0/month.
- Applied migration `20261101190138_core_schema` (history version `20261101194215`).
- Applied migration `20261101190500_save_lesson_record_rpc` (history version `20261101194221`).
- Executed starter `supabase/seed.sql` from `grok/T-020`; seed execution is not a migration.
- Verified 11 public tables; RLS enabled on all 11; 32 policies present.
- Verified starter seed: 6 behavior marks, 2 subjects, 1 class, 10 fictional students.
- No real student data, passwords, API keys, tokens or service-role keys recorded in Hub.

## Security / Quality — ACTION REQUIRED
- Security Advisor: 3 SECURITY DEFINER helpers callable by `anon` and `authenticated`: `current_app_role()`, `is_class_teacher(uuid)`, `is_journal_teacher(uuid)`.
- Security Advisor: `public.set_updated_at()` has mutable/unpinned `search_path`.
- Direct policy query: all 32 policies currently target `{public}`, including write policies.
- Direct privilege checks: `anon` and `authenticated` both have SELECT and INSERT on `public.students`; both can EXECUTE the helper and `save_lesson_record` RPC. Row-level policy behavior remains untested.
- Data API HTTP behavior has not been verified.
- Performance Advisor: 2 unindexed foreign keys, 6 RLS init-plan warnings, 25 multiple-permissive-policy warnings, 10 unused-index INFO findings (new DB / little workload).
- Do not add real student records or enable production-like app use until policy/grant remediation and RLS/API tests pass.

Full queries, counts, and recommendations: [DATABASE_APPLY_REPORT.md](DATABASE_APPLY_REPORT.md).

## Requirements and acceptance
- DATA_CONTRACT.md: ACCEPTED.
- T-020: schema files applied to Supabase, but task is **not ACCEPTED**. PR #1 remains open and has no formal GitHub review. Claude/Owner review is still required.
- RLS enabled is VERIFIED; RLS isolation/correctness is NOT VERIFIED.
- Data API HTTP access is NOT VERIFIED.

## Next
1. Grok: prepare corrective migration for least-privilege EXECUTE/default/table grants, SECURITY DEFINER helper access, safe function search_path, and explicit RLS policy role targets.
2. Claude/Owner: review PR #1 and corrective changes; record ACCEPT or REWORK.
3. Execute T-023 RLS matrix with owner, two distinct teachers, and anon; verify cross-class/journal isolation and CRUD cases.
4. Verify actual Data API requests after access-control remediation.
5. Review performance advisor findings and expand starter seed for T-024 (2–3 classes) if still required.
6. T-006: choose free PWA hosting + auto-pause plan.
