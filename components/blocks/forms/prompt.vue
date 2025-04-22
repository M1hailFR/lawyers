<template>
  <div
    class="w-full relative"
    :class="
      isCompact ? '' : 'grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 md:p-0'
    ">
    <div :class="isCompact ? '' : 'w-full h-full flex flex-col justify-center'">
      <div :class="isCompact ? '' : 'h-full flex flex-row gap-4 justify-center items-center xl:items-end'">
        <div>
          <VTitle
            tag="h2"
            :title="fields.title"
            :defaultClass="
              isCompact
                ? 'title-compact'
                : 'text-left font-medium text-4xl md:text-6xl mb-4 leading-none'
            ">
          </VTitle>
          <VTitle
            tag="h3"
            v-if="fields.subtitle"
            :title="fields.subtitle"
            defaultClass="subtitle text-neutral2/70 max-w-xl mb-2">
          </VTitle>
        </div>
        <VImage
          v-if="fields.image"
          :src="fields.image"
          cover
          class="max-h-[500px] lg:hidden aspect-square rounded-full overflow-hidden block" />
      </div>

      <VTextarea
        v-model="modalStore.question"
        clearable
        placeholder="Ваш вопрос..."
        class="text-sm md:text-base leading-4 my-3"
        :class="isCompact ? 'h-24' : 'h-24 md:h-52'" />
      <div
        class="flex gap-2 w-full"
        :class="isCompact ? 'sm:justify-end' : 'flex-wrap'">
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
          class="w-full sm:w-auto"
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
      class="hidden lg:block max-h-[500px] aspect-square rounded-full overflow-hidden  relative ml-auto" />
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
