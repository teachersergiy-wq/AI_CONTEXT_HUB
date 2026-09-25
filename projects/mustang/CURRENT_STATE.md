# Mustang — CURRENT_STATE

## Repository

- GitHub: `teachersergiy-wq/mustang`
- Branch: `main`

## Verified current structure

- `index.html` — current mobile-first web application
- `css/` — styles
- `js/` — game logic, AI, records and configuration
- `apps_script/` — Google Apps Script integration
- `mobile_v21/` — separate mobile port based on `mustang_gui.21_ai.py`

## Verified capabilities

### Root web version
- Browser game
- Local AI for the knight
- Mobile interface
- Device records in localStorage
- World records through Google Apps Script / Google Sheets
- Pause / save / continue
- Undo
- Move notation and replay
- Campaigns

### mobile_v21 port
- Source: `mustang_gui.21_ai.py`
- Mobile-first responsive interface
- Quick game levels 32 / 24 / 16 / 14 / 12 and custom 1–32
- GPT#1–GPT#20 automatic bishop series
- CycleGuard 2–5 for automatic play
- Pause, save, continue and undo confirmation
- Move notation and replay
- Local/world records
- Three campaign types with local name/password progress
- Landscape phone layout

### Important implementation note

`mobile_v21` is intentionally separate from the existing root web version so the established deployment is not broken while feature parity is developed and tested.

GitHub Pages path:
`/mustang/mobile_v21/`

## Active development directions

- Verify mobile_v21 gameplay on real phones
- Bring any missing historical gameplay rules from the Python version into the web port
- Improve AI quality and learning
- Improve record/rating comparison
- Keep this file synchronized with actual repository state
