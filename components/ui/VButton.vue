<template>
  <button
    :type="nativeType"
    :class="[classes, disabled ? 'opacity-50 z-[-1]' : '', `${textSize}`]"
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
  textSize: {
    type: String,
    default: 'text-sm md:text-base',
  },
})

const emit = defineEmits(['click'])
const { classes } = setBasicUiProps(props, 'v-button')
</script>

<style lang="scss" scoped>
.v-button {
  @apply font-semibold transition-all duration-150 rounded-lg text-neutral2;
  &.type {
    &-flat {
      @apply bg-primary text-neutral1 hover:bg-secondary;
    }
    &-outline {
      @apply border-neutral5 border hover:text-neutral1 hover:bg-secondary hover:border-secondary/90;
    }
    &-default {
      @apply bg-neutral1 hover:bg-neutral1;
    }
    &-flat,
    &-outline {
      &:hover {
        @apply bg-opacity-70;
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
      @apply px-6 py-3;
    }
  }
  &.state-disabled {
    @apply opacity-50;
  }
}
</style>
