import { defineStore } from "pinia";

export const globalStore = defineStore('global', {
    state: () => ({
        title: '',
        breadcrumbs: [
            {
                title: '对象存储',
                disabled: false,
            },
            {
                title: '概览',
                disabled: false,
            },
        ],
        fullscreen: false,  // 隐藏headbar和sidebar
        islogin: false,     // 是否已经登录
        user: {
            email: '',
            username: '',
        }
    }),
    getters: {
        isShowBar() {
            return (this.fullscreen == true) ? false : true;
        }
    },
    actions: {
        setTitle(title) {
            this.title = title
        },
        setShowbar(showbar) {
            this.fullscreen = !showbar
        },
        updateBreadcrumbs(title){
            this.breadcrumbs[1].title = title
        },
        logout() {
            this.islogin = false
            localStorage.removeItem('token')
        }
    }
});