<script setup lang="ts">
defineProps<{
	nav: Nav;
}>();

const localePath = useLocalePath()
</script>

<template>
	<li>
		<NuxtLink :to="localePath(nav.path)" :exact-active-class="nav.exactActive ? 'nuxt-link-active' : ''"
			:active-class="!nav.exactActive ? 'nuxt-link-active' : ''">
			{{ $t(nav.title) }}
		</NuxtLink>
		<div v-if="nav.subLinks" class="ml-4 space-y-1">
			<Nav v-for="subNav in nav.subLinks" :key="subNav.path" :nav="subNav" />
		</div>
	</li>
</template>