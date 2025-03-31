<template>
  <div
    class="w-full relative"
    :class="
      isCompact ? '' : 'grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-0'
    ">
    <div class="w-full h-full flex flex-col">
      <VTitle
        tag="h2"
        :title="fields.title"
        :defaultClass="isCompact ? 'title-compact' : 'title'">
      </VTitle>
      <VTitle
        tag="h3"
        v-if="fields.subtitle"
        :title="fields.subtitle"
        defaultClass="subtitle text-neutral2/70 max-w-xl">
      </VTitle>
      <VTextarea
        v-model="modalStore.question"
        clearable
        placeholder="Ваш вопрос..."
        class="text-sm md:text-base leading-4 my-3"
        :class="isCompact ? 'h-24' : 'h-24 md:h-40'" />
      <div
        class="flex gap-2 w-full"
        :class="
          isCompact ? 'sm:justify-end' : 'flex-wrap'
        ">
        <VButton
          type="flat"
          size="middle"
          class="w-full sm:w-auto"
          :textSize="isCompact ? 'text-xs md:text-sm' : 'text-sm md:text-base'"
          @click="redirectTo()">
          {{ fields.buttonAskQuestion }}
        </VButton>
        <VButton
          type="outline"
          size="middle"
          class=" w-full sm:w-auto"
          :textSize="isCompact ? 'text-xs md:text-sm' : 'text-sm md:text-base'"
          @click="openModal('phoneCall')">
          {{ fields.buttonOrderCall }}
        </VButton>
      </div>
    </div>
    <VImage
      v-if="fields.image"
      :src="fields.image"
      cover
      class="w-full h-full rounded-xl overflow-hidden block absolute md:relative top-0 left-0 z-[-1]" />
    <div
      v-if="!isCompact"
      class="bg-neutral1/70 absolute backdrop-blur-[4px] top-0 left-0 w-full h-full z-[-1] md:hidden rounded-xl overflow-hidden" />
  </div>
</template>

<script setup>
import { VTitle, VButton, VTextarea, VImage } from '~/components/ui'
import { useModal } from '~/stores/modal'

defineOptions({
  name: 'BlockFormPrompt',
})

const props = defineProps({
  fields: {
    type: Object,
    default: () => ({}),
  },
  isCompact: {
    type: Boolean,
    default: false,
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
