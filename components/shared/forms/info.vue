<template>
  <div
    class="info flex flex-col items-center justify-center gap-x-4"
    :class="`text-${color}`">
    <VTitle
      v-if="settings && settings.title"
      :title="settings.title"
      defaultClass="text-left font-medium text-xl mb-4 leading-6" />
    <div class="flex flex-col gap-2">
      <div class="flex gap-2 items-center mb-2">
        <div class="w-20 h-20 rounded-full overflow-hidden">
          <VImage
            v-if="settings.image"
            :src="settings.image"
            class="card--logo" />
        </div>

        <div class="flex flex-col">
          <span
            v-if="settings.name"
            class="title2 block"
            style="margin-bottom: 0">
            {{ settings.name }}
          </span>
          <div
            v-if="settings.rating"
            class="flex pb-1 md:pb-0">
            <div
              v-for="(n, index) in 5"
              :key="index"
              class="text-transparent bg-clip-text text-sm"
              :class="getStarClass(index + 1, settings.rating)">
              ⭐
            </div>
          </div>
          <span
            v-if="settings.date"
            class="text-neutral3 text-xs">
            {{ settings.date }}
          </span>
        </div>
      </div>
      <span
        v-if="settings.text"
        class="text-base text-neutral3 mb-4 line-clamp-2">
        {{ settings.text }}
      </span>
    </div>
    <!-- <div class="flex gap-2 flex-col items-center">
      <div class="flex gap-2 items-center">
        <div class="min-w-24 h-24 rounded-full overflow-hidden">
          <VImage
            v-if="settings.image"
            :src="settings.image"
            class="card--logo" />
        </div>
        <VTitle
          v-if="settings && settings.title"
          :title="settings.title"
          defaultClass="text-left font-medium text-xl mb-4 leading-6" />
      </div>

      <div
        v-if="settings.rating"
        class="flex pb-1 md:pb-0">
        <div
          v-for="(n, index) in 5"
          :key="index"
          class="text-transparent bg-clip-text text-sm"
          :class="getStarClass(index + 1, settings.rating)">
          ⭐
        </div>
      </div>
      <span
        v-if="settings.date"
        class="text-neutral3 text-xs">
        {{ settings.date }}
      </span>
    </div>
    <VTitle
      v-if="settings && settings.subtitle"
      :title="settings.subtitle"
      :class="`text-${color}`"
      defaultClass="text-sm xl:text-lg text-opacity-50 font-medium text-center" />
    <div class="info--body"></div> -->
  </div>
</template>

<script setup>
import { VImage, VTitle } from '~/components/ui'

defineOptions({
  name: 'Info',
})

const props = defineProps({
  settings: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  isModal: {
    type: Boolean,
    default: false,
  },
  isBackground: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'neutral2',
  },
})

const getStarClass = (index, rate) => {
  const fullStars = Math.floor(rate)
  const halfStar = rate - fullStars >= 0.5

  if (index <= fullStars) {
    return 'bg-[#ffeb3b]'
  } else if (index === fullStars + 1 && halfStar) {
    return 'bg-gradient-6'
  } else {
    return 'bg-neutral3/50'
  }
}
</script>
