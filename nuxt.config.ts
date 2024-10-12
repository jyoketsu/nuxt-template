// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "nuxt-svgo",
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],
  i18n: {
    baseUrl: "https://nuxt-template-beta.vercel.app",
    locales: [
      {
        code: "en",
        name: "English",
        language: "en-US",
        file: "en-US.json",
      },
      {
        code: "zh",
        name: "中文",
        language: "zh-CN",
        file: "zh-CN.json",
      },
    ],
    defaultLocale: "en",
    // strategy: "no_prefix", // 不在 URL 中使用前缀
    langDir: "assets/locales/",
  },
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
