<template>
	<div class="relative w-full min-h-screen">
		<div class="relative w-full">
			<slot name="news" />
		</div>
		<AppHeader />
		<main class="min-h-[calc(100vh-var(--header-height))] relative">
			<div class="absolute inset-0 h-48 bg-gradient-to-b from-primary-500/10 to-background"></div>
			<div class="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<slot />
			</div>
		</main>
		<AppFooter />
		<AppHeaderMobile />
		<ScrollToTop />
	</div>
</template>