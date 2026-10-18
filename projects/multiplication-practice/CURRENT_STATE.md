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

## База й бекенд
- VERIFIED: окремий Supabase проєкт multiplication-practice, eu-west-1, ref bvetbqbxjrvrmdhszmcw.
- VERIFIED: застосовані міграції загальної схеми, hardening ключів і замороження опублікованих шаблонів.
- VERIFIED: 4 системні предмети та 5 конфігурацій множення для 3 класу.
- VERIFIED: усі 13 таблиць public мають RLS; ключ відповіді у private має RLS і нечитабельний роллю authenticated.
- PLANNED: Edge Functions для безпечного provisioning учнів, видачі питань, відповідей і server-side scoring.

## Безпека
- Private answer-key table має RLS без політик і без grants для anon/authenticated; це deny-by-default, service_role має явний доступ.
- SECURITY DEFINER RPC register_teacher відкликано для браузерних ролей до реалізації provisioning Edge Function.
- Security advisor лишив INFO про RLS без політик на приватній таблиці (очікувано для deny-by-default); попередження про доступний authenticated RPC зникло.

## Перевірка живої бази проти репозиторію (2026-10-18, лише запити читання)
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
