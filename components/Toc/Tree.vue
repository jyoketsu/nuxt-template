<template>
	<ul :class="[level !== 0 && 'pl-4']">
		<li v-for="link in links" :key="link.id" class="pt-2">
			<NuxtLink :to="`#${link.id}`" class="text-muted-foreground transition-all hover:text-primary">
				{{ link.text }}
			</NuxtLink>
			<TocTree v-if="link.children" :links="link.children" :level="level + 1" />
		</li>
	</ul>
</template>
<script setup lang="ts">
import type { TocLink } from '@nuxt/content';

defineProps<{
	links: TocLink[];
	level: number;
}>();
</script>