import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Circuits from '../views/Circuits.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/circuits', component: Circuits },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
