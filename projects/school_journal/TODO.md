# TODO — School Journal

- [x] DATA_CONTRACT ACCEPTED (owner answers Q1–Q5).
- [ ] Claude/Owner: review and ACCEPT or REWORK T-020 (branch `grok/T-020`; [PR #1](https://github.com/teachersergiy-wq/school_journal/pull/1) remains open with no formal reviews at last check).
- [x] Owner request: apply T-020 core schema migration and `save_lesson_record` RPC migration to Supabase (2026-11-01); see [DATABASE_APPLY_REPORT.md](DATABASE_APPLY_REPORT.md).
- [x] Owner request: execute starter synthetic `supabase/seed.sql` (6 behavior marks, 2 subjects, 1 class, 10 fictional students; 2026-11-01).
- [ ] **Security remediation (priority):** Grok to restrict unnecessary helper/RPC EXECUTE privileges, audit public table/default grants, add safe function search_path, and change RLS policy role targets from `public` to intended roles.
- [ ] Claude/Grok: review Security Advisor findings and corrective migration; do not mark T-020 ACCEPTED until reviewed.
- [ ] T-023 RLS test matrix: owner, teacher A, teacher B, anon; verify read/write isolation across classes and journals.
- [ ] Verify actual Data API HTTP access only after grants and policies are corrected.
- [ ] Review performance findings: 2 missing FK indexes, 6 RLS init-plan warnings, 25 multiple-permissive-policy warnings; reassess 10 unused-index INFO findings after workload exists.
- [ ] Expand synthetic seed to T-024 scope (2–3 classes) if required; no real student data.
- [ ] T-021 / further journal schema if needed.
- [ ] T-006 free hosting + keep-alive plan.
- [ ] T-043 backup/export strategy.
