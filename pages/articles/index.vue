<template>
  <div class="container">
    <VVerticalPadding
      :desktop-padding="ARTICLES_HERO_CONFIG.desktopPadding"
      :mobile-padding="ARTICLES_HERO_CONFIG.mobilePadding">
      <BlockHeroeDefault :fields="ARTICLES_HERO_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="ARTICLES_MATERIALS_GRID_CONFIG.desktopPadding"
      :mobile-padding="ARTICLES_MATERIALS_GRID_CONFIG.mobilePadding">
      <BlockGridWithCards
        :fields="ARTICLES_MATERIALS_GRID_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_INFO_BANNER_CONFIG.desktopPadding"
      :mobile-padding="MAIN_INFO_BANNER_CONFIG.mobilePadding">
      <BlockBannerDefault :fields="MAIN_INFO_BANNER_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="ARTICLES_GRID_CONFIG.desktopPadding"
      :mobile-padding="ARTICLES_GRID_CONFIG.mobilePadding">
      <BlockGridWithCards :fields="ARTICLES_GRID_CONFIG.block_fields" />
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
  ARTICLES_GRID_CONFIG,
  ARTICLES_MATERIALS_GRID_CONFIG,
  ARTICLES_HERO_CONFIG,
} from '~/configs/pages/articles'
import {
  MAIN_QUESTIONS_CALLBACK_CONFIG,
  MAIN_INFO_BANNER_CONFIG,
} from '~/configs/pages/main'

import {
  BlockBannerDefault,
  BlockGridWithCards,
  BlockFormCallback,
  BlockHeroeDefault
} from '~/components/blocks'
</script>
