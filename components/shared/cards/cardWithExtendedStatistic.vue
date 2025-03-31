<template>
  <div>
    CardWithExtendedStatistic
  </div>
</template>

<script setup>
import { VTitle, VIcon, VLink } from '~/components/ui'
import { useScroll } from '~/stores/scroll'

const scrollStore = useScroll()

defineOptions({
  name: 'CardWithExtendedStatistic',
})

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const getComponent = computed(() => {
  return props.item.link ? VLink : 'div'
})
</script>
