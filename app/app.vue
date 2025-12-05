<script setup lang="ts">
const counter = useCounterStore()
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <h1>Pinia Persistence Example</h1>
    <p>Count: {{ counter.count }}</p>
    <p>Double: {{ counter.doubleCount }}</p>
    <button @click="counter.increment">Increment</button>
  </div>
</template>
