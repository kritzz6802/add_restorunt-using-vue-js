import homePage from './components/homePage.vue'
import signUp from './components/signUp.vue'
import loginPage from './components/loginPage.vue'
import addResto from './components/addResto.vue'
import updateResto from './components/updateResto.vue'
import { createRouter,createWebHistory } from 'vue-router'
const routes=[
    {
    name:'homePage',
    component:homePage,
    path:'/'
    },
    {
    name:'signUp',
    component:signUp,
    path:'/signUp'
    },
    {
    name:'loginPage',
    component:loginPage,
    path:'/login'
    },
    {
    name:'addResto',
    component:addResto,
    path:'/add'
    },
    {
    name:'updateResto',
    component:updateResto,
    path:'/update/:id'
    }
];
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;