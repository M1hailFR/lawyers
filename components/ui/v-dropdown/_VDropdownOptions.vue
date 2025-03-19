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
  @apply flex justify-between items-center py-1 px-2 cursor-pointer hover:text-secondary;
  &.state-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
