<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})

useHead({
  title: '환영합니다!'
})
</script>

<template>
  <div class="place-self-center flex flex-col gap-y-10">
    <div class="flex flex-col justify-center items-center">
      <h1 class="font-black text-[18vw] md:text-8xl leading-[1em] text-white">
        <span>DUN</span>
        <span class="text-zinc-400">GSIL</span>
        <br aria-label="&nbsp;">
        <span class="inline-block ml-[1.61em]">LAND</span>
      </h1>
    </div>
  </div>
</template>
