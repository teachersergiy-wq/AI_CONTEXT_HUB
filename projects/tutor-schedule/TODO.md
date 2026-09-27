# Tutor Schedule — TODO

## Human verification still required
- [ ] Live browser QA of teacher/student navigation, lesson-list clicks, mobile lesson modal, landscape Month layout and the 2026-09-27 UI polish.
- [ ] Verify student three-section row and pending-request expansion on a real phone.
- [ ] Verify single-row Month headers in landscape on teacher and student devices; revert to two-row styling later if testing shows the single row is inconvenient.
- [ ] Live verification of one authorized legacy r0zklad student-link redirect.
- [ ] Review open PR #1 and decide when it is ready for merge.

## Security / deployment
- [ ] Enable Supabase Auth Leaked Password Protection manually in the Dashboard.
- [ ] Keep intentional token-based student SECURITY DEFINER and legacy RPC warnings under review; do not broaden grants without a logged proposal.

## Migration gate
- [ ] Perform final clean data resync from the legacy working database immediately before deployment.
- [ ] Merge PR #1 only after human review/approval.
- [ ] Perform final cutover to Rozklad only after explicit human instruction.

## Context maintenance
- [ ] Keep all five project-context files synchronized after significant changes.
- [ ] Later: link verified repository paths in ai_project_sources and define/automate the stable public context document set.
