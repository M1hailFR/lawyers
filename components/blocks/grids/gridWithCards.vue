<template>
  <section
    v-if="fields"
    class="card overflow-hidden">
    <div class="d-flex flex-col items-center">
      <div
        class="relative"
        :class="`max-w-[${computedMaxWidth}]`">
        <div class="d-flex flex-col items-center">
          <div
            :class="
              isSingle
                ? ''
                : 'flex gap-4 flex-wrap items-center justify-between w-full mb-4'
            ">
            <VTitle
              :title="fields.title"
              default-class="title"
              :style="isSingle ? '' : 'margin-bottom: 0px'" />
            <VButton
              v-if="fields.buttonRedirectText"
              @click="redirectTo(fields.link)"
              class="flex items-center gap-1">
              <VIcon :name="fields.buttonRedirectIcon" />
              {{ fields.buttonRedirectText }}
            </VButton>
          </div>
          <VTitle
            :title="fields.subtitle"
            :tag="h3"
            default-class="subtitle text-neutral2/70 mb-8 md:max-w-[800px]" />
          <SharedSearchDefault
            v-if="fields.searchSettings"
            :settings="fields.searchSettings"
            @update="updateCards($event)" />
        </div>
        <div
          v-if="fields.buttonOpenModalText"
          class="d-flex justify-center mt-5 mt-md-8 flex-row items-center gap-2 w-full">
          <VButton @click="openModal('askQuestion')">
            {{ fields.buttonOpenModalText }}
          </VButton>
        </div>

        <div
          v-if="cards.length && components[fields.cardType]"
          class="grid relative"
          :class="
            ({ 'mt-8 md:mt-14': fields.title || fields.subtitle || fields.buttonText,},
            `${getGridCols(fields.cols)} ${fields.gap}`),
            { 'card--compact card--scroll': fields.compactMobile || fields.compact }
          "
          :style="`max-height: ${computedMaxHeight}`">
          <component
            v-for="(card, idx) in cards"
            :key="idx"
            :is="components[fields.cardType]"
            :item="card"
            :textColor="card.textColor"
            :customMark="card.customMark || card.icon"
            :index="idx + 1" />
        </div>
        <div
          v-if="!cards.length"
          class="flex flex-col items-center justify-center h-32">
          <VTitle
            title="Ничего не найдено"
            default-class="title" />
          <VTitle
            title="Попробуйте изменить поисковый запрос"
            default-class="subtitle" />
        </div>
        <div
          v-if="fields.compactMobile || fields.compact"
          class="absolute h-20 w-full right-0 scale-x-[2] -bottom-12 blur-[20px] z-20 bg-gradient-white" />
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
  CardWithExtendedLink,
  CardWithList,
  CardWithGrid,
  SharedSearchDefault,
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
  cardWithExtendedLink: CardWithExtendedLink,
  cardWithList: CardWithList,
  cardWithGrid: CardWithGrid,
}

defineOptions({
  name: 'BlockGridWithCards',
})

const props = defineProps({
  fields: {
    type: Object,
    default: () => ({}),
  },
  compact: {
    type: Boolean,
    default: false,
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

const cards = ref(props.fields.cards || [])

const computedMaxWidth = computed(() => {
  return props?.fields?.maxWidth ? `${props.fields.maxWidth}px` : '100%'
})

const computedMaxHeight = computed(() => {
  if (props?.fields?.compactMobile && scrollStore.windowW <= 992) {
    return `${props.fields.maxHeight}px`
  }
  if (props?.fields?.compact) {
    return `${props.fields.maxHeight}px`
  }
  return '100%'
})

const updateCards = (newCards) => {
  cards.value = newCards
}

const getGridCols = (maxCols = 0) => {
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

<style lang="scss" scoped>
.card {
  &--compact {
    @apply overflow-y-scroll pr-4 pb-6;
  }
  &--scroll {
    &::-webkit-scrollbar {
      @apply bg-transparent w-1 rounded-lg;
    }
    &::-webkit-scrollbar-track {
      @apply bg-transparent;
    }
  }
}
</style>
