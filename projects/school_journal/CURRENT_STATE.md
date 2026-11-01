# Current State — School Journal

**Status:** T-020 merged. Core schema, RPC, lesson-window view and Auth profile trigger are applied to the live Supabase Free project. Starter synthetic seed is verified. First Auth account / owner promotion and T-023 RLS checks remain pending.
**Last updated:** 2026-11-01 22:13 (Europe/Kyiv)

## Repository
- `teachersergiy-wq/school_journal` — PUBLIC.
- `main` contains T-020: schema, RLS, RPC, `v_lesson_window`, `handle_new_user`, seed and docs.
- PR #1 merged (squash).
- Branch `grok/T-023-docs` + PR contains RLS test checklist, keep-alive and backup/export docs.

## Database (VERIFIED)
- Project: `school_journal` / ref `dtpyvyedcptdkdsowmco`.
- Organization: `yijbifjfvujcwzeqwzfd` | Free | `eu-central-1` (Frankfurt) | `ACTIVE_HEALTHY` | PostgreSQL 17.11.
- Applied migrations:
  - `20261101190138_core_schema` — history version `20261101194215`.
  - `20261101190500_save_lesson_record_rpc` — history version `20261101194221`.
  - `20261101215100_v_lesson_window` — history version `20261101195655`.
  - `20261101220000_handle_new_user` — history version `20261101201315`.
- `public.v_lesson_window` exists with `security_invoker=true`; authenticated SELECT grant exists. Effective privilege query also showed anon SELECT due to broad default privileges; Grok must address this.
- Auth profile trigger `on_auth_user_created` on `auth.users` exists and is enabled. Function `public.handle_new_user()` inserts `public.profiles` with default role `teacher`.
- Latest verification after applying Auth trigger: **0 Auth users, 0 profiles**. No Auth account has been created yet and no profile has been promoted to owner.
- Starter synthetic seed: 6 behavior marks, 2 subjects, 1 class (8-А, school year 2026), 10 fictional students (`Учень 01`–`Учень 10`). It was already applied and reverified; no duplicate seed run.
- No real student data, passwords, API keys, tokens or service-role keys recorded in Hub.

## Security / Quality — ACTION REQUIRED
- Security Advisor currently reports 4 SECURITY DEFINER functions callable by `anon` and by `authenticated`: `current_app_role()`, `is_class_teacher(uuid)`, `is_journal_teacher(uuid)`, and newly applied `handle_new_user()`.
- Security Advisor still reports mutable/unpinned `search_path` for `public.set_updated_at()`.
- Prior direct policy query showed all 32 table RLS policies target `{public}`, including write policies.
- Prior direct privilege checks showed `anon` and `authenticated` have SELECT and INSERT on `public.students`; both can execute helper/RPC functions. The view also has effective anon SELECT via broad default privileges.
- Grok must prepare a least-privilege corrective migration: explicit policy roles; revoke unnecessary PUBLIC/anon/authenticated EXECUTE; review table/view/sequence/default privileges; lock down function search_path. Preserve trigger functionality when revoking direct execution on `handle_new_user()`.
- Performance Advisor previously reported 2 unindexed foreign keys, 6 RLS init-plan warnings, 25 multiple-permissive-policy warnings and 10 unused-index INFO findings.
- RLS isolation/correctness across owner, teacher A, teacher B and anon remains NOT VERIFIED. Data API HTTP behavior remains NOT VERIFIED.
- Do not add real student records or use this as a production app until security remediation and role-isolation checks pass. Synthetic data only.

Detailed SQL and Advisor findings: [DATABASE_APPLY_REPORT.md](DATABASE_APPLY_REPORT.md).

## Auth / first owner account
- The trigger is ready: a new Auth user should receive a matching profile with role `teacher`.
- No Auth account has been created yet. The available Supabase connector in this workflow does not expose an Auth Admin invite/create-user action. Do not insert rows directly into `auth.users` with SQL and do not share service-role/secret keys.
- Owner must invite the first account in the Dashboard: [Authentication → Users](https://supabase.com/dashboard/project/dtpyvyedcptdkdsowmco/auth/users) → **Add user** → **Send invitation**. After invitation is accepted, verify the corresponding `public.profiles` row and promote only that specific account to `owner`.
- Never make the first registrant automatically owner; signup may be open to others.

## Next
1. Owner: send invitation to the owner's own email from Dashboard Auth Users; complete invitation.
2. Verify the Auth user has a matching `public.profiles` row with role `teacher`; promote that exact Auth UUID to `owner` only after confirming identity.
3. Grok: corrective migration for least-privilege grants, explicit RLS policy targets, SECURITY DEFINER EXECUTE and safe search_path (including `handle_new_user()`).
4. Claude/Grok: complete T-023 matrix for owner, two distinct test teachers, anon; verify cross-class/journal isolation and CRUD.
5. Verify actual Data API access and non-empty `v_lesson_window` output with synthetic journal/lesson/records after security fixes.
6. Merge/review T-023 docs PR; choose free keep-alive option (T-006); define backup/export cadence (T-043).
