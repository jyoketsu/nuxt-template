<template>
	<div class="grid gap-5 lg:grid-cols-2">
		<UCard>
			<template #header>
				<p class="text-2xl">Use State</p>
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
				<p class="text-2xl">Data Fetching</p>
			</template>
			<pre>{{ data }}</pre>
		</UCard>
	</div>

</template>
<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000))
const sameCounter = useState('counter')
const { data } = await useFetch('/api/hello')
</script>