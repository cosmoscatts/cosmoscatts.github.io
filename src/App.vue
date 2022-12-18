<script setup lang="ts">
import { isClient, isDark } from '~/utils'

useHead({
  title: 'Cosmoscatts',
  meta: [
    { name: 'description', content: 'Just infected with a disease called curiosity.' },
    {
      name: 'theme-color',
      content: computed(() => (isDark.value ? '#374151' : '#ffffff')),
    },
  ],
})

const route = useRoute()

watch(
  () => route.path,
  () => isClient && window.scrollTo({ top: 0 }),
)
</script>

<template>
  <RouterView />
</template>

