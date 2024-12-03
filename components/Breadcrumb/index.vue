<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const navs = getNavs()

const links = computed(() => {
	const currentPath = getOriginalPath(route.path);
	const paths = generateBreadcrumbs(currentPath);
	return paths.map(path => {
		const nav = findNav(path, navs);
		return {
			label: nav ? t(nav.title) : '',
			to: nav ? localePath(nav.path) : '',
		}
	})
})

/**
 * Recursively search for a navigation item with the given path.
 * @param {string} path The path to search for.
 * @param {Nav[]} navs The navigation items to search.
 * @returns {Nav | undefined} The navigation item if found, undefined otherwise.
 */
function findNav(path: string, navs: Nav[]): (Nav | undefined) {
	for (let index = 0; index < navs.length; index++) {
		const nav = navs[index];
		if (nav.path === path) {
			return nav;
		}

		if (nav.subLinks) {
			const subNav = findNav(path, nav.subLinks);
			if (subNav) {
				return subNav;
			}
		}
	}
}

/**
 * Generates a list of breadcrumb paths from a given path.
 * Each breadcrumb is an accumulated path segment, starting from the root.
 * 
 * @param {string} path - The full path to be converted into breadcrumbs.
 * @returns {string[]} An array of breadcrumb paths, starting with the root path ('/').
 */
function generateBreadcrumbs(path: string): string[] {
	const segments = path.split('/').filter(Boolean);
	let accumulatedPath = '';

	const breadcrumbs = segments.map(segment => {
		accumulatedPath += `/${segment}`;
		return accumulatedPath;
	});

	return ['/', ...breadcrumbs];
}

/**
 * Given a path, returns the original path without the locale prefix.
 * If the path is already without the locale prefix, returns the original path.
 * If the path is the locale prefix only, returns '/'.
 * @param {string} path - The path to be converted.
 * @returns {string} The original path without the locale prefix.
 */
function getOriginalPath(path: string): string {
	const prefix = `/${locale.value}`;
	return path.startsWith(prefix) ? path.replace(prefix, '') || '/' : path;
}
</script>

<template>
	<div class="px-1 py-3">
		<UBreadcrumb :links="links" />
	</div>
</template>