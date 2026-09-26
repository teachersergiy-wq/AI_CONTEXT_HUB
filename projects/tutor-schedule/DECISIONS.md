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

Decision: r0zklad remains the legacy working application until an explicit human cutover; Rozklad is the V2 target.
Decision: PR #1 stays open and unmerged until explicitly approved.
Decision: final data resync from the legacy database, merge and cutover are human-controlled actions.
Exception: the explicitly authorized student-link redirect may be maintained in r0zklad student-schedule.js; other legacy logic is out of scope.

## 2026-09-26 — Authentication and authorization

Decision: teacher access uses Supabase Auth; V2 schedule ownership is enforced through the authenticated owner relationship and RLS.
Decision: students access their data with per-student access tokens through narrow SECURITY DEFINER RPCs.
Decision: SECURITY DEFINER functions set an explicit search_path and should have explicit EXECUTE grants; revoke PUBLIC/role access when not intentionally required.

## 2026-09-26 — Student self-cancellation

Decision: a student may self-cancel only a planned lesson when at least 3 hours remain before its start.
Decision: the monthly limit is 2 self-cancellations per student per calendar month.
Decision: cancellation changes lesson status to cancelled rather than deleting the lesson.
Decision: every student self-cancellation creates an audit entry and a persistent teacher notification.
Decision: the teacher explicitly acknowledges notifications; unresolved notifications remain visible on the teacher start page.

## 2026-09-26 — Notifications

Decision: use a generic v2_notifications table so future teacher notification types can reuse the same mechanism.
Decision: the notification table has RLS enabled and no direct anon/authenticated table grants; access is through scoped RPCs.
Decision: teacher notification read/acknowledge RPCs are authenticated-only.

## 2026-09-26 — QA boundary

Decision: static syntax checks and transactional database tests are valid automated verification in this environment.
Decision: live browser/mobile/device QA must be reported as human verification when it cannot be executed from the environment.