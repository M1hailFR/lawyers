<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
    <CardWithStatistic
      v-for="(item, idx) in fields.items"
      :key="idx"
      :item="item" />
  </div>
</template>

<script setup>
import { CardWithStatistic } from '~/components/shared/cards'

defineOptions({
  name: 'BlockSimpleStatistics',
})

const props = defineProps({
  fields: {
    type: Object,
    default: () => ({}),
  },
})
</script>
