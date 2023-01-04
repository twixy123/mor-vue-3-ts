import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import cookie from '@/helpers/cookieMethods'
import setPageTitle from '@/helpers/setPageTitle'

import routeNames from '@/constants/route-names'
import type Token from '@/types/token'

import { TOKEN_PREFIX, TOKEN_NAME } from '@/constants/auth'

import IndexPage from '@/pages/index.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routeNames.INDEX.path,
      name: routeNames.INDEX.name,
      component: IndexPage,
      meta: {
        auth: true,
        layout: 'main',
        title: routeNames.INDEX.title
      },
      redirect: routeNames.DASHBOARD.path,
      children: []
    },
    {
      path: routeNames.DASHBOARD.path,
      name: routeNames.DASHBOARD.name,
      component: () => import('@/pages/dashboard/index.vue'),
      meta: {
        auth: true,
        layout: 'main',
        title: routeNames.DASHBOARD.title
      }
    },
    {
      path: routeNames.SIGN_IN.path,
      name: routeNames.SIGN_IN.name,
      component: () => import('@/pages/sign-in.vue'),
      meta: {
        auth: false,
        layout: 'auth',
        title: routeNames.SIGN_IN.title
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  setPageTitle(to.meta.title as string)
  let token = null as Token

  if (cookie.get(`${TOKEN_PREFIX}_${TOKEN_NAME}`))
    token = cookie.get(`${TOKEN_PREFIX}_${TOKEN_NAME}`)

  const authRequired = to.meta.auth as boolean
  const auth = useAuthStore()

  if (authRequired && (!token || !auth.user)) {
    auth.returnUrl = to.fullPath
    auth.logout()
  } else next()
})