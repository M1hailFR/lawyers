<template>
  <div :style="computedPadding">
    <slot />
  </div>
</template>

<script setup>
import { useScroll } from '~/stores/scroll'

defineOptions({
  name: 'VVerticalPadding',
})

const props = defineProps({
  desktopPadding: {
    type: String,
    default: '',
  },
  mobilePadding: {
    type: String,
    default: '',
  },
})

const scrollSoter = useScroll()

const computedPadding = computed(() => {
  const padding =
    scrollSoter.windowW > 576 ? props.desktopPadding : props.mobilePadding

  return {
    'padding-top': padding.top,
    'padding-bottom': padding.bottom,
  }
})
</script>

<style lang="scss" scoped></style>
