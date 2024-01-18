// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image-edge", "@vueuse/nuxt"],
  css: ["~/assets/css/bootstrap.scss", "~/assets/css/my.css"],

  plugins: [
    {
      src: "~/plugins/bootstrap.js",
      mode: "client",
    },
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
