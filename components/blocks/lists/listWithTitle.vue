<template>
  <div>
    <VTitle :title="fields.title" tag="h2" defaultClass="title" />
    <div :key="idx">
      <v-list
        :list="fields.list"
        divider
        customMark="fields.customMark"
      />
    </div>
  </div>
</template>

<script setup>
import { VTitle, VList } from '~/components/ui'

defineOptions({
  name: 'BlockListWithTitle',
})

const props = defineProps({
  fields: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})
</script>

<style lang="scss" scoped></style>
