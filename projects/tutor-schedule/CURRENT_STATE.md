# Tutor Schedule — CURRENT_STATE

## Scope
- Project: Tutor Schedule / teachersergiy-wq/Rozklad
- Context Hub project: projects/tutor-schedule/
- Separate legacy repository: teachersergiy-wq/r0zklad
- Separate Supabase project: tutor-calendar

## Repository / deployment state — audited 2026-10-11
- Active development branch: gpt/v2-tz-2026-09-19
- Pull Request: teachersergiy-wq/Rozklad#1
- PR state: open, not merged
- Current PR head: 7cca6687857e50176f16967ebf9e7a60bd91db42 (checked 2026-10-11).
- The previously failed UI-206.4 attempt was removed from the unmerged branch; the current head contains the corrected UI-206.4 implementation.
- Final cutover: not performed
- r0zklad remains public and online. On 2026-10-11, student-schedule.js was changed to remove the static map of nine UUID student tokens and resolve old key + student links through v2_resolve_legacy_student_link; REDIRECT_TO_V2 = true, with a 4-second fallback to legacy behavior. Commit: bd23540b5d250782b54a58874f39c4eaaad3bcbb. Static checks passed; live old-link QA still pending.
- public.schedules schema/data were not migrated or overwritten. Direct anon/authenticated table grants and the permissive policy were removed; a restricted legacy backup table legacy_schedules_backup_20261009 exists. Legacy RPCs remain for the old site pending later retirement.
- Rozklad and AI_CONTEXT_HUB are public. Private backup repository has not been created; explicit human approval is required.

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
- Legacy r0zklad student-link redirect bridge uses server-side RPC; live QA pending.
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

## Context consolidation — 2026-10-10
- Earlier calendar-prototype requirements and reported bugs are documented in PROJECT_CONTEXT.md as historical context.
- The broader original tutor-CRM scope is now also preserved: Mathema schedule import/manual entry, private extra lessons, student cards, parent/student links, homework/attachments, and the historical technology options considered.
- These historical requirements and technology options are explicitly not proof of implementation and do not supersede verified V2 behavior.
- No application source code, database, pull request, branch or deployment was changed by this context-only update.
- Current verified V2 and release-gate facts above remain unchanged.

## Security / release gates — 2026-10-11
- PR #1 remains open and unmerged. Merge, GitHub Pages changes, and final cutover remain blocked until direct human instruction.
- GitHub Pages source branch/commit could not be independently verified through the connected GitHub API; log #249 reports the dev branch, so this remains a deployment verification item.
- The unsafe .github/workflows/v2-daily-backup.yml was deleted from the PR branch in commit 6d39ede9bb84453bce7665eef0b4768a225e6db0; it must not be merged or recreated in public Rozklad. It committed full JSON backups into the public repository.
- ROLLBACK.md was added on the PR branch. Automated backup is not verified. A private rozklad-backups repository requires explicit human approval; secrets must be entered by the human, not shared in chat, and a real successful run must be verified.
- Legacy-link bridge static QA is pending independent verification and live QA using an old URL supplied by the human. Do not log or paste the shared key.
- After successful live redirect QA, rotate tokens for the nine original students; current static files must contain no old UUID token map. Do not rewrite repository history.
- LEG-4 current-file/history audit for all public repositories and AI_CONTEXT_HUB is still in progress; AI_CONTEXT_HUB remains public pending human decision.
- Stable rollback tags stable-r0zklad-pre-cutover and v2-pre-merge are not yet created; tag-writing capability was not exposed by the current connector.
- Live browser/device QA remains required for REPORT-211, HDR-1, student numbering, reschedule source/target highlighting, mobile modal/landscape and student pending/debt/period UI.
- Final resync from legacy is cancelled. Never overwrite V2 with legacy data.
- Stage B is not authorized and must not start before a signal from Claude or the human.
