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
                show: true,
            },
            {
                title: 'Bucket列表',
                value: '/bucket/list',
                props: {
                    prependIcon: 'mdi-list-box-outline',
                },
                active: false,
                show: true,
            },
            {
                title: '权限管理',
                value: '/bucket/auth',
                props: {
                    prependIcon: 'mdi-account-circle-outline',
                },
                active: false,
                show: true,
            },
            {
                title: '文件备份',
                value: '/bucket/backup',
                props: {
                    prependIcon: 'mdi-flag-outline',
                },
                active: false,
                show: true,
            },
            {
                title: '版本控制',
                value: '/bucket/versioncontrol',
                props: {
                    prependIcon: 'mdi-tag-outline',
                },
                active: false,
                show: true,
            },
            {
                title: '基本设置',
                value: '/bucket/basicsetting',
                props: {
                    prependIcon: 'mdi-tune',
                },
                active: false,
                show: true,
            },
        ]
    }),
});