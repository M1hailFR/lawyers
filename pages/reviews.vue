<template>
  <div class="container">
    <VVerticalPadding
      :desktop-padding="REVIEWS_HERO_CONFIG.desktopPadding"
      :mobile-padding="REVIEWS_HERO_CONFIG.mobilePadding">
      <BlockHeroeDefault :fields="REVIEWS_HERO_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="REVIEWS_GRID_CONFIG.desktopPadding"
      :mobile-padding="REVIEWS_GRID_CONFIG.mobilePadding">
      <BlockGridWithCards :fields="REVIEWS_GRID_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_HOW_IT_WORKS_GRID_CONFIG.desktopPadding"
      :mobile-padding="MAIN_HOW_IT_WORKS_GRID_CONFIG.mobilePadding">
      <BlockGridWithCards
        :fields="MAIN_HOW_IT_WORKS_GRID_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_PHONE_BANNER_CONFIG.desktopPadding"
      :mobile-padding="MAIN_PHONE_BANNER_CONFIG.mobilePadding">
      <BlockBannerDefault :fields="MAIN_PHONE_BANNER_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_REVIEWS_SLIDER_CONFIG.desktopPadding"
      :mobile-padding="MAIN_REVIEWS_SLIDER_CONFIG.mobilePadding">
      <BlockSliderDefault :fields="MAIN_REVIEWS_SLIDER_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_QUESTIONS_CALLBACK_CONFIG.desktopPadding"
      :mobile-padding="MAIN_QUESTIONS_CALLBACK_CONFIG.mobilePadding">
      <BlockFormCallback
        :fields="MAIN_QUESTIONS_CALLBACK_CONFIG.block_fields" />
    </VVerticalPadding>
  </div>
</template>

<script setup>
import { VVerticalPadding } from '~/components/ui'
import {
  REVIEWS_HERO_CONFIG,
  REVIEWS_GRID_CONFIG,
} from '~/configs/pages/reviews'

import {
  MAIN_HOW_IT_WORKS_GRID_CONFIG,
  MAIN_PHONE_BANNER_CONFIG,
  MAIN_QUESTIONS_CALLBACK_CONFIG,
  MAIN_REVIEWS_SLIDER_CONFIG,
} from '~/configs/pages/main'

import {
  BlockHeroeDefault,
  BlockGridWithCards,
  BlockBannerDefault,
  BlockFormCallback,
  BlockSliderDefault,
} from '~/components/blocks'
</script>

<style lang="scss" scoped></style>
