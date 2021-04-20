import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: () => import( /* webpackChunkName: "page-index" */ '@/pages/example/index/index.jsx') },
  { path: '/reactive', component: () => import( /* webpackChunkName: "page-index" */ '@/pages/example/reactive/index.jsx') },
  { path: '/router', component: () => import( /* webpackChunkName: "page-index" */ '@/pages/example/router/index.jsx') }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router