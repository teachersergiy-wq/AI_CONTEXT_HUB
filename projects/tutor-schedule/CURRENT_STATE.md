# Tutor Schedule — CURRENT_STATE

## Scope
- Project: Tutor Schedule / teachersergiy-wq/Rozklad
- Context Hub project: projects/tutor-schedule/
- Separate legacy repository: teachersergiy-wq/r0zklad
- Separate Supabase project: tutor-calendar

## Repository state — VERIFIED 2026-09-27
- Active development branch: gpt/v2-tz-2026-09-19
- Pull Request: teachersergiy-wq/Rozklad#1
- PR state: open, not merged
- Current PR head: e48ecead5cea04394d1df01ca5b61ba6632ba405
- Current PR mergeable flag: false
- Final cutover: not performed
- r0zklad: unchanged except the explicitly authorized student-link redirect in student-schedule.js
- public.schedules: not modified

## Verified V2 backend state
- Teacher access uses Supabase Auth.
- Student access uses per-student access_token RPCs.
- V2 dataset is approximately 44 students / 1185 lessons.
- Student self-cancel is server-enforced for planned lessons only, at least 3 hours before start, maximum 2 per student per calendar month.
- Self-cancel writes an audit record and creates a persistent teacher notification.
- Teacher notifications use authenticated-only RPCs and explicit acknowledgement.
- v2_notifications has RLS enabled and no direct anon/authenticated table grants.

## Verified frontend state
Implemented and statically verified:
- Supabase Auth teacher login and V2 CRUD.
- Booking/reschedule-request workflow.
- Student token links and manual backup.
- Student conducted-lesson absolute numbering.
- Weekday labels and click-to-open lesson details.
- Student planned-lessons section with chronological numbering.
- Teacher Year → Month → Week → Day drill-down behavior.
- Student Month/Year lesson highlighting.
- Student mobile lesson-modal viewport positioning and backdrop-close fix.
- Teacher Month landscape scaling.
- Authorized legacy r0zklad student-link redirect.
- Student self-cancel counter/action and teacher persistent notification panel.

## 2026-09-27 UI polish — VERIFIED / STATIC QA
- Student information bar text updated to concise Kyiv-time and communication wording; pills stay on one line on mobile.
- Student sections Проведені уроки / Заплановані уроки / Запити на розгляді are arranged as one compact row; pending requests open from their tab; Поточний період is above the period navigation arrows.
- Teacher and student Month headers use a compact single-row layout on landscape mobile; the existing non-landscape/two-row layouts remain available outside the scoped media query.

## QA limits
- JavaScript syntax checks: PASS.
- Static repository checks: PASS.
- Targeted Supabase transaction tests for self-cancel and notifications: PASS.
- Live browser/mobile/device QA is still a human verification step.

## Release gates
- Live QA of the accumulated UI changes, including the 2026-09-27 polish, is still required.
- One live authorized legacy-link redirect test remains required.
- Supabase Auth Leaked Password Protection must be enabled manually in Dashboard.
- Final clean resync from legacy must happen immediately before deployment.
- PR #1 merge and final cutover remain human-controlled.
