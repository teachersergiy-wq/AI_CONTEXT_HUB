# AI_CONTEXT_HUB Architecture

## Data flow

```
ChatGPT / Claude / Gemini / Cursor / Grok
                  |
                  v
             AI_CONTEXT_HUB
               /       \
          GitHub      Supabase
           files      structured data
               \       /
                AI Context API
```

## GitHub

GitHub is the versioned source for human-readable project context and templates.

## Supabase

Supabase stores:

- projects
- documents
- members and roles
- collaboration events
- GitHub sources
- project API tokens

## Public vs private

A project can be public or private. Public context exposes only documents explicitly marked public.

## Principle

Chat history is not the source of truth. The current project context is.
