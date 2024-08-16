import axios from 'axios'
import VueAxios from 'vue-axios'
import {getActivePinia} from 'pinia'
import router from '@/router'
import useAuthStore from '@/pinia/auth'

axios.interceptors.request.use(function (config) {
    const auth_store = useAuthStore()

    config.baseURL = import.meta.env.VITE_API_URL
    config.headers['Accept'] = 'application/json'
    if (auth_store.is_user_logged_in) config.headers.Authorization = `Bearer ${auth_store.user.api_token}`

    return config
},function (e) {
    return Promise.reject(e)
})

axios.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response
},   (e) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
        if (e.response.status === 401){
            const pinia = getActivePinia()
            // @ts-ignore
            auth_store.logout().then(() => router.push({ name: 'auth' })).then(() => pinia._s.forEach((store) => store.$reset()))
        }

        return Promise.reject(e)
})

export {
    VueAxios,
    axios
}