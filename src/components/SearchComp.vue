<script setup lang="ts">
import Fuse from 'fuse.js'

export interface SearchItem {
  slug: string
  title: string
  date: string
  excerpt: string
}

const { searchList } = defineProps<{
  searchList: SearchItem[]
}>()

const router = useRouter()

const fuse = new Fuse(searchList, {
  keys: ['title', 'excerpt'],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
})

const isFocus = ref(true)
const searchText = ref('')

const searchResults = computed<Fuse.FuseResult<SearchItem>[]>(() => {
  return searchText.value.length > 1 ? fuse.search(searchText.value) : []
})

const refInput = ref<HTMLInputElement>()

onMounted(() => {
  const searchUrl = new URLSearchParams(window.location.search)
  const searchStr = searchUrl.get('q')
  if (searchStr) searchText.value = searchStr

  useTimeoutFn(() => {
    if (refInput.value) {
      refInput.value.selectionStart = refInput.value.selectionEnd = searchStr?.length || 0
    }
  }, 50)
})

watch(searchText, (n) => {
  if (!n.length) {
    history.pushState(null, '', window.location.pathname)
    return
  }
  const searchParams = new URLSearchParams(window.location.search)
  searchParams.set('q', n)
  const newRelativePathQuery = `${window.location.pathname}?${searchParams.toString()}`
  history.pushState(null, '', newRelativePathQuery)
})
</script>

<template>
  <div class="h-14 w-full -mx-0.5 rounded-lg border-2" :class="isFocus ? '!border-brand/70 dark:!border-blue-300/70' : 'border-transparent'">
    <div flex items-center h-full border rounded :class="isFocus ? 'border-transparent' : 'border-c-dark'">
      <span w-12 h-full flex items-center justify-center>
        <span class="icon i-uil:search w-5 h-5 text-c-lighter" />
      </span>
      <input
        ref="refInput"
        flex-1 h-full bg-transparent pr-2 placeholder:text-c-lighter focus:outline-none
        placeholder="搜索文章..."
        type="text"
        name="search"
        autocomplete="off"
        autofocus
        :value="searchText"
        @input="(e) => searchText = (e.target as HTMLInputElement).value"
        @focus="() => isFocus = true"
        @blur="() => isFocus = false"
      >
      <span v-show="searchText.length" w-12 h-full flex items-center justify-center>
        <span class="icon i-carbon-close-large w-5 h-5 text-c-lighter hover:op100! cursor-pointer" @click="searchText = ''" />
      </span>
    </div>
  </div>

  <div v-if="searchResults.length > 1" mt-8 text-c-lighter>
    找到 {{ searchResults.length }} 条关于 {{ searchText }} 的结果
  </div>

  <ul p-0>
    <div v-for="{ item }, idx in searchResults" :key="idx" my-4>
      <p flex items-start my-1>
        <span w-16 mt-0.5 shrink-0 text="sm c-lighter">
          {{ item.date }}
        </span>
        <span text-c-active hover="underline underline-offset-4" cursor-pointer @click="router.push(item.slug)">{{ item.title }}</span>
      </p>
      <p pl-16 my-1 text="sm c-lighter">
        {{ item.excerpt }}...
      </p>
    </div>
  </ul>
</template>
