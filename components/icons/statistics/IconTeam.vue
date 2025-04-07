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
      fill="url(#pattern0_4_84)" />
    <defs>
      <pattern
        id="pattern0_4_84"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1">
        <use
          xlink:href="#image0_4_84"
          transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_4_84"
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
  name: 'IconTeam',
})

defineProps({
  rotate: null,
  size: '',
})
</script>
