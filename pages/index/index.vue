<script setup lang="ts">
const techStacks = [
	{ name: 'Nuxt', icon: '/logo/nuxt.svg', desc: 'home.nuxt', link: 'https://nuxt.com/' },
	{ name: 'Nuxt UI', icon: '/logo/nuxt.svg', desc: 'home.nuxtUi', link: 'https://ui.nuxt.com/' },
	{ name: 'Nuxt Content', icon: '/logo/nuxt.svg', desc: 'home.nuxtContent', link: 'https://content.nuxt.com/' },
	{ name: 'Vue', icon: '/logo/vue.svg', desc: 'home.vue', link: 'https://vuejs.org/' },
	{ name: 'TypeScript', icon: '/logo/typescript.svg', desc: 'home.ts', link: 'https://www.typescriptlang.org/' },
	{ name: 'Tailwind CSS', icon: '/logo/tailwind.svg', desc: 'home.tailwindcss', link: 'https://tailwindcss.com/' },
	{ name: 'i18n', icon: '/logo/vue-i18n-logo.png', desc: 'home.i18n', link: 'https://i18n.nuxtjs.org/?utm_source=nuxt.com&utm_medium=aside-module&utm_campaign=nuxt.com' },
	{ name: 'Pinia', icon: '/logo/pinia.svg', desc: 'home.pinia', link: 'https://pinia.vuejs.org/' },
]
</script>

<template>
	<div class="py-7">
		<div class="text-center py-24 tracking-tight">
			<h1 class="font-bold text-5xl lg:text-7xl">{{ $t('pages.title') }}</h1>
			<div class="whitespace-pre-wrap mt-6 text-lg text-gray-600 dark:text-gray-300">{{ $t('home.description') }}</div>
		</div>

		<h1 class="text-3xl text-center font-bold tracking-tight">{{ $t('home.techStack') }}</h1>
		<div class="mt-8 grid lg:grid-cols-2 gap-8">
			<NuxtLink v-for="(techStack, i) in techStacks" :key="i" :to="techStack.link" target=" _blank">
				<div class="size-full flex flex-col space-y-2 border border-gray-200 dark:border-gray-800 rounded-lg py-6 px-7 transition-all duration-300
				hover:shadow-lg hover:-translate-y-2">
					<i class="bg-contain bg-no-repeat bg-center size-8" :style="{ backgroundImage: `url(${techStack.icon})` }" />
					<p class="font-bold">{{ techStack.name }}</p>
					<p class="text-gray-600 dark:text-gray-300">{{ $t(techStack.desc) }}</p>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>