<template>
  <LoaderDefault
    :loading="appStore.loading"
    classes="h-dvh w-full">
    <transition
      name="fade"
      mode="in-out">
      <NuxtLayout v-if="appStore.isShow">
        <NuxtPage />
      </NuxtLayout>
    </transition>
  </LoaderDefault>
</template>

<script setup>
import { useApp } from '~/stores/app'
import { useScroll } from '~/stores/scroll'
import { useModal } from '~/stores/modal'
import { LoaderDefault } from '~/components/shared'

const appStore = useApp()
const scrollSoter = useScroll()
const route = useRoute()
const modalStore = useModal()
onMounted(() => {
  appStore.initializeReadyState()
  scrollSoter.initializeWindowState()
})

watch(
  () => route.name,
  async () => {
    await appStore.pageTransition()
    modalStore.close()
  },
)
</script>
