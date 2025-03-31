<template>
  <div>
    CardWithImageExample
  </div>
</template>

<script setup>
import { VTitle, VImage } from '~/components/ui'

defineOptions({
  name: 'CardWithImageExample',
})

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  textColor: {
    type: String,
    default: 'neutral3',
  },
})
</script>
