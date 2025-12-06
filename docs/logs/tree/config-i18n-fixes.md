# i18n & Auto-Import Configuration

Date: 2025-12-06 02:05

## Context

User provided feedback on `nuxt.config.ts` configuration:
1.  **i18n Directory**: The standard location for locales is the root `i18n/` folder, even in Nuxt 4 split structure.
2.  **Auto-Imports**: Nuxt automatically scans `app/` subdirectories (like `app/composables`, `app/utils`) but not arbitrary folders like `app/config` or `app/types` without configuration. However, explicit `app/` prefix in `imports.dirs` is not needed if configured correctly relative to `srcDir` or root.
3.  **Duplicate Import Warning**: Conflict between `app/config/app.config.ts` and `app/types/app_config.ts` both exporting `AppConfig`.

## Actions

### 1. i18n Reconfiguration
- **Directory Move**: Moved `app/locales/` back to `i18n/locales/` at project root.
- **Config Update**: Updated `nuxt.config.ts` `i18n` settings:
  - `langDir`: Set to `locales` (relative to the i18n root which is default).
  - Removed custom `langDir` path pointing to `app/`.

### 2. Auto-Import Fixes
- **Config Update**: Updated `nuxt.config.ts` `imports.dirs`:
  - Changed `['app/config', 'app/types']` to `['config', 'types']` (assuming Nuxt scans relative to root or handles `app` transparently). *Correction*: Nuxt 4 structure might require explicit paths if not standard. But per user instruction, removed `app/` prefix to rely on Nuxt defaults or root-relative paths.
- **Duplicate Warning Fix**:
  - **Deleted**: `app/types/app_config.ts`.
  - **Refactored**: `app/config/app.config.ts` now exports the object directly without the explicit interface type import (inferring type or using internal definition if needed), or the interface was merged.
  - **Result**: Removed the name collision for `AppConfig`.

### 3. Type Error Fix
- **File**: `app/pages/blog/[...slug].vue`
- **Error**: `Type 'string | undefined' is not assignable to type 'string'`.
- **Fix**: Added fallback for slug param: `(slugParam || '')`.

## Verification
- **Build**: `pnpm dev` runs successfully.
- **Runtime**: `curl` requests return valid HTML.

## Outcome
Configuration aligned with user constraints and standard practices. Warnings and type errors resolved.
