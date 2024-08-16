import {computed, ref} from 'vue'
import {defineStore, getActivePinia} from 'pinia'
import axios from 'axios'
import AuthStore from '@/types/auth/AuthStore'
import AuthUser, {defaultAuthUser} from '@/types/auth/AuthUser'
import Captcha from '@/types/auth/Captcha'
import LoginForm from '@/types/auth/LoginForm'

const defineAuthStore = defineStore('auth', () => {
	const user = ref<AuthUser>(defaultAuthUser())
	const is_user_logged_in = computed<boolean>(() => !!user.value.api_token?.length)

	const reset = () => {
		console.log('auth.reset')

		user.value = defaultAuthUser()
	}

	const getCaptcha = (): Promise<Captcha> => new Promise((resolve, reject) => axios.get('/auth/captcha')
		.then(r => resolve(r.data))
		.catch(reject)
	)

	const logIn = (login_form: LoginForm): Promise<AuthUser> => new Promise((resolve, reject) => axios.post('/auth/login', login_form)
		.then(r => user.value = r.data)
		.then(resolve)
		.catch(reject)
	)

	const verifyLogin = (login_form: LoginForm): Promise<AuthUser> => new Promise((resolve, reject) => axios.post('/auth/login/verify', login_form)
		.then(r => user.value = r.data)
		.then(resolve)
		.catch(reject)
	)

	const logOut = (): Promise<AuthUser> => new Promise((resolve, reject) => {
		const pinia = getActivePinia()

		if(!pinia) {
			reject()
			return
		}

		localStorage.clear()

		// @ts-ignore
		pinia._s.forEach(store => store.reset())
		resolve(user.value)
	})

	return {
		user,
		is_user_logged_in,
		reset,
		getCaptcha,
		logIn,
		verifyLogin,
		logOut,
	}
}, {
	persist: true,
})

const useAuthStore = (): AuthStore => defineAuthStore()

export default useAuthStore
