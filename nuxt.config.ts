// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  devServer: {
    port: 4000,
    host: '0.0.0.0',
  },
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
  ],
  // plugins: [
  //   './types/**'
  // ],
  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'zh', file: 'zh.json', name: '中文' }
    ],
    // lazy: true,
    langDir: './locales',
    defaultLocale: 'zh',
    strategy: 'prefix_except_default', // /zh for Chinese, / for English
  },
  imports: {
    dirs: ['config', 'types', 'constants'],
    // commentsDebug: true
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  vite: {
    server: {
      hmr: {
        port: 24679
      }
    }
  }
})
