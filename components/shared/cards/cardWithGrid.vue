<template>
  <div
    v-if="item"
    class="card">
    <div class="d-flex flex-col items-center">
      <div :class="`max-w-[${computedMaxWidth}]`">
        <div class="d-flex flex-col items-center">
          <div>
            <VTitle
              :title="item.title"
              default-class="title2 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center" />
          </div>
        </div>

        <div
          class="grid mb-6 mt-3"
          :class="`${getGridCols(item.cols)} ${item.gap}`">
          <component
            v-for="(card, idx) in item.cards"
            :key="idx"
            :is="components[item.cardType]"
            :item="card"
            :textColor="card.textColor"
            :customMark="card.customMark || card.icon"
            :index="idx + 1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CardWithLink } from '~/components/shared'

import { VTitle } from '~/components/ui'
defineOptions({
  name: 'CardWithGrid',
})

const props = defineProps({
  item: {
    type: Array,
    required: true,
  },
})

const components = {
  cardWithLink: CardWithLink,
}

const computedMaxWidth = computed(() => {
  const DEFAULT_MAX_WIDTH = '100%'
  if (!props.item.maxWidth) return DEFAULT_MAX_WIDTH

  const width = String(props.item.maxWidth).replace(/%|px/, '')
  return width ? `${width}px` : DEFAULT_MAX_WIDTH
})

const getGridCols = (maxCols = 4) => {
  if (!maxCols || maxCols < 1) return 'grid-cols-1'
  const breakpoints = [
    { size: 'xs', cols: 1 },
    { size: 'sm', cols: Math.max(1, maxCols - 3) },
    { size: 'md', cols: Math.max(2, maxCols - 2) },
    { size: 'lg', cols: Math.max(3, maxCols - 1) },
    { size: 'xl', cols: maxCols },
  ]
  return breakpoints
    .map(({ size, cols }) => {
      return size === 'xs' ? `grid-cols-${cols}` : `${size}:grid-cols-${cols}`
    })
    .join(' ')
}
</script>

<style lang="scss" scoped></style>
