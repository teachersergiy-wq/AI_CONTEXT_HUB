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
- Current PR head: 6afc45471f472b2cc38137cc4452b166f7ca7f90
- The previously failed UI-206.4 attempt was removed from the unmerged branch; the current head contains the corrected UI-206.4 implementation.
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

## 2026-09-27 UI polish and UI-206 — VERIFIED / STATIC QA
- Student information bar text uses concise Kyiv-time and communication wording.
- Student sections Проведені уроки / Заплановані уроки / Запити на розгляді are compacted into one row.
- Only one visible “Запити на розгляді” entry remains in the student section row; the separate duplicate header counter was removed. The pending-request entry is hidden when there are no pending requests.
- The debt notice remains conditional: it is hidden when there are no unpaid completed lessons and shown only when unpaid completed lessons exist.
- “Поточний період” is placed directly before the period navigation arrows in the student navigation row.
- The student “Заплановані уроки” list is now loaded independently from the selected calendar Week/Month/Year range, using a broad date window, so the list does not depend on the period currently displayed.
- Teacher Day/Week lesson cards and Month lesson badges bold the time and student name when the lesson is fully completed: non-empty topic other than “-”, non-empty homework (including “-”), status completed, paid=true and a payment amount is present.
- Teacher and student Month headers retain the compact single-row landscape layout from the earlier UI polish.

## QA limits
- JavaScript syntax checks for app.js and student-schedule.js: PASS after UI-206 correction.
- Static DOM/CSS/logic checks for UI-206.1 through UI-206.4: PASS.
- Targeted Supabase transaction tests for self-cancel and notifications: PASS.
- Live browser/mobile/device QA is still a human verification step.

## Release gates
- Live QA of the accumulated UI changes, including UI-206.1 through UI-206.4, is still required.
- One live authorized legacy-link redirect test remains required.
- Supabase Auth Leaked Password Protection must be enabled manually in Dashboard.
- Final clean resync from legacy must happen immediately before deployment.
- PR #1 merge and final cutover remain human-controlled.
