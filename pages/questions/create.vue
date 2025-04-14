<template>
  <div class="container">
    <VVerticalPadding
      :desktop-padding="QUESTIONS_CREATE_CONFIG.desktopPadding"
      :mobile-padding="QUESTIONS_CREATE_CONFIG.mobilePadding">
      <BlockFormCallback :fields="QUESTIONS_CREATE_CONFIG.block_fields" />
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
      :desktop-padding="MAIN_ADVANTAGES_GRID_CONFIG.desktopPadding"
      :mobile-padding="MAIN_ADVANTAGES_GRID_CONFIG.mobilePadding">
      <BlockGridWithCards :fields="MAIN_ADVANTAGES_GRID_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_ACHIEVEMENTS_CONFIG.desktopPadding"
      :mobile-padding="MAIN_ACHIEVEMENTS_CONFIG.mobilePadding">
      <BlockStatistics :fields="MAIN_ACHIEVEMENTS_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_PHONE_BANNER2_CONFIG.desktopPadding"
      :mobile-padding="MAIN_PHONE_BANNER2_CONFIG.mobilePadding">
      <BlockBannerDefault :fields="MAIN_PHONE_BANNER2_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_SERVICES_GRID_CONFIG.desktopPadding"
      :mobile-padding="MAIN_SERVICES_GRID_CONFIG.mobilePadding">
      <BlockGridWithCards :fields="MAIN_SERVICES_GRID_CONFIG.block_fields" />
    </VVerticalPadding>
  </div>
</template>

<script setup>
import { VVerticalPadding } from '~/components/ui'
import { QUESTIONS_CREATE_CONFIG } from '~/configs/pages/questions/create'
import {
  MAIN_HOW_IT_WORKS_GRID_CONFIG,
  MAIN_PHONE_BANNER_CONFIG,
  MAIN_ADVANTAGES_GRID_CONFIG,
  MAIN_ACHIEVEMENTS_CONFIG,
  MAIN_SERVICES_GRID_CONFIG,
  MAIN_PHONE_BANNER2_CONFIG,
} from '~/configs/pages/main'
import {
  BlockFormCallback,
  BlockGridWithCards,
  BlockBannerDefault,
  BlockStatistics,
} from '~/components/blocks'
</script>
