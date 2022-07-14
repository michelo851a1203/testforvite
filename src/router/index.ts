import { 
  createRouter, 
  createWebHistory, 
  RouteRecordRaw 
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/dashboard/Home.vue'),
      },
      {
        path: '/userInfo',
        name: 'UserInfo',
        component: () => import('../views/dashboard/UserInfo.vue'),
      },
    ],
  },
  {
    path: '/catchAll(.*)',
    name: 'notFound',
    component: () => import('../views/Notfound.vue'),
  },
  {
    path: '/NetWorkError',
    name: 'NetworkError',
    component: () => import('../views/NetworkError.vue'),
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router;
