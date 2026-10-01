# Mustang — PROJECT_CONTEXT

## Purpose
Mustang is a chess-variant immobilization game: white bishops try to leave the black knight with no legal moves on an 8×8 board (no captures; turns alternate by chess movement rules). After a win the level restarts with one fewer bishop. The long-term goal is the smallest bishop count that can still catch the lone knight.

There are two implementation streams that must not be confused:

1. **Web / mobile (GitHub `teachersergiy-wq/mustang`)** — browser game, local AI, campaigns, records, `mobile_v21` port.
2. **Python desktop (Tkinter)** — full-featured desktop client developed in AI chats (Grok and others); often used as a **behavior reference** for the web/mobile ports.

## Repository
- Web/mobile: https://github.com/teachersergiy-wq/mustang
- Python desktop sources live mainly in local/workspace artifacts (examples: `mustang_24.0.py`, `mustang_gui.py`, experimental `mustang_pkg/`). They are **not automatically the same** as the GitHub web tree unless explicitly merged.

## Core game rules (durable)
- Board: 8×8.
- Pieces: multiple white bishops + one black knight.
- No captures; only movement and blocking.
- Win: knight has zero legal squares.
- After win (campaign/progression): reduce bishop count by 1 and continue, subject to campaign limits.
- Difficulty anchors used in UI: 32 / 24 / 16 / 14 / 12 bishops (custom 1–32 also used).

## Verified current implementation (web repo)
The GitHub repository contains the root web application and the separate `mobile_v21` port. Hub state verifies browser gameplay, local AI, mobile UI, local/device records, world records through Google Apps Script / Google Sheets, pause/save/continue, undo, move notation/replay and campaigns. The `mobile_v21` port is intentionally isolated from the root deployment while parity/testing continues.

## Python desktop stream — PARTIAL / CHAT-DEVELOPED
A large Tkinter desktop version was iteratively built in chat. Durable capabilities discussed/implemented in that stream:

- Graphical board with custom bishop/knight images (fallback text `B`/`N` if images missing).
- Algebraic notation with **paired full moves** (e.g. `1. Ba4-a7 Nb8-c6`).
- Local high scores: TOP25 by time, moves, and balance (moves+time); tie-break prefers earlier timestamp; named players rank above «Гість» on equal results.
- Modes: **Швидка гра** and **Проходження кампанії** (`summit`, `steps2026`, `marathon`) with password-protected progress.
- Summit level time formula: `(32 − N) × 60 + 120` seconds.
- World records: Google Sheet CSV read + optional Apps Script write; local cache; offline wins uploaded on «Перевірити зараз».
- Combined world ranking TOP100 with **parity Score** across levels.
- Session: Guest vs named player; player panel stats; splash/login.
- Knight AI: minimax with alpha-beta (search depth ~3–4 half-moves).
- Modular split (`mustang_pkg`) was attempted; startup regressions led to preference for a **working single-file** baseline (`mustang_24.0.py`) until packaging is stable.

Labels: treat Python desktop items as **PARTIAL** relative to GitHub web unless re-verified in `teachersergiy-wq/mustang`.

## Guest vs player (durable product rule)
- **Guest**: local records only under name «Гість»; **not** submitted to world ranking; **no** personal game statistics / party counters; notation analysis gated off.
- **Player**: named login; local profile; eligible for world records; stats panel; optional profile sync to a Google «Players» sheet via Apps Script (`player_register` / `player_update`).

Do **not** store real passwords or Apps Script secrets in this Hub (Rule 3).

## World records / parity Score (design)
- Sheet columns (quick games): `name, bishops, moves, time_sec, notation, date, timestamp`.
- UI sorts the same rows by time / moves / balance; combined ranking uses Score ≈ `1000 × √((ref_moves/moves)×(ref_time/time))` with log-interpolation of reference points by bishop count; refs can be overridden by world TOP1 per level.
- Reference anchors evolved in chat; keep formula and that refs are tunable documented here, not hard-code secrets.

## Historical project context from prior chats

### Statistics and data architecture — HISTORICAL / DESIGN
A durable statistics layer was discussed for multiple players, sessions, personal/world records, and analysis of played parties. Architectural unless the current repository/backend confirms it.

### AI/game-development work — HISTORICAL / PARTIAL
Prior chats included comparison of automatic-move AI algorithms across providers, Python game/AI direction, and iterative automatic move series. Revalidate against current code before treating as production.

### Web publishing — HISTORICAL
Google Apps Script publication and personal website discussions are deployment/support topics, not separate products.

## Durable requirement
Preserve existing working gameplay when changing AI or rules. Do not promote historical chat proposals to implemented functionality without repository/test verification.
