<template>
	<ul class="items-center gap-x-8 flex">
		<li>
			<NuxtLink to="/page1" exact-active-class="nuxt-link-exact-active">index</NuxtLink>
		</li>
		<li>
			<NuxtLink to="/page1/child" exact-active-class="nuxt-link-exact-active">child-page</NuxtLink>
		</li>
		<li>
			<NuxtLink to="/page1/123456" exact-active-class="nuxt-link-exact-active">id-page</NuxtLink>
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