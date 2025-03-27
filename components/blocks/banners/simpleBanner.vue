<template>
  <div>BlockBannerSimple</div>
</template>

<script setup>
defineOptions({
  name: 'BlockBannerSimple',
})

const props = defineProps({
  fields: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style lang="scss" scoped></style>
