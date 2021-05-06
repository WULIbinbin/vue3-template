import { createRouter, createWebHashHistory } from 'vue-router'
const routes:any[] = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: () => import( /* webpackChunkName: "page-index" */ '@/pages/example/index/index') },
  { path: '/reactive', component: () => import( /* webpackChunkName: "page-index" */ '@/pages/example/reactive/index') },
  { path: '/router', component: () => import( /* webpackChunkName: "page-index" */ '@/pages/example/router/index') }
]

const router = createRouter({
  history: createWebHashHistory(),
  //scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router