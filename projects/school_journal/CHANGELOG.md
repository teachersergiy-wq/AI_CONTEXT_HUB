# Changelog — School Journal

## 2026-11-01 21:57 (Europe/Kyiv) — Apply lesson-window view
- Read latest Hub state and fetched `supabase/migrations/20261101215100_v_lesson_window.sql` from the current `grok/T-020` branch.
- Confirmed the view is declared with `security_invoker = true` and explicitly grants SELECT to `authenticated`.
- Applied migration successfully to Supabase; migration history version recorded as `20261101195655`, name `20261101215100_v_lesson_window`.
- Verified `public.v_lesson_window` exists and its reloptions include `security_invoker=true`.
- Verified all 11 base tables still exist and RLS remains enabled on all 11.
- Verified seed remains present: 6 behavior marks, 2 subjects, 1 class, 10 synthetic students. Seed was not rerun because data was already present.
- Effective privilege query also reports `anon` SELECT on the new view, despite explicit GRANT in the migration being only to authenticated. This is an extension of the previously recorded broad default ACL issue; Grok must review/restrict view/default grants.
- Current seed has 0 journals, 0 lessons and 0 lesson_records; view returns 0 rows. Functional view output with authenticated teacher and a synthetic lesson is not yet tested.
- Supabase Security Advisor still reports 3 SECURITY DEFINER helpers executable by anon/authenticated and mutable search_path for set_updated_at. Performance Advisor findings remain: 2 unindexed FKs, 6 RLS init-plan warnings, 25 multiple permissive policy warnings, 10 unused-index INFO notices.
- PR #1 is still open; formal review and issue-comment lists were empty at last check. T-020 is not marked ACCEPTED.
- Details: [DATABASE_APPLY_REPORT.md](DATABASE_APPLY_REPORT.md).

## 2026-11-01 (evening)
- T-005 done: free Supabase project `school_journal` / `dtpyvyedcptdkdsowmco` (eu-central-1, ACTIVE_HEALTHY, PG 17.11).
- Core schema + save_lesson_record RPC applied.
- Grok added `v_lesson_window` view migration on branch `grok/T-020`.
- PR #1 open for review/merge.

## 2026-11-01
- DATA_CONTRACT ACCEPTED (Q1–Q5).
- T-020 core schema delivered on `grok/T-020`.

## 2026-10-31
- Project created by merging school-attendance and school-gradebook.
