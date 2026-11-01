# Changelog — School Journal

## 2026-11-01 21:48 (Europe/Kyiv) — T-020 database apply / initial verification
- On the owner's request, applied `20261101190138_core_schema` to Supabase; migration history version: `20261101194215`.
- Applied `20261101190500_save_lesson_record_rpc`; migration history version: `20261101194221`.
- Executed starter `supabase/seed.sql` from `grok/T-020` (not a migration): 6 behavior marks, 2 subjects, 1 class, 10 fictional students.
- Verified all 11 expected public tables exist and RLS is enabled on all 11; 32 policies exist.
- Checked Supabase Security and Performance Advisors and direct catalog/privilege queries. Findings and corrective actions are recorded in [DATABASE_APPLY_REPORT.md](DATABASE_APPLY_REPORT.md).
- Important: all 32 RLS policies target `{public}`; `anon` and `authenticated` have SQL SELECT/INSERT privileges on `public.students`; both can execute listed helper/RPC functions. Three SECURITY DEFINER helpers are callable by anon/authenticated; `set_updated_at` has a mutable search_path.
- T-020 remains **REVIEW REQUIRED / NOT ACCEPTED**. PR #1 remains open with no formal GitHub review submissions at last check. RLS isolation and Data API HTTP behavior are not verified.
- No real student data or secrets were added.

## 2026-11-01 21:29 (Europe/Kyiv) — T-005
- Created Supabase project `school_journal` in organization `yijbifjfvujcwzeqwzfd`.
- Selected region `eu-central-1` (Frankfurt).
- Project ref: `dtpyvyedcptdkdsowmco`.
- Organization plan: Free; quoted project cost: $0/month.
- Verified project via project details and organization project list: status `ACTIVE_HEALTHY`, PostgreSQL 17.11.
- No keys, passwords or secrets recorded.
- Database migrations and seed had not yet been applied at that time.

## 2026-11-01 (evening) — T-020
- Grok delivered core schema on branch `grok/T-020`:
  - migrations: enums, profiles/classes/students/subjects/journals/lessons/behavior_marks/lesson_records/lesson_record_behavior/lesson_exits/assessments
  - RLS for owner + teacher (own journals)
  - helpers + `save_lesson_record` RPC
  - synthetic seed (6 behavior marks, 2 subjects, 1 class, 10 fictional students)
- DATA_CONTRACT ACCEPTED by owner (Q1–Q5).
- Supabase project pending creation at that time (T-005).

## 2026-11-01
- Owner answered DATA_CONTRACT open questions Q1–Q5.
- Contract updated to READY FOR ACCEPT then ACCEPTED.
- App repo received authoritative DATA_CONTRACT.md.

## 2026-10-31
- Project created by merging school-attendance and school-gradebook.
