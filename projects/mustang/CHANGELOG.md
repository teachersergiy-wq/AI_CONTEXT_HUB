# Mustang — CHANGELOG

## 2026-09-30 — Python desktop context from Grok chat

### Documented (PARTIAL relative to web repo)
- Desktop Tkinter feature set: notation (paired full moves), TOP25 time/moves/balance, campaigns (summit/steps2026/marathon), world Sheet sync, parity Score combined TOP100, Guest vs Player, stats panel, splash/login, minimax knight AI.
- Product rules: Guest excluded from world ranking and personal stats; registered player optional profile sync via Apps Script actions.
- Ops notes: world refresh should run off UI thread; modular `mustang_pkg` startup pitfalls (`ui` package, `APP_DIR`).
- Explicit decision: one Hub project `mustang` for web + desktop streams.

### Not claimed VERIFIED in GitHub web tree
- Specific desktop filenames and Sheet automation remain chat/workspace artifacts until merged and tested in `teachersergiy-wq/mustang`.

## 2026-09-25

### Added
- Added Mustang to AI_CONTEXT_HUB.
- Added mobile_v21/ as a separate browser/mobile port based on mustang_gui.21_ai.py.
- Added mobile GPT#1–GPT#20 automatic series.
- Added CycleGuard 2–5 history handling for the automatic series.
- Added mobile campaign name/password progress storage.
- Added mobile replay, save/continue and undo-confirmation behavior to the v21 port.
- Updated Mustang README with the mobile_v21 GitHub Pages path.

### Important
The existing root web version remains unchanged; v21 is isolated for testing before any replacement decision.

## 2026-09-27 — Context consolidation
- Added historical context covering Mustang statistics/database planning, AI-algorithm comparison, Python/Codex development discussions and Apps Script/web-publication topics.
- Historical items are explicitly separated from repository-verified functionality.

## 2026-09-27 — Audit refinement
- Recorded the exact historical filenames used for the four-algorithm automatic-move comparison.
