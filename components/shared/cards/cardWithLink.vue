<template>
  <div>
    <VLink
      :link="item.link"
      target="_blank"
      type="outline"
      essence="block"
      class="card w-full h-full overflow-hidden rounded-xl">
      <div class="flex flex-col gap-2 h-full rounded-xl">
        <VImage
          :src="item.image"
          cover
          class="card--image rounded-xl overflow-hidden" />

        <div class="flex flex-col gap-2 px-4 md:px-6 pt-2 pb-4 relative z-10 bg-neutral1">
          <VTitle
            :title="item.title"
            tag="h3"
            defaultClass="title2 line-clamp-2"
            style="margin-bottom: 0;" />
          <VTitle
            :title="item.text"
            tag="h5"
            defaultClass="text-sm line-clamp-2" />
        </div>
      </div>
    </VLink>
  </div>
</template>

<script setup>
import { VTitle, VIcon, VLink, VImage } from '~/components/ui'
import { useScroll } from '~/stores/scroll'

const scrollStore = useScroll()

defineOptions({
  name: 'CardWithLink',
})

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})
</script>

<style lang="scss" scoped>
.card {
  &:hover {
    @apply shadow-lg transition-all;
    > div > .card--image {
      @apply scale-125 transition-all duration-300 ease-in-out;
    }
  }
}
</style>
