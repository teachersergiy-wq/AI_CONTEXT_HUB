# Current State — School Journal

**Status:** PLANNED. Nothing is implemented.
**Last updated:** 2026-10-31

## Repository
- `teachersergiy-wq/school_journal` does not exist yet. Claude's attempt to create it failed (GitHub integration returned 403). BLOCKED until the owner creates an empty private repository (T-004).
- Claude's GitHub integration can read `AI_CONTEXT_HUB` but cannot write to it (403 on 2026-10-31, also after the owner granted access). These Hub files were therefore applied by hand from an archive prepared by Claude.

## Database
- Target: a new, separate Supabase project in organization `yijbifjfvujcwzeqwzfd`. Not created yet (T-005): the region is not chosen. Cost of a new project in this organization: $0 per month (Free plan). The organization currently has no projects.
- Free-plan risks to handle: auto-pause after about 7 days of inactivity, no daily backups, 500 MB limit.

## Hosting
- Not decided (T-006). GitHub Pages may not be free for private repositories on a free GitHub plan; verify in T-006.

## Hub integration
- This project is not yet registered in the Hub public Supabase context API (that API runs in a different Supabase project). Read this project from GitHub until that is done.

## Verified facts
- Predecessor records `school-attendance` and `school-gradebook` had no connected repository, database or verified code. All inherited requirements are PLANNED.

## Next
See `TASKS.md`. Priority: class journal (T-010, T-012, T-013, then Grok's journal schema).
