# Mustang — CURRENT_STATE

## Repository
- GitHub (web/mobile): `teachersergiy-wq/mustang`, branch `main`
- Python desktop: local/workspace artifacts (e.g. `mustang_24.0.py`, older `mustang_gui*.py`, experimental `mustang_pkg/`). Not the same tree as the web repo unless explicitly synced.

## Verified current structure (web)
- `index.html` — root web application
- `css/` — styles
- `js/` — game logic, AI, records and configuration
- `apps_script/` — Google Apps Script integration
- `mobile_v21/` — separate mobile port based on `mustang_gui.21_ai.py`

## Verified capabilities (web)

### Root web version
- Browser game
- Local AI for the knight
- Mobile interface
- Device records via localStorage
- World records via Google Apps Script / Google Sheets
- Pause / save / continue
- Undo
- Move notation and replay
- Campaigns

### mobile_v21
- Mobile-first responsive interface
- Quick game levels 32 / 24 / 16 / 14 / 12 and custom 1–32
- GPT#1–GPT#20 automatic bishop series
- CycleGuard 2–5
- Pause, save, continue and undo confirmation
- Move notation and replay
- Local/world records
- Three campaign types with local name/password progress
- Landscape phone layout

## Important implementation boundary
mobile_v21 is intentionally separate from the root web version so the established deployment is not broken while feature parity is tested.

GitHub Pages path:
`/mustang/mobile_v21/`

## Python desktop stream (Grok chat, 2026-08 … 2026-09) — PARTIAL

Working direction of the latest single-file baseline discussed in chat (`mustang_24.0.py` lineage):

| Area | State |
|---|---|
| Tkinter board + piece images | Implemented in chat baseline; images via script directory / APP_DIR; text fallback if missing |
| Knight minimax AI | Implemented |
| Local records TOP25 (time / moves / balance) | Implemented |
| Campaigns summit / steps2026 / marathon | Implemented with limits and progress save |
| World Sheet fetch + local merge + Apps Script submit | Implemented; requires public Sheet + optional web-app URL |
| Combined ranking + parity Score + column sort TOP100 | Implemented in desktop UI |
| Guest vs player + stats panel | Implemented; guest excluded from world + stats counters |
| Player profile → Google «Players» sheet | PLANNED/PARTIAL — client method added; Apps Script handler must be deployed |
| Modular `mustang_pkg` | PARTIAL — packaging caused import/APP_DIR issues; prefer stable monolith until fixed |

Known desktop pain points from chat:
- `No module named mustang_pkg.ui` when `ui/` not copied
- `NameError: APP_DIR is not defined` if constants not imported after modularization
- UI freeze during sequential HTTP record uploads — fixed with background thread in later desktop builds
- World table empty until «Перевірити зараз» and level/combined view opened

## Active development directions
- Verify mobile_v21 on real phones.
- Compare mobile_v21 feature-by-feature with the Python reference.
- Verify campaign continuation, save/continue and replay on real devices.
- Verify world-record submission from mobile_v21.
- Improve AI quality/learning.
- Improve record/rating comparison.
- Keep desktop Guest/Player and world-sync rules aligned with web if features are ported.
- Keep this file synchronized with actual repository state.
