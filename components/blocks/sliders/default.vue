<template>
  <div class="relative">
    <VTitle
      v-if="fields.title"
      :title="fields.title"
      default-class="title"
      style="text-align: center;" />

    <VSwiper
      :settings="fields.swiperSettings"
      :total-slides="fields.cards.length">
      <VSwiperSlide
        v-for="(card, idx) in fields.cards"
        :key="idx">
        <component
          :is="components[fields.cardType]"
          :item="card"
          :textColor="card.textColor"
          :customMark="card.customMark || card.icon || ''"
          :index="idx + 1" />
        <div class="mt-10"></div>
      </VSwiperSlide>
    </VSwiper>
  </div>
</template>

<script setup>
import { VTitle, VSwiper, VSwiperSlide } from '@/components/ui'

import {
  CardWithIcon,
  CardWithIndex,
  CardWithImageExample,
  CardWithLink,
  CardWithLogo,
  CardWithStatistic,
  CardWithExtendedStatistic,
} from '~/components/shared'

defineOptions({
  name: 'BlockSliderDefault',
})

const props = defineProps({
  fields: {
    type: Object,
    default: () => ({}),
  },
})

const components = {
  cardWithIcon: CardWithIcon,
  cardWithIndex: CardWithIndex,
  cardWithImageExample: CardWithImageExample,
  cardWithLink: CardWithLink,
  cardWithLogo: CardWithLogo,
  cardWithStatistic: CardWithStatistic,
  cardWithExtendedStatistic: CardWithExtendedStatistic,
}
</script>
