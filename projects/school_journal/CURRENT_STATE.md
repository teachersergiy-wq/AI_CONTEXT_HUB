# Current State — School Journal

**Status:** Core DB live. T-020 MERGED. Docs for T-023 / keep-alive / backup ready for review.
**Last updated:** 2026-11-01 (22:05 EET)

## Repository
- `main` contains T-020 (schema, RLS, RPC, v_lesson_window, handle_new_user, seed, docs).
- PR #1 merged (squash).
- Branch `grok/T-023-docs` + PR: RLS test checklist, keep-alive, backup/export docs.

## Database (VERIFIED)
- Project: `school_journal` / ref `dtpyvyedcptdkdsowmco`
- Org: `yijbifjfvujcwzeqwzfd` | Free | eu-central-1 | ACTIVE_HEALTHY | PG 17.11
- Applied by owner: core schema + save_lesson_record RPC
- Still to apply on live (if not done): `v_lesson_window`, `handle_new_user`, optional seed

## Next (owner)
1. Apply remaining 2 migrations + optional seed in SQL Editor
2. Sign up first user in Auth → promote to `owner`
3. Run T-023 checklist
4. Merge docs PR; choose keep-alive option
