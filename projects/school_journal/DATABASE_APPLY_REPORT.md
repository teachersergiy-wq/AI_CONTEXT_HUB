# Database Apply Report — School Journal

**Date:** 2026-11-01 21:48 (Europe/Kyiv)  
**Supabase project:** `school_journal` (`dtpyvyedcptdkdsowmco`)  
**Region:** `eu-central-1` (Frankfurt)  
**Branch / PR:** `grok/T-020` / [PR #1](https://github.com/teachersergiy-wq/school_journal/pull/1)

## PROJECT

The owner requested application of the delivered T-020 database files to the Supabase Free project. Both migrations and the repository's synthetic seed were applied successfully.

## CHANGED

1. Applied `supabase/migrations/20261101190138_core_schema.sql` using Supabase migration tooling.
   - Migration history version recorded by Supabase: `20261101194215`
   - Migration name: `20261101190138_core_schema`
2. Applied `supabase/migrations/20261101190500_save_lesson_record_rpc.sql`.
   - Migration history version recorded by Supabase: `20261101194221`
   - Migration name: `20261101190500_save_lesson_record_rpc`
3. Executed `supabase/seed.sql` from `grok/T-020` using the SQL execution tool. The seed is not a schema migration and therefore does not appear in migration history.

No secrets or real student data were added.

## VERIFIED

Direct database queries after application returned:

- **11 public tables created:** `profiles`, `classes`, `students`, `subjects`, `journals`, `lessons`, `behavior_marks`, `lesson_records`, `lesson_record_behavior`, `lesson_exits`, `assessments`.
- **RLS enabled on all 11/11 tables.**
- **32 RLS policies** exist across these tables.
- Synthetic seed counts: 6 behavior marks, 2 subjects, 1 class, 10 fictional students.
- Migration history contains both migrations listed above.
- Supabase project status was `ACTIVE_HEALTHY` at the last project check.
- PR #1 remained open, with no formal GitHub review submissions at the time of verification. T-020 is therefore **not marked ACCEPTED**.

## SECURITY FINDINGS — ACTION REQUIRED

Supabase Security Advisors and direct catalog/privilege queries found the following. These are findings to fix/review, not claims that a user-data exposure has been demonstrated.

### 1. SECURITY DEFINER helpers are executable by anon and authenticated

The following `public` functions are marked SECURITY DEFINER and currently have EXECUTE available to both `anon` and `authenticated`:

- `public.current_app_role()`
- `public.is_class_teacher(uuid)`
- `public.is_journal_teacher(uuid)`

Supabase Security Advisors returned 3 findings for anonymous execution and 3 for authenticated execution. Review whether these functions need client-callable access; revoke unnecessary EXECUTE privileges and retain only the minimum intended roles. Keep the required helper behavior for RLS if policies depend on it; do not blindly remove functions.

### 2. Function search_path warning

- `public.set_updated_at()` has no fixed `search_path`.
- Security Advisor: `function_search_path_mutable` (1 finding).

Set a safe, explicit search path (or schema-qualify referenced objects) in the migration maintained by Grok.

### 3. Policy role targets are PUBLIC

A direct read of `pg_policies` showed all 32 policies currently have `roles = {public}`, including write policies. This means the policies are evaluated for all database roles; it is not the intended least-privilege configuration for authenticated teacher/owner workflows.

Review and explicitly target intended roles (normally `authenticated` for teacher/owner app access), while preserving any deliberate public access only where justified. Then run the RLS test matrix with at least two distinct authenticated teachers plus an unauthenticated/anon case.

### 4. Default table/function privileges are broad

Catalog/default-ACL checks confirmed that `anon`, `authenticated`, and `service_role` currently have default table privileges in `public`; function EXECUTE is also granted by default. Effective privilege checks returned:

- `anon`: SELECT and INSERT on `public.students` = true.
- `authenticated`: SELECT and INSERT on `public.students` = true.
- `anon` and `authenticated`: EXECUTE on `current_app_role()` = true.
- `anon` and `authenticated`: EXECUTE on `save_lesson_record(...)` = true.

RLS still applies to table rows, but broad grants plus PUBLIC-targeted policies increase the importance of fixing policy roles and verifying behavior. Audit/restrict table, sequence, and function grants/default privileges to the minimum required. The actual HTTP Data API endpoint behavior has **not** yet been tested; do that after access-control remediation.

### 5. Performance Advisor findings

The performance advisor returned:

- 2 unindexed foreign keys: `journals.subject_id`, `lesson_record_behavior.mark_id`.
- 6 RLS init-plan warnings (avoid repeated per-row auth function evaluation where possible, e.g. wrap stable auth expressions as suggested by Supabase).
- 25 multiple-permissive-policy warnings, often due to overlapping SELECT and ALL policies.
- 10 unused-index INFO findings. These are expected to be provisional on a newly created database with almost no query workload; do not drop indexes solely on this initial observation.

Remediation references:
- [RLS initialization plan](https://supabase.com/docs/guides/database/database-linter?lint=0003_auth_rls_initplan)
- [Unindexed foreign keys](https://supabase.com/docs/guides/database/database-linter?lint=0001_unindexed_foreign_keys)
- [Multiple permissive policies](https://supabase.com/docs/guides/database/database-linter?lint=0006_multiple_permissive_policies)
- [Mutable function search_path](https://supabase.com/docs/guides/database/database-linter?lint=0011_function_search_path_mutable)
- [Anon can execute SECURITY DEFINER](https://supabase.com/docs/guides/database/database-linter?lint=0028_anon_security_definer_function_executable)
- [Authenticated can execute SECURITY DEFINER](https://supabase.com/docs/guides/database/database-linter?lint=0029_authenticated_security_definer_function_executable)
- [Supabase: Securing the Data API](https://supabase.com/docs/guides/api/securing-your-api)

## DECISIONS / STATUS

- Migration application and initial synthetic seed: **VERIFIED / DONE as execution steps**.
- T-020 implementation/review: **REVIEW REQUIRED**, not ACCEPTED. PR #1 is still open and has no formal review.
- RLS correctness/isolation: **NOT VERIFIED**. RLS is enabled, but policy behavior across users has not been tested.
- Data API HTTP access: **NOT VERIFIED**.
- Do not add real student records or connect a production-like frontend until the security findings are reviewed and RLS/API access tests pass. Continue using synthetic data only.
- This report records database execution; it does not replace Claude's code/schema review or owner acceptance.

## TODO

1. Grok: prepare a corrective migration for helper function EXECUTE grants, safe search_path, PUBLIC policy targets, and least-privilege table/function/default privileges.
2. Claude/Owner: review PR #1 and the corrective migration; record ACCEPT or REWORK.
3. Grok/Claude: run T-023 RLS matrix (owner, teacher A, teacher B, anon) and verify cross-class/cross-journal isolation plus insert/update/delete behavior.
4. Verify actual Data API access after grants and policies are corrected.
5. Review performance findings and add the two missing FK indexes if justified; optimize RLS predicates and overlapping policies.
6. Expand the synthetic seed to the intended T-024 scope (2–3 classes) if still required.

## FILES

Applied from `teachersergiy-wq/school_journal`, ref `grok/T-020`:
- `supabase/migrations/20261101190138_core_schema.sql`
- `supabase/migrations/20261101190500_save_lesson_record_rpc.sql`
- `supabase/seed.sql`

Hub source of truth: `projects/school_journal/DATABASE_APPLY_REPORT.md`.


---

## ADDENDUM — Lesson-window view migration (2026-11-01 21:57 Europe/Kyiv)

### Applied
- Source: `teachersergiy-wq/school_journal`, ref `grok/T-020`.
- File: `supabase/migrations/20261101215100_v_lesson_window.sql`.
- Applied successfully via Supabase migration tooling.
- Supabase migration history: version `20261101195655`, name `20261101215100_v_lesson_window`.

### Verified
- `public.v_lesson_window` exists (`relkind = v`).
- View options include `security_invoker=true`; Supabase's current Views documentation recommends SECURITY INVOKER to make underlying table RLS policies apply: https://supabase.com/docs/guides/database/views
- `authenticated` has SELECT on the view.
- **Unexpected effective privilege:** `anon` also has SELECT on `public.v_lesson_window`, even though this migration explicitly grants SELECT only to `authenticated`. This is consistent with broad default table/view privileges already found in the project. Treat this as a follow-up for Grok's least-privilege grants migration; do not infer the view is anon-safe solely from `security_invoker=true`.
- The 11 public base tables remain present and RLS remains enabled on all 11.
- Seed recheck: behavior_marks=6, subjects=2, classes=1, students=10, all 10 students match the synthetic `Учень %` names. Seed was **not rerun**.
- Current data counts: journals=0, lessons=0, lesson_records=0. The view returned 0 rows in the current database; this is expected while no journal/lesson records exist. A non-empty result test with a synthetic authenticated teacher and lesson is still pending.

### Advisor recheck after the view
- Security: still 3 SECURITY DEFINER helper functions executable by `anon` and 3 by `authenticated` (`current_app_role()`, `is_class_teacher(uuid)`, `is_journal_teacher(uuid)`); still 1 mutable search_path finding for `set_updated_at()`.
- Performance: still 2 unindexed FKs (`journals.subject_id`, `lesson_record_behavior.mark_id`); 6 RLS init-plan warnings; 25 multiple permissive policy warnings; 10 unused-index INFO findings.
- No claim that RLS isolation or Data API behavior has been functionally verified.

### Remaining work
1. Grok to prepare/review least-privilege grants/default ACLs for tables, views and functions, including removing anon SELECT from the lesson-window view if not intended.
2. Review and fix SECURITY DEFINER EXECUTE and function search_path findings.
3. Execute T-023 role matrix (owner, two distinct test teachers, anon).
4. Add synthetic journal/lesson/record fixture(s) and verify expected view rows are visible only to the authorized teacher.
5. Recheck Security/Performance Advisors and Data API behavior after remediation.

