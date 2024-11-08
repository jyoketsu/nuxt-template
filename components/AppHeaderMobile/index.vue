<script setup lang="ts">
const isOpen = useState<boolean>('isOpen')
const localePath = useLocalePath()
const navs = getNavs()
</script>

<template>
	<USlideover v-model="isOpen" side="left"
		:ui="{ base: '!max-w-[70%]', overlay: { base: '!backdrop-blur-sm !bg-[#e4efffb3] dark:!bg-zinc-900/60' } }">
		<div class="p-4 flex-1">
			<ul class="space-y-1">
				<AppHeaderMobileNav v-for="nav in navs" :key="nav.path" :nav="nav" />
			</ul>
		</div>
	</USlideover>
</template>
