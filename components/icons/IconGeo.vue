<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
    viewBox="0 0 24 25"
    fill="none"
    :transform="`rotate(${getIconRotate(rotate)})`">
    <g
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd">
      <path
        d="M12 6a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m-1.5 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" />
      <path
        d="M12 2C7.828 2 4.5 5.483 4.5 9.712c0 2.189 1.214 4.389 2.565 6.286c.923 1.296 2.01 2.578 2.957 3.694c.44.52.85 1.003 1.2 1.436l.778.964l.778-.964c.35-.433.76-.916 1.2-1.436c.947-1.116 2.034-2.398 2.957-3.694C18.286 14.1 19.5 11.9 19.5 9.712C19.5 5.483 16.172 2 12 2M6.5 9.712C6.5 6.527 8.992 4 12 4s5.5 2.527 5.5 5.712c0 1.519-.875 3.274-2.194 5.125c-.877 1.231-1.855 2.384-2.772 3.465q-.272.318-.534.63l-.534-.63c-.917-1.08-1.895-2.234-2.772-3.465C7.376 12.987 6.5 11.231 6.5 9.712" />
    </g>
  </svg>
</template>

<script setup>
import getIconRotate from './shared/getIconRotate'
defineOptions({
  name: 'IconGeo',
})

defineProps({
  rotate: null,
  size: '',
})
</script>
