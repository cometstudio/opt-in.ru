<template lang="pug">
SenderCategoryFilterTag(v-if="category.parent" :category="category.parent")
span.slash(v-if="category.parent") /
span {{ category.name }}
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import Category, {defaultCategory} from '@/types/categories/Category'

export default defineComponent({
	inheritAttrs: false,
	props: {
		category: {
			type: Object as PropType<Category>,
			default: defaultCategory()
		},
	},
	setup() {
		return {}
	}
})
</script>

<style scoped lang="scss">
.slash{
	padding: 0 .5em;
}
</style>