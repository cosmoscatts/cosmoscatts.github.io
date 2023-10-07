<script setup lang="ts">
defineProps<{
  image: string
  date: string
  desc?: string
}>()
</script>

<template>
  <div class="group prose" block of-hidden transition-all duration-500 bg-c relative>
    <img v-if="image" :src="image" of-hidden w-full rounded-lg transition-all duration-500>

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
