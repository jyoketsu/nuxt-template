<template>
	<div
		class="min-h-screen md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 md:px-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
		<aside class="hidden md:block md:sticky">
			<DocsNav />
		</aside>
		<main>
			<slot />
		</main>
	</div>
</template>