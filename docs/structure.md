# Project Structure Registry

> **Status**: Active
> **Last Updated**: 2025-12-05
> **Description**: Central graph of all project components and their relationships.

## 1. Core Architecture
- **Framework**: Nuxt 4
- **Package Manager**: `pnpm` (Strict)
- **Architecture Pattern**: Split Context (App vs Server)

### Directory Map
| Context | Path | Contents |
| :--- | :--- | :--- |
| **App** | `app/` | `pages`, `components`, `stores`, `composables`, `utils`, `assets`, `middleware`, `plugins`, `types`, `locales`, `config`, `app.vue` |
| **Root** | `./` | `server/`, `public/`, `content/`, `modules/`, `nuxt.config.ts`, `package.json` |

## 2. Feature Registry

### Configuration & Types
- **Location**: `app/config/`, `app/types/`
- **Modules**:
  - `app/types/blog.ts`: Blog type definitions.
  - `app/config/app.config.ts`: Application constants.
  - `app/composables/useProjectConfig.ts`: Config access composable.

### Internationalization (i18n)
- **Module**: `@nuxtjs/i18n`
- **Location**: `app/locales/`
- **Resources**:
  - `en.json`: English translations.
  - `zh.json`: Chinese translations.

### State Management (Pinia)
- **Configuration**: [Pinia Setup](./logs/tree/pinia-setup.md)
- **Location**: `app/stores/`
- **Modules**:
  - `app/stores/counter.ts`
    - **Role**: Demo counter with persistence.
    - **Network**:
      - *Used By*: `app/pages/demo.vue`
      - *Persistence*: Enabled

### Blog System
- **Spec**: [Blog System Spec](./specs/blog-system.md)
- **Configuration**: [Blog Implementation](./logs/tree/impl-blog-system.md)
- **Location**: `app/pages/blog/` & `server/api/blog/`
- **Modules**:
  - `app/composables/useBlog.ts`
    - **Role**: Data fetching and type definitions.
    - *Uses*: `server/api/blog/`
  - `server/api/blog/`
    - **Role**: File system markdown parser (API).
    - *Uses*: `posts/blog/`, `markdown-it`, `gray-matter`
  - `posts/blog/`
    - **Role**: Markdown content source.
  - `app/pages/blog/index.vue`
    - **Role**: Blog post listing.
    - *Uses*: `useBlog`
  - `app/pages/blog/[...slug].vue`
    - **Role**: Single post view.
    - *Uses*: `useBlog`

### Application Entry
- `app/app.vue`
  - **Role**: Root Vue component.
  - **Network**:
    - *Components*: `<NuxtLayout>`, `<NuxtPage>`, `<NuxtRouteAnnouncer>`

### UI Architecture (Scaffold)
- **Spec**: [Basic Scaffold Spec](./specs/basic-scaffold.md)
- **Layouts**:
  - `app/layouts/default.vue`
    - *Uses*: `AppHeader`, `AppFooter`
- **Components**:
  - `app/components/AppHeader.vue`: Main Navigation.
  - `app/components/AppFooter.vue`: Site Footer.
- **Pages**:
  - `app/pages/index.vue` (Home)
  - `app/pages/about.vue` (About)
  - `app/pages/demo.vue` (Demo)
    - *Uses*: `app/stores/counter.ts`, `server/api/info.ts`

### Server API
- `server/api/info.ts`
  - **Role**: Demo API returning system status.
  - **Network**:
    - *Called By*: `app/pages/demo.vue`

## 3. Utilities & Tools Registry
*(See `docs/utils.md` for detailed API usage)*

- **External Libs**:
  - `pinia-plugin-persistedstate` (*Used By*: `nuxt.config.ts`)

## 4. Documentation Graph
- **Workflow**: [Prompt / Protocol](./prompt.md)
- **Logs**: [Timeline](./logs/time_line.md)
