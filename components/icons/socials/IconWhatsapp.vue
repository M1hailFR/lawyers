<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
    viewBox="0 0 24 24"
    fill="none"
    :transform="`rotate(${getIconRotate(rotate)})`">
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2">
      <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z" />
      <path
        d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </g>
  </svg>
</template>

<script setup>
import getIconRotate from '../shared/getIconRotate'
defineOptions({
  name: 'IconWhatsapp',
})

defineProps({
  rotate: null,
  size: '',
})
</script>
