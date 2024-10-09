<template>
	<div>page1/{{ id }}</div>
	<pre>{{ data }}</pre>
</template>
<script setup lang="ts">
const route = useRoute()
const { id } = route.params
const { data } = await useFetch('/api/hello')
</script>