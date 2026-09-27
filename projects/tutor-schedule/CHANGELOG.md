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
### Mobile, legacy-link and self-cancel work
- Fixed student mobile lesson-modal viewport behavior.
- Added teacher Month landscape scaling.
- Implemented the authorized legacy r0zklad student-link redirect.
- Added server-enforced student self-cancel, monthly limit, audit logging and persistent teacher notifications with acknowledgement.

## 2026-09-27 — UI polish
- Student information bar was shortened and constrained to a single mobile row.
- Проведені уроки / Заплановані уроки / Запити на розгляді were compacted into one row; pending requests became an expandable section and the previous period-label placement was later superseded by live testing.
- Teacher and student Month headers were compacted to a single row on landscape mobile.

## 2026-09-27 — UI-206
- Removed the duplicate student pending-request header counter; the pending-request section-row entry is now conditional on there being at least one pending request.
- Kept debt information conditional on unpaid completed lessons only.
- Moved “Поточний період” directly before the student period-navigation arrows.
- Decoupled the student planned-lessons list from the currently displayed calendar period by loading planned lessons over a broad independent range.
- Added teacher Day/Week/Month bolding for fully completed lessons when all specified topic/homework/completed/paid/amount conditions are met.
- Static QA passed after correcting the unmerged UI-206.4 attempt; live browser/mobile QA remains pending.

## Current release gate
- PR #1 remains open and unmerged.
- Final data resync, production cutover and merge remain intentionally blocked until human approval.
- Live browser/mobile QA remains a human verification task.
