<script setup lang="ts">
const refImageModel = ref<HTMLImageElement>()

useEventListener('click', async (e) => {
  const path = Array.from(e.composedPath())
  const first = path[0]
  if (!(first instanceof HTMLElement))
    return
  if (first.tagName !== 'IMG')
    return
  if (path.some(el => el instanceof HTMLElement && ['A', 'BUTTON'].includes(el.tagName)))
    return
  if (!path.some(el => el instanceof HTMLElement && el.classList.contains('prose')))
    return

  // Do not open image when they are moving. Mainly for mobile to avoid conflict with hovering behavior.
  const pos = first.getBoundingClientRect()
  await new Promise(resolve => setTimeout(resolve, 50))
  const newPos = first.getBoundingClientRect()
  if (pos.left !== newPos.left || pos.top !== newPos.top)
    return

  refImageModel.value = first as HTMLImageElement
})

onKeyStroke('Escape', (e) => {
  if (refImageModel.value) {
    refImageModel.value = undefined
    e.preventDefault()
  }
})
</script>

<template>
  <main
    flex="~ col"
    min-h-full
    p="x-4 t-24 b-6"
    text-c
  >
    <div flex-1 mb-6>
      <Navbar>
        <slot name="navbar" />
      </Navbar>
      <slot />
    </div>
    <Footer />
  </main>
  <Transition name="fade">
    <div v-if="refImageModel" fixed top-0 left-0 right-0 bottom-0 z-500 backdrop-blur-7 @click="refImageModel = undefined">
      <div absolute top-0 left-0 right-0 bottom-0 bg-black:30 z--1 />
      <img :src="refImageModel.src" :alt="refImageModel.alt" w-90vw h-90vh mx-5vw my-5vh object-contain>
    </div>
  </Transition>
</template>
