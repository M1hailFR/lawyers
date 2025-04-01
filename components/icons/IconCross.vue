<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
    viewBox="0 0 24 24"
    fill="none"
    :transform="`rotate(${getIconRotate(rotate)})`">
    <path
      d="m17 7.496-10 10m0-10 10 10"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>
</template>

<script setup>
import getIconRotate from './shared/getIconRotate'
defineOptions({
  name: 'IconCross',
})

defineProps({
  rotate: null,
  size: ''
})
</script>
