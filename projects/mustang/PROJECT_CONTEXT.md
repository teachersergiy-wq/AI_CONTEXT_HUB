# Mustang — PROJECT_CONTEXT

## Purpose
Mustang is a browser/mobile strategy game with horse/elephant-themed levels, records, local AI and replay/analysis features.

## Repository
https://github.com/teachersergiy-wq/mustang

## Verified current implementation
The repository contains the root web application and the separate mobile_v21 port. The current Hub state verifies browser gameplay, local AI, mobile UI, local/device records, world records through Google Apps Script / Google Sheets, pause/save/continue, undo, move notation/replay and campaigns. The mobile_v21 port is intentionally isolated from the root deployment while parity/testing continues.

## Historical project context from prior chats

### Statistics and data architecture — HISTORICAL / DESIGN
A durable statistics layer was discussed for:
- multiple players;
- played game sessions;
- personal and world records;
- move/time/level metrics;
- accumulated game statistics;
- future analysis of played parties.

The earlier discussion was architectural. It must not be treated as a verified production database unless the current repository/backend confirms it.

### AI/game-development work — HISTORICAL / PARTIAL
Prior chats included:
- comparison of four automatic-move AI algorithms;
- analysis of files named `Claude - all AI - auto 30 ходів.py` and `GPT - АвтоХід 32сл-30ходів - інші рівні 20 ходів Grok,GPT,Gemini,Claude.py`;
- a Python game/AI direction;
- a request to learn how Codex could be used to build Mustang from scratch;
- iterative work on automatic move series and game behavior.

The algorithm-comparison files contained corresponding GPT/Grok/Gemini/Claude strategies. These comparisons are historical unless revalidated against the current repository.

### Web publishing — HISTORICAL
The game has also been discussed in connection with Google Apps Script publication and long web links, plus the possibility of a free personal website. These are deployment/support topics, not separate projects.

## Durable requirement
Preserve existing working gameplay when changing AI or rules. Do not promote historical chat proposals to implemented functionality without repository/test verification.
