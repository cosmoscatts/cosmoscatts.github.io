<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

interface PhotoItem {
  image: string
  date: string
  desc?: string
}

const { photos = [] } = defineProps<{
  photos?: PhotoItem[]
}>()

const breakpoints = useBreakpoints(breakpointsTailwind)

const cols = computed(() => {
  if (breakpoints.xl.value)
    return 3
  if (breakpoints.lg.value)
    return 2
  return 1
})

const parts = computed(() => {
  const result = Array.from({ length: cols.value }, () => [] as typeof photos)
  photos.forEach((item, i) => {
    result[i % cols.value].push(item)
  })
  return result
})
</script>

<template>
  <div w-90vw mxa mb-5>
    <div text-4xl font-bold>
      照片集 · 随手拍
    </div>
  </div>

  <div grid="~ cols-1 lg:cols-2 xl:cols-3 gap-4">
    <div v-for="items, idx of parts" :key="idx" flex="~ col gap-4">
      <WrapperPhoto
        v-for="item, idx of items"
        :key="idx"
        :="item"
        class="slide-enter"
        :style="{
          '--enter-stage': idx + 1,
        }"
      />
    </div>
  </div>
</template>
