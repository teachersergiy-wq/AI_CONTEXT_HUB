# Mustang — CURRENT_STATE

## Repository
- GitHub: teachersergiy-wq/mustang
- Branch: main

## Verified current structure
- index.html — root web application
- css/ — styles
- js/ — game logic, AI, records and configuration
- apps_script/ — Google Apps Script integration
- mobile_v21/ — separate mobile port based on mustang_gui.21_ai.py

## Verified capabilities

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
/mustang/mobile_v21/

## Historical state — NOT VERIFIED AS CURRENT IMPLEMENTATION
Prior chats discussed:
- a future persistent statistics/database layer for players, sessions and records;
- comparing four AI algorithms/AI providers for automatic play;
- Python/Codex-assisted game development.

These remain historical or planned unless confirmed in the current repository.

## Active development directions
- Verify mobile_v21 on real phones.
- Compare mobile_v21 feature-by-feature with the Python reference.
- Verify campaign continuation, save/continue and replay on real devices.
- Verify world-record submission from mobile_v21.
- Improve AI quality/learning.
- Improve record/rating comparison.
- Keep this file synchronized with actual repository state.
