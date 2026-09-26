# Tutor Schedule — TODO

## Human verification still required

- [ ] Live browser QA of the latest teacher and student UI changes, including Week/Month/Year navigation, lesson-list clicks, mobile modal behavior, landscape Month layout, student self-cancel UI and teacher notification panel.
- [ ] Live verification of one authorized legacy r0zklad student link redirect.
- [ ] Review the open PR #1 and decide when it is ready for merge.

## Security / deployment

- [ ] Enable Supabase Auth Leaked Password Protection manually in the Dashboard.
- [ ] Keep the existing security-advisor warnings for intentional token-based student SECURITY DEFINER RPCs and legacy RPCs under review; do not broaden grants without a logged proposal.

## Migration gate

- [ ] Perform the final clean data resync from the legacy working database immediately before deployment.
- [ ] Merge PR #1 only after human review/approval.
- [ ] Perform final cutover to Rozklad only after explicit human instruction.

## Context maintenance

- [ ] Keep CURRENT_STATE.md synchronized after significant repository or Supabase changes.
- [ ] Keep DECISIONS.md and CHANGELOG.md synchronized when durable project decisions or major milestones change.
- [ ] Later: link verified repository paths in ai_project_sources and define/automate the stable public context document set.