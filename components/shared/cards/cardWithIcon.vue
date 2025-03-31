<template>
  <div>
    CardWithIcon
  </div>
</template>

<script setup>
import { VTitle, VIcon } from '~/components/ui'
import { useScroll } from '~/stores/scroll'

const scrollStore = useScroll()

defineOptions({
  name: 'CardWithIcon',
})

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})
</script>
