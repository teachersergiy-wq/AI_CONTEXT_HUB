# Projects

| Slug | Project | GitHub | Status |
|---|---|---|---|
| mustang | Mustang | teachersergiy-wq/mustang | active |
| tutor-schedule | Tutor Schedule | teachersergiy-wq/Rozklad | active |
| school_journal | School Journal — class journal (priority), attendance and meals | teachersergiy-wq/school_journal (repository to be created by the owner) | active-planning |
| school-attendance | School Attendance / Meals | merged into school_journal on 2026-10-31 | merged (historical) |
| school-gradebook | School Gradebook / Class Journal | merged into school_journal on 2026-10-31 | merged (historical) |
| math-assessment | Math Assessment / Quizizz-Wayground | not connected | active-planning |
| multiplication-practice | Навчальна студія — multi-subject assessment platform; multiplication is first module | teachersergiy-wq/multiplication-practice (repo setup pending) | partial |

## Distinctions
- Tutor Schedule manages private lessons and bookings.
- School Journal covers the class journal (gradebook), attendance and meals. It replaces the former School Attendance and School Gradebook projects, which are kept only as historical records.
- Math Assessment is the question-bank and Quizizz/Wayground workflow.
- Multiplication Practice / Навчальна студія is a separate assessment platform for subjects, grade levels, classes, and student attempts.

## Constraints
- Keep project source and operational data independent.
- Multiplication Practice uses its own Supabase project, never tutor-calendar.
- School Journal uses its own Supabase project and must be fully free.
- Free components and 24/7 availability are requirements to verify, not provider uptime promises.

## Adding a project
1. Obtain explicit user approval for a new project boundary.
2. Create projects/<slug>/ and use the templates.
3. Fill PROJECT_CONTEXT.md and list the project here.
4. Register the context source and synchronize current state, decisions, TODO, and changelog.
