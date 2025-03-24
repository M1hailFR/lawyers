<template>
  <HeaderDefault
    :fields="HEADER_DEFAULT_CONFIG.block_fields"
    position="fixed" />
  <div>
    <slot />
  </div>
  <ModalDefault />
</template>

<script lang="ts" setup>
import HeaderDefault from '@/components/layouts/header/default.vue'
import { HEADER_DEFAULT_CONFIG } from '@/configs/layouts/layouts'
import ModalDefault from '@/components/modals/default.vue'
</script>

<style></style>
