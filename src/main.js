import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// Pinia
import pinia from '@/store/init.js'
app.use(pinia);

// HTTP
import http from './pkg/http/http.js'
app.config.globalProperties.http = http // 注册全局HTTP请求

import request from './pkg/http/request.js'
app.config.globalProperties.r = request // 注册内敛HTTP函数

// Global store 全局变量
import { globalStore } from '@/store/global.js'
const global = globalStore();
app.config.globalProperties.global = global; // 注册全局store

// Transfer 文件传输
import { tranferStore } from './store/transfer'
const transfer = tranferStore();
app.config.globalProperties.transfer = transfer;

// Dialog 内嵌文本的普通Dialog
import { dialogStore } from '@/store/dialog.js'
const dialog = dialogStore();
app.config.globalProperties.dialog = dialog; // 注册全局dialog

// Snackbar 底部提示条
import { snackbarStore } from '@/store/snackbar.js'
const snackbar = snackbarStore();
app.config.globalProperties.snackbar = snackbar; // 注册全局snackbar

// Popup 内嵌不同Component的Dialog
import { popupStore } from './store/popup'
const popup = popupStore();
app.config.globalProperties.popup = popup;

// Vuetify 设置
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

// Register path
import path from '@/router/path.js'
app.config.globalProperties.path = path;

app.config.globalProperties.jumpView = (value, title = '') => {
    router.push(value)
    if(title != '') global.setTitle(title)
}

app.config.globalProperties.settoken = (token = '') => {
    localStorage.setItem('token', token)
}

app.use(router)

app.mount('#app')

