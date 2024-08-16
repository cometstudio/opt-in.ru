import './assets/styles/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// Axios
import {VueAxios, axios} from './axios'
app.use(VueAxios, axios)

// Pinia
import pinia from './pinia'
app.use(pinia)

// Router
import router from './router'
app.use(router)

// i18n
import i18n from './i18n'
app.use(i18n)

// Font awesome icons
import FontAwesomeIcon from './components/font-awesome'
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
