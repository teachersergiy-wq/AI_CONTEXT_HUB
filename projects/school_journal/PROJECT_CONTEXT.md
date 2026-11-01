# Project Context — School Journal (`school_journal`)

## Purpose
Mobile-first web application (PWA) that combines the **class journal (gradebook)** with **school attendance & meals**. One shared data core, two modules. **The class journal is built first** (owner decision, 2026-10-31).

## Origin and boundary
Created on 2026-10-31 by merging `school-attendance` and `school-gradebook` (owner decision D1). Those two Hub records are kept as **historical context only**; their open requirements are inherited here.

Still separate projects: `tutor-schedule` (Rozklad), `mustang`, `math-assessment`, `multiplication-practice`.

## Team and roles (decided by the owner)
- **Owner** — control and important decisions.
- **Claude** — coordinator: planning, requirements, task cards, quality control.
- **Grok** — database.
- **ChatGPT** — coding.

Operating rules: `WORKFLOW.md`. Task board: `TASKS.md`.

## Architecture (decided)
- Platform: PWA, mobile-first.
- Backend: Supabase (Postgres, Auth, RLS), a **separate** Supabase project in the owner's Supabase organization `yijbifjfvujcwzeqwzfd`. Never share it with tutor-calendar, multiplication-practice or the Hub public context API.
- Code repository: `teachersergiy-wq/school_journal` (private). Grok and ChatGPT may commit to it directly.
- Hosting of the PWA: not decided (T-006); must be free.
- The old Python desktop gradebook (`journal_gui.py`, "Етап 9") is a source of requirements only, not the base of the new app.

## Constraint: fully free
The whole project must run at no cost (owner decision, 2026-10-31): no paid plans, no paid APIs. Known consequences of Supabase Free (as reported by third-party sources in 2026; verify at supabase.com/pricing):
- 500 MB database, 1 GB file storage, about 5 GB egress, 2 active free projects per organization.
- A free project is paused after about 7 days without activity and must be resumed manually. Holidays and summer break are a real risk.
- No daily backups on the free plan, so export/backup must be built by us (T-043).
24/7 availability is a requirement to verify, not a provider promise.

## Modules
- **Core:** students, classes, teachers, subjects, schedule/lessons, users and roles.
- **Module B — class journal (priority 1):** select subject + class, then a lesson date, then the lesson window.
- **Module A — attendance and meals (priority 2):** daily submission from a phone, kitchen and administration reports.

## Inherited requirements — class journal (confirmed by the owner 2026-10-31)
1. The user selects a journal by subject + class (e.g. Algebra — Grade 8) and sees only that journal.
2. The journal lists the lesson dates for that subject/class.
3. Selecting a date opens the lesson window: student list on the left, lesson-characteristic columns on the right.
4. Required characteristics per student per lesson:
   1. homework completion;
   2. availability of notebook and textbook;
   3. work at the board;
   4. behaviour during the lesson;
   5. not making notes in the notebook;
   6. leaving the classroom, with reason/category (toilet, phone, other);
   7. late arrival, recorded as N minutes.
5. Columns `ГР1`, `ГР2`, `ГР3` are rejected and must NOT be reintroduced.
6. The absence marker `н` stays unless the owner changes it. It is set by the teacher on the lesson in the journal; daily attendance (for meals) is separate and independent (decision 2026-10-31, variant A).
7. Independent work, homework and control/test assessment workflows are not cancelled; how they sit next to the lesson characteristics is still open.
8. Lesson edit/delete and a context menu are required (historical requirement).

## Inherited requirements — attendance and meals (earlier chats; PLANNED, not verified)
- Mobile-first, large touch controls.
- Grades 1–11; grade 10 explicitly excluded from the attendance workflow (re-confirm in T-011).
- Present/absent students identified by surname.
- Submitted by the homeroom teacher or the teacher whose first lesson is in that class.
- Record who submitted and when.
- Substitution/replacement scenarios.
- Kitchen-facing meal reports and administration reports.
- Historical retention; filtering/reporting by day, class, student, month, school year, missed lessons, student-days (дитодні) and attendance percentage.

## Open design questions
- Value sets and input controls for the 7 characteristics; notebook and textbook together or separate; several exits per lesson; how behaviour and board work are evaluated; how assessments sit next to the characteristics. (T-010, priority 1)
- Roles and permissions. (T-012)
- Meal workflow details and report formats. (T-011, deferred until the journal MVP-1 requirements are settled)

## Constraints
- Children's personal data: **only synthetic test data** in the repository and in any AI chat. Roles and RLS from day one. Keep data minimal.
- No passwords, API keys, tokens or service-role keys in the repository or the Hub.
- Do not invent project state; use VERIFIED / PLANNED / PARTIAL / BLOCKED labels.
