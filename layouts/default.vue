<template>
  <HeaderDefault
    :fields="HEADER_DEFAULT_CONFIG.block_fields"
    position="fixed" />
  <div class="flex-1 min-h-dvh">
    <slot />
  </div>
  <FooterDefault
    :fields="FOOTER_DEFAULT_CONFIG.block_fields" />
  <ModalDefault />
</template>

<script lang="ts" setup>
import HeaderDefault from '@/components/layouts/header/default.vue'
import FooterDefault from '@/components/layouts/footer/default.vue'
import { HEADER_DEFAULT_CONFIG, FOOTER_DEFAULT_CONFIG } from '@/configs/layouts/layouts'
import ModalDefault from '@/components/modals/default.vue'
</script>

<style></style>
