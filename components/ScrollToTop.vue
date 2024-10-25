<script setup lang="ts">
const isVisible = ref(false);

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
	isVisible.value = window.scrollY > 500;  // 滚动超过500px时显示按钮
};

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',  // 平滑滚动到顶部
	});
};
</script>

<template>
	<UButton v-if="isVisible" icon="i-ph:arrow-line-up-bold" class="fixed bottom-10 right-4 z-40 rounded-full bg-gray-400 dark:text-white" size="xl"
		@click="scrollToTop" />
</template>