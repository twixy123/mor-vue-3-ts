import Notifications from '@kyvg/vue3-notification'
import { useNotification } from '@kyvg/vue3-notification'

const { notify } = useNotification()

export default {
  install: (app) => {
    app.use(Notifications)

    function getErrorMessage (error) {
      if (error && error.error && error.error.message) {
        return error.error.message
      } else if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.detail
      ) {
        return error.response.data.detail
      } else if (error && error.message) {
        return error.message
      } else {
        return 'Something went wrong.'
      }
    }

    const $notify = (notifyData = {}) => {
      notify({
        title: notifyData.title,
        text: notifyData.text || 'Notifiction',
        type: notifyData.type || 'info',
        duration: notifyData.duration || 5000
      })
    }

    const handleError = (error) => {
      const message = getErrorMessage(error)

      notify({
        text: message,
        type: 'error',
        duration: 10000
      })
    }

    app.config.globalProperties.notify = $notify
    app.provide('notify', $notify)

    app.config.globalProperties.handleError = handleError
    app.provide('handleError', handleError)
  }
}
