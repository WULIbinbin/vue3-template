const routes: any[] = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: () => import( /* webpackChunkName: "page-index" */ '@/pages/index/index') },
  { path: '/reactive', component: () => import( /* webpackChunkName: "page-index" */ '@/pages/reactive/index') },
  { path: '/button', component: () => import( /* webpackChunkName: "page-index" */ '@/pages/button/index') },
  { path: '/fab', component: () => import( /* webpackChunkName: "page-index" */ '@/pages/fab/index') },
]

export default routes