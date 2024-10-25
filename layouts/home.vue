<template>
	<div class="w-full min-h-screen">
		<div class="w-full">
			<slot name="news" />
		</div>
		<AppHeader />
		<main class="min-h-[calc(100vh-var(--header-height))] relative">
			<div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<slot />
			</div>
		</main>
		<AppFooter />
		<MobileNav />
		<ScrollToTop />
	</div>
</template>