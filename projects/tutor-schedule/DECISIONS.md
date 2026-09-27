# Tutor Schedule — DECISIONS

## 2026-09-25 — Project classification
Decision: teachersergiy-wq/Rozklad is the Tutor Schedule project.
Reason: it manages private tutoring lessons, students, bookings, payments and reports. It is not the school attendance/meal application.
Status: active

## 2026-09-25 — Context Hub
Decision: durable project context is stored in AI_CONTEXT_HUB.
Reason: the same current context should be available to different AI systems.
Status: active

## 2026-09-26 — Two-repository migration model
Decision: r0zklad remains the legacy working application until explicit human cutover; Rozklad is the V2 target.
Decision: PR #1 remains open and unmerged until explicitly approved.
Decision: final data resync, merge and cutover are human-controlled actions.
Exception: the explicitly authorized student-link redirect may be maintained in r0zklad student-schedule.js; other legacy logic is out of scope.

## 2026-09-26 — Authentication and authorization
Decision: teacher access uses Supabase Auth and owner-based RLS.
Decision: students use narrow per-token SECURITY DEFINER RPCs.
Decision: SECURITY DEFINER functions require explicit search_path and explicit grants; revoke PUBLIC/role access unless intentionally required.

## 2026-09-26 — Student self-cancellation and notifications
Decision: a student may self-cancel only a planned lesson at least 3 hours before start, max 2 per calendar month.
Decision: cancellation sets status to cancelled and creates audit + persistent teacher notification.
Decision: teacher notifications are acknowledged explicitly through authenticated-only RPCs.

## 2026-09-27 — Mobile/UI polish
Decision: on student mobile, concise information pills remain in one row; section controls are compacted into one row; period label sits above arrows.
Decision: in Month view on landscape mobile, teacher and student headers use a single-row layout scoped to the landscape/mobile width range, while the existing non-landscape/two-row behavior remains the fallback.
Reason: improve use of limited horizontal/vertical viewport without changing calendar semantics.
Status: implemented and static QA passed; human browser QA pending.

## QA boundary
Decision: static checks and transactional DB tests can be verified automatically here; live browser/device behavior must be treated as human verification when unavailable.
