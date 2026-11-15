# Changelog — School Journal

## 2026-11-14 — T-007 and T-023A completed
- The owner's Supabase Auth screenshot verified that new-user signup, manual linking, and anonymous sign-ins are disabled, email confirmation is enabled, and Save is inactive. The Data API screenshot showed `graphql_public` and `public` exposed, with `private` not exposed. The owner disabled “Automatically expose new tables”.
- School Journal pull request #2 was merged after Claude's verdict ACCEPTED at head `06dddbb`. Claude applied migration `20261101232000_security_hardening` to live project `dtpyvyedcptdkdsowmco` through the Supabase integration. Migration history version: `20261114200113`.
- Catalog reads and tests in a rolled-back transaction verified that `anon` has no privileges on any table, view, or the `public` schema; Row-Level Security is enabled on all 11 tables; and all 31 policies apply only to `authenticated`. Helper functions are in `private`, with no old copies in `public`. Role changes through the API are rejected by the column privilege, including for the owner.
- The owner can see 10 students and the owner's own profile; a user without a profile sees zero rows. The Security Advisor reports one warning: protection against compromised passwords is disabled and may be unavailable on the Free plan.
- With “Automatically expose new tables” disabled, newly created tables and functions owned by `postgres` do not grant privileges to `authenticated` or `service_role` by default. Future migrations must explicitly grant needed privileges, enable Row-Level Security, and define policies.

## 2026-11-08 22:00 (Europe/Kyiv) — T-008 GitHub safeguards verified; T-007 blocked
- Verified in `teachersergiy-wq/school_journal` settings: secret scanning and push protection were already enabled; `main` now requires pull requests and forbids force pushes (no approval count required).
- Future commit messages should start with an agent tag such as `[codex]`, `[chatgpt]` or `[grok]`.
- T-007 remains BLOCKED: opening the project Auth page redirected to Supabase Dashboard sign-in. No Auth setting was changed. Resume after owner signs in, disable public signup, and verify the saved value.

## 2026-11-01 22:26 (Europe/Kyiv) — First Auth account confirmed and promoted to owner
- Owner accepted the Dashboard invitation. Verified the exact Auth account exists, email is confirmed, sign-in is recorded, an email identity and password credential exist, and the trigger-created profile is present.
- Updated only the matching `public.profiles` row from `teacher` to `owner`; re-queried and verified `role='owner'`.
- The browser displayed `ERR_CONNECTION_REFUSED` for `localhost` after the invitation link was clicked. Database verification confirms the Auth flow completed; the failure is the post-verification redirect target, not account creation.
- The deployed PWA host has not yet been chosen (T-006), so no production URL was guessed or written to Supabase Auth URL Configuration. Set Site URL / Redirect URLs once the host is deployed.
- Personal email, UUID, password, and any secrets are intentionally excluded from this Hub entry.

## 2026-11-01 22:13 (Europe/Kyiv) — Auth profile trigger applied
- Applied `supabase/migrations/20261101220000_handle_new_user.sql` from `teachersergiy-wq/school_journal` main.
- Supabase migration history recorded version `20261101201315`, name `20261101220000_handle_new_user`.
- Verified `public.handle_new_user()` exists; trigger `on_auth_user_created` on `auth.users` exists and is enabled.
- Trigger inserts a matching `public.profiles` row with default role `teacher` on Auth user creation.
- At the time of applying this migration (22:13), `auth.users` and `public.profiles` were empty. Subsequent owner invitation and role-promotion results are recorded in the 22:26 changelog entry above.
- The available Supabase integration exposes SQL/migration operations but not Auth Admin invite/create-user operations. Owner must use Dashboard → Authentication → Users → Add user → Send invitation; do not insert directly into `auth.users` with SQL or share service-role/secret keys.
- Security Advisor now also reports `public.handle_new_user()` among SECURITY DEFINER functions executable by anon/authenticated. Grok must revoke unnecessary direct EXECUTE while retaining the Auth trigger, and review its search_path, in a corrective migration.
- Details: [DATABASE_APPLY_REPORT.md](DATABASE_APPLY_REPORT.md).

## 2026-11-01 (late evening)
- PR #1 (T-020) merged to main.
- Live Supabase `dtpyvyedcptdkdsowmco` has core schema + RPC.
- Grok added docs branch: T-023 RLS tests, T-006 keep-alive, T-043 backup/export.

## 2026-11-01
- DATA_CONTRACT ACCEPTED; T-005 project created; T-020 delivered.

## 2026-10-31
- Project created by merging school-attendance and school-gradebook.
