<script setup>
// The useLocalePath composable returns a function that resolves a path according to the current locale. useLocalePath is powered by vue-i18n-routing.
const localePath = useLocalePath()
const navs = getNavs()
</script>

<template>
	<ul>
		<li v-for="nav in navs" :key="nav.path">
			<!-- active-class：控制当前路由和子路由时的激活状态。 -->
			<!-- exact-active-class：控制只有当前路由匹配时才应用激活状态。 -->
			<UPopover v-if="nav.subLinks && nav.subLinks.length" mode="hover" class="group">
				<NuxtLink :to="localePath(nav.path)" :exact-active-class="nav.path === '/' ? 'nuxt-link-active' : ''"
					class="flex flex-row items-center" :active-class="nav.path !== '/' ? 'nuxt-link-active' : ''">
					<span>{{ $t(nav.title) }}</span>
					<UIcon name="i-iconamoon:arrow-down-2-light" class="w-5 h-5 transition-all group-hover:rotate-180" />
				</NuxtLink>
				<template #panel>
					<div class="p-4 flex flex-col space-y-3">
						<NuxtLink v-for="sub in nav.subLinks" :to="localePath(sub.path)" :key="sub.path"
							exact-active-class="nuxt-link-active">{{
								$t(sub.title) }}
						</NuxtLink>
					</div>
				</template>
			</UPopover>
			<NuxtLink v-else :to="localePath(nav.path)" :exact-active-class="nav.exactActive ? 'nuxt-link-active' : ''"
				:active-class="!nav.exactActive ? 'nuxt-link-active' : ''">{{ $t(nav.title) }}
			</NuxtLink>
		</li>
	</ul>
</template>