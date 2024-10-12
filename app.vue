<template>
  <NuxtLoadingIndicator :color="false" class="z-100 bg-primary/80" />
  <NuxtPage />
</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: '%s Nuxt Template',
  description: 'My amazing site.',
  ogImage: 'https://nuxt.com/new-social.jpg',
  twitterImage: 'https://nuxt.com/new-social.jpg',
  twitterCard: 'summary_large_image'
})

</script>
<style>
@import url("./assets/styles/css-vars.css");
@import url("./assets/styles/custom.css");
</style>
