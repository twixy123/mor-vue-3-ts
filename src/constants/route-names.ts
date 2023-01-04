import type Route from '@/interfaces/route/route'
import type RouteNames from '@/interfaces/route/route-interface'

interface LocalRouteNames extends RouteNames {
  INDEX: Route,
  DASHBOARD: Route,
  SIGN_IN: Route,
}

const routeNames: LocalRouteNames = {
  INDEX: {
    path: '/',
    name: 'indexPage',
    title: 'Main'
  },
  DASHBOARD: {
    path: '/dashboard',
    name: 'dashboard',
    title: 'Dashboard'
  },
  SIGN_IN: {
    path: '/sign-in',
    name: 'login',
    title: 'Sign in'
  }
}

export const {
  INDEX,
  DASHBOARD,
  SIGN_IN
} = routeNames

export default routeNames