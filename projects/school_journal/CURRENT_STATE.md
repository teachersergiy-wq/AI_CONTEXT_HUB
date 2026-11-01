# Current State — School Journal

**Status:** Core schema delivered (T-020), awaiting review / ACCEPTED.
**Last updated:** 2026-11-01 (evening)

## Repository
- `teachersergiy-wq/school_journal` exists, PUBLIC.
- Branch `grok/T-020` contains full core schema + RLS + seed + RPC.
- DATA_CONTRACT.md ACCEPTED by owner (Q1–Q5 answered).

## Database
- Supabase project still **not created** (T-005, region pending). Migrations cannot be applied yet.
- Schema is ready in repo: enums, 11 tables, RLS, helpers, `save_lesson_record` RPC, synthetic seed.

## Requirements and contract
- DATA_CONTRACT.md: **ACCEPTED**.
- T-020: IN PROGRESS → ready for REVIEW (PR from `grok/T-020`).

## Next
1. Claude/Owner: review branch `grok/T-020` and ACCEPT or REWORK.
2. Owner: choose Supabase region and create free project (T-005).
3. After project exists: apply migrations + seed; then T-023 (RLS tests) and richer seed (T-024).
