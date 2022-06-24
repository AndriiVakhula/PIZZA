import { createApp } from 'vue'

import App from './App.vue'
import store from './stores'
import router from './router'
// import "/assets/styles/style.scss";
// import './assets/styles/style.scss'
const app = createApp(App)

app.use(store).use(router)

app.mount('#app')
