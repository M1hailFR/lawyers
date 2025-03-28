<template>
  <a
    v-if="isExternalUrl(link) || anchor"
    :class="[classes, essence, `text-${color}`]"
    :href="link"
    :target="target">
    <slot />
  </a>
  <nuxt-link
    v-else
    :class="[classes, essence, `text-${color}`]"
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
  color: {
    type: String,
    default: '',
  },
})

const { classes } = setBasicUiProps(props, 'v-link')
</script>

<style lang="scss" scoped>
.v-link {
  @apply transition-all duration-150 rounded-lg flex items-center;

  &.type {
    &-flat {
      @apply text-neutral1 bg-primary hover:text-neutral1;
    }
    &-secondary {
      @apply hover:text-primary ;
    }
    &-outline {
      @apply border-neutral5 border hover:border-primary;
    }
    &-default {
      @apply hover:text-opacity-70;
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
