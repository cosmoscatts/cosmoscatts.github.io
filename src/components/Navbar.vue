<script setup lang="ts">
import { isClient, toggleDark } from '~/utils'
import avatar from '/avatar.jpg'

const route = useRoute()
function isActive(key: string) {
  return route.fullPath.startsWith(key)
}

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

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const { y: scroll } = useWindowScroll()
</script>

<template>
  <header
    ref="navbar"
    flex justify-between items-center
    w-full h-14 bg-c z-40
    p="x-4 md:x-5"
    :class="[
      isFixed
        && 'fixed -top-14 left-0 transition duration-300 border-b border-c',
      isVisible && 'translate-y-full shadow-nav',
      !isFixed && !isVisible && 'absolute top-0 left-0',
    ]"
  >
    <router-link to="/" font-bold un-text="c hover:c-dark" flex items-center>
      <img rounded-md w-40px h-40px class="mask mask-squircle" :src="avatar" alt="avatar">
      <div i-fa6-solid:angle-right class="prompt inline-block mx-2 lt-sm:hidden" />
      <span text-xl font-bold mt-1 lt-sm:hidden>Hi@Everyone</span>
      <span class="blink text-xl mt-1 lt-sm:hidden">_</span>
    </router-link>
    <nav flex space-x-4>
      <router-link to="/projects" title="Projects" nav-item>
        <div i-ri-lightbulb-line md:hidden />
        <span lt-md:hidden :class="{ active: isActive('/projects') }">Projects</span>
      </router-link>

      <router-link to="/posts" title="Blog" nav-item>
        <div i-majesticons:paper-fold-text-line md:hidden />
        <span lt-md:hidden :class="{ active: isActive('/posts') }">Blog</span>
      </router-link>

      <router-link to="/photos" title="Photos" nav-item>
        <div i-ri-image-fill md:hidden />
        <span lt-md:hidden :class="{ active: isActive('/photos') }">Photos</span>
      </router-link>

      <a nav-item href="/search" title="Search">
        <div i-uil:search />
      </a>

      <button nav-item title="Toggle dark" @click="toggleDark">
        <div i="carbon-sun dark:carbon-moon" />
      </button>

      <slot />
    </nav>
  </header>

  <button
    title="Scroll to top"
    fixed right-3 bottom-3 w-10 h-10 hover:op100 rounded-full flex items-center justify-center
    hover-bg-hex-8883 transition duration-300 z-100 print:hidden
    :class="scroll > 300 ? 'op30' : 'op0! pointer-events-none'"
    @click="toTop()"
  >
    <div i-ri-arrow-up-line />
  </button>
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

span.active {
  --uno: underline decoration-wavy decoration underline-offset-5;
}
</style>
