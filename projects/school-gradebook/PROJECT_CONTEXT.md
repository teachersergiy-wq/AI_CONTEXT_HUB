# Project Context — School Gradebook / Class Journal

## Purpose

**School Gradebook / Class Journal** is a separate educational software project for managing student grades, lesson information and classroom records.

The project is distinct from:
- `tutor-schedule` — private tutor scheduling and lesson-management;
- `school-attendance` — school attendance/meals/reporting.

## Historical requirements from prior work

The user described a Python application called “Журнал оцінок учнів” with:
- desktop Python GUI;
- later possibility of Android use;
- lesson date at the top of the gradebook;
- absence marker `н`;
- assessment columns/categories including `ГР1`, `ГР2`, `ГР3`;
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

Expected areas include students, classes/groups, subjects, lessons, assessment records, attendance markers, assessment categories, academic periods and user/teacher configuration.

Any detailed schema remains **PLANNED** until verified in the actual project source or database.

## Source repository

The production GitHub repository for this project is currently **NOT CONNECTED / NOT VERIFIED** in AI_CONTEXT_HUB.

Do not invent repository, database, deployment or implementation state.
