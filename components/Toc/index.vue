<template>
	<div>
		<h1 class="mb-2 text-base font-semibold">On This Page</h1>
	</div>
	<TocTree v-if="toc.links" :links="toc.links" :level="0" />
</template>
<script setup lang="ts">
const { toc } = useContent();
</script>