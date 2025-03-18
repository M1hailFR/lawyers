<script setup>
import components from './icons-components.js'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: '20px',
  },
})

const { classes } = setBasicUiProps(props, 'icon-component')
</script>

<template>
  <div :class="classes">
    <component

      :size="size"
      :is="components[name]" />
  </div>
</template>

<style lang="scss" scoped>
.icon-component {
  @apply shrink-0 transition-all duration-150 hover:opacity-50;
  &.fill > * {
    fill: inherit;
  }
  &.type {
    &-default {
      @apply p-1 rounded-xl mb-0.5;
    }
    &-primary {
      @apply p-1 bg-primary  rounded-lg mb-0.5;
    }
    &-secondary {
      @apply p-1 text-primary border-2 border-primary  rounded-lg mb-0.5;
    }
  }
}
</style>
