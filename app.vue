<template>
  <NuxtLayout name="home">
    <template #header>
      <nav-head />
    </template>
    <template #footer>
      <foot />
    </template>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s Nuxt Template',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})

</script>
<style>
@import url("./assets/styles/css-vars.css");
</style>
