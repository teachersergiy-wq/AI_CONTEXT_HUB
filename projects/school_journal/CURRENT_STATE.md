# Current State — School Journal

**Status:** Supabase Free project created and verified (T-005 DONE). Core schema delivered (T-020), awaiting review / ACCEPTED.
**Last updated:** 2026-11-01 21:29 (Europe/Kyiv)

## Repository
- `teachersergiy-wq/school_journal` exists, PUBLIC.
- Branch `grok/T-020` contains full core schema + RLS + seed + RPC.
- DATA_CONTRACT.md ACCEPTED by owner (Q1–Q5).

## Database
- Supabase project **created and verified**: `school_journal`.
- Project ref: `dtpyvyedcptdkdsowmco`.
- Organization: `yijbifjfvujcwzeqwzfd` (Free plan).
- Region: `eu-central-1` (Frankfurt).
- Project status at verification: `ACTIVE_HEALTHY`.
- Quoted project cost: $0/month.
- PostgreSQL: 17.11.
- No API keys, passwords or secrets are recorded in the Hub.
- Schema is ready in repo: enums, 11 tables, RLS, helpers, `save_lesson_record` RPC, synthetic seed. Migrations have **not yet been applied** to this Supabase project.

## Requirements and contract
- DATA_CONTRACT.md: **ACCEPTED**.
- T-020: IN PROGRESS → ready for REVIEW (PR from `grok/T-020`).

## Next
1. Claude/Owner: review branch `grok/T-020` and ACCEPT or REWORK.
2. After acceptance: apply migrations + seed to Supabase; then verify T-023 RLS tests and richer seed (T-024).
3. T-006: choose free PWA hosting + auto-pause plan.
