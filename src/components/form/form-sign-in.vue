<template>
  <form :class="['modal-container']" @submit.prevent="onSubmit">
    <h3>Sign in</h3>

    <AppInput
      v-model="v$.phone.$model"
      name="phone"
      placeholder="Enter your phone"
      label="Phone"
      type="number"
    >
      <template v-if="phoneErrors.length" #errors>
        <p v-for="(error, idx) in phoneErrors" :key="idx">
          {{ error }}
        </p>
      </template>
    </AppInput>

    <AppInput
      v-model="v$.password.$model"
      name="password"
      placeholder="Enter your password"
      label="Password"
      type="password"
    >
      <template v-if="passwordErrors.length" #errors>
        <p v-for="(error, idx) in phoneErrors" :key="idx">
          {{ error }}
        </p>
      </template>
    </AppInput>

    <slot name="actions" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormSignIn'
})
</script>

<script lang="ts" setup>
import type RequestBody from '@/interfaces/auth/login-request-body'

import AppInput from '@/components/ui/app-input.vue'

import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

const emits = defineEmits<{
  (e: 'submit', formFields: RequestBody): RequestBody
}>()

const formFields = reactive({
  phone: '',
  password: ''
})

const rules = computed(() => {
  return {
    phone: { required, minLength: minLength(11) },
    password: { required, minLength: minLength(4) }
  }
})

const v$ = useVuelidate(rules, formFields)

const phoneErrors = computed(() => {
  const errors: string[] = []

  if (!v$.value.phone.$dirty) return errors

  v$.value.phone.required.$invalid &&
    errors.push(v$.value.phone.required.$message)
  v$.value.phone.minLength.$invalid &&
    errors.push(v$.value.phone.minLength.$message)

  return errors
})

const passwordErrors = computed(() => {
  const errors: string[] = []

  if (!v$.value.password.$dirty) return errors

  v$.value.password.required.$invalid &&
    errors.push(v$.value.password.required.$message)
  v$.value.password.minLength.$invalid &&
    errors.push(v$.value.password.minLength.$message)

  return errors
})

function onSubmit () {
  v$.value.$touch()

  if (!v$.value.$invalid) {
    emits('submit', { ...formFields })
  }
}
</script>
