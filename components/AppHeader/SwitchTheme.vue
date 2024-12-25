<script setup lang="ts">
const bannerIsOpen = useState<boolean>('bannerIsOpen')
const { theme, setTheme } = useThemes()
const items = [
	[{
		label: 'Green',
		click: () => setTheme('custom-green')
	}], [{ label: 'Red', click: () => setTheme('custom-red') }], [{ label: 'Blue', click: () => setTheme('custom-blue') }]
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
