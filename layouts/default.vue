<template>
  <VHeader
    :fields="HEADER_DEFAULT_CONFIG.block_fields"
    variant="light"
    position="fixed" />
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import VHeader from '@/components/layouts/header/default.vue'
import { HEADER_DEFAULT_CONFIG } from '@/configs/layouts/layouts'
</script>

<style></style>
