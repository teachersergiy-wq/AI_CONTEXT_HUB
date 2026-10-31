# Project Context — School Gradebook / Class Journal

## Purpose

**School Gradebook / Class Journal** is a separate educational software project for managing student grades, lesson information and classroom records.

The project is distinct from:
- `tutor-schedule` — private tutor scheduling and lesson-management;
- `school-attendance` — school attendance/meals/reporting.

## Confirmed functional requirements

The following requirements were updated by the user on 2026-10-31 and supersede conflicting older notes.

### Journal selection and navigation

1. The user selects a journal by **subject + class** (for example, **Algebra — Grade 8**).
2. The application displays the journal for that selected subject and class only.
3. The journal presents lesson dates for that subject/class.
4. When the user selects a date, the application opens the corresponding lesson window.

### Lesson window layout

The lesson window must show:
- **Left side:** the list of students in the selected class.
- **Right side:** columns for recording each student's characteristics/participation during that lesson.

The required lesson-characteristic columns are:

1. Homework completion.
2. Availability of notebook and textbook.
3. Work at the board.
4. Behaviour during the lesson.
5. Not making/writing notes in the notebook.
6. Leaving the classroom during the lesson, with a reason/category such as toilet, phone or other.
7. Late arrival to the lesson, recorded as **N minutes**.

The exact input controls, allowed values, and whether some characteristics need separate subfields are still to be designed. Do not silently assume that all these fields are simple yes/no checkboxes.

### Assessment and legacy columns

- The user explicitly rejected the `ГР1`, `ГР2`, and `ГР3` columns. They are **not part of the intended journal design** and must not be reintroduced.
- This decision removes those three columns only. It does not by itself cancel the previously discussed independent-work, homework, and control/test assessment workflows; their final presentation and relationship to the lesson-characteristic table remain to be defined.
- The historical absence marker `н` remains a previously recorded requirement unless the user changes it.

## Historical requirements from prior work

The user described a Python application called “Журнал оцінок учнів” with:
- desktop Python GUI;
- later possibility of Android use;
- lesson date at the top of the gradebook;
- absence marker `н`;
- independent work, homework and control/test categories;
- subject management;
- editable lesson records;
- lesson edit/delete operations;
- context menu support.

### Historical implementation trail

The work progressed through staged Python development and included a file named `journal_gui.py`, including an “Етап 9” stage.

Later user-reported unresolved issues were:
1. header was not split into separate rows as intended;
2. lessons could not be edited or deleted;
3. no context menu was available.

These are historical reports, not claims about the current implementation.

Earlier Python-learning lessons and later Codex experimentation are supporting development context, not separate projects.

## Data / architecture direction

The exact production data model is **NOT YET VERIFIED**.

Expected areas include students, classes/groups, subjects, lessons, lesson dates, lesson-characteristic records, assessment records, attendance markers, academic periods and user/teacher configuration.

The data model must support linking a lesson to its subject and class, and recording the required characteristics for each student for that lesson. Detailed schema and value types remain **PLANNED** until designed and verified in the actual project source or database.

## Source repository

The production GitHub repository for this project is currently **NOT CONNECTED / NOT VERIFIED** in AI_CONTEXT_HUB.

Do not invent repository, database, deployment or implementation state.
