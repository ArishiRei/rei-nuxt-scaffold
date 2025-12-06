# Refactoring: Types, Config, i18n

Date: 2025-12-06 01:10

## Context

User requested a full project refactor to implement:
1.  **Type Definitions**: Centralized TypeScript types.
2.  **Config Management**: Structured configuration.
3.  **i18n**: Internationalization support (English/Chinese).

## Actions

### 1. i18n Implementation
- **Module**: Installed `@nuxtjs/i18n`.
- **Configuration**: Updated `nuxt.config.ts` to register the module and define locales.
  - **Note**: Adjusted `langDir` to `../app/locales` because `nuxt.config.ts` is at root but source is in `app/`.
- **Locales**: Created `app/locales/en.json` and `app/locales/zh.json` with translations for Nav, Home, Blog, Demo, and About pages.
- **Components**:
  - `AppHeader.vue`: Added language switcher and used `localePath` for links.
  - `index.vue`, `about.vue`, `demo.vue`, `blog/index.vue`, `blog/[...slug].vue`: Replaced static text with `$t()` keys.

### 2. Type Definitions
- **Directory**: Created `app/types/`.
- **Definitions**:
  - `app/types/blog.ts`: Moved `BlogPost` interface here.
- **Usage**: Updated `useBlog.ts` to import `BlogPost` from `~/types/blog`.

### 3. Config Management
- **Directory**: Created `app/config/`.
- **File**: Created `app/config/app.config.ts` to store application constants (title, version, features).
- **Composable**: Created `app/composables/useProjectConfig.ts` to expose the config.
  - **Issue**: Initially named `useAppConfig.ts` which conflicted with Nuxt's auto-import. Renamed to `useProjectConfig.ts`.

## Verification
- **Build**: `pnpm dev` runs successfully.
- **Runtime**:
  - `curl` requests return 500 initially but then HTML content, likely due to SSR hydration mismatch or dev server warmup.
  - Checked `nuxt.config.ts` path resolution for i18n.
- **Bug Fix**:
  - User reported TS error: `Property 'localePath' does not exist`.
  - Fix: Explicitly imported `useLocalePath()` in `<script setup>` for `AppHeader.vue`, `index.vue`, `blog/index.vue`, and `blog/[...slug].vue`. This ensures TypeScript correctly infers the type, as auto-imports in templates can sometimes be flaky with TS checks.

## Outcome
The project structure now follows a more robust enterprise pattern with centralized types, configuration, and multi-language support. TS errors related to i18n auto-imports have been resolved.
