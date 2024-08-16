<template lang="pug">
SenderCategoryBreadcrumb(v-if="category.parent" :category="category.parent")
li(itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem")
	a.sender-categories-breadcrumb(@click="filterCategory(category)" itemprop="item")
		span(itemprop="name") {{ category.name }}
</template>

<script lang="ts">
import {set} from 'lodash'
import {defineComponent, PropType} from 'vue'
import Category, {defaultCategory} from '@/types/categories/Category'
import useSendersStore from '@/pinia/senders'
import {useRouter} from 'vue-router'

export default defineComponent({
	inheritAttrs: false,
	props: {
		category: {
			type: Object as PropType<Category>,
			default: defaultCategory()
		},
	},
	setup() {
		const router = useRouter()
		const senders_store = useSendersStore()

		const filterCategory = (category: Category) => {
			set(senders_store.filter.content, 'category', category)
			router.push({name: 'senders'})
		}

		return {
			filterCategory,
		}
	}
})
</script>

<style scoped lang="scss">

</style>