<template>
	<header class="size-full">
		<div class="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
			<NuxtLink to="/" class="flex gap-1 items-center">
				<Logo class="text-5xl !mb-0 text-[var(--theme-color-primary)]" />
				<span class="font-bold text-xl">Nuxt Template</span>
			</NuxtLink>
			<ul class="items-center gap-x-8 hidden lg:flex">
				<li>
					<!-- active-class：控制当前路由和子路由时的激活状态。 -->
					<!-- exact-active-class：控制只有当前路由匹配时才应用激活状态。 -->
					<NuxtLink to="/page1" active-class="nuxt-link-active">page1</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/page2" active-class="nuxt-link-active">page2</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/page3" active-class="nuxt-link-active">page3</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/page4" active-class="nuxt-link-active">page4</NuxtLink>
				</li>
			</ul>
			<div class="flex gap-1 items-center">
				<NuxtLink to="https://github.com/jyoketsu/nuxt-template" target="_blank" class="flex gap-1 items-center">
					<GithubLogo class="text-xl !mb-0" />
				</NuxtLink>
			</div>
		</div>
	</header>
</template>
<script setup lang="ts">
// Vue components in the components/ directory are auto-imported and can be used directly in your templates.
import Logo from '~/public/icon-green.svg'
import GithubLogo from '~/public/github-mark.svg'
</script>
<style>
a.nuxt-link-active,
a.nuxt-link-exact-active {
	color: var(--theme-color-primary)
}
</style>