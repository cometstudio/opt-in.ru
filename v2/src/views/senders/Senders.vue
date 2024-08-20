<template lang="pug">
.container.is-fullhd
	section.section
		h1.title.is-size-2 Каталог отправителей
		SendersFilterComponent.block(@updated="filterSenders")
	section.section.senders
		.block
			SenderCardComponent(v-for="sender in senders.data" :sender="sender" :key="sender.id")
		PaginationComponent.block(v-if="senders.last_page > 1" :list="senders" @paginate="paginateSenders")
</template>

<script lang="ts">
import {defineComponent, ref, onBeforeMount, onBeforeUnmount} from 'vue'
import useSendersStore from '@/pinia/senders'
import PaginatedList, {defaultPaginatedList} from '@/types/app/PaginatedList'
import Sender from '@/types/senders/Sender'
import SendersFilterComponent from '@/components/senders/SendersFilter.vue'
import SenderCardComponent from '@/components/senders/SenderCard.vue'
import PaginationComponent from '@/components/app/Pagination.vue'
import useDOM from "@/composables/useDOM";

export default defineComponent({
	components: {
		SendersFilterComponent,
		SenderCardComponent,
		PaginationComponent,
	},
	setup() {
		const senders_store = useSendersStore()
		const DOM = useDOM()
		const senders = ref<PaginatedList<Sender>>(defaultPaginatedList())

		const filterSenders = (): Promise<PaginatedList<Sender>> => senders_store.filterSenders()
				.then(r => senders.value = r)

		const paginateSenders = async (page: number = 1): Promise<any> => {
			senders_store.filter.context.page = page
			await filterSenders()
		}

		onBeforeMount(() => {
			DOM.setHTMLDocumentTitle('Каталог отправителей')
		})

		return {
			senders,
			filterSenders,
			paginateSenders,
		}
	}
})
</script>

<style lang="scss" scoped>
.senders{
	> .block{
		//@include block(calc(var(--bulma-control-border-width) * 3));
	}
}
</style>
