# Supabase

AI_CONTEXT_HUB uses a dedicated structured layer in the connected Supabase project.

## Main tables

- `ai_projects`
- `ai_project_members`
- `ai_documents`
- `ai_events`
- `ai_project_sources`
- `ai_api_tokens`

## Public views

- `ai_public_projects`
- `ai_public_context`

## Edge Function

`ai-public-context` provides read-only public context.

The database layer was prepared separately from the existing school application tables.
