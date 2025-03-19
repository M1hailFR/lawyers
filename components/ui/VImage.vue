<template>
  <picture>
    <template v-if="isSources">
      <source
        v-for="item in MODERN_EXTENSTIONS"
        :key="item"
        :srcset="srcPath + '.' + item"
        :type="'image/' + item" />
    </template>
    <img
      class="block h-full w-full object-cover"
      :src="src"
      :alt="alt" />
  </picture>
</template>

<script setup>
defineOptions({
  name: 'VImage',
})

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  modern: {
    type: Boolean,
    default: false,
  },
})

const EXTENSTIONS = ['jpg', 'jpeg', 'png', 'gif']
const MODERN_EXTENSTIONS = ['webp', 'avif']

const srcAsArray = props.src.split('.')
const srcExt = srcAsArray.pop()
const srcPath = srcAsArray.shift()

const isSources = props.modern && EXTENSTIONS.find((a) => a === srcExt)
if (isSources) {
  MODERN_EXTENSTIONS.unshift(srcExt)
}
</script>
