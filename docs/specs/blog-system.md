# Blog System Specification

> **Status**: Active
> **Version**: 1.0
> **Related Registry**: [Blog System](../structure.md#blog-system)

## 1. Overview
A file-system based blog engine that renders Markdown content. It avoids Nuxt Content in favor of a custom implementation using `markdown-it` and `gray-matter` via server API routes.

## 2. Architecture

### Data Flow
`FileSystem (Markdown)` -> `Server API (JSON)` -> `Composable (Typed Data)` -> `Vue Pages (UI)`

### Components

#### A. Content Source (`posts/blog/*.md`)
- **Format**: Markdown with Frontmatter (YAML).
- **Required Fields**: `title`, `date`.
- **Optional Fields**: `description`, `tags`.

#### B. Server API (`server/api/blog/`)
- **`GET /api/blog`**:
  - Scans `posts/blog` directory.
  - Parses frontmatter using `gray-matter`.
  - Returns sorted list of `BlogPost` metadata (descending by date).
- **`GET /api/blog/[...slug]`**:
  - Reads specific file matching the slug.
  - Renders Markdown body using `markdown-it`.
  - Returns complete `BlogPost` object with `content`.

#### C. Client Composable (`app/composables/useBlog.ts`)
- **Role**: Encapsulates data fetching logic.
- **Interface**: `BlogPost`
  ```typescript
  interface BlogPost {
    slug: string
    title: string
    date: string
    description: string
    tags: string[]
    content?: string
    raw?: string
  }
  ```
- **Methods**:
  - `getPosts()`: Returns `Promise<BlogPost[]>`
  - `getPost(slug: string)`: Returns `Promise<BlogPost>`

#### D. Pages (`app/pages/blog/`)
- **`index.vue`**: Lists posts using `getPosts()`.
- **`[...slug].vue`**: Displays single post using `getPost(slug)`. Uses `v-html` for content rendering.

## 3. Network Graph

### Dependencies
- **Libraries**:
  - `gray-matter`: Frontmatter parsing.
  - `markdown-it`: Markdown to HTML conversion.
- **Internal**:
  - `fs` (Node.js): File system access (Server-side only).
  - `path` (Node.js): Path manipulation (Server-side only).

### Dependents
- **Routes**:
  - `/blog`: Mapped to `index.vue`.
  - `/blog/*`: Mapped to `[...slug].vue`.
