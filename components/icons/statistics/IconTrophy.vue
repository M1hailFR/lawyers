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
      fill="url(#pattern0_4_109)" />
    <defs>
      <pattern
        id="pattern0_4_109"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1">
        <use
          xlink:href="#image0_4_109"
          transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_4_109"
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
  name: 'IconTrophy',
})

defineProps({
  rotate: null,
  size: '',
})
</script>
