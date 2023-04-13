import { createApp } from 'vue'
import http from './pkg/http/http.js'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)

app.config.globalProperties.http = http

app.mount('#app')
