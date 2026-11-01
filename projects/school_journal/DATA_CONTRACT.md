# DATA_CONTRACT.md — School Journal (T-013, v0 draft)

Status: **PROPOSED** (written by Claude, awaiting owner approval and Grok/ChatGPT review).
Scope: the core and the class journal (stage 1). Attendance and meals are added after T-011.
The file is owned by Claude; changes go through Claude and the owner. Grok implements it in `supabase/` of the app repository.
Sources: `DECISIONS.md`, `PROJECT_CONTEXT.md`, `tasks/T-010.md`. The permissions part is input for T-012.

## 0. Ground rules
- Supabase Free only; no paid features. The Supabase project does not exist yet (T-005).
- RLS is enabled on every table in `public`. No policy = no access. No anonymous access.
- Only synthetic data in seed, PRs and chats. No keys, passwords or service-role keys in any repository.
- IDs: `uuid` default `gen_random_uuid()`. Timestamps: `timestamptz` (`created_at`, `updated_at`).
- DB values are English codes; the app shows Ukrainian labels.
- NN = required; NULL = optional. For lesson characteristics, NULL means "not marked".

## 1. Decisions embedded in the contract
| # | Decision | Status |
|---|---|---|
| 1 | Absence marker `н` is set by the teacher in the lesson window; daily attendance for meals is separate (variant A) | DECIDED |
| 2 | Homework: done / partial / not done | DECIDED |
| 3 | Notebook and textbook: two separate indicators | DECIDED |
| 4 | Work at the board: an assessment OR a "refused" mark | DECIDED |
| 5 | Behaviour: a list of marks, several per student per lesson; starting list of six, extensible | DECIDED |
| 6 | Leaving the classroom: reason only (toilet / phone / other), no duration | DECIDED |
| 7 | Assessment and `н` are in the same lesson window | DECIDED |
| 8 | Grading scale: 12 points | DECIDED |
| 9 | Moving a student to another class: no history for now | DECIDED |
| 10 | A journal has exactly one teacher | DECIDED |
| 11 | Columns `ГР1`, `ГР2`, `ГР3` are rejected | DECIDED |
| 12 | Not taking notes: yes/no | PROPOSED |
| 13 | Late arrival: minutes only (1–90) | PROPOSED |
| 14 | Assessment kinds: current and thematic for stage 1 | PROPOSED |

## 2. Entities and relations

auth.users 1—1 profiles
classes 1—N students
subjects + classes + profiles(teacher) → journals (one journal = subject + class + teacher; school year from class)
journals 1—N lessons
lessons 1—N lesson_records (one per student)
lesson_records M—N behavior_marks (via lesson_record_behavior)
lesson_records 1—N lesson_exits
lessons 1—N assessments ← students

A student belongs to one class. A teacher owns several journals. One lesson belongs to one journal.

## 3. Roles (stage 1)
- owner: manages directories (classes, students, subjects, behavior marks), sees everything.
- teacher: works only with own journals (journals.teacher_id = auth.uid()).
No pupil/parent access. Anonymous access forbidden.

## 4. Tables
(Full tables as in the archive: profiles, classes, students, subjects, journals, lessons, behavior_marks, lesson_records, lesson_record_behavior, lesson_exits, assessments. See original archive for complete field lists, enums hw_status, exit_reason, assessment_kind, constraints on is_absent, uniqueness keys.)

## 5. Permissions matrix
owner: full S/I/U/D on all.
teacher: S on directories for own journals; S/I/U/D on lessons, lesson_records, behavior links, exits, assessments of own journals.

## 6. App queries
1. My journals
2. Lesson dates of a journal
3. Lesson window (students + left join records + marks + exits + assessments)
4. Upsert lesson by date
5. Upsert student record + replace behavior/exits (RPC preferred)
6. Student grades by subject (PLANNED)
7. CSV export (app-side)

## 7. Free plan and seed
Small synthetic seed only (1 class, ~10 students named "Учень 01"…, 2 subjects, 5 lessons). No real names. Volume fits Free with margin. Keep-alive and T-043 export still required.

## 8. Open items
- T-010 remaining, confirm PROPOSED 12–14.
- T-012 permissions.
- Grok review for implementability.
- ChatGPT review for app buildability.

(Note: this is a restored summary version; full field-by-field detail matches the coordinator archive. Full detailed version available in the attached zip and will be kept in sync.)
