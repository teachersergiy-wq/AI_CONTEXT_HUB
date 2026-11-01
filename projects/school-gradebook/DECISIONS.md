# Decisions — School Gradebook / Class Journal

## 2026-10-31 — MERGED into school_journal

**Decision:** this project is merged with School Attendance into one project, **School Journal** (`projects/school_journal/`). This record is kept as historical context only; do not start new work here. The confirmed requirements below are inherited by `school_journal`, where the class journal is the first module to build.

**Supersedes:** the 2026-09-27 "Separate project boundary" decision.
**Decided by:** owner.

## 2026-10-31 — Remove ГР1/ГР2/ГР3 columns

**Decision:** The intended journal design must not contain columns `ГР1`, `ГР2`, or `ГР3`.

**Scope:** This removes those three columns only. It does not, by itself, cancel the previously discussed independent-work, homework, or control/test assessment workflows.

## 2026-10-31 — Journal selected by subject and class

**Decision:** The user selects a journal using a subject/class pair (for example, Algebra — Grade 8). The application must display the journal for that exact subject and class.

## 2026-10-31 — Date opens a lesson window

**Decision:** Selecting a lesson date opens that lesson's window. The student list is positioned on the left; lesson-characteristic columns are positioned on the right.

The required characteristics are:
1. Homework completion.
2. Availability of notebook and textbook.
3. Work at the board.
4. Behaviour during the lesson.
5. Not making/writing notes in the notebook.
6. Leaving the classroom during the lesson, with reason/category (toilet, phone, other).
7. Late arrival, recorded as N minutes.

**Not yet decided:** exact field value sets and controls, whether notebook and textbook are separate indicators, whether multiple classroom exits/reasons can be recorded, and how qualitative characteristics are evaluated. These must be clarified during data/UI design rather than assumed.

## 2026-09-27 — Separate project boundary

**Decision:** School Gradebook / Class Journal is an independent project record in AI_CONTEXT_HUB.

**Reason:** Its product goal, data model and development lifecycle are separate from Tutor Schedule and School Attendance.

**Status:** SUPERSEDED on 2026-10-31 (merged into school_journal).

## 2026-09-27 — Supporting Python-learning context

Python learning lessons and general Codex experimentation remain supporting context for this project where directly relevant. They are not separate project records.

## 2026-09-27 — Verification rule

Historical GUI requirements and bug reports must be treated as historical until the current source repository is inspected.

No implementation claim is considered current without source/test verification.

## Future architecture rule

The definitive persistence architecture, student/lesson/assessment schema and Android strategy must be based on the actual project source and/or database once connected, not inferred from historical chat text.

## 2026-09-27 — Historical implementation reference

The `journal_gui.py` / “Етап 9” trail is preserved as a locator for future source recovery, not as a claim that this exact version is current.
