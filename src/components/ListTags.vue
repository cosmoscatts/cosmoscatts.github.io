<script setup lang="ts">
const { tagMap, tags } = useTags()
const router = useRouter()

const totalblogNum = useBlog().blogs.value.length
const ALL_URL = '/posts'

function blogNum(tag?: string) {
  if (!tag)
    return totalblogNum
  else return tagMap.value[tag].blogs.length
}
</script>

<template>
  <div>
    <span class="tag">
      <span i-uil:tag-alt text-sm />
      <span @click="router.push(ALL_URL)">全部</span>
      <sup>{{ blogNum() }}</sup>
    </span>

    <span v-for="tag in tags" :key="tagMap[tag].path" class="tag">
      <span i-uil:tag-alt text-sm />
      <span @click="router.push(tagMap[tag].path)">
        {{ tag }}
      </span>
      <sup>{{ blogNum(tag) }}</sup>
    </span>
  </div>
</template>

<style scoped>
.tag {
  --uno: space-x-1 mr-3 cursor-pointer text-c-light;
}
.tag:hover {
  --uno: text-c;
}
</style>
