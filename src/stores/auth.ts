import { defineStore } from 'pinia'
import { router } from '@/router'

import cookie from '@/helpers/cookieMethods'
import fetchWrapper from '@/helpers/fetchWrapper'
import { LOGIN, FETCH_USER, TOKEN_PREFIX, TOKEN_NAME } from '@/constants/auth'
import { SIGN_IN } from '@/constants/route-names'

import type LoginRequestBody from '@/interfaces/auth/login-request-body'
import type LoginResponseBody from '@/interfaces/auth/login-response-body'
import type User from '@/interfaces/auth/user'
import type Url from '@/types/url'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') as string) as User
      : null,
    returnUrl: null as Url,
  }),
  getters: {},
  actions: {
    login (body: LoginRequestBody): Promise<User> {
      return new Promise((resolve, reject) => {
        fetchWrapper
          .post<LoginResponseBody>(LOGIN, { body })
          .then((data) => {
            cookie.set(`${TOKEN_PREFIX}_${TOKEN_NAME}`, data.access)

            return this.fetchUser()
          })
          .then((data) => {
            resolve(data)
            router.push(this.returnUrl || '/')
          })
          .catch((err) => {
            this.logout()
            reject(err)
          })
      })
    },
    fetchUser (): Promise<User> {
      return new Promise((resolve, reject) => {
        fetchWrapper
          .get<User>(FETCH_USER)
          .then((data) => {
            this.user = data
            localStorage.setItem('user', JSON.stringify(data))
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    logout (): void {
      this.user = null
      localStorage.removeItem('user')
      cookie.delete(`${TOKEN_PREFIX}_${TOKEN_NAME}`)
      router.push({ name: SIGN_IN.name })
    },
  },
})
