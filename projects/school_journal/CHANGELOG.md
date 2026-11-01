# Changelog — School Journal

## 2026-11-01 22:13 (Europe/Kyiv) — Auth profile trigger applied
- Applied `supabase/migrations/20261101220000_handle_new_user.sql` from `teachersergiy-wq/school_journal` main.
- Supabase migration history recorded version `20261101201315`, name `20261101220000_handle_new_user`.
- Verified `public.handle_new_user()` exists; trigger `on_auth_user_created` on `auth.users` exists and is enabled.
- Trigger inserts a matching `public.profiles` row with default role `teacher` on Auth user creation.
- Latest check: `auth.users` count = 0, `public.profiles` count = 0. No user was created, no owner role was assigned, and no credentials or secrets were requested/stored.
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
