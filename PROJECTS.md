# Projects

| Slug | Project | GitHub | Status |
|---|---|---|---|
| mustang | Mustang | teachersergiy-wq/mustang | active |
| tutor-schedule | Tutor Schedule | teachersergiy-wq/Rozklad | active |
| school-attendance | School Attendance / Meals | not connected | active-planning |
| school-gradebook | School Gradebook / Class Journal | not connected | active-planning |
| math-assessment | Math Assessment / Quizizz-Wayground | not connected | active-planning |
| multiplication-practice | Multiplication Practice Web App | application repository not created; context in this hub | approved-planning |

## Project distinction

- `mustang` = Mustang game (web/mobile + Python desktop reference stream).
- `tutor-schedule` = private tutoring schedule, lessons, students, bookings, payments and reports in `teachersergiy-wq/Rozklad`.
- `school-attendance` = school attendance/meal automation. Final application repository not yet connected.
- `school-gradebook` = independent gradebook / class journal. Source repository not yet connected.
- `math-assessment` = mathematics assessment banks and Quizizz/Wayground workflow. Source not yet connected.
- `multiplication-practice` = independent mobile-first timed multiplication-test app with student histories, optional class/school leaderboards and a teacher dashboard. It is distinct from `math-assessment`; its application repository and dedicated Supabase app project are not yet connected.

## Important rules

- Never classify Tutor Schedule as the school attendance/meal system.
- Never confuse `school-gradebook` with `school-attendance`.
- Web and Python desktop for Mustang are **one product** under slug `mustang`.
- `multiplication-practice` is an approved project record, but its application itself is still planned/not implemented.
- Keep the free-components/24×7 requirement visible as a constraint to verify; do not promise guaranteed uptime under every free plan.

## Adding a project

1. Obtain explicit user approval for a new project boundary.
2. Create `projects/<slug>/`.
3. Copy the templates.
4. Fill `PROJECT_CONTEXT.md`.
5. Add the project here.
6. Create or update the matching Supabase `ai_projects` record.
