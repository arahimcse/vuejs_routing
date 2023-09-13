import { createRouter, createWebHistory } from 'vue-router' 
const routes =[
    {
        path:"/",
        name:"HomePage",
        component:import('../components/HelloWorld.vue')
    },
    {
         path:"/about",
        name:"AboutPage",
        component:import('../components/AboutPage.vue')
    },
    {
        path:"/contract",
        name:"ContractPage",
        component:import('../components/ContractPage.vue')
    },
    {
        path:"/user/:id?",
        name:"UserPage",
        component:import('../components/UserPage.vue'),
        children:[
            {path:"profiles", component:import('../components/Profile.vue')},
            {path:"setting", component:import('../components/Setting.vue')}
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name:"NotFound",
        component:import('../components/NotFoundPage.vue')

    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;