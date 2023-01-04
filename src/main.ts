import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router } from './router'

import './assets/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Loader
import loader from './plugins/loader'
app.use(loader)
// Loader

app.mount('#app')
