<template>
  <button
    :type="nativeType"
    :class="[classes, disabled ? 'opacity-50 z-[-1]' : '']"
    :disabled="disabled"
    @click="emit('click')">
    <slot />
  </button>
</template>

<script setup>
defineOptions({
  name: 'VButton',
})

const props = defineProps({
  type: {
    type: String,
    default: 'flat',
  },
  size: {
    type: String,
    default: 'normal',
  },
  nativeType: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])
const { classes } = setBasicUiProps(props, 'v-button')
</script>

<style lang="scss" scoped>
.v-button {
  @apply font-semibold transition-colors duration-150 rounded-lg text-neutral2;
  &.type {
    &-flat {
      @apply bg-primary text-neutral1 hover:text-neutral2;
    }
    &-outline {
      @apply border-neutral5 border;
    }
    &-default {
      @apply bg-neutral6;
    }
    &-flat,
    &-outline,
    &-default {
      &:hover {
        @apply bg-opacity-70 bg-secondary;
      }
    }
  }
  &.size {
    &-small {
      @apply py-2 px-2;
    }
    &-normal {
      @apply py-3 px-4;
    }
    &-middle {
      @apply px-7 py-4;
    }
  }
}
</style>
