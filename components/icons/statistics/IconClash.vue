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
      fill="url(#pattern0_4_79)" />
    <defs>
      <pattern
        id="pattern0_4_79"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1">
        <use
          xlink:href="#image0_4_79"
          transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_4_79"
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
  name: 'IconClash',
})

defineProps({
  rotate: null,
  size: '',
})
</script>
