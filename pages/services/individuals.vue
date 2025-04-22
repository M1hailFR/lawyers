<template>
  <div class="container">
    <VVerticalPadding
      :desktop-padding="MAIN_INDIVIDUALS_HERO_CONFIG.desktopPadding"
      :mobile-padding="MAIN_INDIVIDUALS_HERO_CONFIG.mobilePadding">
      <BlockHeroeDefault
        :fields="MAIN_INDIVIDUALS_HERO_CONFIG.block_fields" />
    </VVerticalPadding>
  </div>
</template>

<script setup>
import { VVerticalPadding } from '~/components/ui'
import { MAIN_INDIVIDUALS_HERO_CONFIG } from '~/configs/pages/services/individuals'

import { BlockHeroeDefault } from '~/components/blocks'
</script>

<style lang="scss" scoped></style>
