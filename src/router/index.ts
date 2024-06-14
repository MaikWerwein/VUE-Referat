import { store } from '@/store.ts'
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import LogoutView from '@/views/LogoutView.vue'
import AboutView from '@/views/AboutView.vue'
import HousesView from '@/views/HousesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Man könnte die sidebar dynamisch generieren
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        public: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: HousesView,
      meta: {
        public: false
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        public: false
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
      component: () => import('@/views/HousesView.vue'),
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
      // User is authenticated, proceed to the route
      console.log('Access granted to: ' + to.fullPath)
      next()
    } else {
      // User is not authenticated, redirect to login
      console.log('User unauthorized. Redirecting...')
      next('/login')
    }
  } else {
    // Non-protected route, allow access
    console.log('Access granted to: ' + to.fullPath + ' | Public Route')

    next()
  }
})

export default router
