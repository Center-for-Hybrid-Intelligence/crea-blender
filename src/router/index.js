import {createRouter, createWebHistory} from 'vue-router'
import BlenderHomeView from '../views/Blender/BlenderHomeView.vue'
import HomeView from '../views/HomeView.vue'
import TilesHomeView from '@/views/Tiles/TilesHomeView.vue'
import TilesChallengeView from "@/views/Tiles/TilesChallengeView.vue";
import TilesCreativeDigitsView from "@/views/Tiles/TilesCreativeDigitsView.vue";
// import TilesCreativeDogsView from "@/views/Tiles/TilesCreativeDogsView.vue";


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
        path: '/tiles/challenges',
        name: 'tilesChallenges',
        component: TilesChallengeView,
    },
    {
        path: '/tiles/creative/digits',
        name: 'tilesCreativeDigits',
        component: TilesCreativeDigitsView,
    },
    {
        path: '/tiles/creative/dogs',
        name: 'tilesCreativeDogs',
        component: TilesCreativeDigitsView,
    },
    {
        path: '/blender/challenges',
        name: 'blenderChallenges',
        component: () => import('../views/Blender/BlenderChallengeView.vue')
    },
    {
        path: '/blender/creative',
        name: 'blenderCreative',
        component: () => import('../views/Blender/BlenderCreativeView.vue')
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
