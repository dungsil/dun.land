import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{ts,vue}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    fontFamily: {
      sans: ['Pretendard', 'sans-serif']
    }
  }
}
