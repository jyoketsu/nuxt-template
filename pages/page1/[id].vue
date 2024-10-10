<template>
	<div class="text-gray-500 dark:text-gray-400 text-sm p-4">page1/{{ id }}</div>
</template>
<script setup lang="ts">
const route = useRoute()
const { id } = route.params
</script>