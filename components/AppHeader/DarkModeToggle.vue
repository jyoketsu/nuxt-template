<template>
	<ClientOnly>
		<UButton :icon="icon" color="gray" variant="ghost" aria-label="DarkButton" @click="toggleMode" />
		<template #fallback>
			<div class="w-8 h-8" />
		</template>
	</ClientOnly>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const colorMode = useColorMode()

// Computed property to get the icon based on the color mode
const icon = computed(() => {
	if (colorMode.preference === 'system') {
		return 'i-ph:desktop'
	}
	return colorMode.value === 'dark' ? 'i-ph:moon' : 'i-ph:sun'
})

// Computed property to manage the color mode with system mode included
const isDark = computed({
	get() {
		return colorMode.value === 'dark'
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
	}
})

// Toggle between 'dark', 'light', and 'system' modes
const toggleMode = () => {
	if (colorMode.preference === 'dark') {
		colorMode.preference = 'light'
	} else if (colorMode.preference === 'light') {
		colorMode.preference = 'system'
	} else {
		colorMode.preference = 'dark'
	}
}
</script>
