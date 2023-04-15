import { createRouter, createWebHashHistory } from 'vue-router'
// import { globalStore } from '../store/global'

const routes = [
  {
    path: '/',
    name: 'root',
    meta: {
      title: '概览',
    },
    component: () => import('@/views/overview.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '注册',
    },
    component: () => import('@/views/user/register.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/user/login.vue')
  },
  {
    path: '/bucket/list',
    name: 'bucketList',
    meta: {
      title: 'Bucket列表',
    },
    component: () => import('@/views/bucket/list.vue')
  },
  {
    path: '/overview',
    name: 'overview',
    meta: {
      title: '概览',
    },
    component: () => import('@/views/overview.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
