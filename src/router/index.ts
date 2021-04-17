import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import TodoList from '../views/TodoList.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
