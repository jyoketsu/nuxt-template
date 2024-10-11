<template>
	<ul>
		<li>
			<!-- active-class：控制当前路由和子路由时的激活状态。 -->
			<!-- exact-active-class：控制只有当前路由匹配时才应用激活状态。 -->
			<NuxtLink to="/page1" active-class="nuxt-link-active">Page1</NuxtLink>
		</li>
		<li>
			<NuxtLink to="/docs" active-class="nuxt-link-active">Docs</NuxtLink>
		</li>
		<li>
			<NuxtLink to="/page3" active-class="nuxt-link-active">Page3</NuxtLink>
		</li>
		<li>
			<NuxtLink to="/page4" active-class="nuxt-link-active">Page4 (Need Login)</NuxtLink>
		</li>
	</ul>
</template>