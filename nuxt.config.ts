// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "nuxt-svgo",
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/image",
  ],
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: "one-dark-pro",
      },
      preload: [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "diff",
        "shell",
        "markdown",
        "yaml",
        "bash",
        "ini",
      ],
    },
    navigation: {
      fields: ["icon"],
    },
  },
});