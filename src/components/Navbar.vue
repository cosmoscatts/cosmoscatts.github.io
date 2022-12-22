<script setup lang="ts">
import { isClient, toggleDark } from '~/utils'

const navbar = ref<HTMLElement | null>(null)
const isFixed = ref(false)
const isVisible = ref(false)

if (isClient) {
  const { y, directions } = useScroll(document)

  watch(y, () => {
    if (directions.top) {
      if (y.value > 0 && isFixed.value) {
        isVisible.value = true
      } else {
        isVisible.value = false
        isFixed.value = false
      }
    } else if (directions.bottom) {
      isVisible.value = false
      if (navbar.value && y.value > navbar.value!.offsetHeight)
        isFixed.value = true
    }
  })
}
</script>

<template>
  <header
    ref="navbar"
    flex justify-between items-center
    w-full h-14 bg-c z-40 font-ui
    p="x-4 md:x-5"
    :class="[
      isFixed
        && 'fixed -top-14 left-0 transition duration-300 border-b border-c',
      isVisible && 'translate-y-full shadow-nav',
      !isFixed && !isVisible && 'absolute top-0 left-0',
    ]"
  >
    <router-link to="/" font-bold un-text="c-light hover:c-dark">
      <span text="lg">hi@cosmoscatts</span>
      <div i-fa6-solid:angle-right class="prompt inline-block" />
      <span class="blink">_</span>
    </router-link>
    <nav flex space-x-4>
      <router-link to="/projects" title="Projects" nav-item>
        <div i-ph:rocket-launch-duotone class="md:hidden" />
        <span class="lt-md:hidden">Projects</span>
      </router-link>

      <router-link to="/posts" title="Blog" nav-item>
        <div i-majesticons:paper-fold-text-line md:hidden />
        <span lt-md:hidden>Blog</span>
      </router-link>

      <a nav-item href="/feed.xml" title="RSS" target="_blank">
        <div i-jam:rss-feed />
      </a>

      <button nav-item title="Toggle dark" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>

      <slot />
    </nav>
  </header>
</template>

<style scoped>
.prompt {
  vertical-align: -0.2em;
  font-size: 0.85em;
}

.blink {
  animation: blinker 1s none infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
