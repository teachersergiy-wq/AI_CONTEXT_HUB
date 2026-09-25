# AI_CONTEXT_HUB

Centralized AI context hub for multiple projects.

## Purpose

Store concise, current project context so different AI systems can continue work without carrying the full history of old chats.

## Architecture

- GitHub — versioned Markdown context, history, project structure.
- Supabase — structured projects, documents, decisions, events, permissions and API.
- AI Context API — read public context from a stable URL.

## Rules

1. Keep context current and concise.
2. Do not store secrets, passwords or access tokens.
3. Record important decisions separately from chat history.
4. Update CURRENT_STATE and TODO after significant work.

## Projects

- Mustang
- School WebApp
