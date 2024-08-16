<template lang="pug">
HeaderComponent
main
	router-view
FooterComponent
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HeaderComponent from '@/components/app/Header.vue'
import FooterComponent from '@/components/app/Footer_v2.vue'

export default defineComponent({
	components: {
		HeaderComponent,
		FooterComponent,
	},
	setup() {

		return {

		}
	}
})
</script>

<style lang="scss" scoped>

</style>