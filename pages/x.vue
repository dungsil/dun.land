<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})

useHead({
  title: 'CDN'
})

const res = await fetch('https://api.github.com/repos/dungsil/x/contents/')
const contents = await res.json()
</script>

<template>
  <div class="mt-10 w-full max-w-7xl mx-auto">
    <ol role="list" class="flex items-center space-x-1">
      <li>
        <div class="flex">
          <nuxt-link to="/" class="text-sm font-medium text-gray-400 hover:text-gray-200">
            DUN LAND
          </nuxt-link>
        </div>
      </li>
      <li>
        <div class="flex items-center text-gray-400">
          <dl-icon icon="fluent:slash-forward-12-filled" />
          <nuxt-link href="." class="ml-1 text-sm font-medium hover:text-gray-200">
            x
          </nuxt-link>
        </div>
      </li>
    </ol>
    <h1 class="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
      CDN x
    </h1>
    <p class="mt-2">
      <b>dun.land/x</b>는 정규화된 URL로 웹 리소스에 접근할 수 있는 CDN/미러 서비스입니다.
    </p>

    <div class="mt-8">
      <ul class="divide-y divide-gray-700">
        <li v-for="content in contents" :key="content.sha" class="flex justify-between items-center px-3 py-5">
          <div class="flex items-center gap-3">
            <h2 class="w-24">
              {{ content.name?.split('@')?.[0] ?? '(error)' }}
            </h2>
            <p class="rounded-md whitespace-nowrap px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-gray-400 bg-gray-800 ring-gray-500/10">
              {{ content.name?.split('@')?.[1] ?? '(error)' }}
            </p>
          </div>

          <div>
            <nuxt-link :to="content['html_url']" target="_blank" class="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20" external>
              파일 목록 보기
            </nuxt-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
