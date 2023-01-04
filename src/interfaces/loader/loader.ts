import type { ComputedRef } from 'vue'

interface Loader {
  value: ComputedRef<boolean>
  show: () => Loader
  hide: () => void
}

export default Loader