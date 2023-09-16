<script setup lang="ts">
const route = useRoute()
function getBackPath() {
  const path = route.path.split('/').slice(0, -1).join('/') || '/'
  if (path === '/posts/tags') return '/posts'
  return path
}
</script>

<template>
  <div v-if="route.path !== '/'" pl-1>
    <RouterLink :to="getBackPath()" text-xl font-bold op50 hover="op75 underline underline-offset-4">
      $ cd ..
    </RouterLink>
  </div>
</template>
