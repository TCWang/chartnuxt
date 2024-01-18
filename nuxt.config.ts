// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image-edge", "@vueuse/nuxt"],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
