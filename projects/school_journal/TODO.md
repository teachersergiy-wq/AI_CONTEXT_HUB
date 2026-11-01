# TODO — School Journal

- [x] DATA_CONTRACT ACCEPTED.
- [x] T-005 Supabase Free project created (`dtpyvyedcptdkdsowmco`, `eu-central-1`).
- [x] Core schema migration applied: `20261101190138_core_schema` (history version `20261101194215`).
- [x] RPC migration applied: `20261101190500_save_lesson_record_rpc` (history version `20261101194221`).
- [x] Lesson-window view migration applied: `20261101215100_v_lesson_window` (history version `20261101195655`); view uses `security_invoker=true`.
- [x] Starter synthetic seed already present and reverified: 6 behavior marks, 2 subjects, class 8-А, 10 fictional students. Not rerun during view step.
- [ ] Review/merge PR #1 (`grok/T-020` → `main`); no formal review or issue-comment entries were present at 21:57 Kyiv time.
- [ ] **Security remediation (priority):** Grok to restrict unnecessary helper/RPC/table/view/default EXECUTE and data privileges; fix mutable function search_path; make RLS policy roles explicit and least-privilege.
- [ ] Recheck view grants: current SQL privilege query returns SELECT on `v_lesson_window` for both `authenticated` and `anon` despite the migration's explicit grant to authenticated only.
- [ ] T-023 RLS matrix: owner, two separate test teachers, anon; verify cross-class/journal isolation and CRUD behavior.
- [ ] Verify actual Data API HTTP access after grants/policies are corrected.
- [ ] Create synthetic test journal/lesson/records (no real student data) and verify non-empty `v_lesson_window` output for an authorized teacher and denied/empty access for other roles.
- [ ] Review performance findings: 2 unindexed foreign keys, 6 RLS init-plan warnings, 25 multiple-permissive-policy warnings; reassess 10 unused-index INFO findings after workload exists.
- [ ] T-006 free hosting + keep-alive plan.
- [ ] T-043 backup/export strategy.
