# Current State — School Journal

**Status:** Core schema APPLIED on live Free project. T-020 ready to merge.
**Last updated:** 2026-11-01 (21:50 EET)

## Repository
- `teachersergiy-wq/school_journal` — PUBLIC
- Branch `grok/T-020` + open PR #1 (core schema + RLS + seed + RPC + v_lesson_window)
- DATA_CONTRACT.md ACCEPTED

## Database (VERIFIED)
- Project name: `school_journal`
- Project ref: `dtpyvyedcptdkdsowmco`
- Organization: `yijbifjfvujcwzeqwzfd`
- Plan: Free ($0)
- Region: `eu-central-1` (Frankfurt)
- Status: ACTIVE_HEALTHY
- PostgreSQL: 17.11
- Migrations applied by owner (20261101190138 core + 20261101190500 RPC)
- Next: apply `20261101215100_v_lesson_window.sql`, optional seed, merge PR #1

## Next
1. Owner: apply v_lesson_window migration (SQL Editor)
2. Owner: optional seed.sql
3. Merge PR #1 → main
4. T-023: RLS smoke tests with a real teacher profile
5. T-006 hosting + keep-alive; T-043 backup/export
