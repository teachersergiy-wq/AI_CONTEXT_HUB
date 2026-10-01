# Mustang — DECISIONS

## 2026-09-25 — External project context
Decision: Mustang keeps its durable project context in AI_CONTEXT_HUB instead of relying on chat history.
Reason: Multiple AI systems need the same current context.
Status: active

## Historical scope boundary
Decision: Algorithm-comparison experiments, Python/Codex learning, statistics/database design, and Apps Script publication discussions remain part of Mustang's historical context unless a clearly independent product emerges.
Reason: These topics directly support the same game, but older proposals must not be mistaken for verified implementation.
Status: active

## 2026-09-30 — Single product, two clients
Decision: Web/mobile (`teachersergiy-wq/mustang`) and Python desktop (Tkinter) are **one product**, not separate Hub projects. Document both under `projects/mustang/` with clear VERIFIED vs PARTIAL labels.
Reason: Same rules, campaigns, records model; desktop often acts as reference implementation.
Status: active

## 2026-09-30 — Guest isolation
Decision: Guest plays only under name «Гість»; results stay in **local** records; they are **never** sent to world ranking; guest session does **not** accumulate personal statistics counters or unlock notation analysis by default.
Reason: Separate casual play from ranked identity and privacy of registered players.
Status: active

## 2026-09-30 — World records storage model
Decision: World quick-game results live as **one row store** (Google Sheet / cache) keyed by player, bishops, moves, time; TOP time / moves / balance are **sort views**, not separate databases. Combined ranking uses parity Score across bishop counts.
Reason: Simpler sync and consistent ranking.
Status: active

## 2026-09-30 — Prefer working monolith over broken modular split
Decision: Until `mustang_pkg` imports and resource paths are stable on Windows, ship/debug from a **single-file** desktop baseline; modularization remains a follow-up refactor, not a requirement for gameplay features.
Reason: Modular package caused real startup failures (`mustang_pkg.ui`, missing `APP_DIR`).
Status: active

## 2026-09-30 — Secrets policy for Hub
Decision: Do not write Sheet IDs beyond what is already public, Apps Script deploy URLs with secrets, or player passwords into AI_CONTEXT_HUB.
Reason: Hub Rule 3 (no passwords / API secrets).
Status: active
