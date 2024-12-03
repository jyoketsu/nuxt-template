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
  runtimeConfig: {
    secretKey: process.env.SECRET_KEY, // 仅服务器端可用
    public: {
      amapKey: process.env.AMAP_KEY, // 客户端和服务器端都可用
      amapSecurityJsCode: process.env.AMAP_SECURITY_CODE,
    },
  },
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
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://at.alicdn.com/t/c/font_3639604_1hhggv3yjay.css",
        },
      ],
      script: [
        {
          src: "https://at.alicdn.com/t/c/font_3639604_s7ofq7zhbm9.js",
          async: true,
          defer: true,
        },
      ],
    },
  },
});
