<script lang="ts" setup>
const navigations = [
  { name: '소개', to: '/' },
  {
    name: 'CDN x',
    to: '/x'
  },
  {
    name: '상태',
    to: 'https://up.dun.land'
  }
]
</script>

<template>
  <header class="flex items-center gap-6 w-full px-4 py-6 lg:px-8 shadow bg-zinc-950 bg-opacity-20 backdrop-filter backdrop-blur-sm">
    <nuxt-link to="/" class="font-black text-2xl text-white hover:text-gray-200">
      <nuxt-img src="/logo.svg" width="24" height="24" alt="DUN LAND" />
    </nuxt-link>

    <nav class="ml-auto">
      <ul role="list" class="flex justify-center items-center gap-4">
        <li v-for="{name, to} in navigations" :key="name">
          <nuxt-link
            :to="to"
            class="text-gray-300 hover:bg-zinc-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            exact-active-class="!bg-zinc-800 !text-white"
          >
            {{ name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
