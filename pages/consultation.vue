<template>
  <div class="container">
    <VVerticalPadding
      :desktop-padding="CONSULTATION_HERO_CONFIG.desktopPadding"
      :mobile-padding="CONSULTATION_HERO_CONFIG.mobilePadding">
      <BlockHeroeDefault :fields="CONSULTATION_HERO_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_STATISTICS_CONFIG.desktopPadding"
      :mobile-padding="MAIN_STATISTICS_CONFIG.mobilePadding">
      <BlockSimpleStatistics :fields="MAIN_STATISTICS_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="CONSULTATION_ADVANTAGES_LIST_CONFIG.desktopPadding"
      :mobile-padding="CONSULTATION_ADVANTAGES_LIST_CONFIG.mobilePadding">
      <BlockListWithTitle
        :fields="CONSULTATION_ADVANTAGES_LIST_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="CONSULTATION_ADVANTAGES_GRID_CONFIG.desktopPadding"
      :mobile-padding="CONSULTATION_ADVANTAGES_GRID_CONFIG.mobilePadding">
      <BlockGridWithCards
        :fields="CONSULTATION_ADVANTAGES_GRID_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_INFO_BANNER_CONFIG.desktopPadding"
      :mobile-padding="MAIN_INFO_BANNER_CONFIG.mobilePadding">
      <BlockBannerDefault :fields="MAIN_INFO_BANNER_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="CONSULTATION_HELP_GRID_CONFIG.desktopPadding"
      :mobile-padding="CONSULTATION_HELP_GRID_CONFIG.mobilePadding">
      <BlockGridWithCards
        :fields="CONSULTATION_HELP_GRID_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_PHONE_BANNER_CONFIG.desktopPadding"
      :mobile-padding="MAIN_PHONE_BANNER_CONFIG.mobilePadding">
      <BlockBannerDefault :fields="MAIN_PHONE_BANNER_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="CONSULTATION_STEPS_GRID_CONFIG.desktopPadding"
      :mobile-padding="CONSULTATION_STEPS_GRID_CONFIG.mobilePadding">
      <BlockGridWithCards
        :fields="CONSULTATION_STEPS_GRID_CONFIG.block_fields" />
    </VVerticalPadding>
  </div>
</template>

<script setup>
import { VVerticalPadding } from '~/components/ui'
import {
  CONSULTATION_HERO_CONFIG,
  CONSULTATION_ADVANTAGES_LIST_CONFIG,
  CONSULTATION_ADVANTAGES_GRID_CONFIG,
  CONSULTATION_HELP_GRID_CONFIG,
  CONSULTATION_STEPS_GRID_CONFIG,
} from '~/configs/pages/consultation'

import {
  MAIN_STATISTICS_CONFIG,
  MAIN_INFO_BANNER_CONFIG,
  MAIN_PHONE_BANNER_CONFIG,
} from '~/configs/pages/main'

import {
  BlockHeroeDefault,
  BlockListWithTitle,
  BlockGridWithCards,
  BlockBannerDefault,
  BlockSimpleStatistics
} from '~/components/blocks'
</script>

<style lang="scss" scoped></style>
