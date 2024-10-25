<template>
	<USlideover v-model="isOpen" side="left"
		:ui="{ base: '!max-w-[70%]', overlay: { base: '!backdrop-blur-sm !bg-[#e4efffb3] dark:!bg-zinc-900/60' } }">
		<div class="p-4 flex-1">
			<!-- <UButton color="gray" variant="ghost" size="sm" icon="i-heroicons-x-mark-20-solid"
				class="flex sm:hidden absolute end-5 top-5 z-10" square padded @click="isOpen = false" /> -->
			<AppHeaderNav class="flex flex-col gap-y-4" />
		</div>
	</USlideover>
</template>
<script setup lang="ts">
const isOpen = useState<boolean>('isOpen')
</script>