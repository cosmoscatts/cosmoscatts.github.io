<script setup lang="ts">
defineProps<{ projects: Record<string, any[]> }>()
</script>

<template>
  <template v-for="key in Object.keys(projects)" :key="key">
    <h3>{{ key }}</h3>
    <div
      grid="~ cols-1"
      sm:grid-cols-2
      py-2 gap-2
    >
      <Project v-for="(item, i) in projects[key]" :key="i" :item="item" />
    </div>
  </template>
</template>
