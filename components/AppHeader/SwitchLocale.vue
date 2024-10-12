<template>
	<div class="relative">
		<UDropdown :items="items" :popper="{ offsetDistance: -40, placement: 'bottom-start' }">
			<UButton color="gray" variant="ghost" icon="i-lucide:languages"
				trailing-icon="i-heroicons-chevron-down-20-solid" />
		</UDropdown>
	</div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const items = [
	[{
		label: '简体中文',
		click: () => setLocale('zh')
	}], [{ label: 'English', click: () => setLocale('en') }]
]
</script>
