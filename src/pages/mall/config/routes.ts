const routes: any[] = [
  { path: "/mall", redirect: "/mall/home" },
  {
    path: "/mall",
    component: () =>
      import(/* webpackChunkName: "mall" */ "@/pages/mall/index"),
    children: [
      {
        path: "home",
        component: () =>
          import(/* webpackChunkName: "mall" */ "@/pages/mall/home/index"),
      },
      {
        path: "cart",
        component: () =>
          import(/* webpackChunkName: "mall" */ "@/pages/mall/cart/index"),
      },
      {
        path: "mine",
        component: () =>
          import(/* webpackChunkName: "mall" */ "@/pages/mall/mine/index"),
      },
    ],
  },
];

export default routes;
