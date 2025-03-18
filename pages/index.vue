<template>
  <div class="container">
    <div class="mt-10">index page</div>
    <div class="my-2">
      VButton
      <div class="my-2">
        <VButton
          type="flat"
          size="small"
          >flat small</VButton
        >
        <VButton
          type="flat"
          size="normal"
          class="ml-2"
          >flat normal</VButton
        >
        <VButton
          type="flat"
          size="middle"
          class="ml-2"
          >flat middle</VButton
        >
      </div>
      <div class="my-2">
        <VButton
          type="outline"
          size="small"
          >outline small</VButton
        >
        <VButton
          type="outline"
          size="normal"
          class="ml-2"
          >outline normal</VButton
        >
        <VButton
          type="outline"
          size="middle"
          class="ml-2"
          >outline middle</VButton
        >
      </div>
      <div class="my-2">
        <VButton
          type="default"
          size="small"
          >default small</VButton
        >
        <VButton
          type="default"
          size="normal"
          class="ml-2"
          >default normal</VButton
        >
        <VButton
          type="default"
          size="middle"
          class="ml-2"
          >default middle</VButton
        >
      </div>
    </div>
    <div>
      VLink

      <div class="my-2">
        <VLink
          link="https://github.com/M1hailFR/resume/"
          target="_blank"
          >default</VLink
        >
        <VLink
          link="/"
          type="flat"
          class="ml-2 px-3 py-1"
          >flat</VLink
        >
        <VLink
          link="/"
          type="outline"
          class="ml-2 px-2 py-1"
          activeClass="text-primary"
          >outline</VLink
        >
      </div>
      <div class="my-2 max-w-52">
        VInput
        <VInput
          v-model="test2"
          nativeType="text"
          clearable
          class="mt-2 text-sm" />
        <VInput
          v-model="test"

          class="mt-2 text-xl"
          nativeType="text"
          error
          clearable />
      </div>
    </div>
  </div>
</template>

<script setup>
import { VButton, VLink, VInput } from '~/components/ui'

const test = ref('')
const test2 = ref('')
</script>

<style></style>
