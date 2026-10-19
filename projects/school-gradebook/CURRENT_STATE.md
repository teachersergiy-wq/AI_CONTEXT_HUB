# Current State — School Gradebook / Class Journal

**Status:** PARTIAL / HISTORICAL  
**Last updated:** 2026-10-20

## VERIFIED FROM PRIOR WORK

The project was conceptually defined and a Python GUI implementation was developed during earlier conversations.

Known requirements:
- Python desktop gradebook;
- planned future Android use;
- lesson date;
- absence value `н`;
- grade/result columns including `ГР1`, `ГР2`, `ГР3`;
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

## REPOSITORY DISCOVERY AUDIT — 2026-10-20

**VERIFIED — search of currently connected sources:**
- The connected GitHub repository list for `teachersergiy-wq` showed `mustang`, `Rozklad`, `r0zklad`, `AI_CONTEXT_HUB`, and `multiplication-practice`; none was identified as School Gradebook.
- GitHub repository/code searches for gradebook terms, `journal_gui.py`, and the historical assessment-category labels returned unrelated projects, not a reliable match for this project.
- The accessible file Library was checked. No `journal_gui.py` or other clearly matching Python gradebook source was found; files from unrelated project contexts were not treated as this application's source.

**BLOCKED:** The actual source repository or authoritative source files have not been identified. No application code has been inspected or changed, and no application tests have been run.

## NOT VERIFIED

- current source code state;
- current Git branch or commit;
- production database;
- Android build;
- persistent storage schema;
- deployment state;
- final UI behavior.

## Current blocker

Provide/connect the actual gradebook repository URL or provide the authoritative source files. Until then, implementation and verification of the historical UI issues must remain blocked.
