<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
    viewBox="0 0 24 25"
    fill="none"
    :transform="`rotate(${getIconRotate(rotate)})`">
    <path
      fill="currentColor"
      d="M15 3H9a3 3 0 0 0-3 3v4h1V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4H6v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M3 12h10.25L10 8.75l.66-.75l4.5 4.5l-4.5 4.5l-.66-.75L13.25 13H3z" />
  </svg>
</template>

<script setup>
import getIconRotate from './shared/getIconRotate'
defineOptions({
  name: 'IconLogin',
})

defineProps({
  rotate: null,
  size: '',
})
</script>
