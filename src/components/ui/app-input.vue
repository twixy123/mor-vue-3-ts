<template>
  <div :class="$style['block']">
    <div :class="[$style['input']]" @click="focusInput">
      <label :for="props.name">{{ props.label }}</label>
      <input
        ref="inputRef"
        :value="modelValue"
        :type="type"
        :name="props.name"
        :placeholder="props.placeholder"
        @input="handleChange"
      >
    </div>
    <div v-if="$slots.errors" :class="$style['errors']">
      <slot name="errors" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useSlots } from 'vue'

export default defineComponent({
  name: 'AppInput',
})
</script>

<script lang="ts" setup>
import { useCssModule, ref } from 'vue'
import type { PropType } from 'vue'

import type { InputType, InputValue } from '@/types/input'

const $style = useCssModule()
const props = defineProps({
  modelValue: {
    type: [String, Number, null] as PropType<InputValue>,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<InputType>,
    default: 'text',
  },
})
const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: InputValue): InputValue
}>()
const $slots = useSlots()

const inputRef = ref<HTMLInputElement | null>(null)

function handleChange (e: Event) {
  emits('update:modelValue', (e.target as HTMLInputElement).value)
}

function focusInput () {
  inputRef.value?.focus()
}
</script>

<style lang="scss" module>
.block {
  overflow: visible;
}
.input {
  padding: 10px 16px;
  border-radius: 6px;
  border: 1px solid $purple;
  position: relative;
  overflow: visible;
  cursor: text;

  label {
    font-size: 12px;
    background: white;
    padding-left: 5px;
    padding-right: 5px;
    line-height: 1;
    position: absolute;
    top: 0;
    left: 14px;
    transform: translateY(-50%);
    color: $purple;
    z-index: 2;
    cursor: pointer;
  }

  input {
    width: 100%;
  }
}

.errors {
  p {
    line-height: 1;
    color: #860000;
    font-size: 12px;
    margin-top: 8px;
  }
}
</style>
