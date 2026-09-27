# School Attendance — PROJECT_CONTEXT

## Purpose
Mobile-first school web application for daily attendance, meal ordering/reporting and future academic records.

## Project boundary
This is a separate project from teachersergiy-wq/Rozklad / Tutor Schedule and from School Gradebook / Class Journal. Its implementation repository is not yet connected to the Hub, so requirements must not be described as verified code.

## Core workflow discussed in prior chats
Teachers should be able to submit information from a phone with large controls. The system should support:
- grades 1–11, with grade 10 explicitly excluded from the attendance workflow;
- identifying present/absent students by surname;
- submission by the homeroom teacher or the teacher whose first lesson is in that class;
- recording who submitted the data and the submission time;
- substitution/replacement scenarios;
- kitchen-facing meal reports;
- administration reports.

## Data requirements
Attendance data should support historical retention and filtering/reporting by day, class, student, month, school year, missed lessons, student-days (дитодні) and school attendance percentage.
The academic record model should support lesson numbers 1–8, subject/type and grades/marks.

## Historical school-journal/database discussions — PLANNED / UNVERIFIED
Earlier chats explored the foundation for a school class journal, including Excel/Access 2010 and multi-table database design. Those discussions are historical design context and should not be treated as the production schema.

The Python School Gradebook / Class Journal workstream is now a separate official Hub project at `projects/school-gradebook/`. Its requirements must not be silently merged back into School Attendance.

## Technical direction
Earlier work used Google Sheets + Apps Script as a free mobile-web direction. Long-term context infrastructure uses Supabase, but the actual application backend remains unverified until the real repository/database are connected.

## Important rule
Do not mix this project's requirements with the verified implementation of Tutor Schedule / Rozklad or the separate School Gradebook project.
