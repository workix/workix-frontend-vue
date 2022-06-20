import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import IndexView from '../views/IndexView.vue'
import JobsView from '../views/JobsView.vue'
import Jobs2View from '../views/Jobs2View.vue'
import PostJobView from '../views/PostJobView.vue'
import AboutView from '../views/AboutView.vue'
import CandidatesView from '../views/CandidatesView.vue'
import Candidates2View from '../views/Candidates2View.vue'
import PostResumeView from '../views/PostResumeView.vue'
import JobDetailsView from '../views/JobDetailsView.vue'
import ResumeView from '../views/ResumeView.vue'
import CompanyView from '../views/CompanyView.vue'
import BlogView from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'
import TestimonialsView from '../views/TestimonialsView.vue'
import OptionsView from '../views/OptionsView.vue'
import SearchView from '../views/SearchView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import ProfileView from '../views/ProfileView.vue'
import MyJobsView from '../views/MyJobsView.vue'

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(getAuth(), user => {
      removeListener();
      resolve(user)
    }, reject)

  })
}

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
    path: '/vagas2',
    name: 'vagas2',
    component: Jobs2View
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
    path: '/candidatos2',
    name: 'candidatos2',
    component: Candidates2View
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
    component: OptionsView,
    meta:{
      // requiresAuth: true
    }
  },
  {
    path: '/localizar',
    name: 'localizar',
    component: SearchView
  },
  {
    path: "/perfil",
    name: 'perfil',
    component: ProfileView,
    meta:{
      // requiresAuth: true
    }
  },
  {
    path: "/minhas_vagas",
    name: "minhas_vagas",
    component: MyJobsView
  },
  {
    path: "/:pathMatch(.*)*", // Unrecognized path automatically matches 404
    name: '404',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {  
       next()              
      // window.location.href= to.path
    } else {
      //Logic HERE
      window.location.href = "/"
      //next('/');
      
    }

  } else {
    next();
  }

})

export default router
