<script setup>
const localePath = useLocalePath()
</script>

<template>
	<ul>
		<li>
			<!-- active-class：控制当前路由和子路由时的激活状态。 -->
			<!-- exact-active-class：控制只有当前路由匹配时才应用激活状态。 -->
			<NuxtLink :to="localePath('/')" exact-active-class="nuxt-link-active">{{ $t('pages.home') }}</NuxtLink>
		</li>
		<li>
			<NuxtLink :to="localePath('/page1')" active-class="nuxt-link-active">{{ $t('pages.page1') }}</NuxtLink>
		</li>
		<li>
			<NuxtLink :to="localePath('/docs')" active-class="nuxt-link-active">{{ $t('pages.docs') }}</NuxtLink>
		</li>
		<li>
			<NuxtLink :to="localePath('/page3')" active-class="nuxt-link-active">{{ $t('pages.page3') }}</NuxtLink>
		</li>
		<li>
			<NuxtLink :to="localePath('/page4')" active-class="nuxt-link-active">{{ $t('pages.page4') }}</NuxtLink>
		</li>
	</ul>
</template>