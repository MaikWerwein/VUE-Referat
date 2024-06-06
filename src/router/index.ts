import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import HousesView from '../views/HousesView.vue'
import { store } from '../store.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        public: false
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        public: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        public: true
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView,
      meta: {
        public: true
      }
    },
    {
      path: '/houses',
      name: 'houses',
      component: HousesView,
      meta: {
        public: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = store.token
  if (!to.meta.public) {
    if (token == 1) {
      console.log('Access granted to: ' + to.fullPath)
      // User is authenticated, proceed to the route
      next()
    } else {
      console.log('User unauthorized. Redirecting...')
      // User is not authenticated, redirect to login
      next('/login')
    }
  } else {
    console.log('Access granted to: ' + to.fullPath + ' | Public Route')

    // Non-protected route, allow access
    next()
  }
})

export default router
