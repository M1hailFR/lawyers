<template>
  <div
    class="card flex flex-col gap-2 p-4 pt-8 md:p-6 relative rounded-xl overflow-hidden"
    :class="`card--${item.cardVariant || 'default'}`">
    <div class="flex-1">
      <div class="flex flex-row gap-2">
        <div class="flex items-center">
          <v-icon
            v-if="customMark"
            :name="item.icon || defaultCustomIcon"
            :size="scrollStore.isMobile ? 30 : 44"
            class="card--icon" />

          <span
            v-if="!customMark"
            class="card--customMark w-[20px] h-[20px] min-w-[20px] rounded-full border-4 border-neutral1 -mt-2" />
        </div>
        <span
          v-if="item.title"
          class="title2 block mr-10">
          {{ item.title }}
        </span>
      </div>
      <span
        v-if="item.text"
        class="block text-neutral3 text-sm md:text-base leading-6 mt-1">
        {{ item.text }}
      </span>
    </div>

    <div
      v-if="item.buttonText"
      class="card--bottom mt-4">
      <VButton
        @click="openModal('askQuestion')"
        type="flat"
        size="middle"
        class="card--bottom-button text-sm w-max">
        {{ item.buttonText }}
        <div class="card--bottom-circle" />
      </VButton>
    </div>
    <span
      class="font-semibold text-4xl xl:text-[3rem] absolute pt-4 pr-4 lg:pr-3 lg:pt-2 -top-8 -right-8 text-neutral3 bg-secondary/20 rounded-full w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center z-[-1]">
      {{ index }}
    </span>
  </div>
</template>

<script setup>
import { VTitle, VIcon, VImage, VButton } from '~/components/ui'
import { useScroll } from '~/stores/scroll'
import { useModal } from '~/stores/modal'

const scrollStore = useScroll()
const modalStore = useModal()

defineOptions({
  name: 'CardWithIndex',
})

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  textColor: {
    type: String,
    default: 'neutral3',
  },
  defaultCustomIcon: {
    type: String,
    default: 'IconCross',
  },
  customMark: {
    type: Boolean,
    default: false,
  },
  index: {
    type: Number,
    default: 1,
  },
})

const openModal = (type, variant) => {
  modalStore.open(type, props.item[type].payload, variant)
}
</script>

<style lang="scss" scoped>
.card {
  &--icon {
    @apply w-12 h-12 flex items-center justify-center -mt-3;
  }
  &--flat {
    @apply bg-secondary/20 text-neutral2;
    .card--customMark {
      @apply bg-neutral2;
    }
    .card--icon {
      @apply text-neutral1 bg-neutral1 rounded-full;
    }
  }
  &--outline {
    @apply border border-neutral5;
    .card--customMark {
      @apply bg-neutral3;
    }
    .card--icon {
      @apply text-neutral2 bg-neutral3/5 rounded-full;
    }
  }
  &--default {
    @apply bg-neutral1 text-neutral2;
    .card--customMark {
      @apply bg-neutral3;
    }
    .card--icon {
      @apply text-neutral2;
    }
  }
  &--bottom {
    &-circle {
      @apply w-44 h-44 lg:w-52 lg:h-52 bg-secondary/10 rounded-full absolute -bottom-10 -left-10 z-[-1] transition-all duration-1000;
    }
    &-button {
      &:hover {
        .card--bottom-circle {
          @apply w-[1000px] h-[1000px] -bottom-1/2 -left-1/2;
        }
      }
    }
  }
}
</style>
