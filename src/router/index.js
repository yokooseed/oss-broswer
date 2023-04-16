import { createRouter, createWebHashHistory } from 'vue-router'
// import { globalStore } from '../store/global'
import path from './path.js'

const routes = [
  {
    path: path.root,
    name: 'root',
    meta: {
      title: '概览',
    },
    component: () => import('@/views/overview.vue')
  },
  {
    path: path.register,
    name: 'register',
    meta: {
      title: '注册',
    },
    component: () => import('@/views/user/register.vue')
  },
  {
    path: path.login,
    name: 'login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/user/login.vue')
  },
  {
    path: path.bucketList,
    name: 'bucketList',
    meta: {
      title: 'Bucket列表',
    },
    component: () => import('@/views/bucket/list.vue')
  },
  {
    path: path.authManage,
    name: 'authManage',
    meta: {
      title: '权限管理',
    },
    component: () => import('@/views/bucket/auth.vue')
  },
  {
    path: path.bucketDetail + '/:id',
    name: 'bucketDetail',
    meta: {
      title: 'Bucket详情',
    },
    component: () => import('@/views/bucket/detail.vue')
  },
  {
    path: path.overview,
    name: 'overview',
    meta: {
      title: '概览',
    },
    component: () => import('@/views/overview.vue')
  },
  {
    path: path.version,
    name: 'version',
    meta: {
      title: '版本控制',
    },
    component: () => import('@/views/version-control.vue')
  },
  {
    path: path.setting,
    name: 'setting',
    meta: {
      title: '基本设置',
    },
    component: () => import('@/views/setting.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
