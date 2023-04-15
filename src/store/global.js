import { defineStore } from "pinia";

export const globalStore = defineStore('global', {
    state: () => ({
        title: '',
        breadcrumbs: [
            {
                title: '对象存储',
                disabled: false,
                // href: 'breadcrumbs_dashboard',
            },
            {
                title: '概览',
                disabled: false,
                // href: '',
            },
        ],
        fullscreen: false, // 隐藏headbar和sidebar
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
    }
});