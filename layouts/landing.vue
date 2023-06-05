<template>
  <div class="flex flex-col w-full min-h-screen bg-zinc-900 text-base text-gray-50">
    <dl-navbar />

    <div class="flex-grow grid">
      <slot />
    </div>

    <dl-footer />
  </div>
</template>
