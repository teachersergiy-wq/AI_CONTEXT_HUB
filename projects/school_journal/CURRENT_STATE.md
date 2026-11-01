# Current State — School Journal

**Status:** PLANNED. Nothing is implemented.
**Last updated:** 2026-11-01

## Repository
- `teachersergiy-wq/school_journal` exists and is EMPTY (VERIFIED 2026-11-01: no default branch yet; the first commit is needed). The owner reports it is PUBLIC; the Hub said private; the visibility decision is pending (see `DECISIONS.md`). T-004 is PARTIAL.
- Claude's GitHub integration can read `AI_CONTEXT_HUB` and the app repository. Write to the Hub still returns 403 (checked 2026-11-01), so Hub files are applied by hand.

## Database
- Target: a new, separate Supabase project in organization `yijbifjfvujcwzeqwzfd`. Not created yet (T-005): the region is not chosen. VERIFIED 2026-11-01: the organization has no projects. Cost of a new project: $0 per month (Free plan).
- Free-plan risks to handle: auto-pause after about 7 days of inactivity, no daily backups, 500 MB limit.

## Requirements and contract
- T-010: 6 of 10 questions answered, 2 proposed, 2 open (see the card).
- `DATA_CONTRACT.md` v0 draft written 2026-11-01 (PROPOSED). Not yet reviewed by Grok or ChatGPT. `REQUIREMENTS.md` not written.

## Application structure
- Approved 2026-11-01 (see `DECISIONS.md`). Nothing created yet.

## Hosting
- Not decided (T-006). Candidate from Codex: Cloudflare Pages, not yet verified by Claude. GitHub Pages is not free for private repositories on a free GitHub plan; relevant only if the repository stays private.

## Hub integration
- This project is not yet registered in the Hub public Supabase context API (that API runs in a different Supabase project). Read this project from GitHub until that is done.

## Verified facts
- Predecessor records `school-attendance` and `school-gradebook` had no connected repository, database or verified code. All inherited requirements are PLANNED.

## Next
See `TASKS.md`. Priority: close T-010, review of `DATA_CONTRACT.md` by Grok, then the journal schema.
