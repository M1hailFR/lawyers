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
      fill="url(#pattern0_4_44)" />
    <defs>
      <pattern
        id="pattern0_4_44"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1">
        <use
          xlink:href="#image0_4_44"
          transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_4_44"
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
  name: 'IconCompare',
})

defineProps({
  rotate: null,
  size: '',
})
</script>
