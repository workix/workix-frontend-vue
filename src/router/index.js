import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import IndexView from '../views/IndexView.vue'
import JobsView from '../views/JobsView.vue'
import PostJobView from '../views/PostJobView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView
  },
  {
    path: '/vagas',
    name: 'vagas',
    component: JobsView
  },  
  {
    path: '/cadastrar_vaga',
    name: 'cadastrar_vagas',
    component: PostJobView
  },  
  {
    path: '/sobre_nos',
    name: 'sobre_nos',    
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
