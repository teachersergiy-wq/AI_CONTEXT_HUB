# Multiplication Practice — TODO

## Current
- [x] Obtain user approval to register a dedicated project.
- [x] Create this Hub context folder with the standard documents.
- [x] Update PROJECTS.md and mark the proposal approved.
- [x] Register the matching Supabase `ai_projects` row, five `ai_documents` rows and five `ai_project_sources` rows.
- [x] Query `ai_public_context` and verify it returns all five documents.
- [ ] Verify the public Edge Function's actual HTTP response from a browser or another network-capable environment.
- [ ] Keep application implementation status marked PLANNED until code is committed and tested.

## Next
- [ ] Verify the current GitHub Pages and Supabase Free plan requirements against the hard free/24×7 constraint, including pause/quota/redirect caveats.
- [ ] Create a dedicated application GitHub repository only after agreeing its name/visibility.
- [ ] Review Supabase organization/cost implications, then create a dedicated app project (do not reuse tutor-calendar operational tables).
- [ ] Define profiles, schools/classes, level configuration, attempts/questions, publication settings, and leaderboard schema.
- [ ] Write and review RLS policies for student ownership, teacher/class access, class TOP and school TOP.
- [ ] Design student code+password provisioning that safely maps to Supabase Auth without exposing service-role credentials.
- [ ] Implement and test auth and teacher/class/student management.
- [ ] Implement server-created test attempts, timed questions, timeout handling and server-calculated results.
- [ ] Implement personal results history and independently editable per-attempt publication.
- [ ] Implement class and school leaderboards with name/nickname/`Учень` display options and best eligible attempt per level.
- [ ] Implement teacher results and progress dashboard.
- [ ] Add mobile-first layout and evaluate PWA behavior.
- [ ] Add automated tests for permissions, boundaries between classes/schools, privacy and result integrity.
- [ ] Verify the complete student/teacher flow on real mobile and desktop browsers.

## Later
- [ ] Add other arithmetic operations after multiplication is stable.
- [ ] Add achievements, tournaments, CSV export and extra analytics if still desired.

## Completed
- [x] Dedicated Hub project approved and registered.
