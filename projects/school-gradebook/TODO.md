# TODO — School Gradebook / Class Journal

## Highest priority

- [ ] Connect or identify the actual GitHub repository for the gradebook.
- [ ] Inspect the current Python source and establish a verified baseline.
- [ ] Determine the actual persistence layer and current schema.
- [ ] Remove any `ГР1`, `ГР2`, and `ГР3` columns from the intended UI/data design; do not reintroduce them.
- [ ] Design journal navigation by subject + class (for example, Algebra — Grade 8).
- [ ] Define how lesson dates are listed within the selected subject/class journal.
- [ ] Implement/select a date so it opens the corresponding lesson window.
- [ ] Design the lesson window with students on the left and lesson-characteristic columns on the right.
- [ ] Define value sets and input controls for homework completion.
- [ ] Decide whether notebook and textbook availability are recorded together or as separate indicators.
- [ ] Define how work at the board is recorded.
- [ ] Define allowed behaviour values/recording method.
- [ ] Define how failure to make notes in the notebook is recorded.
- [ ] Define how classroom exits are recorded, including toilet, phone and other reasons; decide whether multiple exits per lesson need to be supported.
- [ ] Record late arrival as a numeric number of minutes.
- [ ] Verify how the historical absence marker `н` should appear in the lesson window.
- [ ] Confirm how independent work, homework and control/test assessment workflows fit alongside the new lesson-characteristic columns.
- [ ] Verify lesson edit/delete operations and context menu functionality.
- [ ] Verify the `journal_gui.py` / “Етап 9” state if that source is located.
- [ ] Define a stable data model for students, classes, subjects, lessons, lesson characteristics and assessments.
- [ ] Decide and document the Android delivery strategy after the desktop baseline is verified.

## Later

- [ ] Add automated tests for core journal and lesson operations.
- [ ] Define backup/import/export requirements.
- [ ] Verify classroom/academic-period reporting needs.
