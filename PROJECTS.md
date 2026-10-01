# Projects

| Slug | Project | GitHub | Status |
|---|---|---|---|
| mustang | Mustang | teachersergiy-wq/mustang | active |
| tutor-schedule | Tutor Schedule | teachersergiy-wq/Rozklad | active |
| school-attendance | School Attendance / Meals | not connected | active-planning |
| school-gradebook | School Gradebook / Class Journal | not connected | active-planning |
| math-assessment | Math Assessment / Quizizz-Wayground | not connected | active-planning |

## Project distinction

- `mustang` = Mustang game (web/mobile + Python desktop reference stream).
- `tutor-schedule` = private tutoring schedule, lessons, students, bookings, payments and reports in `teachersergiy-wq/Rozklad`.
- `school-attendance` = school attendance/meal automation. Final application repository not yet connected.
- `school-gradebook` = independent gradebook / class journal. Source repository not yet connected.
- `math-assessment` = mathematics assessment banks and Quizizz/Wayground workflow. Source not yet connected.

## Important rules

- Never classify Tutor Schedule as the school attendance/meal system.
- Never confuse `school-gradebook` with `school-attendance`.
- Web and Python desktop for Mustang are **one product** under slug `mustang`.

## Adding a project

1. Create `projects/<slug>/`.
2. Copy the templates.
3. Fill `PROJECT_CONTEXT.md`.
4. Add the project here.
5. Create or update the matching Supabase `ai_projects` record.
