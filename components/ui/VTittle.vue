<template>
  <titleHTML />
</template>

<script setup>
defineOptions({
  name: 'VTitle'
});

const props = defineProps({
  tag: {
    type: String,
    default: 'h2',
  },
  title: {
    type: String,
    default: '',
  },
  defaultClass: {
    type: String,
    default: 'text-center text-md xl:text-xl',
  },
  additionalClass: {
    type: String,
    default: '',
  },
})

const titleHTML = () => {
  return h(props.tag, { innerHTML: props.title, class: `${props.defaultClass} ${props.additionalClass}` })
}
</script>
