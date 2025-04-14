<template>
  <div class="flex items-center justify-center flex-col gap-x-4">
    <VTitle title="Спасибо за заявку!" defaultClass="title" />
    <VTitle title="Мы свяжемся с вами в ближайшее время" defaultClass="text-sm xl:text-lg text-opacity-50 font-medium text-center " />

    <VIcon name="IconCompare" size="60" class="mt-6 k-zoom" />
  </div>
</template>

<script setup>
import { VIcon, VTitle } from '~/components/ui'
defineOptions({
  name: 'Success',
})
</script>
