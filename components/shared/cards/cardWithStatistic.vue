<template>
  <component
    :is="getComponent"
    class="card px-2 py-3 pr-4 w-full sm:w-auto"
    :class="`card--${item.variant}`"
    :link="item.link"
    :type="item.variant"
    >
    <div class="card--content flex items-center gap-2">
      <VImage v-if="item.image" :src="item.image" :size="scrollStore.isMobile ? 30 : 50" />
      <VIcon v-if="item.icon" :name="item.icon" :size="scrollStore.isMobile ? 30 : 50" />
      <div class="block justify-between w-full items-center">
        <VTitle
          :title="item.title"
          tag="h3"
          defaultClass="text-base md:text-xl font-semibold mb-1 text-nowrap" />
        <VTitle
          :title="item.text"
          tag="h4"
          defaultClass="text-sm md:text-base" />
      </div>
    </div>
  </component>
</template>

<script setup>
import { VTitle, VIcon, VLink, VImage } from '~/components/ui'
import { useScroll } from '~/stores/scroll'

const scrollStore = useScroll()

defineOptions({
  name: 'CardWithStatistic',
})

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const getComponent = computed(() => {
  return props.item.link ? VLink : 'div'
})
</script>

<style lang="scss" scoped>
.card {
  @apply transition-all duration-150 rounded-xl box-border;
  &--flat {
    @apply  bg-secondary/20 text-neutral2;
  }
  &--outline {
    @apply bg-neutral1 border-neutral5 border;
  }
}
</style>
