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

    <!-- to do: add block with last consultations -->
    <div class="p-2 mb-10 h-[200px] border rounded-xl">
      <VTitle
        title="Последние консультации"
        tag="h2"
        defaultClass="title" />
    </div>

    <VVerticalPadding
      :desktop-padding="MAIN_WHY_NEED_CONSULTATIONS_LIST_CONFIG.desktopPadding"
      :mobile-padding="MAIN_WHY_NEED_CONSULTATIONS_LIST_CONFIG.mobilePadding">
      <BlockListWithTitle
        :fields="MAIN_WHY_NEED_CONSULTATIONS_LIST_CONFIG.block_fields" />
    </VVerticalPadding>

    <!-- to do: add block with reviews -->
    <div class="p-2 mb-10 h-[200px] border rounded-xl">
      <VTitle
        title="Отзывы наших клиентов"
        tag="h2"
        defaultClass="title" />
    </div>

    <VVerticalPadding
      :desktop-padding="MAIN_CONSULTATIONS_ONLINE_LIST_CONFIG.desktopPadding"
      :mobile-padding="MAIN_CONSULTATIONS_ONLINE_LIST_CONFIG.mobilePadding">
      <BlockListWithTitle
        :fields="MAIN_CONSULTATIONS_ONLINE_LIST_CONFIG.block_fields" />
    </VVerticalPadding>

    <!-- to do: add block with how it works -->
    <div class="p-2 mb-10 h-[200px] border rounded-xl">
      <VTitle
        title="Как это работает?"
        tag="h2"
        defaultClass="title" />
    </div>

    <VVerticalPadding
      :desktop-padding="MAIN_PHONE_BANNER_CONFIG.desktopPadding"
      :mobile-padding="MAIN_PHONE_BANNER_CONFIG.mobilePadding">
      <BlockBannerDefault :fields="MAIN_PHONE_BANNER_CONFIG.block_fields" />
    </VVerticalPadding>

    <!-- to do: add block with services -->
    <div class="p-2 mb-10 h-[200px] border rounded-xl">
      <VTitle
        title="Услуги наших юристов"
        tag="h2"
        defaultClass="title" />
    </div>

    <!-- to do: add block with our lawyers -->
    <div class="p-2 mb-10 h-[200px] border rounded-xl">
      <VTitle
        title="Наши юристы"
        tag="h2"
        defaultClass="title" />
    </div>

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

    <!-- to do: add block with legal reference -->
    <div class="p-2 mb-10 h-[200px] border rounded-xl">
      <VTitle
        title="Правовой справочник"
        tag="h2"
        defaultClass="title" />
    </div>

    <!-- to do: add block with advantages -->
    <div class="p-2 mb-10 h-[200px] border rounded-xl">
      <VTitle
        title="Преимущества помощи от «100 Юристов»"
        tag="h2"
        defaultClass="title" />
    </div>

    <!-- to do: add block with new legal materials -->
    <div class="p-2 mb-10 h-[200px] border rounded-xl">
      <VTitle
        title="Новые правовые материалы"
        tag="h2"
        defaultClass="title" />
    </div>

    <!-- to do: add block with fqa -->
    <div class="p-2 mb-10 h-[200px] border rounded-xl">
      <VTitle
        title="Как задать вопрос бесплатно?"
        tag="h2"
        defaultClass="title" />
    </div>

    <VVerticalPadding
      :desktop-padding="MAIN_ABOUT_US_LIST_CONFIG.desktopPadding"
      :mobile-padding="MAIN_ABOUT_US_LIST_CONFIG.mobilePadding">
      <BlockListWithTitle :fields="MAIN_ABOUT_US_LIST_CONFIG.block_fields" />
    </VVerticalPadding>
  </div>
</template>

<script setup>
import { VVerticalPadding, VTitle } from '~/components/ui'
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
} from '~/configs/pages/index'
import {
  BlockFormPrompt,
  BlockBannerDefault,
  BlockStatistics,
  BlockSimpleStatistics,
  BlockListWithTitle,
} from '~/components/blocks'
</script>
