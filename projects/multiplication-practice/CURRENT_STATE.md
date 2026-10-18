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
- BLOCKED: створення/публікація GitHub repo очікує, поки користувач увійде у GitHub у браузері.

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

## Наступне
Hub TODO.md містить етапи Auth, editor, учнівського тестування, репозиторію та deployment.
