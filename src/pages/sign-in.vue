<template>
  <FormSignIn @submit="onSubmit">
    <template #actions>
      <div :class="$style['btn-actions']">
        <button type="submit">Submit</button>
      </div>
    </template>
  </FormSignIn>
</template>

<script lang="ts">
export default {
  name: 'SignInPage',
}
</script>

<script lang="ts" setup>
import type RequestBody from '@/interfaces/auth/login-request-body'
import type Loader from '@/interfaces/loader/loader'

import FormSignIn from '@/components/form/form-sign-in.vue'

import { useCssModule, inject } from 'vue'
import { useAuthStore } from '@/stores/auth'

const $style = useCssModule()
const authStore = useAuthStore()

const loader = inject('loader') as Loader

async function onSubmit(requestData: RequestBody) {
  loader.show()

  try {
    await authStore.login(requestData)
  } catch (error) {
    console.log('error', error)
  } finally {
    loader.hide()
  }
}
</script>

<style lang="scss" module>
.btn-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    padding: 4px 10px;
    border-radius: 4px;
    background: $purple;
    color: white;
    cursor: pointer;
  }
}
</style>
