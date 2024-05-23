import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/home.vue';
import Form from './pages/form.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/form',
    component: Form,
  },
];

const routers = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default routers;

