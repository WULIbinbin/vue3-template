import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: () => import( /* webpackChunkName: "page-index" */ '@/pages/index/index.jsx') },
  { path: '/reactive', component: () => import( /* webpackChunkName: "page-index" */ '@/pages/reactive/index.jsx') },
  { path: '/router', component: () => import( /* webpackChunkName: "page-index" */ '@/pages/router/index.jsx') }
]

console.log(routes)

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router