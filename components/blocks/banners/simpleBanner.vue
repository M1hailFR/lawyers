<template>
  <div class="relative bg-primary p-4 md:p-6 overflow-hidden h-full rounded-xl">
    <div>
      <VTitle
        :title="fields.title"
        defaultClass="title2 text-neutral1" />
      <VTitle
        :title="fields.subtitle"
        defaultClass="subtitle  text-neutral1/70 mt-4  relative z-10" />
    </div>
    <div class="min-h-[150px] sm:min-h-[180px] md:block flex md:mt-6 md:min-h-[250px] xl:flex xl:min-h-[140px]">
      <div>
        <div
          class="absolute -bottom-20 -left-20 w-72 aspect-square bg-secondary/50 rounded-full z-[1]" />
        <div
          v-if="fields.image"
          class="mr-[70px]">
          <VImage
            class="absolute -bottom-1 -left-0 w-[150px] sm:w-[180px] aspect-square z-[1]"
            :src="fields.image"
            cover />
        </div>
      </div>

      <div
        v-if="fields.phone"
        class="w-full flex flex-col justify-center relative z-10 ml-4 sm:ml-[70px] md:ml-0 xl:ml-12">
        <VTitle
          :title="fields.phone.text"
          defaultClass="subtitle text-neutral1/70 mb-2" />
        <VLink
          :link="fields.phone.link"
          color="neutral1"
          class="flex gap-2 mb-2">
          <VIcon
            name="IconPhone"
            size="28" />
          <VTitle
            :title="fields.phone.value"
            defaultClass="text-left text-nowrap font-medium text-base xl:text-xl leading-5" />
        </VLink>
        <VTitle
          :title="fields.phone.description"
          defaultClass="text-sm text-left text-neutral1/70" />
      </div>
    </div>
  </div>

  <!-- <div class="relative bg-primary p-4 md:p-6 overflow-hidden h-full rounded-xl">
    <div>
      <VTitle
        :title="fields.title"
        defaultClass="title2 text-neutral1" />
      <VTitle
        :title="fields.subtitle"
        defaultClass="subtitle  text-neutral1/70 mt-4  relative z-10" />
    </div>

    <div
      class="flex flex-row sm:flex-col min-h-[160px] md:min-h-[250px] gap-x-10 xl:flex-row w-full mt-4 relative">

      <div
        class="absolute -bottom-20 -left-20 w-72 aspect-square bg-secondary/50 rounded-full z-[1]" />
      <div
        v-if="fields.image"
        class="mr-[70px]">
        <VImage
          class="absolute -bottom-9 -left-9 w-[180px] sm:w-[200px] aspect-square z-[1]"
          :src="fields.image"
          cover />
      </div>
      <div
        v-if="fields.phone"
        class="w-full flex flex-col justify-center relative z-10 ml-0 sm:ml-[70px] md:ml-0">
        <VTitle
          :title="fields.phone.text"
          defaultClass="subtitle text-neutral1/70 mb-2" />
        <VLink
          :link="fields.phone.link"
          color="neutral1"
          class="flex gap-2 mb-2">
          <VIcon
            name="IconPhone"
            size="28" />
          <VTitle
            :title="fields.phone.value"
            defaultClass="text-left text-nowrap font-medium text-lg xl:text-xl leading-5" />
        </VLink>
        <VTitle
          :title="fields.phone.description"
          defaultClass="text-sm max-w-[290px] md:max-w-full text-left text-neutral1/70" />
      </div>
    </div>
  </div> -->
</template>

<script setup>
import { VImage, VTitle, VLink, VIcon } from '~/components/ui'

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
