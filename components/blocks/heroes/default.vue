<template>
  <div class="w-full relative grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-0">
    <div class="flex flex-col gap-4 justify-center order-2 md:order-1">
      <VTitle
        tag="h2"
        :title="fields.title"
        defaultClass="text-left font-medium text-4xl md:text-6xl mb-4 leading-none">
      </VTitle>
      <VTitle
        tag="h3"
        v-if="fields.subtitle"
        :title="fields.subtitle"
        defaultClass="subtitle text-neutral2/70 max-w-xl mb-2">
      </VTitle>
      <div class="flex gap-2 w-full flex-wrap">
        <VButton
          type="flat"
          size="middle"
          class="w-full sm:w-auto"
          textSize="text-sm md:text-base"
          @click="redirectTo()">
          {{ fields.buttonAskQuestion }}
        </VButton>
        <VButton
          type="outline"
          size="middle"
          class="w-full sm:w-auto"
          textSize="text-sm md:text-base"
          @click="openModal('phoneCall')">
          {{ fields.buttonOrderCall }}
        </VButton>
      </div>
    </div>
    <VImage
      v-if="fields.image"
      :src="fields.image"
      cover
      class="block max-h-[500px] aspect-square rounded-full overflow-hidden relative md:ml-auto order-1 md:order-2" />
  </div>
</template>

<script setup>
import { VTitle, VButton, VImage } from '~/components/ui'
import { useModal } from '~/stores/modal'

defineOptions({
  name: 'BlockHeroeDefault',
})

const props = defineProps({
  fields: {
    type: Object,
    default: () => ({}),
  },
})

const router = useRouter()
const modalStore = useModal()

const redirectTo = () => {
  router.push('/questions/create')
}

const openModal = (type, variant) => {
  modalStore.open(type, props.fields[type].payload, variant)
}
</script>

<style lang="scss" scoped></style>
