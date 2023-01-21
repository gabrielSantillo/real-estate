import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResidenciesView from '@/views/ResidenciesView.vue'
import ValuesView from '@/views/ValuesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView
  },

  {
    path: '/residencies',
    component: ResidenciesView
  },

  {
    path: '/values',
    component: ValuesView
  }

]

const router = new VueRouter({
  routes
})

export default router
