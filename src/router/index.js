import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/challenges',
    name: 'challenges',
    component: () => import('../views/ChallengeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/creative',
    name: 'creative',
    component: () => import('../views/CreativeView.vue')
  },
  {
    path: '/chatPDF',
    name: 'chatPDF',
    component: () => import('../views/ChatPDF.vue')
  },
  {
    path: '/promptPDF',
    name: 'promptPDF',
    component: () => import('../views/PromptPDF.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
