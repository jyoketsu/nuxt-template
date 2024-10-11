<template>
	<div
		class="min-h-screen md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 md:px-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
		<aside class="h-[calc(100vh-var(--header-height)-69px)] hidden md:block md:sticky md:top-[var(--header-height)] py-4">
			<Aside />
		</aside>
		<slot />
	</div>
</template>