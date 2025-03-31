<template>
  <section v-if="fields">
    <div>
      <div class="d-flex flex-col items-center">
        <div :class="`max-w-[${computedMaxWidth}]`">
          <div class="d-flex flex-col items-center">
            <div
              :class="
                isSingle
                  ? ''
                  : 'flex gap-4 flex-wrap items-center justify-between w-full'
              ">
              <VTitle
                :title="fields.title"
                default-class="title"
                :style="{
                  marginBottom: fields.buttonRedirectText ? '0px' : '',
                }" />
              <VButton
                v-if="fields.buttonRedirectText"
                @click="redirectTo(fields.link)"
                class="flex items-center gap-1">
                <VIcon name="IconCross" />
                {{ fields.buttonRedirectText }}
              </VButton>
            </div>
            <VTitle
              :title="fields.subtitle"
              :tag="h3"
              default-class="subtitle mb-4" />
          </div>
          <div
            v-if="fields.buttonOpenModalText"
            class="d-flex justify-center mt-5 mt-md-8 flex-row items-center gap-2 w-full">
            <VButton @click="openModal('askQuestion')">
              {{ fields.buttonOpenModalText }}
            </VButton>
          </div>

          <div
            v-if="
              fields.cards && fields.cards.length && components[fields.cardType]
            "
            class="grid--cards grid"
            :class="
              ({
                'mt-8 md:mt-14 ':
                  fields.title || fields.subtitle || fields.buttonText,
              },
              `${getGridCols(fields.cols)} ${fields.gap}`)
            ">
            <component
              v-for="(card, idx) in fields.cards"
              :key="idx"
              :is="components[fields.cardType]"
              :item="card"
              :textColor="card.textColor"
              :customMark="card.customMark || card.icon"
              :index="idx + 1" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { VTitle, VButton, VIcon } from '~/components/ui'
import { useScroll } from '~/stores/scroll'
import { useModal } from '~/stores/modal'

import {
  CardWithIcon,
  CardWithIndex,
  CardWithImageExample,
  CardWithLink,
  CardWithLogo,
  CardWithStatistic,
  CardWithExtendedStatistic,
} from '~/components/shared'

const scrollStore = useScroll()

const components = {
  cardWithIcon: CardWithIcon,
  cardWithIndex: CardWithIndex,
  cardWithImageExample: CardWithImageExample,
  cardWithLink: CardWithLink,
  cardWithLogo: CardWithLogo,
  cardWithStatistic: CardWithStatistic,
  cardWithExtendedStatistic: CardWithExtendedStatistic,
}

defineOptions({
  name: 'BlockGridWithCards',
})

const props = defineProps({
  fields: {
    type: Object,
    default: () => ({}),
  },
  // title
  // subtitle
  // cards
  // dividerCards
  // buttonText
  // description
  // maxWidth
  // gap
  // cols
})

const computedMaxWidth = computed(() => {
  const DEFAULT_MAX_WIDTH = '100%'
  if (!props.fields.maxWidth) return DEFAULT_MAX_WIDTH

  const width = String(props.fields.maxWidth).replace(/%|px/, '')
  return width ? `${width}px` : DEFAULT_MAX_WIDTH
})

// const computedGap = computed(() => {
//   const DEFAULT_GAP = '20px'
//   if (!props.fields.gap) return DEFAULT_GAP

//   const gap = String(props.fields.gap).replace(/%|px/, '')
//   return gap ? `gap-[${gap}px]` : DEFAULT_GAP
// })

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

const modalStore = useModal()

const openModal = (type, variant) => {
  modalStore.open(type, props.fields[type].payload, variant)
}

const isSingle = computed(() => {
  return props.fields.buttonRedirectText ? false : true
})
</script>

<style lang="scss" scoped></style>
