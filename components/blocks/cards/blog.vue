<template>
  <div class="grid gap-4 grid-cols-1 md:grid-cols-6">
    <div class="md:col-span-4">
      <div class="flex flex-col-reverse xl:flex-row gap-4">
        <div
          class="w-full min-w-[250px] xl:w-[250px] aspect-square max-h-[300px] rounded-xl overflow-hidden">
          <VImage
            v-if="fields.image"
            :src="fields.image"
            cover />
        </div>
        <div>
          <div class="items-start gap-1">
            <VTitle
              v-if="fields.title"
              :title="fields.title"
              defaultClass="title" />
          </div>

          <VTitle
            v-if="fields.subtitle"
            :title="fields.subtitle"
            defaultClass="subtitle" />
          <VTitle
            v-if="fields.description"
            :title="fields.description"
            defaultClass="text-sm md:text-base my-2 text-neutral3" />
          <div class="flex gap-2 items-center mt-4">
            <!-- to do : add image -->
            <div class="min-w-10 h-10 rounded-full bg-neutral3/20" />
            <div class="flex flex-col h-full">
              <VTitle
                v-if="fields.author"
                :title="fields.author"
                defaultClass="text-sm text-nowrap leading-none mt-1" />
              <VTitle
                v-if="fields.date"
                :title="fields.date"
                defaultClass="text-xs text-neutral3" />
            </div>
          </div>
        </div>
      </div>

      <div
        v-for="(item, idx) in fields.content"
        :key="idx"
        :id="item?.hash?.split('#').pop()">
        <VTitle
          v-if="item.title"
          :title="item.title"
          defaultClass="title mt-4" />
        <VTitle
          v-if="item.subtitle"
          :title="item.subtitle"
          defaultClass="subtitle" />
        <VList
          v-if="item.list"
          :list="item.list"
          customMark
          divider
          class="my-4" />
        <VTitle
          v-if="item.description"
          :title="item.description"
          defaultClass="text-sm md:text-base my-2 text-neutral3" />
        <div
          v-if="item.explanation"
          class="p-4 md:p-6 bg-neutral3/20 rounded-xl mt-4">
          <VTitle
            :title="item.explanation"
            defaultClass="text-sm md:text-base text-neutral2/70 leading-6" />
        </div>
      </div>
    </div>
    <div class="md:col-span-2 h-max sticky top-20">
      <BlockBannerSimple :fields="ARTICLES_SIMPLE_BANNER_CONFIG.block_fields" />

      <nav class="mt-4 rounded-xl bg-secondary/20 p-4 md:p-6">
        <VTitle
          v-if="fields.title"
          title="Содержание статьи"
          defaultClass="title2" />
        <VLink
          v-for="(item, idx) in articleNav()"
          :key="idx"
          :hash="item.hash"
          type="secondary"
          color="neutral3"
          class="hover:translate-x-1 mt-1 flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-neutral3/20" />
          {{ item.title }}
        </VLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { VTitle, VImage, VList, VLink } from '~/components/ui'

import { ARTICLES_SIMPLE_BANNER_CONFIG } from '~/configs/pages/articles'

import { BlockBannerSimple } from '~/components/blocks'

defineOptions({
  name: 'BlockCardBlog',
})

const props = defineProps({
  fields: {
    type: Object,
    required: true,
  },
})

const articleNav = () => {
  return props.fields.content.map((item) => ({
    title: item.title,
    hash: item.hash,
  }))
}
</script>

<style lang="scss" scoped></style>
