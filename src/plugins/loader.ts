import loader from '@/helpers/loader'

export default {
  install: (app: any) => {

    app.config.globalProperties.$loader = loader
    app.provide('loader', loader)
  }
}
