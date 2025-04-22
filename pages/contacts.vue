<template>
  <div class="container">
    <VVerticalPadding
      :desktop-padding="MAIN_CONTACTS_HERO_CONFIG.desktopPadding"
      :mobile-padding="MAIN_CONTACTS_HERO_CONFIG.mobilePadding">
      <BlockHeroeDefault :fields="MAIN_CONTACTS_HERO_CONFIG.block_fields" />
    </VVerticalPadding>
  </div>
</template>

<script setup>
import { VVerticalPadding } from '~/components/ui'
import { MAIN_CONTACTS_HERO_CONFIG } from '~/configs/pages/contacts'

import { BlockHeroeDefault } from '~/components/blocks'
</script>

<style lang="scss" scoped></style>