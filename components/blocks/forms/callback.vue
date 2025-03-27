<template>
  <div class="card">
    <div
      class="card--left"
      :class="fields.isBackground ? 'bg-primary' : ''">
      <div>
        <SharedFormCallback :settings="fields.formSettings" isBackground color="neutral1" />
      </div>
    </div>
    <div class="card--right">questions</div>
  </div>
</template>

<script setup>
import { VTitle } from '~/components/ui'
import { SharedFormCallback } from '~/components/shared/forms'

defineOptions({
  name: 'BlockFormCallback',
})

const props = defineProps({
  fields: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style lang="scss" scoped>
.card {
  @apply grid grid-cols-1 md:grid-cols-5 gap-10 text-neutral2;

  &--left {
    @apply md:col-span-3 p-8 rounded-xl relative z-10;
  }

  &--right {
    @apply md:col-span-2 p-8 rounded-xl border border-neutral5;
  }
}
</style>
