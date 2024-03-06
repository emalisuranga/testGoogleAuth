// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  alias: {
      "./runtimeConfig": "./runtimeConfig.browser"
    },
    vite: {
      define: {
        "window.global": {}
      }
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  
})
