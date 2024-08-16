import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()

// Pass Router to Pinia
// pinia.use(({store}) => store.$router = markRaw(router))

// Use Pinia persisted state
pinia.use(piniaPluginPersistedstate)

export default pinia