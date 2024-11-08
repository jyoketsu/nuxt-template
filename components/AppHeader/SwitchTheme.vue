<script setup lang="ts">
const bannerIsOpen = useState<boolean>('bannerIsOpen')
const { theme, setTheme } = useThemes()
const items = [
	[{
		label: 'Green',
		click: () => setTheme('emerald')
	}], [{ label: 'Red', click: () => setTheme('rose') }], [{ label: 'Blue', click: () => setTheme('cyan') }]
]
setTheme(theme.value)
</script>

<template>
	<div class="relative">
		<UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
			<UButton color="gray" variant="ghost" icon="i-lucide:paintbrush" />
		</UDropdown>
	</div>
</template>
