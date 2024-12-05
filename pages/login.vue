<script setup lang="ts">
definePageMeta({
	title: 'pages.login'
})
const router = useRouter()
const route = useRoute()
const user = useCookie<{ name: string }>('user')
const logins = useCookie<number>('logins')

const redirect = route.query.redirect

const name = ref('')

const login = () => {
	logins.value = (logins.value || 0) + 1
	user.value = { name: name.value }
	router.push({ path: redirect?.toString() || '/' })
}

</script>

<template>
	<div class="w-full h-screen flex justify-center items-center">
		<div class="space-y-5">
			<h1 class="text-3xl mb-3">
				{{ $t('pages.login') }}
			</h1>
			<UInput v-model="name" class="w-72 m-auto" :placeholder="$t('login.namePlaceholder')" @keypress.enter="login()" />
			<div class="mt-3">
				<UButton icon="i-heroicons-user" :disabled="!name" name="Log in" @click="login">
					{{ $t('pages.login') }}
				</UButton>
			</div>
		</div>
	</div>
</template>