<template>
	<AsideTree :links="links" :level="0" />
</template>
<script setup lang="ts">
const { locale } = useI18n();
const { navigation } = useContent();
const links = computed(() => {
	const folderName = locale.value === 'en' ? 'docs' : locale.value;
	const index = navigation.value.findIndex(item => item._path === `/${folderName}`)

	if (folderName === 'docs') {
		return navigation.value[index].children;
	} else {
		return navigation.value[index].children[0].children;
	}
})
</script>