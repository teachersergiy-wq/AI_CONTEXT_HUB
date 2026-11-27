# Current State — School Journal

**Status:** T-020/T-021 schema, RPC, lesson-window view, Auth trigger, and seed; T-023A security hardening; T-024 demo data; and T-023B verification are complete on the live Supabase Free project. The owner accepted DATA_CONTRACT v1.1 on 2026-11-21; its repository status update is in PR #10. T-031 code is merged in PR #8; live sign-in remains untested and T-032 is PLANNED. GitHub Pages is deployed via Actions; the keep-alive migration is applied, with owner configuration steps still pending.
**Last updated:** 2026-11-21 (Europe/Kyiv)

## Repository
- `teachersergiy-wq/school_journal` — PUBLIC.
- `main` contains T-020: schema, RLS, RPC, `v_lesson_window`, `handle_new_user`, seed and docs.
- T-008 GitHub safeguards (VERIFIED, 2026-11-08): Secret scanning and push protection are enabled; `main` requires a pull request, forbids force pushes, and has no required approvals. Confirmed in repository settings. Secret scanning/push protection were already active; branch protection rule was created. Start future commit messages with an agent tag such as `[codex]`.
- PR #1 merged (squash).
- PR #7 merged 2026-11-21; GitHub Pages Source is GitHub Actions and the deployment workflow succeeded.
- PR #8 merged 2026-11-21; T-031 code is in `main`, but live sign-in has not been tested.
- PR #9 merged 2026-11-21; it adds the keep-alive migration and RLS report updates.
- PR #10 is open to record the owner’s DATA_CONTRACT v1.1 acceptance.
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
  - `20261114220000_board_exclusivity` — history version `20261117214815`.
  - `20261117010000_assessment_kinds_independent_control` — history version `20261117214820`.
  - `20261118000000_revoke_trigger_fn_execute` — history version `20261121135631`.
  - `20261118000100_keepalive` — history version `20261121135637`.
- The `public.v_lesson_window` view exists. After T-023A, `anon` has no privileges on any table or view in `public`; the full verified access results are recorded in the Security / Quality section.
- The owner’s profile exists with role `owner`. T-023A moved helper functions into the `private` schema; no old copies remain in `public`. The migration and security checks are recorded below.
- Post-invitation verification (2026-11-01 22:26 Europe/Kyiv): the owner's Auth account exists, email is confirmed, sign-in is recorded, an email identity and password credential exist, and the trigger-created profile is present with `role='owner'`. The exact account was verified in `auth.users` and promoted by its matching UUID. Email and UUID are intentionally not stored in Hub.
- Starter synthetic seed: 6 behavior marks, 2 subjects, 1 class (8-А, school year 2026), 10 fictional students (`Учень 01`–`Учень 10`). It was already applied and reverified; no duplicate seed run.
- T-024 synthetic demo data applied 2026-11-17: 1 journal, 5 lessons prefixed `[ДЕМО]`, 50 lesson records, and assessments of all five kinds.
- No real student data, passwords, API keys, tokens or service-role keys recorded in Hub.

## Security / Quality — VERIFIED (2026-11-14; updated 2026-11-21)
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
- T-023B checks were completed by Claude on 2026-11-17 and repeated after migrations on 2026-11-21: owner, `anon`, user without a profile, role change, the board grade/refusal rule, and `ops.keepalive()` for `anon` passed. Two-teacher isolation was not tested (T-050); the report is `docs/RLS_TEST_REPORT.md` on `main` after PR #9.
- Security Advisor reports only the warning about compromised-password protection. Data API exposes `graphql_public` and `public`; `Automatically expose new tables` is disabled; `ops` is not yet exposed.

Detailed SQL and Advisor findings: [DATABASE_APPLY_REPORT.md](DATABASE_APPLY_REPORT.md).

## Auth / first owner account
- T-007 is DONE (2026-11-14): the owner's screenshot verifies that new-user signup, manual linking, and anonymous sign-ins are disabled, email confirmation is enabled, and Save is inactive.
- The `on_auth_user_created` trigger remains enabled and creates a matching `public.profiles` row with default role `teacher`.
- **VERIFIED:** the owner accepted the invitation; email is confirmed, sign-in and password credential exist, matching profile was created, and the exact matching profile is now `role='owner'`.
- The invite link redirected the browser to `localhost`, producing `ERR_CONNECTION_REFUSED`. This happened after the Auth user was confirmed; it did not prevent registration or owner promotion.
- GitHub Pages is deployed at `https://teachersergiy-wq.github.io/school_journal/` using Actions. The owner still needs to set Supabase Auth `Site URL` and Redirect URLs to that address. The live sign-in check for T-031 has not been performed.
- Never make the first registrant automatically owner. Do not insert rows directly into `auth.users` or share service-role or secret keys.

## Next
1. Owner creates repository variables `SJ_SUPABASE_URL` and `SJ_SUPABASE_ANON_KEY`.
2. Owner adds `ops` to exposed Data API schemas, then manually runs the keep-alive workflow and checks for a green result.
3. Owner sets Supabase Auth `Site URL` and Redirect URLs to `https://teachersergiy-wq.github.io/school_journal/`.
4. Perform T-031 live sign-in verification; real credentials are checked by the owner.
5. Implement T-032 lesson-window behavior and saving through `save_lesson_record`.
6. Test two-teacher isolation when T-050 is enabled; define the free backup/export cadence (T-043).
