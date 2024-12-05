<script setup lang="ts">
definePageMeta({
	title: 'pages.page4',
	middleware: ["auth"]
})

const user = useCookie<{ name: string }>('user')
</script>

<template>
	<div class="py-40 text-center">
		<h1 class="font-bold text-4xl lg:text-7xl">
			{{ $t('login.logined', { name: user.name }) }}
		</h1>
	</div>
</template>