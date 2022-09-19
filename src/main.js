import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from "./views/Home.vue";
import Session from "./views/Session.vue";
import CreateProd from "./views/CreateProd.vue";
import UpdateProd from "./views/UpdateProd.vue";

import {
    createRouter,
    createWebHistory
} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/s', name: 'Session', component: Session },
        { path: '/c', name: 'CreateProd', component: CreateProd },
        { path: '/u', name: 'UpdateProd', component: UpdateProd }
    ]
})

createApp(App).use(router).mount('#app')