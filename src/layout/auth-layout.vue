<template>
  <div :class="$style['block']">
    <RouterView />
  </div>
</template>

<script lang="ts">
export default {
  name: 'AuthLayout',
}
</script>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { useCssModule } from 'vue'

const $style = useCssModule()
</script>

<style lang="scss" module>
.block {
  background: rgb(163 142 213);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
</style>
