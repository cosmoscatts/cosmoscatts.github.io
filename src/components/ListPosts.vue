<script setup lang="ts">
import { formatDate } from '~/utils'

const router = useRouter()
const path = computed(() => router.currentRoute.value.path)

const { tagMap, tags } = useTags()

const tag = computed(() => {
  const tagName = tags.value.find(t => tagMap.value[t].path === path.value)
  return tagName
})
const { yearToBlog } = useBlog(tag)
</script>

<template>
  <template v-for="key in Object.keys(yearToBlog)" :key="key">
    <h3>{{ key }}</h3>
    <div
      v-for="route in yearToBlog[key]"
      :key="route.path"
      flex
      m="y-1 x-0.5"
      font-normal
    >
      <div w-14 h-6 mr-2 leading-6 op-50 text-sm>
        {{ formatDate(route.date, false) }}
      </div>
      <RouterLink class="flex-1 !text-c" :to="route.path">
        {{ route.title }}
      </RouterLink>
    </div>
  </template>
</template>
