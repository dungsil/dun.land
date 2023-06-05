<script setup lang="ts">
useHead({
  title: 'DUN LAND'
})
</script>

<template>
  <div class="flex flex-col w-full min-h-screen bg-zinc-900 font-sans text-base text-gray-50">
    <dl-landing-navbar />

    <div class="flex-grow grid place-content-center">
      <slot />
    </div>

    <dl-landing-footer />
  </div>
</template>
