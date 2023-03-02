import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/home.vue'
// import PrivacyPolicy from './pages/privacy-policy.vue'
// import TermsOfService from './pages/terms-of-service.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title:
        'Software and adminisration for the entire venture capital industry | Venture360',
    },
  },
  // {
  //   path: '/privacy-policy',
  //   component: PrivacyPolicy,
  //   meta: {
  //     title: 'Privacy policy | Venture360',
  //   },
  // },
  // {
  //   path: '/terms-of-service',
  //   component: TermsOfService,
  //   meta: {
  //     title: 'Terms of service | Venture360',
  //   },
  // },

  // catch everything else
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return {
      top: 0,
    }
  },
})

router.beforeEach((to, _from, next) => {
  // @ts-ignore
  document.title = to.meta?.title || 'Venture360'
  next()
})

export default router
