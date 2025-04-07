<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width || size"
    :height="height || size"
    :transform="`rotate(${getIconRotate(rotate)})`"
    viewBox="0 0 50 50"
    fill="none">
    <rect
      width="50"
      height="50"
      fill="url(#pattern0_4_104)" />
    <defs>
      <pattern
        id="pattern0_4_104"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1">
        <use
          xlink:href="#image0_4_104"
          transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_4_104"
        width="64"
        height="64"
        preserveAspectRatio="none"
        xlink:href="data:image/png;base64,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" />
    </defs>
  </svg>
</template>

<script setup>
import getIconRotate from '../shared/getIconRotate'
defineOptions({
  name: 'IconService',
})

defineProps({
  rotate: null,
  size: '',
})
</script>
