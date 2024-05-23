import { createApp } from 'vue';
import App from './App.vue';
import routers from './route';
import './style.css';

createApp(App).use(routers).mount('#app');
