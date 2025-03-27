<template>
  <div class="container">
    <VVerticalPadding
      :desktop-padding="MAIN_FORM_CONFIG.desktopPadding"
      :mobile-padding="MAIN_FORM_CONFIG.mobilePadding">
      <BlockFormPrompt
        :fields="MAIN_FORM_CONFIG.block_fields.promptFormSettings" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_INFO_BANNER_CONFIG.desktopPadding"
      :mobile-padding="MAIN_INFO_BANNER_CONFIG.mobilePadding">
      <BlockBannerDefault :fields="MAIN_INFO_BANNER_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_PHONE_BANNER_CONFIG.desktopPadding"
      :mobile-padding="MAIN_PHONE_BANNER_CONFIG.mobilePadding">
      <BlockBannerDefault :fields="MAIN_PHONE_BANNER_CONFIG.block_fields" />
    </VVerticalPadding>

    <VVerticalPadding
      :desktop-padding="MAIN_ACHIEVEMENTS_BANNER_CONFIG.desktopPadding"
      :mobile-padding="MAIN_ACHIEVEMENTS_BANNER_CONFIG.mobilePadding">
      <BlockBannerDefault
        :fields="MAIN_ACHIEVEMENTS_BANNER_CONFIG.block_fields" />
    </VVerticalPadding>
  </div>
</template>

<script setup>
import { VVerticalPadding } from '~/components/ui'
import {
  MAIN_FORM_CONFIG,
  MAIN_INFO_BANNER_CONFIG,
  MAIN_PHONE_BANNER_CONFIG,
  MAIN_ACHIEVEMENTS_BANNER_CONFIG,
} from '~/configs/pages/index'
import { BlockFormPrompt, BlockBannerDefault } from '~/components/blocks'
</script>
