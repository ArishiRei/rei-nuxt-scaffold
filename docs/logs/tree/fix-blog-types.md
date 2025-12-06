# Fix Blog Type Errors

Date: 2025-12-06 00:40

## Actions

1. **Type Definition**: Added `BlogPost` interface in `app/composables/useBlog.ts` to define the shape of blog data.
2. **Generics Usage**: Updated `useFetch` calls in `useBlog` to use `<BlogPost[]>` and `<BlogPost>` generics, ensuring correct return types.
3. **Null Safety**: Updated `app/pages/blog/[...slug].vue` to use optional chaining (`?.`) in the template to handle potentially null `post` data safely, preventing TypeScript errors.

## Solution Details

- **Problem**: `useFetch` inferred `SerializeObject` type but lost the specific property definitions (title, date, etc.) in the template, causing TS errors.
- **Fix**: Explicit generic types allow TypeScript to know exactly what properties exist on the returned data objects.
