import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import IndexView from '../views/IndexView.vue'
import JobsView from '../views/JobsView.vue'
import PostJobView from '../views/PostJobView.vue'
import AboutView from '../views/AboutView.vue'
import CandidatesView from '../views/CandidatesView.vue'
import PostResumeView from '../views/PostResumeView.vue'
import JobDetailsView from '../views/JobDetailsView.vue'
import ResumeView from '../views/ResumeView.vue'
import CompanyView from '../views/CompanyView.vue'
import BlogView from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'
import TestimonialsView from '../views/TestimonialsView.vue'
import OptionsView from '../views/OptionsView.vue'

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
  },  
  {
    path: '/candidatos',
    name: 'candidatos',    
    component: CandidatesView
  },  
  {
    path: '/cadastrar_curriculo',
    name: 'cadastrar_curriculo',    
    component: PostResumeView
  },
  {
    path: '/detalhes_vaga',
    name: 'detalhes_vaga',    
    component: JobDetailsView
  },
  {
    path: '/curriculo',
    name: 'curriculo',    
    component: ResumeView
  },
  {
    path: '/empresa',
    name: 'empresa',    
    component: CompanyView
  },
  {
    path: '/blog',
    name: 'blog',    
    component: BlogView
  },
  {
    path: '/postagem',
    name: 'postagem',    
    component: PostView
  },
  {
    path: '/depoimentos',
    name: 'depoimentos',    
    component: TestimonialsView
  },
  {
    path: '/opcoes',
    name: 'opcoes',    
    component: OptionsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
