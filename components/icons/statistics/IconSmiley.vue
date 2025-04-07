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
      fill="url(#pattern0_4_114)" />
    <defs>
      <pattern
        id="pattern0_4_114"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1">
        <use
          xlink:href="#image0_4_114"
          transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_4_114"
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
  name: 'IconSmiley',
})

defineProps({
  rotate: null,
  size: '',
})
</script>
