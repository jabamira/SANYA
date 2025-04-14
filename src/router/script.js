import { createRouter } from 'vue-router'
import HomeVue from '../views/HomeView.vue'
import { createWebHashHistory } from 'vue-router';
import Clicker from '../views/Clicker.vue';
import Book from '../views/Book.vue';
const routes = [
    {
        path:'/Home',
        component: HomeVue
    },
    {
        path:'/Book',
        component: Book
    },
    {
        path:'/Click',
        component: Clicker
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;