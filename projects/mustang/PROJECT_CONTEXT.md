# Mustang — PROJECT_CONTEXT

## Purpose

Mustang is a browser game with a horse, elephant levels, local AI, records and mobile-friendly UI.

## Current implementation

The GitHub repository already contains the web version:
- `index.html`
- `css/`
- `js/`
- `apps_script/`

The README describes:
- browser gameplay with local AI;
- mobile interface;
- device records via localStorage;
- world records via Google Apps Script / Google Sheets.

Repository:
https://github.com/teachersergiy-wq/mustang

## Durable requirements

### Gameplay and records
- Levels are based on elephant count.
- Record comparison should use elephant count, moves and time.
- Moves have much greater weight than time.
- The rating should allow comparison of records across levels.

### AI
- AI improvement includes learning from played games.
- The AI must remain compatible with the existing game rules.

### Records and analysis
- The player's own games should remain available for analysis.
- World-record games should be available for analysis where the current implementation supports it.

### Game UX requirements from prior design
- Pause should visually clear the board and stop the timer until resumed.
- Save/resume should preserve player name, time and move count.
- Undo has explicit rules and can invalidate a record.
- The post-game "Що далі" dialog should be centered over the play field.
- Game/board zoom should be available.
- Mobile Chrome is a primary target for the web version.

## Development rule

Before changing gameplay logic, inspect the current repository code and preserve existing working behavior.
Do not treat old chat proposals as implemented features unless the current code confirms them.
