<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="40"
    :height="20"
    viewBox="0 0 43 13"
    fill="none"
    :transform="`rotate(${getIconRotate(rotate)})`">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.5531 2.34098e-07V0.0052998C11.5478 0.0052998 9.8785 1.19209e-07 9.4333 1.5842C9.0252 3.0368 7.8752 7.0474 7.8434 7.1579H7.5254C7.5254 7.1579 6.3489 3.0579 5.9356 1.5789C5.4904 -0.00529945 3.8157 2.34098e-07 3.8157 2.34098e-07H0V12.0527H3.8157V4.8948H3.9747H4.1337L6.3595 12.0527H9.0093L11.2352 4.9H11.5531V12.0527H15.3689V2.34098e-07H11.5531Z"
      fill="#4DB45E" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M25.4911 0C25.4911 0 24.3729 0.0999998 23.8482 1.2632L21.1454 7.1579H20.8274V0H17.0117V12.0527H20.6155C20.6155 12.0527 21.7867 11.9474 22.3113 10.7895L24.9611 4.8948H25.2791V12.0527H29.0948V0H25.4911Z"
      fill="#4DB45E" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M30.7891 5.47461V12.0536H34.6048V8.21151H38.7385C40.5403 8.21151 42.0666 7.06941 42.6337 5.47461H30.7891Z"
      fill="#4DB45E" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M38.7386 0H30.2539C30.6779 2.2947 32.4109 4.1369 34.6526 4.7369C35.1613 4.8737 35.6966 4.9474 36.2478 4.9474H42.7875C42.8458 4.6737 42.8723 4.3948 42.8723 4.1053C42.8723 1.8369 41.0227 0 38.7386 0Z"
      fill="url(#paint0_linear_34_14)" />
    <defs>
      <linearGradient
        id="paint0_linear_34_14"
        x1="30.2549"
        y1="2.4737"
        x2="42.8723"
        y2="2.4737"
        gradientUnits="userSpaceOnUse">
        <stop
          offset="0.3"
          stop-color="#00B4E6" />
        <stop
          offset="1"
          stop-color="#088CCB" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup>
import getIconRotate from '../shared/getIconRotate'
defineOptions({
  name: 'IconMir',
})

defineProps({
  rotate: null,
  size: '',
})
</script>
