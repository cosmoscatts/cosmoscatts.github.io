<script setup lang="ts">
defineProps<{
  image: string
  date: string
  desc?: string
}>()
</script>

<template>
  <div
    class="group prose"
    block of-hidden
    transition-all duration-500 bg-c relative
  >
    <img
      v-if="image"
      :src="image" of-hidden
      w-full rounded-lg transition-all duration-500
    >

    <div p4 m0 pb-3>
      <div op50 text-sm text-center>
        {{ date }}
      </div>
      <p text-lg text-center>
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@property --d {
   syntax: "<percentage>";
   initial-value: 0%;
   inherits: false;
}
@property --r {
   syntax: "<angle>";
   initial-value: 0deg;
   inherits: false;
}

img {
  --n: 4;
  --r: 0deg;
  --d: 0%;
  -webkit-mask:
    linear-gradient(var(--r), transparent var(--d), red 0 calc(100% - var(--d)), transparent 0),
    linear-gradient(calc(var(--r) + 90deg), transparent var(--d), red 0 calc(100% - var(--d)), transparent 0);
  -webkit-mask-size: calc(100%/var(--n)) calc(100%/var(--n));
  -webkit-mask-composite: source-in;
  cursor: pointer;
}
img:hover {
  animation: r .5s;
}

@keyframes r {
  0%{
    --d: 0%
  }
  100%{
    --d: 0%;
    --r: 90deg
  }
  50%{
    --d: 20%
  }
}
</style>
