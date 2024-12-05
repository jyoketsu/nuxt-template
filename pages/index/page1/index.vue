<script setup lang="ts">
import IconFontClass from '~/components/IconFontClass.vue';

const counter = useState('counter', () => Math.round(Math.random() * 1000))
const sameCounter = useState('counter')
const { data } = await useFetch('/api/hello')

const localePath = useLocalePath()

const user = useCookie<{ name: string }>('user')

const logout = () => {
	// @ts-ignore
	user.value = null
}
</script>

<template>
	<div class="grid gap-5 lg:grid-cols-2 pb-7">
		<UCard>
			<template #header>
				<p class="text-xl">Use State</p>
			</template>

			<p>Counter: {{ counter }}</p>
			<div class="flex gap-2 my-4">
				<UButton @click="counter--">
					-
				</UButton>
				<UButton @click="counter++">
					+
				</UButton>
			</div>
			<p>Same Counter: {{ sameCounter }}</p>
		</UCard>

		<UCard>
			<template #header>
				<p class="text-xl">Data Fetching</p>
			</template>
			<pre>{{ data }}</pre>
		</UCard>

		<UCard>
			<template #header>
				<p class="text-xl">Meta Tags</p>
			</template>
			<p class="text-gray-600 dark:text-gray-300">/app.vue</p>
		</UCard>

		<UCard>
			<template #header>
				<p class="text-xl">Layouts</p>
			</template>
			<p class="text-gray-600 dark:text-gray-300">/layouts</p>
		</UCard>

		<UCard>
			<template #header>
				<p class="text-xl">Middleware</p>
			</template>
			<p class="text-gray-600 dark:text-gray-300">/middleware</p>
		</UCard>

		<UCard>
			<template #header>
				<p class="text-xl">{{ `useCookie (${$t('pages.login')} / ${$t('login.logout')})` }}</p>
			</template>
			<div class="flex items-center gap-2">
				<p v-if="user" class="text-gray-600 dark:text-gray-300">{{ user.name }}</p>
				<UButton v-if="user" @click="logout">
					{{ $t('login.logout') }}
				</UButton>
				<UButton v-else @click="$router.push(localePath(`/login?redirect=${localePath('/page1')}`))">
					{{ $t('pages.login') }}
				</UButton>
			</div>
		</UCard>

		<UCard>
			<template #header>
				<NuxtLink :to="localePath('/docs')" class="text-xl text-primary">Nuxt Content</NuxtLink>
			</template>
			<p class="text-gray-600 dark:text-gray-300">/pages/index/docs/[...slug].vue</p>
			<p class="text-gray-600 dark:text-gray-300">/content</p>
		</UCard>

		<UCard>
			<template #header>
				<p class="text-xl">{{ $t('page1.setTheme') }}</p>
			</template>
			<AppHeaderSwitchTheme />
		</UCard>

		<UCard>
			<template #header>
				<p class="text-xl">{{ $t('page1.toggleLocale') }}</p>
			</template>
			<AppHeaderSwitchLocale />
		</UCard>

		<UCard>
			<template #header>
				<p class="text-xl">{{ $t('page1.darkMode') }}</p>
			</template>
			<AppHeaderDarkModeToggle />
		</UCard>

		<UCard>
			<template #header>
				<NuxtLink to="https://icones.js.org/" target="_blank" class="text-xl text-primary">Icon</NuxtLink>
			</template>
			<div class="flex items-center space-x-5">
				<UIcon name="i-heroicons:home" class="size-10" />
				<UIcon name="i-ph:desktop" class="size-10" />
				<UIcon name="i-lucide:paintbrush" class="size-10" />
				<UIcon name="i-heroicons:rocket-launch" class="size-10" />
			</div>
		</UCard>

		<div class="grid grid-cols-2 gap-5">
			<UCard>
				<template #header>
					<NuxtLink
						to="https://www.iconfont.cn/help/detail?spm=a313x.manage_type_myprojects.i1.d8cf4382a.15973a81RSiXrY&helptype=code"
						target="_blank" class="text-sm md:text-xl text-primary">
						Iconfont (Symbol)
					</NuxtLink>
				</template>
				<IconFont class="size-[50px] text-primary hover:text-primary-400" iconClass="icon-27" />
			</UCard>
			<UCard>
				<template #header>
					<NuxtLink
						to="https://www.iconfont.cn/help/detail?spm=a313x.manage_type_myprojects.i1.d8cf4382a.15973a81RSiXrY&helptype=code"
						target="_blank" class="text-sm md:text-xl text-primary">
						Iconfont (Font class)
					</NuxtLink>
				</template>
				<IconFontClass class="text-[40px] text-primary hover:text-primary-400" className="file-text" />
			</UCard>
		</div>
	</div>

</template>