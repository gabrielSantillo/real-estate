import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResidenciesView from '@/views/ResidenciesView.vue'
import ValuesView from '@/views/ValuesView.vue'
import ContactView from "@/views/ContactView.vue"
import SubscribeView from '@/views/SubscribeView.vue'

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
  },

  {
    path: '/contact',
    component: ContactView
  },

  {
    path: '/subscribe',
    component: SubscribeView
  }

]

const router = new VueRouter({
  routes
})

export default router
