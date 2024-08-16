<template lang="pug">
main
	.container.is-fullhd
		section.section
			.block To overwrite <b>Bulma’s Sass variables</b> with your <strong>own value</strong>
			.block
				.icon-text
					span.icon
						font-awesome-icon(icon="bars")
					span Menu
			.block
				button.button.is-primary(@click="switchTheme") Switch theme
		section.section
			h2.title Columns
			.columns
				.column(v-for="i in 4") To overwrite Bulma’s Sass variables with your own value
		section.section
			h2.title Smart Grid
			.grid.is-gap-2
				.cell(v-for="i in 4") To overwrite Bulma’s Sass variables with your own value
		section.section
			FormComponent
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import FormComponent from '@/components/app/Form.vue'

export default defineComponent({
	components: {
		FormComponent,
	},
	setup() {
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
