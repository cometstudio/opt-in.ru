<template lang="pug">
.senders-filter
	form.senders-filter-form.block
		.columns
			.column
				.field.senders-filter-search-field.is-grouped
					.control.has-icons-right.has-icons-left
						input.input(v-model="senders_store.filter.content.sender.name" type="text" placeholder="Отправитель")
						span.icon.is-small.is-left
							font-awesome-icon(icon="fa-magnifying-glass")
						span.icon.is-right.is-clickable(v-if="senders_store.filter.content.sender.name")
							font-awesome-icon(icon="xmark" @click="resetSendersFilter")
				.tags(v-if="senders_store.filter.content.category")
					span.tag.is-medium
						SenderCategoryFilterTagComponent(:category="senders_store.filter.content.category")
						button.delete(@click.prevent="dropSendersCategory")
			.column.is-narrow(v-if="false")
				button.button.is-primary.is-outlined {{ t('app.actions.add') }}
</template>

<script lang="ts">
import {debounce, unset} from 'lodash'
import {defineComponent, watch, onBeforeMount, onBeforeUnmount} from 'vue'
import {useI18n} from 'vue-i18n'
import useSendersStore from '@/pinia/senders'
import useWatchers from '@/composables/useWatchers'
import {defaultSendersFilter} from '@/types/senders/SendersFilter'
import FieldErrorMessageComponent from '@/components/app/FieldErrorMessage.vue'
import SenderCategoryFilterTagsComponent from '@/components/senders/SenderCategoryFilterTags.vue'
import SenderCategoryFilterTagComponent from '@/components/senders/SenderCategoryFilterTag.vue'

export default defineComponent({
	components: {
		FieldErrorMessageComponent,
		SenderCategoryFilterTagsComponent,
		SenderCategoryFilterTagComponent,
	},
	setup(props, {emit}) {
		const {t} = useI18n()
		const senders_store = useSendersStore()

		const {
			watchers,
			unwatchAll,
		} = useWatchers([
			'senders_store_restored',
			'senders_filter_content',
		])

		const watchSendersFormContent = () => watchers['senders_filter_content'] = watch(() => senders_store.filter.content, emitSendersFilterContentUpdated, {
			deep: true,
			immediate: true,
		})

		const watchSendersStoreRestored = () => watchers['senders_filter_content'] = watch(() => senders_store.is_restored, (restored: boolean) => {
			if(restored) watchSendersFormContent()
		}, {
			immediate: true,
		})

		const emitSendersFilterContentUpdated = debounce(() => emit('updated', senders_store.filter.content), 300)

		const dropSendersCategory = () => {
			unset(senders_store.filter.content, 'category')
		}

		const resetSendersFilter = () => senders_store.filter = defaultSendersFilter()

		onBeforeMount(watchSendersStoreRestored)
		onBeforeUnmount(unwatchAll)

		return {
			t,
			senders_store,
			dropSendersCategory,
			resetSendersFilter,
		}
	}
})
</script>

<style scoped lang="scss">
.senders-filter{
	&-search-field{
		display: block;

		@include tablet(){
			display: flex;
			input{
				@include tablet(){
					min-width: 380px;
				}
			}
		}

	}
}
</style>