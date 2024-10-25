<script setup lang="ts">
const props = defineProps<{ locate: number[], name: string }>()
const locateProps = computed(() => props.locate)
const locateName = computed(() => props.name)
const center = ref(props.locate)
const config = useRuntimeConfig();

let map: any; // 地图对象
let marker: any; // 地图标记对象
let infoWindow: any;

onMounted(async () => {
	await loadMap()

	// @ts-ignore
	AMapLoader.load({
		key: config.public.amapKey, //申请好的Web端开发者 Key，调用 load 时必填
		version: "2.0", //指定要加载的 JS API 的版本，缺省时默认为 1.4.15
	})
		// @ts-ignore
		.then((AMap) => {
			map = new AMap.Map("amapContainer", {
				zoom: 15, // 设置地图的缩放级别
				center: locateProps.value, // 设置地图的中心点坐标 (公司地址)
			});
			// 添加标记
			marker = new AMap.Marker({
				position: new AMap.LngLat(locateProps.value[0], locateProps.value[1]),
			});
			// 创建气泡框（InfoWindow）
			infoWindow = new AMap.InfoWindow({
				content: `<div class="border px-[15px] py-[5px] bg-white dark:bg-gray-800 rounded-md">${locateName.value}</div>`, // 气泡框内容
				offset: new AMap.Pixel(0, -40), // 偏移量，使气泡框位置更合适
				isCustom: true, // 是否自定义气泡框样式
			});
			// 在地图上显示气泡框
			infoWindow.open(map, marker.getPosition());

			map.add(marker);
		})
		.catch((e: any) => {
			console.error(e); //加载错误提示
		});
})

watch(locateProps, (newVal,) => {
	// 更新标记的位置
	// @ts-ignore
	marker.setPosition(new AMap.LngLat(newVal[0], newVal[1]));

	// 更新 InfoWindow 的内容
	infoWindow.setContent(`<div class="border px-[15px] py-[5px] bg-white dark:bg-gray-800 rounded-md">${locateName.value}</div>`);

	// 更新 InfoWindow 的位置到新的标记位置
	infoWindow.open(map, marker.getPosition());

	// 设置地图中心点为新的地点
	// @ts-ignore
	map.setCenter(new AMap.LngLat(newVal[0], newVal[1]));

}, { deep: true })

function loadMap() {
	return new Promise<void>((resolve, reject) => {
		// @ts-ignore
		if (typeof AMap !== 'undefined') {
			resolve() // 如果已经加载过了，直接resolve
			return
		}

		// @ts-ignore
		window._AMapSecurityConfig = {
			securityJsCode: config.public.amapSecurityJsCode,
		};

		const script = document.createElement('script')
		script.src = 'https://webapi.amap.com/loader.js'
		script.async = true
		script.onload = () => resolve()
		script.onerror = () => reject(new Error('高德地图加载失败'))
		document.head.appendChild(script)
	})
}
</script>

<template>
	<div class="size-full" id="amapContainer"></div>
</template>