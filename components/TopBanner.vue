<script setup lang="ts">
const bannerIsOpen = useState<boolean>('bannerIsOpen', () => true)
</script>

<template>
	<div v-if="bannerIsOpen"
		class="w-full h-12 bg-[var(--theme-color-primary)] text-white flex items-center space-x-2 px-3">
		<div class="flex-1" />
		<UIcon name="i-heroicons:rocket-launch" class="w-5 h-5" />
		<span>{{ $t("home.news") }}</span>
		<div class="flex-1 flex justify-end">
			<UButton variant="ghost" size="sm" icon="i-heroicons-x-mark-20-solid" class="size-5 text-white dark:text-white justify-center hover:bg-opacity-20"
				square padded @click="bannerIsOpen = false" />
		</div>
	</div>
</template>