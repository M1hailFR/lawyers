<template>
  <a
    v-if="isExternalUrl(link) || anchor"
    :class="[classes, essence]"
    :href="link"
    :target="target">
    <slot />
  </a>
  <nuxt-link
    v-else
    :class="[classes, essence]"
    :to="{ path: link, hash: hash }"
    :active-class="activeClass">
    <slot />
  </nuxt-link>
</template>

<script setup>
import { isExternalUrl } from '~/core/utils'

defineOptions({
  name: 'VLink',
})

const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
  link: {
    type: String,
    default: '',
  },
  hash: {
    type: String,
    default: '',
  },
  activeClass: {
    type: String,
    default: '',
  },
  essence: {
    type: String,
    default: 'inline',
  },
  target: {
    type: String,
    default: null,
  },
})
const { classes } = setBasicUiProps(props, 'v-link')
</script>

<style lang="scss" scoped>
.v-link {
  @apply  transition-all duration-150 rounded-lg hover:text-primary flex items-center w-max ;

  &.type {
    &-flat {
      @apply text-neutral1 bg-primary hover:text-neutral1;
    }
    &-outline {
      @apply border-neutral5 border hover:border-primary;
    }
    &-default {
      @apply hover:text-primary;
    }
    &-flat,
    &-outline,
    &-default {
      &:hover {
        @apply bg-opacity-70;
      }
    }
  }
}
</style>
