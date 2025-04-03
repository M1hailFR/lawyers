<template>
  <div
    class="card flex flex-col gap-2 p-4 md:p-6 relative rounded-xl overflow-hidden"
    :class="`card--${item.cardVariant || 'default'}`">
    <div class="flex-1">
      <div class="flex flex-row gap-2">
        <div class="flex items-center">
          <v-icon
            v-if="customMark"
            :name="item.icon || defaultCustomIcon"
            size="24"
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
  </div>
</template>

<script setup>
import { VTitle, VIcon } from '~/components/ui'
import { useScroll } from '~/stores/scroll'

const scrollStore = useScroll()

defineOptions({
  name: 'CardWithIcon',
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
})
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
    @apply border border-neutral2/20;
    .card--customMark {
      @apply bg-neutral3;
    }
    .card--icon {
      @apply text-neutral2 bg-neutral3/20 rounded-full;
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
}
</style>
