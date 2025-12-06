<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <div class="home-page">
    <h1>{{ $t('home.title') }}</h1>
    <p class="intro">
      {{ $t('home.subtitle') }}
    </p>
    
    <div class="features">
      <div class="card">
        <h3>{{ $t('home.features.layouts') }}</h3>
        <p>{{ $t('home.features.layouts_desc') }}</p>
      </div>
      <div class="card">
        <h3>{{ $t('home.features.pinia') }}</h3>
        <p>{{ $t('home.features.pinia_desc') }}</p>
      </div>
      <div class="card">
        <h3>{{ $t('home.features.server') }}</h3>
        <p>{{ $t('home.features.server_desc') }}</p>
      </div>
    </div>

    <div class="actions">
      <NuxtLink :to="localePath('/demo')" class="btn primary">{{ $t('home.actions.try_demo') }}</NuxtLink>
      <NuxtLink :to="localePath('/about')" class="btn secondary">{{ $t('home.actions.read_more') }}</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  text-align: center;
  padding: 3rem 0;
}
h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}
.intro {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
}
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}
.card {
  background: #fff;
  border: 1px solid #eee;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
}
.btn.primary {
  background: #00dc82;
  color: white;
}
.btn.primary:hover {
  background: #00b368;
}
.btn.secondary {
  background: #f1f1f1;
  color: #333;
}
.btn.secondary:hover {
  background: #e5e5e5;
}
</style>
