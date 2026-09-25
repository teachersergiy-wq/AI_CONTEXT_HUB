# School Attendance — PROJECT_CONTEXT

## Purpose

Mobile-first school web application for daily attendance, meal ordering/reporting and future academic records.

## Current status

This is a separate project from `teachersergiy-wq/Rozklad`.

Its application repository is not yet connected to AI_CONTEXT_HUB, so implementation details must be treated as project requirements rather than verified code features.

## Core workflow

Teachers should be able to submit information from a phone with large controls.

The system should support:
- grades 1–11, with grade 10 explicitly excluded from the attendance workflow;
- identifying present/absent students by surname;
- submission by the homeroom teacher or the teacher whose first lesson is in that class;
- recording who submitted the data and the submission time;
- substitution/replacement scenarios;
- kitchen-facing meal reports;
- administration reports.

## Data requirements

The attendance database should retain student attendance for all school days and support future filtering/reporting by:
- day;
- class;
- student;
- month;
- school year;
- missed lessons;
- student-days (дитодні);
- school attendance percentage.

The academic record model also needs:
- lesson number 1–8;
- subject/type;
- grade/mark.

## Planned technical direction

Earlier development used Google Sheets + Apps Script for a free mobile web application. The long-term AI_CONTEXT_HUB architecture uses Supabase for structured context, while the actual application backend should be documented separately once the final implementation is chosen.

## Important rule

Do not mix this project's requirements with the verified implementation of `teachersergiy-wq/Rozklad`.
