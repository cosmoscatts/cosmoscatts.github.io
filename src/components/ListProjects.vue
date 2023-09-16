<script setup lang="ts">
defineProps<{ projects: Record<string, any[]> }>()
</script>

<template>
  <div v-for="key, idx in Object.keys(projects)" :key="key" class="slide-enter" :style="{ '--enter-stage': idx + 1 }">
    <h3>{{ key }}</h3>
    <div
      grid="~ cols-1"
      sm:grid-cols-2
      py-2 gap-2
    >
      <Project v-for="(item, i) in projects[key]" :key="i" :item="item" />
    </div>
  </div>
</template>
