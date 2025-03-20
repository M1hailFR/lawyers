<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
    viewBox="0 0 24 24"
    fill="none"
    :transform="`rotate(${getIconRotate(rotate)})`">
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4" />
  </svg>
</template>

<script setup>
import getIconRotate from '../shared/getIconRotate'
defineOptions({
  name: 'IconTelegram',
})

defineProps({
  rotate: null,
  size: '',
})
</script>
