import { RouteRecordRaw } from "vue-router";
import HomePage from "@/views/index.vue";
import Home from "@/views/Home.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/:id',
        component: Home
    },
]

export default routes;