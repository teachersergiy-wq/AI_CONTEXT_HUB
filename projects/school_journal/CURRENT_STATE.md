# Current State — School Journal

**Status:** T-020 core schema, RPC, lesson-window view, Auth profile trigger, starter synthetic seed, and T-023A security hardening migration are applied to the live Supabase Free project. T-007 is DONE. T-023B verification is IN PROGRESS; T-024 demo data is IN REVIEW. T-031 is waiting for T-024 demo data, not blocked by security.
**Last updated:** 2026-11-14 (Europe/Kyiv)

## Repository
- `teachersergiy-wq/school_journal` — PUBLIC.
- `main` contains T-020: schema, RLS, RPC, `v_lesson_window`, `handle_new_user`, seed and docs.
- T-008 GitHub safeguards (VERIFIED, 2026-11-08): Secret scanning and push protection are enabled; `main` requires a pull request, forbids force pushes, and has no required approvals. Confirmed in repository settings. Secret scanning/push protection were already active; branch protection rule was created. Start future commit messages with an agent tag such as `[codex]`.
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
  - `20261101232000_security_hardening` — history version `20261114200113`.
- The `public.v_lesson_window` view exists. After T-023A, `anon` has no privileges on any table or view in `public`; the full verified access results are recorded in the Security / Quality section.
- The owner’s profile exists with role `owner`. T-023A moved helper functions into the `private` schema; no old copies remain in `public`. The migration and security checks are recorded below.
- Post-invitation verification (2026-11-01 22:26 Europe/Kyiv): the owner's Auth account exists, email is confirmed, sign-in is recorded, an email identity and password credential exist, and the trigger-created profile is present with `role='owner'`. The exact account was verified in `auth.users` and promoted by its matching UUID. Email and UUID are intentionally not stored in Hub.
- Starter synthetic seed: 6 behavior marks, 2 subjects, 1 class (8-А, school year 2026), 10 fictional students (`Учень 01`–`Учень 10`). It was already applied and reverified; no duplicate seed run.
- No real student data, passwords, API keys, tokens or service-role keys recorded in Hub.

## Security / Quality — VERIFIED (2026-11-14)
- T-007 is DONE. The owner's screenshot showed “Allow new users to sign up”, “Allow manual linking”, and “Allow anonymous sign-ins” disabled; “Confirm email” enabled; and the Save button inactive.
- In the Data API settings screenshot, the exposed schemas were `graphql_public` and `public`; `private` was not exposed. The owner disabled “Automatically expose new tables”.
- T-023A was accepted by Claude at pull request #2 head `06dddbb`, merged, and applied by Claude to live project `dtpyvyedcptdkdsowmco` on 2026-11-14 through the Supabase integration. Migration: `20261101232000_security_hardening`; migration history version: `20261114200113`.
- Catalog reads and tests in a rolled-back transaction verified that `anon` has no privileges on any table, view, or the `public` schema.
- Row-Level Security is enabled on all 11 tables. All 31 policies apply only to `authenticated`.
- Helper functions are in `private`; old copies in `public` are absent. A role change through the API is rejected by the column privilege, including for the owner.
- The owner can see 10 students and the owner's own profile. A user without a profile sees zero rows.
- The Security Advisor reports one warning: protection against compromised passwords is disabled and may be unavailable on the Free plan.
- Future migrations must explicitly grant needed privileges, enable Row-Level Security, and define policies. With “Automatically expose new tables” disabled, newly created tables and functions owned by `postgres` do not grant privileges to `authenticated` or `service_role` by default.
- Performance Advisor findings previously recorded: 2 unindexed foreign keys, 6 Row-Level Security initialization-plan warnings, 25 multiple-permissive-policy warnings, and 10 unused-index information findings.

Detailed SQL and Advisor findings: [DATABASE_APPLY_REPORT.md](DATABASE_APPLY_REPORT.md).

## Auth / first owner account
- T-007 is DONE (2026-11-14): the owner's screenshot verifies that new-user signup, manual linking, and anonymous sign-ins are disabled, email confirmation is enabled, and Save is inactive.
- The `on_auth_user_created` trigger remains enabled and creates a matching `public.profiles` row with default role `teacher`.
- **VERIFIED:** the owner accepted the invitation; email is confirmed, sign-in and password credential exist, matching profile was created, and the exact matching profile is now `role='owner'`.
- The invite link redirected the browser to `localhost`, producing `ERR_CONNECTION_REFUSED`. This happened after the Auth user was confirmed; it did not prevent registration or owner promotion.
- Supabase Auth URL Configuration has not been inspected through the available connector. Set `Site URL` to the actual deployed PWA URL and add its required redirect/callback URLs after hosting is selected in T-006. Do not invent a production URL or use `localhost` as the production Site URL.
- Never make the first registrant automatically owner. Do not insert rows directly into `auth.users` or share service-role or secret keys.

## Next
1. Configure Supabase Auth `Site URL` / Redirect URLs after T-006 selects and deploys the free PWA host; currently the invitation redirect reached `localhost` (registration itself succeeded).
2. Complete T-023B on branch `grok/T-023B`: owner, anonymous user, user without a profile, and role-change checks have passed; verify `save_lesson_record` and `v_lesson_window` with data after T-024.
3. Complete review and application of T-024 demo data; T-031 waits for that data and is not blocked by security.
4. Verify non-empty `v_lesson_window` output and record saving with synthetic journal, lesson, and records after T-024.
5. Merge/review T-023 docs PR; choose free keep-alive option (T-006); define backup/export cadence (T-043).
