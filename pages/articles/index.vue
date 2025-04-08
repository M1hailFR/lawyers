<template>
  <div class="container">

    <VVerticalPadding
      :desktop-padding="ARTICLES_GRID_CONFIG.desktopPadding"
      :mobile-padding="ARTICLES_GRID_CONFIG.mobilePadding">
      <BlockGridWithCards :fields="ARTICLES_GRID_CONFIG.block_fields" />
    </VVerticalPadding>
    
  </div>
</template>

<script setup>
import { VVerticalPadding } from '~/components/ui'

import { ARTICLES_GRID_CONFIG } from '~/configs/pages/articles'

import {
  BlockBannerDefault,
  BlockGridWithCards,
  BlockFormCallback
} from '~/components/blocks'

</script>
