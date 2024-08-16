<template lang="pug">
SenderCategoryFilterTags(v-if="category.parent" :category="category.parent")
span.tag.is-medium {{ category.name }}
	button.delete(@click.prevent="dropCategory()")
</template>

<script lang="ts">
import {set} from 'lodash'
import {defineComponent, PropType} from 'vue'
import Category, {defaultCategory} from '@/types/categories/Category'
import useSendersStore from '@/pinia/senders'
import {useRouter, useRoute} from 'vue-router'

export default defineComponent({
	inheritAttrs: false,
	props: {
		category: {
			type: Object as PropType<Category>,
			default: defaultCategory()
		},
	},
	setup(props) {
		const router = useRouter()
		const route = useRoute()
		const senders_store = useSendersStore()

		const transformFilterCategory = (category: Category) => {
			if(category.id === props.category.id){
			}	else if(category.parent) {
				transformFilterCategory(category.parent)
			}
		}

		const dropCategory = () => {
			transformFilterCategory(props.category)
			if(route.name !== 'senders') router.push({name: 'senders'})
		}

		return {
			dropCategory,
		}
	}
})
</script>

<style scoped lang="scss">

</style>