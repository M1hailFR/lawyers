<!-- <template>
  <div class="relative">
    <VTitle
      v-if="fields.title"
      :title="fields.title"
      default-class="title mb-4" />
    <VSwiper :swiper-options="fields.swiperOptions">
      <VSwiperSlide
        v-for="(card, idx) in fields.cards"
        :key="idx">
        <component
          :is="components[fields.cardType]"
          :item="card"
          :textColor="card.textColor"
          :customMark="card.customMark || card.icon || ''"
          :index="idx + 1" />
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
</script> -->

<template>
  <div class="relative">
    <VTitle
      v-if="fields.title"
      :title="fields.title"
      default-class="title mb-4" />

    <ClientOnly>
      <swiper-container
        v-if="fields.cards && fields.swiperOptions"
        ref="containerRef"
        :init="false"
        class="relative">
        <swiper-slide
          v-for="(card, idx) in fields.cards"
          :key="idx">
          <component
            :is="components[fields.cardType]"
            :item="card"
            :textColor="card.textColor"
            :customMark="card.customMark || card.icon || ''"
            :index="idx + 1" />
        </swiper-slide>

      </swiper-container>
    </ClientOnly>
    <!-- <button @click="swiper.prev()">Prev</button>
    <button @click="swiper.next()">Next</button> -->
  </div>
</template>

<script setup>
import { VTitle } from '@/components/ui'
import { register } from 'swiper/element/bundle'

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

register()

const components = {
  cardWithIcon: CardWithIcon,
  cardWithIndex: CardWithIndex,
  cardWithImageExample: CardWithImageExample,
  cardWithLink: CardWithLink,
  cardWithLogo: CardWithLogo,
  cardWithStatistic: CardWithStatistic,
  cardWithExtendedStatistic: CardWithExtendedStatistic,
}

const containerRef = ref(null)

const swiper = useSwiper(containerRef, props.fields.swiperOptions || {})

</script>

<style>

</style>
