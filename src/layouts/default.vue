<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const hasFoundPage = computed(() => {
  const paths = router.getRoutes().filter(i => !!i.name).map(j => j.path)
  return paths.includes(route.fullPath) || route.fullPath.startsWith('/posts/tags') || route.fullPath.startsWith('/search')
})
</script>

<template>
  <Layout>
    <RouterView />
    <Back v-if="hasFoundPage" prose-lg mx-auto mt-16 slide-enter animate-delay-500 />
  </Layout>
</template>
