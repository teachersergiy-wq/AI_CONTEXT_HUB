# Tutor Schedule — CHANGELOG

## 2026-09-18 to 2026-09-19

### V2 foundation

- Migrated the new Rozklad application toward V2 Supabase data and Supabase Auth.
- Added teacher authentication, V2 CRUD workflows, student token links, booking/reschedule requests, manual backup, audit logging and the open PR #1.
- Kept r0zklad and public.schedules as the legacy working system; no final cutover.

## 2026-09-25

### Student and navigation improvements

- Added student Week/Month/Year navigation fixes and month/year lesson highlighting.
- Added absolute chronological numbering for conducted student lessons.
- Added teacher/student lesson-list weekday labels and click-to-open lesson details.
- Added the student planned-lessons section.

## 2026-09-26

### Mobile and legacy-link work

- Fixed student mobile lesson-modal viewport behavior.
- Added teacher Month landscape scaling for mobile layouts.
- Implemented the explicitly authorized legacy r0zklad student-link redirect to the new Rozklad student page.

### Student self-cancel

- Added server-enforced self-cancellation for planned lessons at least 3 hours before start.
- Added a maximum of 2 self-cancellations per calendar month per student.
- Added audit logging and persistent teacher notifications through v2_notifications.
- Added the student self-cancel counter/button and teacher notification panel with explicit acknowledgement.
- Added transactional tests for success, monthly-limit rejection, under-3-hour rejection, notification creation and acknowledgement.

### Context synchronization

- Updated AI_CONTEXT_HUB/projects/tutor-schedule/CURRENT_STATE.md.
- Updated DECISIONS.md with durable architecture, security and migration decisions.
- Refreshed TODO.md with remaining human/deployment gates.

## Current release gate

- PR #1 is open and not merged.
- Final data resync and production cutover are intentionally blocked until explicit human approval.
- Live browser/mobile QA remains a human verification task.