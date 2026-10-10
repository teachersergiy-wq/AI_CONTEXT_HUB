# Tutor Schedule — PROJECT_CONTEXT

## Purpose
A scheduling and lesson-management application for private tutoring.

## Repository
https://github.com/teachersergiy-wq/Rozklad

## Legacy repository
https://github.com/teachersergiy-wq/r0zklad is the legacy working application and must remain separate from the V2 target until explicit human cutover.

## Verified current functionality
The current V2 browser application includes calendar views, weekly/monthly/year navigation, lesson CRUD, student management, student personal token links, planned/completed lessons, payment status/details, lesson topics/homework, repeated lessons, booking/reschedule requests, reports, issue checking, audit/change log, backups, editing restrictions, mobile-responsive UI, dark theme and Supabase integration.

## Historical project context from prior chats
The project evolved from the user's earlier need for a school/tutor schedule and grade-management workflow. Durable requirements discussed over time include:
- clear date-based lesson scheduling;
- student-specific links;
- payment and lesson-history tracking;
- mobile access for students;
- teacher-side management and reports;
- migration from the old key-based application to a secure V2.

### Earlier calendar prototype requirements — HISTORICAL, NOT CURRENT V2 SPEC
The first calendar prototype discussions included the following details. These are preserved for traceability only; they must not override verified current V2 code or later approved requirements.

- Header text: `Розклад занять`.
- Calendar modes: day / week / month. No color legend was wanted.
- Initially visible evening slots: empty space plus 17:00, 18:00, 19:00, 20:00 and 21:00.
- Clicking a slot was intended to open student selection from the student list. The selected slot's time would be prefilled but remain editable.
- Slot states: occupied by a student (show student name), free (show `вільно` on a light background), and unavailable (normally hidden; visible in edit mode as `*недоступно*`).
- Per-student lesson colors were expanded from light green / light blue / orange to six choices: those three plus light gray, yellow and red. A color legend was explicitly not required.
- Each lesson needed paid/unpaid and attended/planned indicators; the month view payment mark was requested as `$`.
- The selected start-time control was to offer 09:00–21:00 in 5-minute steps. This was a UI selection range only, not a rule blocking the saving of lessons with a time outside that range.
- The default calendar view was to hide times from 09:00 through 17:00, showing them only in edit mode. The day timeline was later requested to use 15-minute visual increments.
- Drag-and-drop moving of lessons between slots was requested, but the user reported that it still did not work at the time.
- Reported prototype bugs included a wrong/previous date in the slot dialog, inability to add lessons in day/week views, and visual placement of any lesson at 17:00 despite displaying a different saved start time.
- The user requested cloud persistence and a single URL usable from a PC or phone, and asked for step-by-step setup guidance.

These were prototype-level requirements and bug reports from the earlier application stage. Check them against current V2 behavior before treating them as current bugs or re-implementing them.

## Current migration boundary — VERIFIED / HUMAN CONTROLLED
r0zklad remains the legacy working system. Rozklad V2 is the target. Final data resync, PR merge and production cutover require explicit human approval.

## Development rule
Keep verified repository/database facts separate from historical ideas. Never modify legacy r0zklad/public.schedules outside an explicitly authorized exception.
