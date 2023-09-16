<script setup lang="ts">
const { blogs } = useBlog()

const searchList = computed(() => {
  return blogs.value.map(({ path, title, excerpt, date }) => ({
    slug: path,
    title,
    date: date.slice(0, 7),
    excerpt: excerpt?.substring(0, 100).replace('## toc', '') ?? '',
  }))
})
</script>

<template>
  <div prose-lg mx-a>
    <div pb-2 text-4xl font-bold>
      搜索文章
    </div>
    <SearchComp :="{ searchList }" />
  </div>
</template>
