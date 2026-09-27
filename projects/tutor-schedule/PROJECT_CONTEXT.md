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

The project must not be confused with the separate School Attendance / Meals project.

## Current migration boundary — VERIFIED / HUMAN CONTROLLED
r0zklad remains the legacy working system. Rozklad V2 is the target. Final data resync, PR merge and production cutover require explicit human approval.

## Development rule
Keep verified repository/database facts separate from historical ideas. Never modify legacy r0zklad/public.schedules outside an explicitly authorized exception.
