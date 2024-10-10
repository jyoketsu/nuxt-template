<template>
	<div>docs nav</div>
</template>
<script setup lang="ts">
const { navigation } = useContent();
console.log('---navigation---', navigation.value);
</script>