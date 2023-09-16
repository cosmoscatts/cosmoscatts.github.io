<script setup lang="ts">
interface Item {
  icon: string
  link: string
  name?: string
  size?: string
  alias?: string
}

const { links } = defineProps<{ links: Item[] }>()
function isExternal(link: string) {
  return typeof link === 'string' && link.startsWith('http')
}

function getHoverColorClass(alias?: string) {
  if (!alias) return ''
  const colorMap: Record<string, string> = {
    twitter: 'hover:(!bg-#00ACEE !text-white)',
    bilibili: 'hover:(!bg-#FB7299 !text-white)',
    zhihu: 'hover:(!bg-#056DE8 !text-white)',
  }
  if (!Object.keys(colorMap).includes(alias)) return ''
  return colorMap[alias]
}
</script>

<template>
  <div flex="~ wrap" gap-2>
    <a
      v-for="(item, i) in links"
      :key="`social-${i}-${item.icon}`"
      btn font-normal px-3 h-9 :class="getHoverColorClass(item.alias)"
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
