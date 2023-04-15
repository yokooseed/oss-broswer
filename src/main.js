import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// HTTP
import http from './pkg/http/http.js'
app.config.globalProperties.http = http // 注册全局HTTP请求

// Pinia
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

// Global store
import { globalStore } from '@/store/global.js'
const global = globalStore();
app.config.globalProperties.global = global; // 注册全局store

// Dialog
import { dialogStore } from '@/store/dialog.js'
const dialog = dialogStore();
app.config.globalProperties.dialog = dialog; // 注册全局dialog

// Snackbar
import { snackbarStore } from '@/store/snackbar.js'
const snackbar = snackbarStore();
app.config.globalProperties.snackbar = snackbar; // 注册全局snackbar

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            light: {
                dark: false,
                color: {
                    primary: "#52459F",
                }
            }
        }
    }
})
app.use(vuetify)

// 注册全局请求封装
// app.config.globalProperties.request

// Vue-router
import router from './router'
router.beforeEach((to, from, next) => {
    if(to.name == from.name) return
    if(to.name == 'login' || to.name == 'register'){
        global.setShowbar(false)
    } else if(global.isShowBar == false) {
        global.setShowbar(true)
    }
    global.updateBreadcrumbs(to.meta.title)
    next()
})

app.config.globalProperties.jumpView = (value, title = '') => {
    router.push(value)
    global.setTitle(title)
    // snackbar.show(title, 1000)
    dialog.show(title, value)
}

app.use(router)

app.mount('#app')
