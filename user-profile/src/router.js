import RegistrationPage from './components/RegistrationPage.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "Registration",
        component: RegistrationPage,
        path: "/",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;


