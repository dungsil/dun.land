<script lang="ts" setup>
const navigation = [
  { name: '깃허브', href: 'https://github.com/dungsil/dun.land', icon: 'simple-icons:github' }
]
</script>

<template>
  <footer class="bg-zinc-950">
    <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <nuxt-link
          v-for="{name, href, icon} in navigation"
          :key="name"
          :to="href"
          external
          target="_blank"
          class="inline-block p-3 rounded-md text-gray-400 hover:bg-zinc-800"
        >
          <span class="sr-only">{{ name }}</span>
          <dl-icon :icon="icon" class="w-6 h-6" />
        </nuxt-link>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-gray-500">
          &copy; {{ new Date().getFullYear() }} DUN LAND
        </p>
      </div>
    </div>
  </footer>
</template>
