<script setup lang="ts">
// config url in nuxt.config.ts:app>head>script
const props = defineProps<{
	iconClass: string;
}>()
const iconName = computed(() => `#icon-${props.iconClass}`)
</script>

<template>
	<svg class="svg-icon fill-current text-lg overflow-hidden size-5" aria-hidden="true">
		<use :xlink:href="iconName"></use>
	</svg>
</template>