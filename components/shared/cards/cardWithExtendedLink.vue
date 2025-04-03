<template>
  <div>
    <VLink
      :href="item.link"
      target="_blank"
      type="outline"
      essence="block"
      class="card w-full flex flex-col overflow-hidden rounded-xl p-4 md:p-6">
      <div class="flex gap-6 h-full items-center">
        <div class="flex items-center justify-center">
          <VImage
            :src="item.image"
            cover
            class="card--image rounded-full overflow-hidden w-24 h-24" />
        </div>

        <div class="flex flex-col py-4 relative z-10 w-full">
          <VTitle
            :title="item.title"
            tag="h3"
            defaultClass="title2" />
          <VTitle
            :title="item.subtitle"
            tag="h5"
            defaultClass="text-xs line-clamp-2" />
        </div>
      </div>
      <div class="flex flex-col py-2 relative z-10 w-full">
        <VTitle
          :title="item.text"
          tag="h5"
          defaultClass="text-sm line-clamp-2" />
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
    .card--image {
      @apply scale-[1.15] transition-all duration-300;
    }
  }
}
</style>
