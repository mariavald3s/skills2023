import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TestimonialsView from '../views/TestimonialsView.vue'
import ContactView from '../views/ContactView.vue'
import LoginView from '../views/Login.vue'
import LocationsView from '../views/Locations.vue'
import ProductsView from '../views/Products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-us',
      name: 'about',
      component: AboutView
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      component: TestimonialsView
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/locations',
      name: 'locations',
      component: LocationsView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
  ]
})

export default router