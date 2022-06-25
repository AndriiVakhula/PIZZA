import { createApp } from 'vue'

import App from './App.vue'
import store from './stores'
import router from './router'

const app = createApp(App)

app.use(store).use(router)

app.mount('#app')
