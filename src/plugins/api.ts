import apiMethods from '@/helpers/api'

export default {
  install: (app) => {
    const api = apiMethods

    app.config.globalProperties.$api = api
    app.provide('api', api)
  }
}
