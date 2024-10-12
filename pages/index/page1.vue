<template>
	<ul class="items-center gap-x-8 flex border-b dark:border-gray-800 p-4">
		<li>
			<NuxtLink to="/page1" exact-active-class="nuxt-link-exact-active">index</NuxtLink>
		</li>
		<li>
			<NuxtLink to="/page1/child" exact-active-class="nuxt-link-exact-active">child-page</NuxtLink>
		</li>
		<li>
			<NuxtLink to="/page1/12" exact-active-class="nuxt-link-exact-active">keyed-page</NuxtLink>
		</li>
	</ul>
	<NuxtPage />
</template>
<script setup lang="ts">
useSeoMeta({
	title: 'Page1',
	description: 'This is the about page1',
})
</script>