<template>
	<div class="w-full min-h-screen">
		<div
			class="w-full h-[var(--header-height)] bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50 lg:mb-0 lg:border-0">
			<slot name="header" />
		</div>
		<main class="min-h-[calc(100vh-var(--header-height))] relative">
			<div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<slot />
			</div>
		</main>
		<slot name="footer" />
	</div>
</template>