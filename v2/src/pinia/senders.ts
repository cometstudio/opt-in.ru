import {ref, shallowRef, computed} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios'
import SendersStore from '@/types/senders/SendersStore'
import PaginatedList from '@/types/app/PaginatedList'
import Sender from '@/types/senders/Sender'
import SendersFilter, {defaultSendersFilter} from '@/types/senders/SendersFilter'

const defineSendersStore = defineStore('senders', () => {
	const restored = shallowRef<boolean>(false)
	const is_restored = computed<boolean>(() => restored.value)
	const filter = ref<SendersFilter>(defaultSendersFilter())

	const setRestored = () => restored.value = true

	const reset = () => {
		console.log('senders.reset')

		filter.value = defaultSendersFilter()
	}

	const getSenderSuggestions = (): Promise<Sender[]> => new Promise((resolve, reject) => axios.post('/sender/suggestions')
		.then(r => resolve(r.data))
		.catch(reject)
	)

	const filterSenders = (): Promise<PaginatedList<Sender>> => new Promise((resolve, reject) => axios.post('/senders/filter', filter.value)
		.then(r => resolve(r.data))
		.catch(reject)
	)

	const getSender = (sender: Sender): Promise<Sender> => new Promise((resolve, reject) => axios.post('/sender/get', sender)
		.then(r => resolve(r.data))
		.catch(reject)
	)

	const refuseSender = (sender: Sender): Promise<Sender> => new Promise((resolve, reject) => axios.post('/sender/refuse', sender)
		.then(r => resolve(r.data))
		.catch(reject)
	)

	const allowSender = (sender: Sender): Promise<Sender> => new Promise((resolve, reject) => axios.post('/sender/allow', sender)
		.then(r => resolve(r.data))
		.catch(reject)
	)

	return {
		is_restored,
		filter,
		setRestored,
		reset,
		getSenderSuggestions,
		filterSenders,
		getSender,
		refuseSender,
		allowSender,
	}
}, {
	persist: {
		afterRestore: (ctx) => {
			ctx.store.setRestored()
		},
	},
})

const useSendersStore = (): SendersStore => defineSendersStore()

export default useSendersStore
