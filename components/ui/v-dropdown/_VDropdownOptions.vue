<template>
  <div :class="[classes]">
    <slot></slot>
  </div>
</template>

<script setup>
const { classes } = setBasicUiProps({}, 'v-dropdown-option')
</script>

<style lang="scss" scoped>
.v-dropdown-option {
  @apply flex justify-between items-center cursor-pointer hover:bg-secondary hover:text-neutral1 rounded-lg;
  &.state-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
