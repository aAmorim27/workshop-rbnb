import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/index.vue';
import Home from '@/views/home/_id.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/home/:id',
    component: Home,
  },
];

export default routes;
