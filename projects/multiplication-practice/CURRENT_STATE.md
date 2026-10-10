# Multiplication Practice — CURRENT_STATE

**Overall status:** PLANNING / NOT IMPLEMENTED  
**Context record approved:** 2026-10-10

## Overall
- User approved a dedicated project record in AI_CONTEXT_HUB on 2026-10-10.
- The purpose and durable requirements are documented in PROJECT_CONTEXT.md.
- This is a context/requirements milestone, not a working application release.
- The Hub registry was updated and the matching Supabase `ai_projects` record was created.

## Frontend
- No dedicated application repository or frontend has been created/verified.
- Planned candidate: React + TypeScript + Vite, mobile-first and optionally PWA.
- GitHub Pages via GitHub Actions is a candidate deployment target, not yet tested with Supabase Auth redirects/routing.

## Backend
- No application Edge Functions or server-side test engine have been created/verified.
- Planned candidate: Supabase Edge Functions for privileged account setup, test creation, answer submission and final result calculation.

## Database
- No dedicated operational database/schema has been created or verified for this app.
- The existing Supabase project `tutor-calendar` contains the AI_CONTEXT_HUB registry and Tutor Schedule tables; do not put multiplication app data there.
- A dedicated Supabase app project requires separate review before creation.
- In the existing context registry, an `ai_projects` row, five public `ai_documents` rows and five GitHub source references were created for this Hub record.

## Authentication
- Required student flow: teacher-issued code + password.
- Required teacher functions: manage classes/students and reset credentials.
- Exact mapping to Supabase Auth identities and safe provisioning workflow remains undecided/unimplemented.
- Never store plaintext passwords or expose service-role credentials.

## Tests and leaderboard
- Five progressive levels and initial candidate thresholds are proposed in PROJECT_CONTEXT.md; final values remain unconfirmed.
- No real quiz generator, timer, validation, result history, opt-in publication, or ranking implementation has been verified.
- Required behavior: each attempt has independent publication settings; class/school visibility is scoped; display mode is real name, generated nickname or `Учень`; the user's own rows are visually distinguished.

## Testing
- No application tests have been run because no application code exists yet.
- SQL verification of the `ai_public_context` view returned all five registered context documents.
- The public Edge Function's full external HTTP response has not been verified in this environment.
- Free-plan quotas, project suspension behavior, GitHub Pages compatibility and the end-to-end availability goal must be checked before declaring production readiness.

## Last completed task
Created the dedicated Hub files after explicit user approval; updated PROJECTS.md and PROJECT_PROPOSALS.md; registered the project and its five documents/source paths in the existing Supabase context registry.

## Current task
Complete context bookkeeping and clearly preserve the limitation that SQL-view verification succeeded while external HTTP endpoint verification remains pending. This does not create the application backend.

## Next step
Verify the public context endpoint externally when possible. Then plan the dedicated source repository and dedicated Supabase app project; first validate the zero-cost/24×7 constraint and write the schema/security design before implementation.
