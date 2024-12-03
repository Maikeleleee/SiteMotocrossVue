import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Departements from '../views/Departements.vue';
import Circuits from '../views/Circuits.vue';

const routes = [
  { path: '/', component: Home }, // Page d'accueil
  { path: '/departements', component: Departements }, // Liste des départements
  { path: '/departements/:id', component: Circuits }, // Circuits d'un département
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
