<template>
  <div class="container">
    <VVerticalPadding
      :desktop-padding="QUESTIONS_CREATE_CONFIG.desktopPadding"
      :mobile-padding="QUESTIONS_CREATE_CONFIG.mobilePadding">
      <BlocksFormsCallback :fields="QUESTIONS_CREATE_CONFIG.block_fields" />
    </VVerticalPadding>
  </div>
</template>

<script setup>
import { VVerticalPadding } from '~/components/ui'
import { SharedFormCallback } from '~/components/shared/forms'
import { QUESTIONS_CREATE_CONFIG } from '~/configs/pages/questions/create'
import { BlocksFormsCallback } from '~/components/blocks'
</script>
