# Workflow — School Journal (v1, proposed by Claude)

Applies to Owner, Claude, Grok and ChatGPT unless the owner objects.

## Roles
| Who | Owns | Does not |
|---|---|---|
| Owner | Decisions, acceptance of each phase | |
| Claude | Requirements, task cards, `DATA_CONTRACT.md`, review, Hub updates | Does not write the main app code or schema |
| Grok | Database: schema, migrations, RLS, seed data, SQL views for reports (`supabase/` in the app repo) | Does not change app code |
| ChatGPT | Application code (everything outside `supabase/`) | Does not change the schema |

## Source of truth
The GitHub repositories are the source of truth, not any AI chat. Before starting, read in `AI_CONTEXT_HUB`: `projects/school_journal/PROJECT_CONTEXT.md`, `CURRENT_STATE.md`, `DECISIONS.md`, `TODO.md`, `TASKS.md`, and your task card in `tasks/`.

## Tasks
- Each task has a card `projects/school_journal/tasks/T-xxx.md`; the board is `TASKS.md`.
- Statuses: PLANNED → IN PROGRESS → REVIEW → ACCEPTED, or REWORK (with a list of remarks) or BLOCKED.
- Take only tasks assigned to your role and whose dependencies are ACCEPTED.

## Commits
- Work on a branch named `<ai>/T-xxx` (for example `grok/T-020`) in the app repository; open a pull request into `main`.
- Do not push to `main` directly in the app repository.
- Change only your own area (see Roles). A change to the data contract or to requirements goes through Claude and, if it affects requirements, the owner.
- In the Hub, update only your own handoff and the files of your task.

## Handoff (put in the PR description and in the task card)
PROJECT / CHANGED / VERIFIED / DECISIONS / TODO / FILES — as in `HOW_TO_USE_WITH_ANY_AI.md`.

## Quality control by Claude
A task becomes ACCEPTED only if all of these hold:
1. Matches the requirements and `DECISIONS.md`.
2. Matches `DATA_CONTRACT.md` (schema vs code).
3. Security: RLS on every table with student data; no secrets in the repository; Supabase advisors checked when migrations are applied to a project Claude can access.
4. The task's "Done when" criteria are met and were actually run or tested, not just claimed.
5. Nothing is described as implemented without verification (VERIFIED / PLANNED / PARTIAL / BLOCKED).
6. Free-only: no paid service, plan or API is introduced.
7. CURRENT_STATE, TODO and CHANGELOG are updated.

Claude's verdict: **ACCEPTED**, or **REWORK** with a numbered list of remarks. The owner accepts each phase.

## Data safety
Only synthetic data about students in the repository, in pull requests and in AI chats. Never paste real class lists, names or grades.

## Limit
Claude sees only what is in the repositories or what the owner passes on. It reviews results, not what happens inside other AIs' chats. Claude's GitHub integration is currently read-only, so Claude reviews by reading branches and pull requests, and others commit.
