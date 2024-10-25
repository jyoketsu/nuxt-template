<script setup lang="ts">
const address = ref(0)
const { t } = useI18n()
const coords = ref([[119.845241, 31.684509], [119.942441, 31.701252], [121.499861, 31.237035]])

const options = [{
	name: t('page1.amap.address0'),
	value: 0
}, {
	name: t('page1.amap.address1'),
	value: 1

}, {
	name: t('page1.amap.address2'),
	value: 2
}]
</script>

<template>
	<div class="w-full space-y-4 py-[18px]">
		<USelect v-model="address" :options="options" option-attribute="name" class="w-fit"/>
		<div class="w-full h-[600px]">
			<ClientOnly>
				<Amap :locate="coords[address]" :name="$t(`page1.amap.address${address}`)" />
			</ClientOnly>
		</div>
		<UButton to="https://lbs.amap.com/" target="_blank" variant="link">{{ $t('page1.amap.amapPlatform') }}</UButton>
		<UButton to="https://lbs.amap.com/tools/picker" target="_blank" variant="link">{{ $t('page1.amap.picker') }}
		</UButton>
	</div>
</template>