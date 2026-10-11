# Tutor Schedule — CHANGELOG

## 2026-10-11 — Legacy bridge security and release safeguards
- Removed the static mapping of nine legacy student IDs to V2 UUID tokens from public r0zklad/student-schedule.js; old key + student links now resolve through v2_resolve_legacy_student_link, with REDIRECT_TO_V2 switch and a 4-second fallback. Static JavaScript parse passed; live old-link QA is still pending.
- Removed the unsafe v2-daily-backup.yml from the public Rozklad PR branch because it committed full JSON backups into the repository.
- Added ROLLBACK.md to the Rozklad development branch and refreshed TODO.md / CURRENT_STATE.md with current release gates.
- Scanned current files of r0zklad and the Rozklad PR branch for UUID token strings, JWT-shaped strings and sb_secret keys; none were found after the bridge change. Scanned all current AI_CONTEXT_HUB files with the same patterns and simple credential-assignment checks; none were found. This does not clear historical commits: old tokens may remain visible in public git history, so rotate the nine student tokens after the live redirect test; do not rewrite history.
- PR #1 remains open and unmerged. GitHub Pages source remains unverified, private backup repository creation awaits human confirmation, and live browser/device QA remains pending.

## 2026-10-10 — Broader historical tutor-CRM context
- Added the original broader scope: Mathema schedule source, manual/CSV/screenshot import options, additional private lessons, student cards, parent/student links, lesson history, homework/attachments and mobile access.
- Recorded the previously explored Google Sheets/AppSheet, Baserow, self-hosted NocoDB, Supabase + React/Vite, and Cloudflare options as historical architecture exploration, not a current implementation decision.
- Reiterated that “free and available 24/7” is a constraint to verify and not a guaranteed free-tier SLA.
- Synchronized PROJECT_CONTEXT.md, CURRENT_STATE.md and DECISIONS.md; current V2 implementation facts and release gates remain unchanged.
- No application source code, database, pull request, branch or deployment was changed.

## 2026-10-10 — Historical prototype context consolidation
- Preserved the earlier calendar-prototype requirements in PROJECT_CONTEXT.md: evening slots, click-to-assign student flow, slot states/colors, payment marker, time-picker constraints, day timeline, cloud-link requirement and historical UI bugs.
- Explicitly labeled them historical so they do not override the verified V2 application or become assumed current bugs.
- No application code, database, pull request or deployment was changed.

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
