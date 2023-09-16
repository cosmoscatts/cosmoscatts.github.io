<script setup lang="ts">
const {
  item = {},
} = defineProps<{ item: any }>()

const api = `https://api.github.com/repos/${item.repo}`
const star = ref(null)

async function getRepoStars() {
  const data = await fetch(api).then(res => res.json())
  return data.stargazers_count
}

onMounted(async () => item.repo && (star.value = await getRepoStars()))
</script>

<template>
  <a
    relative
    flex items-center
    space-x-5 p-4 bg-item
    border="1 c hover:transparent"
    class="!no-underline !text-c"
    target="_blank"
    :href="item.link"
    :title="item.name"
    rel="noopener noreferrer"
  >
    <div flex-auto>
      <div
        flex items-center
        space-x-2
        text-normal
      >
        <span mr-1>{{ item.name }}</span>
        <span
          v-for="icon of item.tech"
          :key="`${item.name}-${icon}`"
          :class="icon"
          text-xs
        />
        <span v-if="star" flex items-center space-x-1>
          <span i-noto-v1:star text-xs />
          <span class="text-sm mt-0.5">{{ star }}</span>
        </span>
      </div>
      <div text-sm op-50 font-normal mt-1 v-html="item.desc" />
    </div>
    <div pt-2 text-3xl op-50>
      <div :class="item.icon || 'i-carbon-unknown'" />
    </div>
  </a>
</template>
