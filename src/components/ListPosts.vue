<script setup lang="ts">
import { formatDate } from '~/utils'

const router = useRouter()
const path = computed<string>(() => router.currentRoute.value.path)

const { tagMap, tags } = useTags()
const tag = computed(() => {
  const tagName = tags.value.find(t => tagMap.value[t].path === path.value)
  return tagName
})

const { yearToBlog } = useBlog(tag)
const years = computed(() =>
  Object.keys(yearToBlog.value).sort((a, b) => b.localeCompare(a)),
)
</script>

<template>
  <div v-for="key, idx in years" :key="key" class="slide-enter" :style="{ '--enter-stage': idx + 1 }">
    <div select-none relative h20 pointer-events-none>
      <span text-8em color-transparent absolute left--2rem top-6rem lt-lg:top-2rem font-bold text-stroke-2 text-stroke-hex-aaa op10>{{ key }}</span>
    </div>
    <div
      v-for="route in yearToBlog[key]"
      :key="route.path"
      flex m="y-1 x-0.5" font-normal slide-enter text-lg
      :style="{
        '--enter-stage': idx + 2,
        '--enter-step': '60ms',
      }"
    >
      <div w-10 h-6 leading-6 opacity-50 text-sm mr-2 pt-0.5>
        {{ formatDate(route.date, false) }}
      </div>
      <div flex-1 flex items-center>
        <span
          text-c hover="underline underline-offset-4" cursor-pointer
          @click="router.push(route.path)"
        >
          {{ route.title }}
        </span>
        <span
          v-if="route.lang === 'en'"
          class="text-xs bg-zinc:15 text-zinc5 dark:text-zinc-4 rounded px-1 py-0.5 ml-3 my-auto"
        >英文</span>
      </div>
    </div>
  </div>
</template>
