# Навчальна студія — CURRENT_STATE

**Overall status:** PARTIAL  
**Project slug:** multiplication-practice  
**Scope update confirmed:** 2026-10-18

## Загальний стан
Проєкт розширено до платформи тестів із різних предметів і класів. Множення — перший модуль. Локальний UI та універсальна схема готові, учнівський/учительський потоки ще не завершені.

## Фронтенд
- VERIFIED: React + TypeScript + Vite оболонка у C:\Games\multiplication-practice.
- VERIFIED: адаптивний каталог чотирьох предметів, фільтр класу, швидка форма й браузерне збереження чернетки.
- VERIFIED: production build проходить.
- VERIFIED: npm audit після Vite upgrade показує 0 уразливостей.
- PLANNED: підключення Supabase, Auth та реальних бібліотечних даних.
- VERIFIED: вихідний код опубліковано в GitHub `teachersergiy-wq/multiplication-practice`, гілка `main`; `.env`, `node_modules`, `dist` і службові файли Supabase виключені.
- BLOCKED (хмарна сесія AI, 2026-10-18): мережева політика сесії відхиляє `registry.npmjs.org` (403 на CONNECT), тому `npm ci`, збірку й `npm audit` у цій сесії повторно перевірити не вдалося. Записи VERIFIED про збірку й audit вище отримані раніше локально; у хмарі не відтворені.
- VERIFIED (за кодом): `src/domain.ts` не узгоджений зі схемою БД — рядкові id предметів (`math`) замість `subjects.code`/uuid (`mathematics`), `QuestionType` не містить `single_choice` і `true_false`. Потрібно узгодити перед підключенням Supabase.

- VERIFIED: у PR #1 `codex/align-domain-and-client` узгоджено типи запитань з API contract (включно з ordering/matching), доменні коди предметів і localStorage v1→v2.
- VERIFIED: `npm ci`, `npm test` (5/5), production build і `npm audit` (0 vulnerabilities) пройшли локально на Node 24.20.0; build пройшов без `.env`.
- PARTIAL: PR #1 відкритий, ще не злитий. Supabase browser client експортує null без env і поки не використовується UI; GitHub Actions CI на актуальному head пройшли успішно (run #9).
- DECISION (D8, власник 2026-10-24): UI на класах 1–11; 12 клас не додається.

## База й бекенд
- DECISION (власник, 2026-10-19): база живе в Supabase-акаунті `naviz.school.documents@gmail.com`.
- VERIFIED: проєкт `iwydxledvafcgrtylpis` (`multiplication-practice`, eu-west-1, акаунт naviz). Застосовано всі 9 міграцій з `main`; стан перевірено запитами читання 2026-10-19: 15 таблиць з RLS, 22 політики, 4 предмети, 5 конфігів множення, 0 профілів і користувачів Auth, 7 типів питань. Роботу функцій і RLS на реальних даних у цій базі не перевіряли (лише CI на локальному Supabase).
- ABANDONED: проєкт `bvetbqbxjrvrmdhszmcw` (інший акаунт) не використовується. `iaeufbphagisyukorwsw` у акаунті naviz порожній, не використовується.
- Версії міграцій у базі відрізняються від імен файлів у репозиторії.
- VERIFIED (2026-10-22): міграції G2c, G3, G6, G6b застосовано власником через SQL Editor; `_test_allow_teacher` видалено. Раніше (2026-10-20) було 11 з 15 міграцій; один користувач `teachersergiy@gmail.com` з підтвердженою поштою і запис в allowlist (VERIFIED запитом). Власник повідомив про вимкнену публічну реєстрацію (не підтверджено).
- VERIFIED (2026-10-22): розгорнуто 13 Edge Functions (ACTIVE, `verify_jwt=true`); застосунок на GitHub Pages; секрети задано; вхід вчителя працює. Функції ще не викликались із застосунку; код 7 функцій (editor, attempts) не звірено з `main`.
- VERIFIED (CI): у `main` злито серверну частину G2b–G6b і фронтенд C3–C5; функції не запускались поза CI.
- VERIFIED: застосовані міграції загальної схеми, hardening ключів і замороження опублікованих шаблонів.
- VERIFIED: 4 системні предмети та 5 конфігурацій множення для 3 класу.
- VERIFIED: усі 13 таблиць public мають RLS; ключ відповіді у private має RLS і нечитабельний роллю authenticated.
- PLANNED: Edge Functions для безпечного provisioning учнів, видачі питань, відповідей і server-side scoring.

## Безпека
- Private answer-key table має RLS без політик і без grants для anon/authenticated; це deny-by-default, service_role має явний доступ.
- SECURITY DEFINER RPC register_teacher відкликано для браузерних ролей до реалізації provisioning Edge Function.
- Security advisor лишив INFO про RLS без політик на приватній таблиці (очікувано для deny-by-default); попередження про доступний authenticated RPC зникло.

## Перевірка старої бази проти репозиторію (2026-10-18, лише запити читання; проєкт `bvetbqbxjrvrmdhszmcw` покинуто)
Перевірено каталожними запитами до проєкту `bvetbqbxjrvrmdhszmcw`; жодних змін у базі не вносилось. Дані: 4 предмети, 5 конфігурацій множення, 0 профілів, 0 шаблонів, 0 користувачів Auth.

- VERIFIED: RLS увімкнено на всіх 13 таблицях `public` і на `private.assessment_answer_keys` (0 політик, deny-by-default).
- VERIFIED: розгорнуті політики відповідають міграціям, зокрема заморожування опублікованих шаблонів і питань та перевірка `with check` для призначень.
- VERIFIED: `register_teacher` недоступна для `anon` і `authenticated`; клієнтські ролі не мають INSERT/UPDATE/DELETE на `assessment_attempts` і `assessment_responses`.
- VERIFIED: security advisor повертає лише INFO про `private.assessment_answer_keys` (очікувано).
- VERIFIED (проблема): живі grants дають `anon` і `authenticated` усі привілеї (включно з TRUNCATE, TRIGGER, REFERENCES) на таблицях `public`; міграція прибрала лише INSERT/UPDATE/DELETE на спробах і відповідях. Захист тримається на RLS, а для `anon` політик немає.
- VERIFIED (проблема): політика `multiplication_configs_manage_teacher` разом із цими grants дозволяє будь-якому вчителю змінювати спільні конфігурації рівнів множення для всіх класів. Сьогодні вчителів немає, тому експозиції немає.
- VERIFIED (за текстом політик, без запиту від імені учня): `subjects_read_active` не дає учневі читати власний предмет шаблону, якщо предмет створений вчителем; `templates_create_owner` дозволяє створити шаблон одразу зі статусом `published`.
- VERIFIED: версії міграцій у репозиторії (`20261017235705` тощо) не збігалися із застосованими (`20261018000136`, `…0439`, `…0509`, `…0624`); назви збігалися.
- Примітки до дизайну: `class_students.student_id` є первинним ключем, тож учень належить лише одному класу; JSON `choices` читають учні, тому в ньому не можна зберігати ознаку правильності.
- PARTIAL: гілка `claude/harden-grants-and-align-migrations` у репозиторії застосунку виправляє вище перелічене. Міграція `20261018010000_tighten_grants_and_policies.sql` НЕ застосована і НЕ протестована на базі (немає локального Postgres; production змінювати заборонено).

## Наступне
Hub TODO.md містить етапи Auth, editor, учнівського тестування, репозиторію та deployment. Перед підключенням клієнта до Supabase спершу переглянути й застосувати (на Supabase branch) міграцію посилення прав.

## Інтерфейс учня (2026-10-22)
- DECISION (власник): учні користуються смартфонами. Вимоги в `docs/STUDENT_UI_MOBILE.md` (в застосунку, злито PR #47). VERIFIED (за кодом): адаптивні `@media` є для вчительських екранів; екрана учня ще немає (C6/C7).

## Стан 2026-10-24
- VERIFIED: повний потік вчитель → тест → призначення → учень → результат на живій базі; класи створюються через `create-class`.
- PARTIAL: перевірка на телефоні, публічна реєстрація Auth, G5 (червоний CI), генератор множення, рейтинги, результати класу для вчителя (C9).

## Стан 2026-10-25
- VERIFIED: G6c і G8 застосовано в базі (запит), часткове оцінювання працює на функції `score_response`; Auth: реєстрація, anonymous, manual linking вимкнено, Email увімкнено.
- VERIFIED: у `main` застосунку C9/C10, G5, G6c+G8, контракт генератора; CI на момент злиття зелений.
- PLANNED: генератор множення (G9 #72, C11 #73), «Супер рівень» (після генератора), рейтинги з opt-in, додавання вчителів без SQL, `docs/OPERATIONS.md`.
- Не перевірено: мобільний потік на телефоні.

## Стан 2026-10-27
- VERIFIED (запитами до бази після виконання власником): G9/G9b (генератор множення; hotfix без `DELETE`/temp-таблиць), G10 (адмін-функції вчителів: `private.admin_users`, `api_admin_*`; Edge `add-teacher`, `list-teachers`, `reset-teacher-password`, `set-teacher-active` v2), G11 (BIG-пул: `assessment_questions.difficulty`, `assessment_attempt_questions` з RLS, `api_generate_multiplication_bank`, `api_bulk_update_questions`; Edge `generate-multiplication-bank` v1 і `bulk-update-questions` v1 розгорнуто), G11b (`private.public_question_json`, `api_start_attempt` знову віддає `promptText`; перевірено викликом функції). У тілах `api_generate_multiplication_test/bank` і `sample_pool_questions` немає `create temp`/`delete from _g…`.
- VERIFIED: власник проходив згенерований тест множення як учень (generate + start + submit + finish працюють).
- VERIFIED (скріншоти власника): регресія G11 — учень бачив порожній текст запитань у всіх тестах (`api_start_attempt` віддавав `prompt` замість `promptText`); виправлено G11b (#88). Екран результату рахував «правильні» як відповіді мінус помилки (−31 із 35); виправлено C14 (#92).
- У `main` застосунку: #71, #76 (OPERATIONS), #77, #82, #83 (контракт BIG), #86 (G11), #87 (C13), #88 (G11b), #90 (нумерація запитань), #92 (C14: автофокус, Enter → далі, `--keyboard-inset`, правильний підрахунок).
- PARTIAL / не перевірено: створення BIG-тесту через інтерфейс і проходження його учнем після G11b; нове введення відповіді на справжньому телефоні (360×640, 390×844); `generate-multiplication-test` Edge без логування коду помилки.
- Відкрито: C15 #91 (мобільні скріншоти Playwright, виконавець GPT, `tools/screenshots/**`).
