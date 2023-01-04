import type Loader from '@/interfaces/loader/loader'
import { shallowRef, computed } from 'vue'

const loader = shallowRef(false)

const loaderConfig: Loader = {
  value: computed(() => loader.value),
  show () {
    loader.value = true
    document.body.classList.add('stop-scrolling')

    return this
  },
  hide () {
    document.body.classList.remove('stop-scrolling')
    loader.value = false
  }
}

export default loaderConfig