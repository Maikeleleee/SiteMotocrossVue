import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';

console.log('Démarrage de Vue'); // Log pour tester
createApp(App).mount('#app');
console.log('Vue est monté sur #app'); // Log après le montage
