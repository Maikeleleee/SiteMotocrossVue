import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

console.log('Démarrage de l\'application...');

createApp(App).use(router).mount('#app');

console.log('Application montée sur #app');
