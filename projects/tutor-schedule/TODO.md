# Tutor Schedule — TODO

## Human verification still required
- [ ] Live browser QA of teacher/student navigation, lesson-list clicks, mobile lesson modal, landscape Month layout and the 2026-09-27 UI polish.
- [ ] Verify student three-section row and pending-request expansion on a real phone.
- [ ] Verify pending-request entry is completely hidden when there are no pending requests and appears only once when there is at least one.
- [ ] Verify debt information is hidden when all completed lessons are paid and visible when at least one completed lesson is unpaid.
- [ ] Verify “Поточний період” is directly before the left/right period arrows on the student interface and navigation still changes the correct period.
- [ ] Verify “Заплановані уроки” remains populated when the selected calendar period contains no planned lessons but planned lessons exist elsewhere in the student's schedule.
- [ ] Verify fully completed lesson bolding in teacher Day, Week and Month views, including the topic/homework/payment conditions and a non-bolding case when any required condition is missing.
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
