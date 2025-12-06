export const useConfigStore = defineStore('config', () => {
  return appConfig
}, {
  persist: true,
})
