<template>
	<AsideTree :links="navigation[0].children" :level="0" />
</template>
<script setup lang="ts">
const { navigation } = useContent();
</script>