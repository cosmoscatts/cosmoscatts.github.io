<script setup lang="ts">
interface Item {
  icon: string
  link: string
  name?: string
  size?: string
}

defineProps<{ links: Item[] }>()

const isExternal = (link: string) => {
  return typeof link === 'string' && link.startsWith('http')
}
</script>

<template>
  <div flex="~ wrap">
    <a
      v-for="(item, i) in links"
      :key="`social-${i}-${item.icon}`"
      btn font-normal px-3 h-9 m="r-1 b-1"
      :title="item.name || item.link"
      :href="item.link"
      :target="isExternal(item.link) ? '_blank' : '_self'"
      rel="noopener noreferrer"
    >
      <div :class="item.icon" w-5 h-5 />
      <div v-if="item.name">{{ item.name }}</div>
    </a>
  </div>
</template>
