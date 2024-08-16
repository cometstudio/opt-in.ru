<template lang="pug">
.pagination.is-flex-desktop.is-justify-content-space-between.is-align-items-flex-start
	.field.pagination-alt-nav.is-grouped
		.control
			button.button.pagination-previous(
				@click="list.current_page === 1 ? () => false : paginateLeft(list.current_page - 1)"
				:class="{'is-loading': isProcessRunning('paginate_left')}"
				:disabled="list.current_page === 1")
				span.icon
					font-awesome-icon(icon="fa-arrow-left-long")
				span {{ t('app.pagination.previous') }}
		.control.pagination-alt-nav-input
			input.input(v-model="list.current_page" @change="paginate(list.current_page)" type="text")
		.control
			button.button.pagination-next(
				@click="list.current_page === list.last_page ? () => false : paginateRight(list.current_page + 1)"
				:class="{'is-loading': isProcessRunning('paginate_right')}"
				:disabled="list.current_page === list.last_page")
				span {{ t('app.pagination.next') }}
				span.icon
					font-awesome-icon(icon="fa-arrow-right-long")
	nav.has-text-weight-semibold
		.buttons
			button.button.pagination-link(@click="paginateFirst" :class="{'is-current': list.current_page === 1,'is-loading': isProcessRunning('paginate_first')}" :disabled="list.current_page === 1") 1
			span.pagination-ellipsis(v-if="(list.last_page > 2) && (list.current_page === 1 || list.current_page > 2)") &hellip;

			button.button.pagination-link(v-if="(list.current_page > 1) && (list.current_page < list.last_page)" :class="{'is-current': (list.current_page > 1) && (list.current_page < list.last_page)}" :disabled="list.current_page") {{ list.current_page }}

			span.pagination-ellipsis(v-if="list.current_page > 1 && list.current_page < list.last_page - 1") &hellip;
			button.button.pagination-link(v-if="list.last_page !== 1" @click="paginateLast(list.last_page)" :class="{'is-current': list.current_page === list.last_page, 'is-loading': isProcessRunning('paginate_last')}" :disabled="list.current_page === list.last_page") {{ list.last_page }}
</template>

<script lang="ts">
import {defineComponent, PropType, watch, onBeforeMount, onBeforeUnmount} from 'vue'
import {useI18n} from 'vue-i18n'
import PaginatedList from '@/types/app/PaginatedList'
import useWatchers from '@/composables/useWatchers'
import useProcesses from '@/composables/useProcesses'

export default defineComponent({
	props: {
		list: {
			type: Object as PropType<PaginatedList<any>>,
			required: true
		}
	},
	setup(props, {emit}) {
		const {t} = useI18n()

		const {
			runProcess,
			resetProcesses,
			isProcessRunning,
		} = useProcesses([
			'paginate_left',
			'paginate_right',
			'paginate_first',
			'paginate_last',
		])

		const paginate = (page: number) => emit('paginate', page)

		const paginateLeft = (page: number) => {
			runProcess('paginate_left')
			emit('paginate', page)
		}

		const paginateRight = (page: number) => {
			runProcess('paginate_right')
			emit('paginate', page)
		}

		const {
			watchers,
			unwatchAll
		} = useWatchers([
			'current_page'
		])

		const paginateFirst = () => {
			runProcess('paginate_first')
			emit('paginate', 1)
		}

		const paginateLast = (page: number) => {
			runProcess('paginate_last')
			emit('paginate', page)
		}

		const watchCurrentPage = () => watchers['current_page'] = watch(() => props.list.current_page, resetProcesses, {
			immediate: true
		})

		onBeforeMount(watchCurrentPage)
		onBeforeUnmount(unwatchAll)

		return {
			t,
			isProcessRunning,
			paginateFirst,
			paginateLeft,
			paginateRight,
			paginateLast,
			paginate,
		}
	}
})

</script>

<style lang="scss" scoped>
.pagination {
	&-alt-nav{
		&-input{
			width: 5em;
		}
	}
}
</style>
