# Tutor Schedule — CURRENT_STATE

## Scope

- Project: Tutor Schedule / teachersergiy-wq/Rozklad
- Context Hub project: projects/tutor-schedule/
- Separate legacy repository: teachersergiy-wq/r0zklad
- Separate Supabase project: tutor-calendar

## Repository state — VERIFIED 2026-09-26

- Active development branch: gpt/v2-tz-2026-09-19
- Pull Request: teachersergiy-wq/Rozklad#1
- PR state: open, not merged
- Final cutover: not performed
- r0zklad: unchanged except the explicitly authorized student-link redirect in student-schedule.js
- public.schedules: not modified

## Verified active files

- index.html
- app.js
- student-schedule.html
- student-schedule.js

## V2 backend state — VERIFIED

- Teacher access uses Supabase Auth.
- Student access uses per-student access_token RPCs.
- V2 data model is used by the new Rozklad application.
- Current V2 dataset is approximately 44 students / 1185 lessons.
- Student self-cancel is server-enforced:
  - only planned lessons;
  - at least 3 hours before start;
  - maximum 2 self-cancellations per calendar month.
- Self-cancel writes an audit record and creates a persistent teacher notification.
- Teacher notifications are loaded through a teacher-only RPC and can be explicitly acknowledged.
- v2_notifications has RLS enabled and no direct anon/authenticated table grants.
- Teacher-only notification RPCs are restricted to authenticated.
- Student token RPCs remain callable by anon and authenticated intentionally.

## Frontend state — VERIFIED / PARTIAL

Implemented and statically verified:

- Supabase Auth teacher login and V2 CRUD.
- Booking-request workflow.
- Student token links.
- Manual backup.
- Student conducted-lesson absolute numbering.
- Weekday labels in teacher/student lesson lists.
- Click-to-open lesson details from lesson lists.
- Student planned-lessons section with absolute chronological numbering.
- Mobile lesson-modal positioning fix.
- Teacher Month landscape scaling.
- Legacy student-link redirect from the explicitly authorized old r0zklad links.
- Student self-cancel counter and cancel action.
- Persistent teacher notification panel with acknowledge action.

## QA limits

- JavaScript syntax checks: PASS.
- Supabase transactional tests for self-cancel and teacher notification flows: PASS.
- Static repository checks: PASS.
- Live browser/mobile device QA is not available from this environment and remains a human verification step.