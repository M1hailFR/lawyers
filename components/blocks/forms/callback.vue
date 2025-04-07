<template>
  <VTitle
    v-if="fields.title"
    :title="fields.title"
    additionalClass="title" />
  <div
    class="card h-full relative"
    :class="fields.isEquals ? 'md:grid-cols-2' : 'md:grid-cols-5'">
    <div
      ref="cardLeft"
      class="card--left relative md:sticky md:top-24 h-max"
      :class="[
        fields.isBackground ? 'bg-primary' : '',
        fields.isEquals ? '' : 'md:col-span-3',
      ]">
      <div class="">
        <SharedFormCallback
          :settings="fields.formSettings"
          isBackground
          color="neutral1" />
      </div>
    </div>
    <div
      class="card--right h-max"
      :class="[
        fields.isEquals ? '' : 'md:col-span-2',
        { 'order-first': fields.isReverse },
      ]">
      <div
        v-if="fields.cards"
        class="flex flex-col gap-4"
        :class="{ 'card--scroll': fields.isResize }"
        :style="fields.isResize ? `height: ${cardLeftHeight}px; padding-right: 8px` : 'height: 100%'">
        <component
          v-for="(card, idx) in fields.cards"
          :key="idx"
          :is="components[fields.cardType]"
          :item="card"
          :textColor="card.textColor"
          :customMark="card.customMark || card.icon"
          :index="idx + 1" />
      </div>
      <div v-else class="p-4 border h-[100px] rounded-xl">questions</div>
    </div>
  </div>
</template>

<script setup>
import { VTitle } from '~/components/ui'
import { SharedFormCallback } from '~/components/shared/forms'

import {
  CardWithIcon,
  CardWithIndex,
  CardWithImageExample,
  CardWithLink,
  CardWithLogo,
  CardWithStatistic,
  CardWithExtendedStatistic,
  CardWithExtendedLink,
  CardWithList,
} from '~/components/shared'

const components = {
  cardWithIcon: CardWithIcon,
  cardWithIndex: CardWithIndex,
  cardWithImageExample: CardWithImageExample,
  cardWithLink: CardWithLink,
  cardWithLogo: CardWithLogo,
  cardWithStatistic: CardWithStatistic,
  cardWithExtendedStatistic: CardWithExtendedStatistic,
  cardWithExtendedLink: CardWithExtendedLink,
  cardWithList: CardWithList,
}

defineOptions({
  name: 'BlockFormCallback',
})

const props = defineProps({
  fields: {
    type: Object,
    default: () => ({}),
  },
})

const cardLeft = ref(null)

const cardLeftHeight = computed(() => {
  return cardLeft?.value?.offsetHeight
})
</script>

<style lang="scss" scoped>
.card {
  @apply grid gap-4 text-neutral2;

  &--left {
    @apply p-8 rounded-xl z-10;
  }

  &--right {
    @apply rounded-xl border-neutral5;
  }

  &--scroll {
    @apply overflow-y-scroll ;
    &::-webkit-scrollbar {
      @apply bg-transparent w-1 rounded-lg;
    }
    &::-webkit-scrollbar-track {
      @apply bg-transparent;
    }
  }
}
</style>
