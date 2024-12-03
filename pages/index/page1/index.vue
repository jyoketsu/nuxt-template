<template>
	<div class="grid gap-5 lg:grid-cols-2">
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
				<NuxtLink to="https://icones.js.org/" target="_blank" class="text-xl text-primary">Icon</NuxtLink>
			</template>
			<div class="flex items-center space-x-5">
				<UIcon name="i-heroicons:home" class="size-10" />
				<UIcon name="i-ph:desktop" class="size-10" />
				<UIcon name="i-lucide:paintbrush" class="size-10" />
				<UIcon name="i-heroicons:rocket-launch" class="size-10" />
			</div>
		</UCard>

		<UCard>
			<template #header>
				<NuxtLink
					to="https://www.iconfont.cn/help/detail?spm=a313x.manage_type_myprojects.i1.d8cf4382a.15973a81RSiXrY&helptype=code"
					target="_blank" class="text-xl text-primary">
					Iconfont (Symbol)
				</NuxtLink>
			</template>
			<IconFont class="size-[50px] text-primary hover:text-primary-400" iconClass="icon-27" />
		</UCard>
		<UCard>
			<template #header>
				<NuxtLink
					to="https://www.iconfont.cn/help/detail?spm=a313x.manage_type_myprojects.i1.d8cf4382a.15973a81RSiXrY&helptype=code"
					target="_blank" class="text-xl text-primary">
					Iconfont (Font class)
				</NuxtLink>
			</template>
			<IconFontClass class="text-[40px] text-primary hover:text-primary-400" className="file-text" />
		</UCard>
	</div>

</template>
<script setup lang="ts">
import IconFontClass from '~/components/IconFontClass.vue';

const counter = useState('counter', () => Math.round(Math.random() * 1000))
const sameCounter = useState('counter')
const { data } = await useFetch('/api/hello')
</script>