<template>
  <AppMainLoader />
  <div>
    <transition name="fade">
      <component :is="currentComponent" />
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppVue',
}
</script>

<script setup lang="ts">
import MainLayout from '@/layout/main-layout.vue'
import AuthLayout from '@/layout/auth-layout.vue'
import AppMainLoader from '@/components/main-loader.vue'

import { shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentComponent = shallowRef(MainLayout)


function setCurrentComponent (routeName: string = 'main') {
  if (routeName === 'main') {
    currentComponent.value = MainLayout
  } else {
    currentComponent.value = AuthLayout
  }
}

watch(
  () => route,
  (_route) => setCurrentComponent(_route.meta.layout as string),
  {
    immediate: true,
    deep: true,
  }
)

/* 
  defineProps<{
    msg: string
  }>()
*/

// import { useAuthStore } from '@/stores/auth'
// const authStore = useAuthStore()
// authStore.login({phone: '11111111112', password: 'M][[Y#[XD[Gf)YA3M2;{rSz]w,[g/.'})
</script>
