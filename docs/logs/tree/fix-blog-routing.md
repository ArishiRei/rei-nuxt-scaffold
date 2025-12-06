# Fix Blog Routing

Date: 2025-12-06 00:50

## Context

User reported "Page not found: /blog" (404 error) when accessing the newly implemented blog route.

## Analysis

1. **Routing Configuration**: Verified that `app/pages/blog/index.vue` and `app/pages/blog/[...slug].vue` existed.
2. **Server Status**:
   - Multiple `nuxt dev` processes were detected running on ports 4000 and 4001.
   - The active server (port 4000) was not reflecting file system changes (likely a "zombie" process).
   - `curl` requests confirmed 404 for `/blog` and stale content for `/demo`.
3. **Configuration Check**:
   - `nuxt.config.ts` had `srcDir` explicitly set which might have conflicted with `future: { compatibilityVersion: 4 }` defaults, but the primary issue was the zombie process.
   - Pinia `storesDirs` was updated to `./app/stores/**` to match the folder structure.

## Resolution

1. **Process Cleanup**:
   - Terminated all `node.exe` processes using `taskkill /F /IM node.exe` to clear port conflicts and zombie servers.
2. **Configuration Updates**:
   - Updated `nuxt.config.ts`:
     - Removed explicit `srcDir: 'app/'` (relying on Nuxt 4 defaults).
     - Added `vite.server.hmr.port: 24679` to prevent HMR port conflicts.
     - Confirmed `pinia.storesDirs` points to `./app/stores/**`.
3. **Restart**:
   - Restarted the dev server (`pnpm dev`).
4. **Verification**:
   - `curl -I http://localhost:4000/blog` -> **200 OK**.
   - `curl -I http://localhost:4000/blog/second-post` -> **200 OK**.

## Outcome

The blog route is now accessible. The issue was caused by a combination of stale dev server processes and minor configuration adjustments.
