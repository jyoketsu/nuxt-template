<template>
	<div>page1/{{ id }}</div>
</template>
<script setup lang="ts">
const route = useRoute()
const { id } = route.params
</script>