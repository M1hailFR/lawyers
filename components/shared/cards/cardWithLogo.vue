<template>
  <div
    class="card flex flex-col gap-2 p-4 md:p-6 relative overflow-hidden rounded-xl backdrop-blur-lg"
    :class="`card--${item.cardVariant || 'default'}`"
    @click="openModal('info')">
    <div class="flex flex-col gap-2">
      <div class="flex gap-2 items-center">
        <div class="w-16 h-16 rounded-full overflow-hidden">
          <VImage
            v-if="item.image"
            :src="item.image"
            cover
            class="card--logo" />
        </div>

        <div class="flex flex-col">
          <span
            v-if="item.name"
            class="title2 block"
            style="margin-bottom: 0">
            {{ item.name }}
          </span>
          <div
            v-if="item.rating"
            class="flex pb-1 md:py-1">
            <div
              v-for="(n, index) in 5"
              :key="index"
              class="text-transparent bg-clip-text text-sm"
              :class="getStarClass(index + 1, item.rating)">
              ⭐
            </div>
          </div>
          <span
            v-if="item.date"
            class="text-neutral3 text-xs">
            {{ item.date }}
          </span>
        </div>
      </div>
      <span
        v-if="item.title"
        class="title2 line-clamp-2">
        {{ item.title }}
      </span>
      <span
        v-if="item.text"
        class="text-sm text-neutral3 mb-4 line-clamp-2">
        {{ item.text }}
      </span>
    </div>
    <div class="card--bottom-circle" />
  </div>
</template>

<script setup>
import { VTitle, VButton, VImage } from '~/components/ui'
import { useScroll } from '~/stores/scroll'
import { useModal } from '~/stores/modal'

defineOptions({
  name: 'CardWithLogo',
})

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const modalStore = useModal()
const scrollStore = useScroll()

const getStarClass = (index, rate) => {
  const fullStars = Math.floor(rate)
  const halfStar = rate - fullStars >= 0.5

  if (index <= fullStars) {
    return 'bg-[#ffeb3b]'
  } else if (index === fullStars + 1 && halfStar) {
    return 'bg-gradient-6'
  } else {
    return 'bg-neutral3/50'
  }
}

const openModal = (type, variant) => {
  let payload = {
    ...props.item,
    buttonText: '',
  }
  modalStore.open(type, payload, variant)
}
</script>

<style lang="scss" scoped>
.card {
  &--icon {
    @apply w-10 h-10 flex items-center justify-center -mt-2;
  }
  &--flat {
    @apply bg-secondary/20 text-neutral2;
    .card--customMark {
      @apply bg-neutral2;
    }
    .card--icon {
      @apply text-neutral1 bg-primary rounded-full;
    }
  }
  &--outline {
    @apply border border-neutral5;
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
  &--bottom-circle {
    @apply w-44 h-44 lg:w-52 lg:h-52 bg-secondary/10 rounded-full absolute -bottom-10 -left-10 z-[-1] transition-all duration-1000;
  }
  &:hover {
    @apply cursor-pointer;
    .card--bottom-circle {
      @apply w-[1000px] h-[1000px] -bottom-64 -left-64;
    }
  }
}
</style>
