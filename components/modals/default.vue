<template>
  <transition name="fade">
    <div
      v-if="modalStore.type"
      class="bg-neutral5/50 fixed top-0 left-0 right-0 bottom-0 z-50 cursor-pointer"
      @click="close" />
  </transition>
  <transition :name="modalStore.variant === 'menu' ? 'slide-right' : 'fade'">
    <div
      v-if="modalStore.type"
      :class="`modal--${modalStore.variant}`">
      <VIcon
        class="absolute top-2 right-2 cursor-pointer transition-transform duration-150 ease-in-out hover:rotate-90"
        name="IconCross"
        @click="close" />

      <component
        v-if="components[modalStore.type]"
        :is="components[modalStore.type]"
        :settings="modalSettings"
        isModal
        @send-form="setSentStatus" />
    </div>
  </transition>
</template>

<script setup>
import { useModal } from '~/stores/modal'
import { VIcon } from '~/components/ui'
import {
  SharedFormCallback,
  SharedFormSuccess,
  SharedFormAuth,
  SharedFormInfo,
} from '~/components/shared'
import MobileMenuDefault from '~/components/layouts/header/shared/mobileMenuDefault'

const modalStore = useModal()


const modalSettings = computed(() => {
  return modalStore.payload
})

const close = () => {
  modalStore.close()
}

const components = {
  phoneCall: SharedFormCallback,
  askQuestion: SharedFormCallback,
  callback: SharedFormCallback,
  success: SharedFormSuccess,
  auth: SharedFormAuth,
  mobileMenu: MobileMenuDefault,
  info: SharedFormInfo
}

const setSentStatus = (value) => {
  if (value === 'success') {
    console.log('success')
  }
}
</script>

<style lang="scss" scoped>
.modal {
  &--default {
    @apply fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col max-w-[500px] max-h-screen shadow-sm p-8 bg-neutral1 sm:rounded-xl z-50 w-full h-full sm:h-auto;
  }
  &--menu {
    @apply text-neutral2 fixed top-0 right-0 flex flex-col h-dvh bg-neutral1 sm:rounded-l-xl z-50 w-full sm:max-w-[400px] overflow-auto shadow-sm;
  }
}
</style>
