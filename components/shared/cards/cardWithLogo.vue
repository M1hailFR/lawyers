<template>
  <div>
    CardWithLogo
  </div>
</template>

<script setup>
import { VTitle, VIcon, VImage } from '~/components/ui'
import { useScroll } from '~/stores/scroll'

const scrollStore = useScroll()

defineOptions({
  name: 'CardWithLogo',
})

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})
</script>