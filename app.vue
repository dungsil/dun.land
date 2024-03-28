<script setup>
useHead({
  titleTemplate: title => title ? `${title} · DUN LAND` : 'DUN LAND',
  htmlAttrs: {
    lang: 'ko-KR',
    dir: 'ltr'
  },
  link: [
    { rel: 'stylesheet', href: '/logo.svg' },
    { rel: 'stylesheet', href: '/x/pretendard@1.3.9/pretendard--variable.min.css' }
  ]
})
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
