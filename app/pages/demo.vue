<script setup lang="ts">
// Fetch data from server API
const { data: serverInfo, refresh } = await useFetch('/api/info')
</script>

<template>
  <div class="demo-page">
    <h1>{{ $t('demo.title') }}</h1>
    
    <div class="grid">
      <!-- Pinia Section -->
      <section class="demo-card">
        <h2>{{ $t('demo.pinia_title') }}</h2>
        <div class="counter-box">
          <p class="count">{{ $t('demo.value') }}: </p>
          <p class="double">{{ $t('demo.double') }}: </p>
          <button @click="" class="btn-inc"></button>
          <p class="hint">{{ $t('demo.hint') }}</p>
        </div>
      </section>

      <!-- Server API Section -->
      <section class="demo-card">
        <h2>{{ $t('demo.server_title') }}</h2>
        <div class="api-box">
          <pre v-if="serverInfo">{{ serverInfo }}</pre>
          <button @click="() => refresh()" class="btn-refresh">{{ $t('demo.refresh') }}</button>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
.demo-card {
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 8px;
}
.counter-box {
  text-align: center;
}
.count {
  font-size: 3rem;
  font-weight: bold;
  color: #00dc82;
  margin: 1rem 0;
}
.btn-inc {
  background: #333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}
.hint {
  font-size: 0.8rem;
  color: #888;
  margin-top: 1rem;
}
.api-box pre {
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 0.9rem;
}
.btn-refresh {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
