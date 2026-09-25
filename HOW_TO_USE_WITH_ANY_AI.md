# HOW TO USE AI_CONTEXT_HUB WITH ANY AI

## Purpose

This repository is the persistent project context hub for the user.

Do NOT treat the current chat as the only source of truth.
Before doing substantial work, read the relevant project context from this repository.

GitHub:
https://github.com/teachersergiy-wq/AI_CONTEXT_HUB

## Rule 1 — Identify the project

First determine which project the user is working on.

Current projects:
- `mustang` — browser/mobile game; GitHub: `teachersergiy-wq/mustang`
- `tutor-schedule` — private tutor scheduling/lesson-management application; GitHub: `teachersergiy-wq/Rozklad`
- `school-attendance` — school attendance/meal project; GitHub repository is not yet connected

Never confuse `tutor-schedule` with `school-attendance`.

## Rule 2 — Read context before work

For the selected project, read:

1. `projects/<project>/PROJECT_CONTEXT.md`
2. `projects/<project>/CURRENT_STATE.md`
3. `projects/<project>/DECISIONS.md`
4. `projects/<project>/TODO.md`
5. `projects/<project>/CHANGELOG.md`

Also read the project's actual source repository when the task concerns implementation.

## Rule 3 — What belongs in the Hub

Save durable information, not a full transcript.

Store:
- project purpose;
- architecture;
- important requirements;
- confirmed functionality;
- decisions that should not be forgotten;
- known bugs;
- constraints;
- important implementation details;
- current development state;
- unfinished work;
- next steps;
- important changes made by any AI.

Do NOT store:
- passwords;
- API secrets;
- service-role keys;
- private tokens;
- unnecessary personal data;
- full chat transcripts.

## Rule 4 — When to update the Hub

Update the project context after significant work, especially when:
- a feature was added;
- a bug was fixed;
- an architecture decision was made;
- requirements changed;
- a repository structure changed;
- an important limitation was discovered;
- a task was completed.

At minimum keep these synchronized:
- `CURRENT_STATE.md`
- `DECISIONS.md`
- `TODO.md`
- `CHANGELOG.md`

## Rule 5 — Do not invent project state

Only record something as implemented if it was actually verified in the repository or by a successful test.

Use labels such as:
- VERIFIED — confirmed in code/test
- PLANNED — requested but not implemented
- PARTIAL — partly implemented
- BLOCKED — cannot currently be completed

## Rule 6 — After completing work

At the end of a substantial task:

1. Update the project's context files.
2. Record the important decision(s).
3. Move completed items out of TODO or mark them done.
4. Add a concise CHANGELOG entry.
5. Tell the user exactly what was changed and what remains.

## Recommended handoff format

At the end of the task, summarize:

PROJECT:
<project>

CHANGED:
<what was changed>

VERIFIED:
<what was actually tested>

DECISIONS:
<new durable decisions>

TODO:
<remaining work>

FILES:
<important repository files>

## If the AI can write to GitHub

The AI should update the relevant files directly in:
https://github.com/teachersergiy-wq/AI_CONTEXT_HUB

Use the current repository contents as the baseline and preserve existing context.

## If the AI can only read

The AI should still use the Hub as the source of truth and tell the user when an important new decision or state change should be written back.

## If the AI can access the public Supabase context API

The public context API can be used to read project context without reading the GitHub repository manually.

Format:
`https://vjjrwvraannccejyqcci.supabase.co/functions/v1/ai-public-context?project=<project-slug>&format=markdown`

Examples:
- `...?project=mustang&format=markdown`
- `...?project=tutor-schedule&format=markdown`
- `...?project=school-attendance&format=markdown`

The current public API is READ-ONLY. It is not a universal write endpoint.

## Priority rule

When information conflicts:

1. Verified current project source code
2. Verified current repository context
3. Explicit new user instructions
4. Older historical notes

Never silently overwrite a newer confirmed decision with an older one.
