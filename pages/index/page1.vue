<script setup lang="ts">
definePageMeta({
	title: 'pages.page1'
})

const localePath = useLocalePath()
</script>

<template>
	<ul class="items-center gap-x-8 flex border-b dark:border-gray-800 p-4">
		<li>
			<NuxtLink :to="localePath('/page1')" exact-active-class="nuxt-link-exact-active">{{ $t('page1.nav.index') }}
			</NuxtLink>
		</li>
		<li>
			<NuxtLink :to="localePath('/page1/child')" exact-active-class="nuxt-link-exact-active">{{
				$t('page1.nav.childPage') }}</NuxtLink>
		</li>
		<li>
			<NuxtLink :to="localePath('/page1/12')" exact-active-class="nuxt-link-exact-active">{{ $t('page1.nav.keyedPage')
				}}</NuxtLink>
		</li>
		<li>
			<NuxtLink :to="localePath('/page1/amap')" exact-active-class="nuxt-link-exact-active">{{ $t('page1.nav.amap') }}
			</NuxtLink>
		</li>
	</ul>
	<NuxtPage />
</template>