import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ShisanZougen from './components/ShisanZougen.vue'

const routes = [
    { path: '/', name: 'nameHome', component: HelloWorld },
    { path: '/search', name: 'nameSearch', component: ShisanZougen },
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router