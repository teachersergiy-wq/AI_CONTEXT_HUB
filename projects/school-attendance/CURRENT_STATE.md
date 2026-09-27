# School Attendance — CURRENT_STATE

## Repository
Not connected yet.

## Current status — VERIFIED AS CONTEXT, NOT IMPLEMENTATION
Requirements and architecture have been discussed and partially designed, but the final application repository and production database are not yet linked to AI_CONTEXT_HUB.

## Known project design
- mobile-first web app;
- large touch controls;
- teacher identification/session;
- attendance submission;
- meal workflow;
- reports;
- persistent school-year attendance data;
- future academic records.

## Known attendance rules from prior requirements
- Grades 1–11 are in scope, with grade 10 explicitly excluded from the attendance workflow.
- Presence/absence is identified by surname.
- The submission actor may be the homeroom teacher or the teacher whose first lesson is in the class.
- The system should record who submitted data and the submission time.
- Substitution/replacement cases must be supported.

## Database design status
A detailed multi-tab Google Sheets design was previously planned with students, teachers, classes, schedule, rights/settings, attendance and academic records. Treat it as historical design only until the final database is verified.

## Next verification steps
- Connect the actual application repository.
- Connect/verify the production database.
- Verify the current teacher/session workflow.
- Verify the actual attendance and meal data model.
- Replace planning-only text with verified implementation facts.
