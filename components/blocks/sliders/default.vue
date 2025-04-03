<template>
  <div class="relative">
    <!-- <VTitle
      v-if="fields.title"
      :title="fields.title"
      default-class="title"
      style="text-align: center" /> -->
    <div
      :class="
        isSingle
          ? ''
          : 'flex gap-4 flex-wrap items-center justify-between w-full mb-4'
      ">
      <VTitle
        :title="fields.title"
        default-class="title"
        :style="isSingle ? 'text-align: center' : 'margin-bottom: 0px'" />
      <VButton
        v-if="fields.buttonRedirectText"
        @click="redirectTo(fields.link)"
        class="flex items-center gap-1">
        <VIcon :name="fields.buttonRedirectIcon" />
        {{ fields.buttonRedirectText }}
      </VButton>
    </div>
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
import { VTitle, VButton, VIcon, VSwiper, VSwiperSlide } from '@/components/ui'

import {
  CardWithIcon,
  CardWithIndex,
  CardWithImageExample,
  CardWithLink,
  CardWithLogo,
  CardWithStatistic,
  CardWithExtendedStatistic,
  CardWithExtendedLink,
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
  cardWithExtendedLink: CardWithExtendedLink,
}

const router = useRouter()

const isSingle = computed(() => {
  return props.fields.link ? false : true
})

const redirectTo = (link) => {
  router.push(link)
}
</script>
