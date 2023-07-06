import {createRouter, createWebHistory} from 'vue-router'
import BlenderHomeView from '../views/Blender/BlenderHomeView.vue'
import HomeView from '../views/HomeView.vue'
import TilesHomeView from '@/views/Tiles/TilesHomeView.vue'
import TilesChallengeView from "@/views/Tiles/TilesChallengeView.vue";
import TilesCreativeDigitsView from "@/views/Tiles/TilesCreativeDigitsView.vue";
import TilesCreativeDogsView from "@/views/Tiles/TilesCreativeDogsView.vue";
import BlenderChallengeView from "@/views/Blender/BlenderChallengeView.vue";
import BlenderCreativeView from "@/views/Blender/BlenderCreativeView.vue";
import AboutView from "@/views/AboutView.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta:{
            enterClass: "animate__animated animate__fadeIn",
            leaveClass: "animate__animated animate__fadeOut"
        }
    },
    {
        path: '/blender',
        name: 'blenderHome',
        component: BlenderHomeView,
        meta:{
            enterClass: "animate__animated animate__fadeIn",
            leaveClass: "animate__animated animate__fadeOut"
        }
    },
    {
        path: '/tiles',
        name: 'tilesHome',
        component: TilesHomeView,
        meta:{
            enterClass: "animate__animated animate__fadeIn",
            leaveClass: "animate__animated animate__fadeOut"
        }
    },
    {
        path: '/tiles/challenges',
        name: 'tilesChallenges',
        component: TilesChallengeView,
        meta:{
            enterClass: "animate__animated animate__fadeIn",
            leaveClass: "animate__animated animate__fadeOut"
        }
    },
    {
        path: '/tiles/creative/digits',
        name: 'tilesCreativeDigits',
        component: TilesCreativeDigitsView,
        meta:{
            enterClass: "animate__animated animate__fadeIn",
            leaveClass: "animate__animated animate__fadeOut"
        }
    },
    {
        path: '/tiles/creative/dogs',
        name: 'tilesCreativeDogs',
        component: TilesCreativeDogsView,
        meta:{
            enterClass: "animate__animated animate__fadeIn",
            leaveClass: "animate__animated animate__fadeOut"
        }
    },
    {
        path: '/blender/challenges',
        name: 'blenderChallenges',
        component: BlenderChallengeView,
        meta:{
            enterClass: "animate__animated animate__fadeIn",
            leaveClass: "animate__animated animate__fadeOut"
        }
    },
    {
        path: '/blender/creative',
        name: 'blenderCreative',
        component: BlenderCreativeView,
        meta:{
            enterClass: "animate__animated animate__fadeIn",
            leaveClass: "animate__animated animate__fadeOut"
        }
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        meta:{
            enterClass: "animate__animated animate__fadeIn",
            leaveClass: "animate__animated animate__fadeOut"
        }
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
