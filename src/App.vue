<script setup lang="ts">
import {
  description,
  themeDark,
  themeLight,
  title,
} from '../shared'
import { isClient, isDark } from '~/utils'

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    {
      name: 'theme-color',
      content: computed(() => (isDark.value ? themeDark : themeLight)),
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
