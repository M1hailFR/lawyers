<template>
  <swiper-slide class="v-swiper-slide">
    <slot />
  </swiper-slide>
</template>

<script setup>
import { SwiperSlide } from 'swiper/vue'
</script>

<style lang="scss">
.v-swiper-slide {
  height: auto; /* Для адаптивной высоты */
  display: flex !important; /* Важно для центрирования */
  justify-content: center !important;
  align-items: center !important;
  width: auto; /* Важно для slidesPerView */
}
</style>
