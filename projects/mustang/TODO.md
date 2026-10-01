# Mustang — TODO

## Current (web / mobile_v21)
- [ ] Test mobile_v21 on Android Chrome and iPhone Safari.
- [ ] Compare mobile_v21 feature-by-feature with mustang_gui.21_ai.py.
- [ ] Verify campaign continuation, save/continue and replay on a real mobile device.
- [ ] Verify world-record submission from mobile_v21.

## Current (Python desktop stream)
- [ ] Stabilize packaging only if needed (`mustang_pkg` + APP_DIR + optional ui), or keep monolith as canonical desktop.
- [ ] Finish/verify Apps Script `player_register` / `player_update` for «Players» sheet (no secrets in Hub).
- [ ] Align Guest/Player and world-upload behavior with web client if porting features.
- [ ] Confirm parity Score reference points against live world TOP1 when enough data exists.

## Next
- [ ] Decide whether mobile_v21 should replace the root web version after testing.
- [ ] Add any missing Python-era record filters and campaign record views to web/mobile if still missing.
- [ ] Consider moving persistent campaign progress from localStorage to Supabase for cross-device continuation.
- [ ] Improve AI learning from played games.
- [ ] Revisit the previously discussed persistent player/session/record statistics architecture when implementation scope is defined.

## Later
- [ ] Add automated GitHub → Supabase synchronization.
- [ ] Add automated cross-AI handoff logging.
