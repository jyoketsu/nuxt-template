<template>
	<header
		class="w-full h-[var(--header-height)] bg-background/75 border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50 lg:mb-0">
		<div class="absolute inset-0 backdrop-blur-lg"></div>
		<div class="relative mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
			<NuxtLink to="/" class="flex gap-1 items-center">
				<Logo class="text-5xl !mb-0 text-primary-500" />
				<span class="font-bold text-xl hidden lg:block">Nuxt Template</span>
			</NuxtLink>
			<AppHeaderNav class="relative hidden lg:flex items-center gap-x-8" />
			<div class="relative flex gap-0 lg:gap-3 items-center">
				<AppHeaderSwitchTheme />
				<AppHeaderSwitchLocale />
				<AppHeaderDarkModeToggle />
				<UButton icon="i-simple-icons:github" color="gray" variant="ghost" aria-label="Theme"
					to="https://github.com/jyoketsu/nuxt-template" target="_blank" />
				<UButton icon="i-ph:list" color="gray" variant="ghost" aria-label="MobileMenuButton" class="lg:hidden"
					@click="isOpen = !isOpen" />
			</div>
		</div>
	</header>
</template>
<script setup lang="ts">
// Vue components in the components/ directory are auto-imported and can be used directly in your templates.
// @ts-ignore
import Logo from '~/assets/svg/icon-green.svg'
const isOpen = useState<boolean>('isOpen', () => false)
</script>