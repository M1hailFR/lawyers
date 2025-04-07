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
      fill="url(#pattern0_4_39)" />
    <defs>
      <pattern
        id="pattern0_4_39"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1">
        <use
          xlink:href="#image0_4_39"
          transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_4_39"
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
  name: 'IconOk',
})

defineProps({
  rotate: null,
  size: '',
})
</script>
