<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps<{
	anchors: {
		title: string;
		id: string;
	}[]
}>();

const activeSection = ref('');
let observer: IntersectionObserver | null = null;
const route = useRoute();
const router = useRouter();

const scrollToAnchor = (id: string) => {
	const targetElement = document.getElementById(id);
	if (targetElement) {
		targetElement.scrollIntoView({ behavior: 'smooth' });
		// 手动设置 activeSection
		activeSection.value = id;
		// 禁用观察器，防止跳转时触发
		if (observer) observer.disconnect();
		// 重新启用观察器
		setTimeout(() => {
			if (observer) {
				const sections = document.querySelectorAll('.section');
				sections.forEach((section) => observer?.observe(section));
			}
		}, 500); // 延迟观察器，确保滚动完成
	}
};

onMounted(() => {
	const sections = document.querySelectorAll('.section');
	observer = new IntersectionObserver((entries) => {
		for (let i = 0; i < entries.length; i++) {
			const entry = entries[i];
			if (entry.isIntersecting) {
				activeSection.value = entry.target.id;
				break;
			}
		}
	}, {
		threshold: 0.4, // 当40%可见时触发
	});

	sections.forEach(section => observer!.observe(section));

	onUnmounted(() => {
		sections.forEach(section => observer!.unobserve(section));
		observer = null;
	});

	// 检查路由 hash 值并滚动到对应锚点
	if (route.hash) {
		scrollToAnchor(route.hash.replace('#', ''));
	}
});
</script>

<template>
	<div
		class="w-full bg-white/50 dark:bg-black/50 sticky top-0 h-[80px] backdrop-blur-lg border-b dark:border-gray-700">
		<ul class="mx-auto w-full max-w-7xl h-full px-4 sm:px-6 lg:px-10 flex justify-around items-center z-[999]">
			<li v-for="(anchor, index) in anchors" :key="index" class="relative">
				<NuxtLink :to="`#${anchor.id}`" class="nuxt-anchor" :class="{ 'text-primary': activeSection === anchor.id }"
					@click.prevent="scrollToAnchor(anchor.id)">
					{{ anchor.title }}
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>
