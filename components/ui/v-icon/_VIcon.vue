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
      @apply rounded-xl ;
    }
    &-primary {
      @apply  bg-primary  rounded-lg ;
    }
    &-secondary {
      @apply text-primary border-2 border-primary  rounded-lg;
    }
  }
}
</style>
