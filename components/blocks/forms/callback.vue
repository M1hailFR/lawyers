<template>
  <div class="card">
    <div class="card--left">
      <div>
        <VTitle :title="fields.title" defaultClass="title"/>
        <VTitle :title="fields.subtitle" defaultClass="subtitle max-w-xl" />
        <SharedFormCallback
          :settings="fields.formSettings"
          isBackground />
      </div>
    </div>
    <div class="card--right">questions</div>
  </div>
</template>

<script setup>
import { VTitle, VButton } from '~/components/ui'
import { SharedFormCallback } from '~/components/shared/forms'

defineOptions({
  name: 'BlocksFormsCallback',
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
  @apply grid grid-cols-5 gap-10 text-neutral2;

  &--left {
    @apply col-span-3 p-8 rounded-xl bg-secondary/20 relative z-10;
  }

  &--right {
    @apply col-span-2 p-8 rounded-xl border border-neutral5;
  }
}
</style>
