<script setup lang="ts">
// config url in nuxt.config.ts:app>head>link
defineProps<{
	className: string;
}>();
</script>

<template>
	<i :class="`iconfont icon-${className}`" />
</template>