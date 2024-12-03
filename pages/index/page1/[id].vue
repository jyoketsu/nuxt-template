<template>
	<div class="py-40 text-center">
		<h1 class="font-bold text-5xl lg:text-7xl">
			{{ `${$t('page1.nav.keyedPage')}: ${id}` }}</h1>
	</div>
</template>
<script setup lang="ts">
const route = useRoute()
const { id } = route.params
</script>