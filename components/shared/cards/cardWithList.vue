<template>
    <div class="">
      <VTitle :title="item.title" tag="h2" defaultClass="title2 ml-1" />
      <div :key="idx">
        <v-list
          :list="item.list"
          textSize="text-sm"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { VTitle, VList } from '~/components/ui'
  
  defineOptions({
    name: 'CardWithList',
  })
  
  const props = defineProps({
    item: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  })
  </script>
  
  <style lang="scss" scoped></style>
  