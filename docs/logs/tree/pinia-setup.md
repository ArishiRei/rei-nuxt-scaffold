# Pinia Setup with Persistence and Auto-imports

Date: 2025-12-05 14:43

## Actions

1.  Installed `@pinia/nuxt` and `pinia-plugin-persistedstate`.
2.  Configured `nuxt.config.ts`:
    - Added modules: `'@pinia/nuxt'`, `'pinia-plugin-persistedstate/nuxt'`.
    - Configured Pinia auto-imports: `storesDirs: ['./stores/**']`.
3.  Created `stores/counter.ts` sample store with `persist: true`.
4.  Updated `app/app.vue` to demonstrate store usage.

## Code Changes

### nuxt.config.ts

```typescript
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
```

### stores/counter.ts

```typescript
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
}, {
  persist: true,
})
```
