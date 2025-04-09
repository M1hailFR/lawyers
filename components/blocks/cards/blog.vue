<template>
  <div
    class="grid"
    :class="fields.banner ? 'grid-cols-6' : 'grid-cols-1'">
    <div class="col-span-4">
      <VTitle
        :title="fields.title"
        defaultClass="title" />
      <div
        v-for="(item, idx) in fields.content"
        :key="idx">
        <VTitle
          :title="item.title"
          defaultClass="title" />
      </div>
    </div>
    <div class="col-span-2 border h-max min-h-40 sticky top-20"></div>
  </div>
</template>

<script setup>
import { VTitle } from '~/components/ui'

defineOptions({
  name: 'BlockCardBlog',
})

const props = defineProps({
  fields: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
