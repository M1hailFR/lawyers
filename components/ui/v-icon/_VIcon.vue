<script setup>
import components from './icons-components.js'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '20px',
  },
  rotate: {
    type: String,
    default: null,
  },
})

const { classes } = setBasicUiProps(props, 'icon-component')
</script>

<template>
  <div :class="classes">
    <component
      :size="size"
      :rotate="rotate"
      :is="components[name]" />
  </div>
</template>

<style lang="scss" scoped>
.icon-component {
  @apply shrink-0;
  &.fill > * {
    fill: inherit;
  }
}
</style>
