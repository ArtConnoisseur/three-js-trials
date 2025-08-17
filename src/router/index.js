import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/3D-Views/HelloWorld.vue'
import HomeView from '@/views/HomeView.vue'
import FirstText from '@/components/3D-Views/FirstText.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:[
        {
          path: 'basic',
          component: HelloWorld
        },
        {
          path: "first-text",
          component: FirstText
        }
      ]
    },
  ],
})

export default router
