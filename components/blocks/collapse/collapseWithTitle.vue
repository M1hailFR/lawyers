<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-full relative">
    <div class="md:sticky top-[90px] h-max">
      <div class="d-flex flex-col items-center">
        <VTitle
          :title="fields.title"
          default-class="title" />
        <VTitle
          :title="fields.subtitle"
          :tag="h3"
          default-class="subtitle mb-4 text-neutral2/70" />
      </div>
      <div class="overflow-hidden rounded-xl">
        <VImage
          v-if="fields.image"
          :src="fields.image"
          cover
         />
      </div>
      <div
        v-if="fields.buttonText"
        class="d-flex justify-center mt-5 mt-md-8">
        <VButton @click="openModal('askQuestion')">
          {{ fields.buttonText }}
        </VButton>
      </div>
    </div>
    <div>
      <VCollapse
        v-for="(item, idx) in fields.items"
        :key="idx"
        :content="item"
        :title="item.title"
        :text="item.text"
        customMark
        @change="setActiveItem(idx)"
        class="mt-2">
        <template #header="{ list }">
          <div
            class="flex flex-wrap gap-4 justify-between text-lx mb-4 flex-row w-full">
            <div class="collapse--title">
              {{ list.title }}
            </div>
            <v-title
              v-if="activeItem !== idx"
              :title="item.text"
              tag="h5"
              defaultClass="text-sm text-neutral3 line-clamp-2" />
          </div>
        </template>

        <template #content>
          <v-title
            :title="item.text"
            tag="h5"
            defaultClass="text-sm text-neutral3" />
        </template>
      </VCollapse>
    </div>
  </div>
</template>

<script setup>
import { VTitle, VIcon, VImage, VButton, VCollapse } from '~/components/ui'
import { useModal } from '~/stores/modal'

defineOptions({
  name: 'CollapseWithTitle',
})

const props = defineProps({
  fields: {
    type: Object,
    default: () => ({}),
  },
})

const modalStore = useModal()

const activeItem = ref(null)

const openModal = (type, variant) => {
  modalStore.open(type, props.fields[type].payload, variant)
}

const setActiveItem = (item) => {
  activeItem.value = item
}
</script>

<style lang="scss" scoped></style>
