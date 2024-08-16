import {defineStore} from 'pinia'
import axios from 'axios'
import {setGlobalLocale} from '@/i18n'

const useAppStore = defineStore('app', () => {
	const reset = () => {
		console.log('app.reset')
	}
	const apiPing = (): Promise<string> => new Promise((resolve, reject) => axios.get('/ping')
		.then(r => resolve(r.data))
		.catch(reject)
	)

	return {
		reset,
		apiPing,
	}
}, {
	persist: {
		afterRestore: ctx => {
			setGlobalLocale()
		}
	},
})

export default useAppStore
