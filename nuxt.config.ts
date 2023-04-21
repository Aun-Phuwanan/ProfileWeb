// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vite-pwa/nuxt", "@nuxtjs/tailwindcss"],
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
  css: ["~/assets/css/main.scss"],
  pwa: {
    /* PWA options */
    registerType: "autoUpdate",

    manifest: {
      name: "test1",
      short_name: "test",
      description: "ttttttt",
      icons: [
        {
          src: "64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    // workbox: {
    //   navigateFallback: "/",
    // },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  imports: {
    autoImport: true,
  },
});
