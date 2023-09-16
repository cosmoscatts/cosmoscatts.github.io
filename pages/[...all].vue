<script setup lang="ts">
const emojiArray = [
  '\\(o_o)/',
  '(o^^)o',
  '(˚Δ˚)b',
  '(^-^*)',
  '(^_^)b',
  '(╯‵□′)╯',
  '(=\'X\'=)',
  '(>_<)',
  '\\(°ˊДˋ°)/',
  'ㄟ(▔▽▔)ㄏ',
]

function getEmoji(): string {
  return emojiArray[Math.floor(Math.random() * emojiArray.length)]
}
</script>

<template>
  <div class="absolute top-1/2 -mt-24 left-0 right-0 text-center font-bold">
    <p text="5xl">
      {{ getEmoji() }}
    </p>
    <h1 text="2xl" m="t-5 b-2">
      404 - 我们为什么会来到这里呢?
    </h1>
    <RouterLink to="/" text-2xl hover:underline>
      $ cd /home/
    </RouterLink>
  </div>
</template>
