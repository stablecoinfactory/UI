import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import FAQ from './views/Faq.vue'
import Contact from './views/Contact.vue'
import Guide from './views/Guide.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/faq',
    name: 'Faq',
    component: FAQ,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/guide',
    name: 'Guide',
    component: Guide,
  },
]

const router = new VueRouter({
  routes,
})

export default router
