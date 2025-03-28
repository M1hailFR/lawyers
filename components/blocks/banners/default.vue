<template>
  <div
    class="relative bg-primary p-4 md:p-8 min-h-[236px] overflow-hidden h-full flex items-center rounded-xl justify-center">
    <div class="flex flex-col gap-x-10 md:flex-row w-full items-center">
      <!-- left block -->
      <div
        class="absolute -bottom-20 -left-20 w-80 aspect-square bg-secondary/50 rounded-full z-[1]" />
      <div
        v-if="fields.image"
        class="hidden lg:block mr-[200px]">
        <VImage
          class="absolute -bottom-1 left-0 w-56 aspect-square z-[1]"
          :src="fields.image"
          cover />
      </div>

      <!-- phone block -->
      <div
        v-if="fields.phone"
        class="flex-1 w-full flex flex-col relative z-10 items-center md:items-start mb-4 md:mb-0">
        <VTitle
          :title="fields.phone.text"
          defaultClass="subtitle text-neutral1/70 mb-4" />
        <VLink
          :link="fields.phone.link"
          color="neutral1"
          class="flex items-center gap-4 mb-2">
          <VIcon
            name="IconPhone"
            size="32" />
          <VTitle
            :title="fields.phone.value"
            defaultClass="text-center md:text-left font-medium text-xl xl:text-3xl leading-5" />
        </VLink>
        <VTitle
          :title="fields.phone.description"
          defaultClass="text-sm text-center max-w- md:text-left text-neutral1/70" />
      </div>

      <!-- layers block -->
      <div
        v-if="fields.layers"
        class="relative z-10 mt-4 md:mt-0">
        <VTitle
          title="53 юриста сейчас онлайн"
          defaultClass="subtitle text-neutral1" />
        <div class="flex flex-row justify-center items-center my-4">
          <div
            v-for="(layer, idx) in 10"
            :key="idx"
            class="w-14 h-14 sm:w-16 sm:h-16 bg-neutral5 rounded-full shadow-neutral2/50 shadow-base -ml-8 first:ml-0">
            <!-- <VImage :src="layer" cover /> -->
          </div>
        </div>
      </div>

      <!-- phone call block -->
      <div
        v-if="fields.formSettings"
        class="relative z-10 text-neutral1">
        <VTitle
          :title="fields.title"
          :class="fields.subtitle ? 'mb-3' : ''"
          defaultClass="text-center md:text-left font-medium text-xl xl:text-3xl leading-5" />
        <VTitle
          :title="fields.subtitle"
          defaultClass="text-sm text-center md:text-left text-neutral1/70" />
        <SharedFormCallback
          :settings="fields.formSettings"
          isBackground
          color="neutral1" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { VImage, VLink, VTitle, VIcon } from '~/components/ui'
import { SharedFormCallback } from '~/components/shared/forms'

defineOptions({
  name: 'BlockBannerDefault',
})

const props = defineProps({
  fields: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style lang="scss" scoped></style>
