<template>
	<main class="size-full relative lg:grid lg:grid-cols-[1fr_200px] lg:gap-10 py-8">
		<div class="prose dark:prose-invert">
			<h1>{{ page?.title }}</h1>
			<ContentRenderer :value="page" />
		</div>
		<div
			class="h-[calc(100vh-var(--header-height)-69px-4rem)] hidden text-sm lg:block lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
			<Toc />
		</div>
	</main>
</template>

<script setup lang="ts">
const { page } = useContent();

useSeoMeta({
	title: page.value?.title ?? '404',
	ogTitle: page.value?.title,
	description: page.value?.description,
});
</script>
