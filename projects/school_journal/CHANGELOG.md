# Changelog — School Journal

## 2026-11-01 21:29 (Europe/Kyiv) — T-005
- Created Supabase project `school_journal` in organization `yijbifjfvujcwzeqwzfd`.
- Selected region `eu-central-1` (Frankfurt).
- Project ref: `dtpyvyedcptdkdsowmco`.
- Organization plan: Free; quoted project cost: $0/month.
- Verified project via project details and organization project list: status `ACTIVE_HEALTHY`, PostgreSQL 17.11.
- No keys, passwords or secrets recorded.
- Database migrations and seed have not yet been applied.

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
