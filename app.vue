<template>
  <LoaderDefault
    :loading="appStore.loading"
    classes="h-dvh w-full">
    <NuxtLayout>
      <transition name="fade" mode="in-out">
        <NuxtPage v-if="appStore.isShow" />
      </transition>
    </NuxtLayout>
  </LoaderDefault>
</template>

<script setup>
import { useApp } from '~/stores/app'
import { useScroll } from '~/stores/scroll'
import { LoaderDefault } from '~/components/shared/loaders'

const appStore = useApp()
const scrollSoter = useScroll()

onMounted(() => {
  appStore.initializeReadyState()
  scrollSoter.initializeWindowState()
})
</script>
