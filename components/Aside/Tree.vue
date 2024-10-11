<template>
	<ul :class="[level !== 0 && 'pl-4']">
		<li v-for="link in links" :key="link.id" :class="{ 'pt-2': level === 0 }">
			<UButton class="w-full" color="gray" variant="ghost" size="sm" :to="link._path" active-class="nuxt-link-active"
				:icon="link.icon" :class="{ 'font-bold': level === 0 }">
				{{ link.title }}
			</UButton>
			<AsideTree v-if="link.children" :links="link.children" :level="level + 1" />
		</li>
	</ul>
</template>
<script setup lang="ts">
import type { NavItem } from '@nuxt/content';

defineProps<{
	links: NavItem[];
	level: number;
}>();
</script>