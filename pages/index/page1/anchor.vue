<script setup lang="ts">
const anchors = [{ title: 'Anchor 1', id: 'anchor1' }, { title: 'Anchor 2', id: 'anchor2' }, { title: 'Anchor 3', id: 'anchor3' }, { title: 'Anchor 4', id: 'anchor4' }];
</script>

<template>
	<div>
		<AnchorNav :anchors="anchors" class="top-[var(--header-height)]" />
		<div class="w-full space-y-5 py-5">
			<div v-for="anchor in anchors" :id="anchor.id"
				class="section scroll-mt-[calc(var(--header-height)+80px)] h-[600px] border rounded-lg">
				<p class="text-2xl font-bold text-center py-5">{{ anchor.title }}</p>
			</div>
		</div>
	</div>
</template>