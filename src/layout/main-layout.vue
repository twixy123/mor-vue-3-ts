<template>
  <div>
    <main>
      <div>
        <button :class="$style['btn']" @click="logout">
          Logout
        </button>
      </div>
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainSidebar'
})
</script>


<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useCssModule } from 'vue'

const { logout: userLogout } = useAuthStore()

const $style = useCssModule()

function logout () {
  userLogout()
}
</script>

<style lang="scss" module>
.btn {
  padding: 8px 16px;
  background: $purple;
  color: white;
  cursor: pointer;
}
</style>
