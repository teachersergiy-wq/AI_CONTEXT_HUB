# Current State — School Gradebook / Class Journal

**Status:** PARTIAL / HISTORICAL  
**Last updated:** 2026-10-31

## CONFIRMED REQUIREMENT UPDATES — 2026-10-31

The user updated the intended journal behavior:

- The `ГР1`, `ГР2`, and `ГР3` columns are rejected and must be removed from the intended design.
- The user first selects a journal by subject and class (for example, Algebra — Grade 8).
- The application displays the journal for that specific subject/class.
- Selecting a date opens the lesson window.
- The lesson window places the student list on the left and lesson-characteristic columns on the right.

Required student characteristics for each lesson:
1. Homework completion.
2. Availability of notebook and textbook.
3. Work at the board.
4. Behaviour during the lesson.
5. Not making/writing notes in the notebook.
6. Leaving the classroom during the lesson (toilet, phone, other).
7. Late arrival, recorded in minutes (N minutes).

The exact values and input controls for these characteristics have not yet been specified. In particular, whether notebook and textbook are tracked together or separately, how classroom exits are recorded, and how behaviour/work-at-board are assessed remain design questions.

The removal of ГР1/ГР2/ГР3 does not automatically remove the previously discussed independent-work, homework, or control/test assessment workflows.

## VERIFIED FROM PRIOR WORK

The project was conceptually defined and a Python GUI implementation was developed during earlier conversations.

Other known historical requirements:
- Python desktop gradebook;
- planned future Android use;
- lesson date;
- absence value `н`;
- independent work, homework and control/test categories;
- subject management;
- lesson editing/deletion;
- context menu requirement.

The earlier work included staged development and a `journal_gui.py` file; an “Етап 9” stage was explicitly referenced.

## HISTORICAL REPORTED PROBLEMS

The last reported GUI problems in the available chat context were:
- header not split into the intended separate rows;
- lesson edit/delete unavailable;
- no context menu.

Because the current repository is not connected, these cannot be asserted as current bugs.

## NOT VERIFIED

- current source code state;
- current Git branch or commit;
- production database;
- Android build;
- persistent storage schema;
- deployment state;
- final UI behavior.

## Current blocker

A production repository/source baseline has not yet been connected or verified for this Hub record.
