import { defineStore } from "pinia";

export const navDrawerStore = defineStore('navDrawer', {
    state: () => ({
        activeIndex: 0,
        items: [
            {
                title: '概览',
                value: '/overview',
                props: {
                    prependIcon: 'mdi-folder-outline',
                },
                active: false,
                auth: true,
            },
            {
                title: 'Bucket列表',
                value: '/bucket/list',
                props: {
                    prependIcon: 'mdi-list-box-outline',
                },
                active: false,
                auth: true,
            },
            {
                title: '权限管理',
                value: '/bucket/auth',
                props: {
                    prependIcon: 'mdi-account-circle-outline',
                },
                active: false,
                auth: true,
            },
            {
                title: '图片处理',
                value: '/bucket/imgsolve',
                props: {
                    prependIcon: 'mdi-check-decagram-outline',
                },
                active: false,
                auth: true,
            },
            {
                title: '文件备份',
                value: '/bucket/backup',
                props: {
                    prependIcon: 'mdi-flag-outline',
                },
                active: false,
                auth: true,
            },
            {
                title: '版本控制',
                value: '/version',
                props: {
                    prependIcon: 'mdi-tag-outline',
                },
                active: false,
                auth: true,
            },
            {
                title: '基本设置',
                value: '/setting',
                props: {
                    prependIcon: 'mdi-tune',
                },
                active: false,
                auth: true,
            },
        ]
    }),
});