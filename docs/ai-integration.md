# AI Integration

## Public read

The Supabase Edge Function `ai-public-context` exposes project context as Markdown or JSON.

Example:

```
https://<project-ref>.supabase.co/functions/v1/ai-public-context?project=mustang&format=markdown
```

## Recommended AI workflow

1. Read Context Hub.
2. Read the project repository.
3. Compare the actual code with CURRENT_STATE.
4. Work on the requested task.
5. Update Context Hub after important changes.

Never place secrets in public context.
