<template>
  <div class="container">
    <VVerticalPadding
      :desktop-padding="MAIN_FORM_CONFIG.desktopPadding"
      :mobile-padding="MAIN_FORM_CONFIG.mobilePadding">
      <BlockFormPrompt
        :fields="MAIN_FORM_CONFIG.block_fields.promptFormSettings" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_STATISTICS_CONFIG.desktopPadding"
      :mobile-padding="MAIN_STATISTICS_CONFIG.mobilePadding">
      <BlockSimpleStatistics :fields="MAIN_STATISTICS_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_INFO_BANNER_CONFIG.desktopPadding"
      :mobile-padding="MAIN_INFO_BANNER_CONFIG.mobilePadding">
      <BlockBannerDefault :fields="MAIN_INFO_BANNER_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_CONSULTATIONS_SLIDER_CONFIG.desktopPadding"
      :mobile-padding="MAIN_CONSULTATIONS_SLIDER_CONFIG.mobilePadding">
      <BlockSliderDefault :fields="MAIN_CONSULTATIONS_SLIDER_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_WHY_NEED_CONSULTATIONS_LIST_CONFIG.desktopPadding"
      :mobile-padding="MAIN_WHY_NEED_CONSULTATIONS_LIST_CONFIG.mobilePadding">
      <BlockListWithTitle
        :fields="MAIN_WHY_NEED_CONSULTATIONS_LIST_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_REVIEWS_SLIDER_CONFIG.desktopPadding"
      :mobile-padding="MAIN_REVIEWS_SLIDER_CONFIG.mobilePadding">
      <BlockSliderDefault :fields="MAIN_REVIEWS_SLIDER_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_CONSULTATIONS_ONLINE_LIST_CONFIG.desktopPadding"
      :mobile-padding="MAIN_CONSULTATIONS_ONLINE_LIST_CONFIG.mobilePadding">
      <BlockListWithTitle
        :fields="MAIN_CONSULTATIONS_ONLINE_LIST_CONFIG.block_fields" />
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
      :desktop-padding="MAIN_SERVICES_GRID_CONFIG.desktopPadding"
      :mobile-padding="MAIN_SERVICES_GRID_CONFIG.mobilePadding">
      <BlockGridWithCards :fields="MAIN_SERVICES_GRID_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_OUR_LAWYERS_SLIDER_CONFIG.desktopPadding"
      :mobile-padding="MAIN_OUR_LAWYERS_SLIDER_CONFIG.mobilePadding">
      <BlockSliderDefault :fields="MAIN_OUR_LAWYERS_SLIDER_CONFIG.block_fields" />
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
      :desktop-padding="MAIN_REFERENCE_GRID_CONFIG.desktopPadding"
      :mobile-padding="MAIN_REFERENCE_GRID_CONFIG.mobilePadding">
      <BlockGridWithCards :fields="MAIN_REFERENCE_GRID_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_ADVANTAGES_GRID_CONFIG.desktopPadding"
      :mobile-padding="MAIN_ADVANTAGES_GRID_CONFIG.mobilePadding">
      <BlockGridWithCards :fields="MAIN_ADVANTAGES_GRID_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_QUESTIONS_CALLBACK_CONFIG.desktopPadding"
      :mobile-padding="MAIN_QUESTIONS_CALLBACK_CONFIG.mobilePadding">
      <BlockFormCallback :fields="MAIN_QUESTIONS_CALLBACK_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_MATERIALS_GRID_CONFIG.desktopPadding"
      :mobile-padding="MAIN_MATERIALS_GRID_CONFIG.mobilePadding">
      <BlockGridWithCards :fields="MAIN_MATERIALS_GRID_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_FQA_COLLAPSE_CONFIG.desktopPadding"
      :mobile-padding="MAIN_FQA_COLLAPSE_CONFIG.mobilePadding">
      <BlockCollapseWithTitle :fields="MAIN_FQA_COLLAPSE_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_ABOUT_US_LIST_CONFIG.desktopPadding"
      :mobile-padding="MAIN_ABOUT_US_LIST_CONFIG.mobilePadding">
      <BlockListWithTitle :fields="MAIN_ABOUT_US_LIST_CONFIG.block_fields" />
    </VVerticalPadding>
  </div>
</template>

<script setup>
import { VVerticalPadding } from '~/components/ui'
import {
  MAIN_FORM_CONFIG,
  MAIN_STATISTICS_CONFIG,
  MAIN_INFO_BANNER_CONFIG,
  MAIN_PHONE_BANNER_CONFIG,
  MAIN_PHONE_BANNER2_CONFIG,
  MAIN_ACHIEVEMENTS_CONFIG,
  MAIN_CONSULTATIONS_ONLINE_LIST_CONFIG,
  MAIN_WHY_NEED_CONSULTATIONS_LIST_CONFIG,
  MAIN_ABOUT_US_LIST_CONFIG,
  MAIN_HOW_IT_WORKS_GRID_CONFIG,
  MAIN_FQA_COLLAPSE_CONFIG,
  MAIN_MATERIALS_GRID_CONFIG,
  MAIN_CONSULTATIONS_SLIDER_CONFIG,
  MAIN_REVIEWS_SLIDER_CONFIG,
  MAIN_OUR_LAWYERS_SLIDER_CONFIG,
  MAIN_SERVICES_GRID_CONFIG,
  MAIN_ADVANTAGES_GRID_CONFIG,
  MAIN_REFERENCE_GRID_CONFIG,
  MAIN_QUESTIONS_CALLBACK_CONFIG
} from '~/configs/pages/index'

import {
  BlockFormPrompt,
  BlockBannerDefault,
  BlockStatistics,
  BlockSimpleStatistics,
  BlockListWithTitle,
  BlockGridWithCards,
  BlockCollapseWithTitle,
  BlockSliderDefault,
  BlockFormCallback
} from '~/components/blocks'
</script>
