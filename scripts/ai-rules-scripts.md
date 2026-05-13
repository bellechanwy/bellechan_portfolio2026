# Scripts Directory — AI Instructions

## File Types
You will only create two types of files here:
- `effect.*.js` — Side effect modules (DOM, API, storage, events). These touch the outside world.
- `pure.*.js` — Pure function modules (deterministic, no side effects). These never touch DOM, API, storage, or events.

Plus these existing files which are already set up:
- `main.js` — Entry point. Do not create another.
- `config.js` — Constants, URLs, flags. Do not create another.
- `effect.error.js` — Centralized error handler. All errors go through here.
- `effect.state.js` — Single state store. Only file allowed to hold state.

## Creating New Files
- Always `cp` from a template, then modify:
  - New effect module: `cp templates/effect.js scripts/effect.[name].js`
  - New pure module: `cp templates/pure.js scripts/pure.[name].js`
- Never create `utils.js` or `helpers.js`.

## Import Paths
- Scripts import other scripts with `./` (same directory): `import { CONFIG } from './config.js';`
- Scripts import web components with `../web-components/`: `import '../web-components/app-search.js';`
- HTML `<script>` tags use root-relative paths: `src="/scripts/main.js"`

## Architecture
Functional core, imperative shell. Pure logic in `pure.*`, side effects isolated in `effect.*`. Classes are fine for Web Components — not for organizing business logic.

## Rules
- `"use strict"` at the top of every file.
- Every file must have the module header comment (see templates).
- ECMAScript modules only (`import`/`export`).
- Strict functional: no shared mutable state, no in-place mutation.
- camelCase for variables and functions. PascalCase only for Web Component classes.
- File names: kebab-case with dot prefixes (`effect.api.js`, `pure.validate.js`).
- All `scroll` and `resize` event listeners must use `requestAnimationFrame` throttling.

## Error Handling
- All effect modules must use `withErrorHandling` or `handleError` from `effect.error.js`.
- Never use scattered try/catch or raw `console.error`.
- Pure modules never need error handling — they are deterministic.
- Error handling is required at every boundary where code meets the outside world.
- Error messages must be written in plain, conversational English — something the user can read aloud and immediately understand. Avoid technical jargon, error codes, stack trace language, or developer-speak. Instead of "TypeError: Cannot read properties of undefined", say "We couldn't load your data — please try again." Write as if you're explaining the problem to a friend, not a developer.

## State
- All state lives in `effect.state.js`. Nowhere else.
- State updates use `updateState()` with a reducer function.
- State is immutable via `Object.freeze`.
- State changes dispatch `app:state-changed` event.
- Reducer logic belongs in pure modules, not in `effect.state.js`.

## Events
- Use native DOM custom events. No event bus libraries.
- Format: `app:[event-name]` (kebab-case with namespace).
- Payload goes in `detail`.

## Commenting
- Every file must have a module header comment. Follow the format in the templates exactly.
- Function comments only on non-obvious functions.
- Inline comments only for non-obvious decisions. Explain why, not what.
- Never comment what code mechanically does.
- Never leave commented-out code.
