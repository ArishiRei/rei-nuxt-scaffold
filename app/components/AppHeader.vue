<script setup lang="ts">
const { siteConfig } = useConfigx()
const { localePath, locale, setLocale } = useContext()
</script>

<template>
  <header class="app-header">
    <nav>
      <NuxtLink :to="localePath('/')" class="brand">Nuxt Scaffold</NuxtLink>
      <div class="links">
        <NuxtLink v-for="(item, index) in siteConfig.router.navbar" :key="index" :to="localePath(item.path)">{{ $t(item.title) }}</NuxtLink>
      </div>
      <div class="lang-switch">
        <button @click="setLocale('en')" :class="{ active: locale === 'en' }">EN</button>
        <button @click="setLocale('zh')" :class="{ active: locale === 'zh' }">中文</button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  border-bottom: 1px solid #eee;
  padding: 1rem 2rem;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.brand {
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  color: #333;
}
.links {
  display: flex;
  gap: 1.5rem;
}
.lang-switch {
  display: flex;
  gap: 0.5rem;
}
.lang-switch button {
  background: none;
  border: 1px solid #eee;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.8rem;
}
.lang-switch button.active {
  background: #00dc82;
  color: white;
  border-color: #00dc82;
}
a {
  text-decoration: none;
  color: #666;
}
a.router-link-active {
  color: #00dc82;
  font-weight: 500;
}
</style>
