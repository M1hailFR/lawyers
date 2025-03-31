<template>
  <div class="mobile-menu w-full h-full flex flex-col justify-between">
    <VLink :link="'/'">
      <VImage
        :src="settings.logo"
        cover
        class="w-auto h-[28px] absolute top-3 left-6" />
    </VLink>
    <div
      class="mobile-menu--header flex items-center gap-2 justify-between pt-10 w-full">
      <div class="flex items-center gap-2 w-full">
        <v-input
          v-model="search"
          nativeType="text"
          clearable
          placeholder="Найти..."
          class="text-sm w-full" />
        <v-button
          type="flat"
          size="small"
          class="text-sm"
          @click="openModal('phoneCall')">
          <div class="flex items-center gap-1 pr-2">
            <v-icon
              name="IconPhone"
              size="16" />
            <span class="text-nowrap">Звонок</span>
          </div>
        </v-button>
      </div>
    </div>

    <div class="mobile-menu--body flex-1 overflow-y-auto">
      <VTitle
        :title="settings.title"
        defaultClass="text-left text-xl font-medium my-5" />
      <div>
        <VCollapse
          v-for="(item, idx) in fields.menu"
          :key="idx"
          :content="item"
          :title="item.text"
          :text="item.text"
          class="">
          <template #header="{ list }">
            <div
              class="flex flex-wrap gap-4 justify-between text-sm md:text-lg font-medium flex-row w-full h-full">
              <VLink
                :link="list?.link"
                class="collapse--title">
                {{ list?.text }}
              </VLink>
            </div>
          </template>

          <template
            #content
            v-if="!item.link">
            <VLink
              v-for="(child, idx) in item.childs"
              :key="idx"
              :link="child.link"
              class="text-sm md:text-base pt-2">
              {{ child.text }}
            </VLink>
          </template>
        </VCollapse>
      </div>
    </div>

    <div class="mobile-menu--footer mt-6 flex gap-2 items-center w-full">
      <div class="flex gap-2 items-center w-full">
        <VLink
          v-for="(item, idx) in fields.socials"
          :key="idx"
          :link="item.link"
          type="flat"
          class="h-full p-2">
          <v-icon
            :name="`Icon${item.name}`"
            size="16" />
        </VLink>
      </div>
      <div class="flex gap-2 items-center w-full">
        <v-button
          type="flat"
          size="small"
          class="text-sm"
          @click="openModal('askQuestion')">
          <div class="flex items-center gap-1 pr-2">
            <v-icon
              name="IconQuestion"
              size="16" />
            <span class="text-nowrap">Задать вопрос</span>
          </div>
        </v-button>
        <v-button
          type="outline"
          size="small"
          class="text-sm"
          @click="openModal('auth')">
          <div class="flex items-center gap-1 pr-2">
            <v-icon
              name="IconLogin"
              size="16" />
            <span>Войти</span>
          </div>
        </v-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  VLink,
  VImage,
  VInput,
  VIcon,
  VButton,
  VTitle,
  VCollapse,
} from '~/components/ui'

import { HEADER_DEFAULT_CONFIG } from '@/configs/layouts/layouts'
import { useModal } from '~/stores/modal'

defineOptions({
  name: 'MobileMenuDefault',
})

const props = defineProps({
  settings: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const fields = structuredClone(HEADER_DEFAULT_CONFIG.block_fields)

const search = ref('')

const modalStore = useModal()

const openModal = (type, variant) => {
  let payload = {
    ...fields[type].payload,
    ...fields.modalSettings,
  }
  modalStore.open(type, payload, variant)
}
</script>

<style lang="scss" scoped>
.mobile-menu {
  &--body {
    &::-webkit-scrollbar {
      @apply bg-transparent w-0;
    }
  }
}
</style>
