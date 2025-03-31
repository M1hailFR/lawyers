<template>
  <div
    class="grid grid-cols-1 gap-2 sm:gap-4"
    :class="isSimple ? '' : 'md:grid-cols-2'">
    <div class="flex flex-col">
      <div class="flex-1">
        <VTitle
          v-if="fields.title"
          :title="fields.title"
          defaultClass="title" />
        <VTitle
          v-if="fields.text"
          :title="fields.text"
          tag="h3"
          defaultClass="subtitle text-neutral2/70"
          :class="isSimple ? 'md:max-w-[90%]' : 'md:max-w-xl'" />
      </div>

      <div
        v-if="fields.items"
        class="flex flex-wrap gap-2 sm:gap-4 mt-4 ">
        <CardWithStatistic
          v-for="(item, idx) in fields.items"
          :key="idx"
          :item="item" />
      </div>
    </div>
    <div class="overflow-hidden rounded-xl">
      <VImage
        v-if="fields.image"
        :src="fields.image"
        cover
        class="" />
    </div>
  </div>
</template>

<script setup>
import { VTitle, VImage } from '~/components/ui'
import { CardWithStatistic } from '~/components/shared/cards'

defineOptions({
  name: 'BlockStatistics',
})

const props = defineProps({
  fields: {
    type: Object,
    default: () => ({}),
  },
})

const isSimple = computed(() => {
  return props.fields.image ? false : true
})
</script>
