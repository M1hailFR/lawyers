<template>
    <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="swiperOptions.spaceBetween || 30"
    :pagination="swiperOptions.pagination || false"
    :navigation="swiperOptions.navigation || false"
    :autoplay="swiperOptions.autoplay || false"
    :loop="swiperOptions.loop || false"
    :free-mode="swiperOptions.freeMode || false"
    :breakpoints="{
      '375': {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: true
      },
      '580': {
        slidesPerView: 1.5,
        spaceBetween: 2
      },
      '780': {
        slidesPerView: 1.5,
        spaceBetween: 1
      },
      '1024': {
        slidesPerView: 4,
        spaceBetween: 10
      }
    }"
    class="mySwiper relative w-full h-full">
    <slot />
  </swiper>
</template>


<!-- <script setup>
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'
import { Swiper } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
  swiperOptions: {
    type: Object,
    default: () => ({}),
  },
})

const swiperOptions = {
  modules: [Navigation, Pagination, Autoplay, A11y],
  ...props.swiperOptions,
}
</script> -->
<script setup>
import { Navigation, Pagination, Autoplay, A11y, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
  swiperOptions: {
    type: Object,
    default: () => ({}),
  },
})

// Явно регистрируем все необходимые модули
const modules = [Navigation, Pagination, Autoplay, A11y, FreeMode]
</script>
<style>
.swiper-button-next,
.swiper-button-prev {
  /* @apply hidden md:block text-primary; */
  color: #ff0000 !important;
  transform: scale(0.7);
  transition: 0.3s linear;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  transform: scale(0.8);
  color: hsla(138, 100%, 51%, 0.9);
}

.swiper-pagination-bullet {
  background: linear-gradient(90deg, #07ff53, #edb7d6);
  transition: 0.3s linear;
  opacity: 0.5;
}
.swiper-pagination-bullet:hover {
  transform: scale(1.1);
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background: linear-gradient(90deg, #07ff53, #edb7d6);
  transform: scale(1.2);
  opacity: 1;
}
</style>
