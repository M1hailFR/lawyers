<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width || size"
    :height="height || size"
    :transform="`rotate(${getIconRotate(rotate)})`"
    viewBox="0 0 64 64"
    fill="none">
    <linearGradient
      id="nKEdfJkkRaIvB5Lr2l9FSa_53015_gr1"
      x1="31.877"
      x2="32.127"
      y1="5.753"
      y2="59.003"
      gradientUnits="userSpaceOnUse"
      spreadMethod="reflect">
      <stop
        offset="0"
        stop-color="#1a6dff"></stop>
      <stop
        offset="1"
        stop-color="#c822ff"></stop>
    </linearGradient>
    <path
      fill="url(#nKEdfJkkRaIvB5Lr2l9FSa_53015_gr1)"
      d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path>
    <linearGradient
      id="nKEdfJkkRaIvB5Lr2l9FSb_53015_gr2"
      x1="32"
      x2="32"
      y1="10"
      y2="53.546"
      gradientUnits="userSpaceOnUse"
      spreadMethod="reflect">
      <stop
        offset="0"
        stop-color="#6dc7ff"></stop>
      <stop
        offset="1"
        stop-color="#e6abff"></stop>
    </linearGradient>
    <path
      fill="url(#nKEdfJkkRaIvB5Lr2l9FSb_53015_gr2)"
      d="M32,54c-12.131,0-22-9.869-22-22s9.869-22,22-22s22,9.869,22,22S44.131,54,32,54z M32,12 c-11.028,0-20,8.972-20,20s8.972,20,20,20s20-8.972,20-20S43.028,12,32,12z"></path>
  </svg>
</template>

<script setup>
import getIconRotate from '../shared/getIconRotate'
defineOptions({
  name: 'IconCircle',
})

defineProps({
  rotate: null,
  size: '',
})
</script>
