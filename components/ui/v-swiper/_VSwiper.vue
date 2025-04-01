<template>
  <div
    v-if="settings"
    class="slider"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false">
    <ClientOnly>
      <swiper-container
        ref="containerRef"
        :init="false"
        class="relative">
        <slot />
      </swiper-container>
    </ClientOnly>

    <div v-if="settings.customNavigation" class="hidden md:flex">
      <button
        @click="prevSlide"
        class="custom-prev-button"
        :class="isHover ? 'opacity-100' : 'opacity-0'">
        <VIcon
          class="-ml-[2px]"
          name="IconChevron"
          size="28"
          rotate="left" />
      </button>
      <button
        @click="nextSlide"
        class="custom-next-button"
        :class="isHover ? 'opacity-100' : 'opacity-0'">
        <VIcon
          class="ml-[2px]"
          name="IconChevron"
          size="28"
          rotate="right" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { VIcon } from '@/components/ui'
import { register } from 'swiper/element/bundle'

const props = defineProps({
  settings: {
    type: Object,
    default: () => ({}),
  },
})

register()

const containerRef = ref(null)
const isHover = ref(false)
function prevSlide() {
  if (containerRef.value) {
    containerRef.value.swiper.slidePrev()
  }
}

function nextSlide() {
  if (containerRef.value) {
    containerRef.value.swiper.slideNext()
  }
}
const swiper = useSwiper(containerRef, props.settings || {})
</script>

<style lang="scss" scoped>
.custom-prev-button,
.custom-next-button {
  @apply bg-neutral1 w-10 transition-all duration-300 ease-in-out aspect-square rounded-full shadow-md absolute top-1/2 -translate-y-1/2 z-10 cursor-pointer flex items-center justify-center;
  &:hover {
    @apply bg-secondary text-neutral1;
  }
}

.custom-prev-button {
  @apply left-2;
}

.custom-next-button {
  @apply right-2;
}
</style>

<style lang="scss">
swiper-container::part(bullet) {
  @apply bg-neutral3;
}

swiper-container::part(bullet-active) {
  @apply bg-secondary scale-125;
}
</style>
