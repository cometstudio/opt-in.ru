<template lang="pug">
RouterView
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, onMounted} from 'vue'
import useAppStore from '@/pinia/app'

export default defineComponent({
	setup() {
		useAppStore()

		let themes = [
			'dark',
			'light'
		]

		const switchTheme = () => {
			document.querySelector("html")?.setAttribute('data-theme', themes[0])
			document.querySelector("html")?.setAttribute('class', `theme-${themes[0]}`)
			themes.reverse()
		}

		onMounted(switchTheme)

		return {
			switchTheme,
		}
	}
})
</script>

<style lang="scss" scoped>
</style>
