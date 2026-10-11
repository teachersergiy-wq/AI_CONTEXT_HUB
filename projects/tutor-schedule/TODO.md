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
- [ ] LEG-2: live verification of one authorized legacy r0zklad student-link redirect using a real old URL supplied by the human; never log the shared key.
- [ ] Review open PR #1 and decide when it is ready for merge.

## Security / deployment
- [ ] Keep intentional token-based student SECURITY DEFINER and legacy RPC warnings under review; do not broaden grants without a logged proposal.

## Migration gate
- [x] Final resync from legacy cancelled; never overwrite V2 with legacy data unless the human explicitly reverses this decision.
- [ ] Remove/verify absence of any workflow that commits backup JSON into public Rozklad; use a private backup destination only after human approval.
- [ ] Create private `rozklad-backups` only after explicit human confirmation; configure GitHub Secrets manually and verify a real successful backup run.
- [ ] LEG-1: server-side legacy-link bridge in `r0zklad/student-schedule.js` is committed; run static QA and then wait for a real old URL for LEG-2.
- [ ] LEG-3: inspect all current `r0zklad` files for UUID tokens; after live redirect verification, rotate tokens for the nine original students. Do not rewrite history.
- [ ] LEG-4: audit current files and accessible commit history of public repositories and AI_CONTEXT_HUB for secrets/tokens; do not copy secret values into the log. AI_CONTEXT_HUB remains public pending human decision.
- [ ] RB-1: create and record stable tags `stable-r0zklad-pre-cutover` and `v2-pre-merge` when tag-writing capability is available; do not delete development branch.
- [ ] RB-3: add and review `ROLLBACK.md` for Pages rollback, redirect switch, and V2 backup restoration limitations.
- [ ] Merge PR #1 only after human review/approval.
- [ ] Perform final cutover to Rozklad only after explicit human instruction; do not switch Pages without direct command.

## Context maintenance
- [ ] If an older prototype-specific behavior is requested for the current app, compare it against V2 source and later decisions before implementing it.
- [ ] Keep all five project-context files synchronized after significant changes.
- [ ] Complete remaining live QA: REPORT-211, HDR-1, student numbering, source/target reschedule highlighting, mobile modal/landscape, and pending/debt/period UI.
- [ ] Verify the actual GitHub Pages source branch/commit; current connector could not independently read Pages settings.
- [ ] Review whether AI_CONTEXT_HUB should remain public after auditing its contents; human decision required.
- [ ] Later: link verified repository paths in ai_project_sources and define/automate the stable public context document set.
