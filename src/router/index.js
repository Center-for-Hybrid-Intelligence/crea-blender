import {createRouter, createWebHistory} from 'vue-router'
import BlenderHomeView from '../views/BlenderHomeView.vue'
import HomeView from '../views/HomeView.vue'
import TilesHomeView from '../views/TilesHomeView.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/blender',
        name: 'blenderHome',
        component: BlenderHomeView,
    },
    {
        path: '/tiles',
        name: 'tilesHome',
        component: TilesHomeView,
    },
    {
        path: '/blender/challenges',
        name: 'blenderChallenges',
        component: () => import('../views/ChallengeView.vue')
    },
    {
        path: '/blender/creative',
        name: 'blenderCreative',
        component: () => import('../views/CreativeView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes

})
router.beforeEach((to, from, next) => {
    console.log(to)
    next()
})
export default router
