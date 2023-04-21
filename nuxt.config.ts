// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@vite-pwa/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
  ],
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
  css: ["~/assets/css/main.scss", "~/assets/css/fonts.scss"],
  i18n: {
    locales: [
      {
        code: "en",
        file: "en-US.json",
      },
      // {
      //   code: "fr",
      //   file: "fr-FR.json",
      // },
      {
        code: "th",
        file: "th-TH.json",
      },
    ],
    // lazy: true,
    langDir: "./lang",
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieCrossOrigin: true,
    },
    // strategy: "prefix_except_default",
  },
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
