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
      fill="url(#pattern0_4_94)" />
    <defs>
      <pattern
        id="pattern0_4_94"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1">
        <use
          xlink:href="#image0_4_94"
          transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_4_94"
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
  name: 'IconTimer',
})

defineProps({
  rotate: null,
  size: '',
})
</script>
