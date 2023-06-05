const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  devtools: {
    enabled: isDev
  },
  image: {
    provider: 'netlify'
  },
  tailwindcss: {
    viewer: isDev
  },
  icon: {
    size: '1.25rem'
  }
})
