import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/bio'
  },
  {
    path: '/bio',
    name: 'bio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/obamahedron',
    name: 'Obamahedron',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/bio'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
