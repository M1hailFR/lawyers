<template>
  <div
    class="transition-all group"
    :class="[classes, isOpen ? 'border-primary' : 'border-neutral3']"
    v-outside="close"
    @click="toggle">
    <div class="v-collapse--header">
      <slot
        name="header"
        :list="props.content" />
    </div>
    <transition
      name="collapse"
      mode="out-in"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave">
      <div
        v-show="isOpen && hasContent"
        class="v-collapse--content">
        <div class="v-collapse--wrapper">
          <slot name="content" />
        </div>
      </div>
    </transition>
    <div
      v-if="customMark"
      class="v-collapse--show text-uppercase "
      :class="isOpen ? 'pt-5' : ''">
      {{ isOpen ? 'Скрыть' : 'Показать' }}
      <v-icon
        name="IconCross"
        class="mx-2 transition-transform duration-150 ease-in-out "
        :class="
          isOpen
            ? 'group-hover:rotate-[180deg]'
            : 'rotate-45 group-hover:rotate-[135deg]'
        " />
    </div>
  </div>
</template>

<script setup>
import { VIcon } from '~/components/ui'
import { vOutside } from '~/core/helpers'

defineOptions({
  name: 'VCollapse',
})

const props = defineProps({
  content: {
    type: Object,
    default: () => ({}),
  },
  customMark: {
    type: Boolean,
    default: false,
  },
})

const isOpen = ref(false)

const emit = defineEmits(['change'])

const { classes } = setBasicUiProps(props, 'v-collapse')

const hasContent = computed(() => props.content && Object.keys(props.content).length > 0)
const close = () => (isOpen.value = false)
const open = () => (isOpen.value = true)
const toggle = () => {
  if (isOpen.value) {
    close()
  } else {
    open()
    emit('change')
  }
}

const beforeEnter = (element) => {
  requestAnimationFrame(() => {
    if (!element.style.height) {
      element.style.height = '0px'
    }
    element.style.display = null
  })
}

const enter = (element) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = `${element.scrollHeight}px`
    })
  })
}

const afterEnter = (element) => {
  element.style.height = null
}

const beforeLeave = (element) => {
  requestAnimationFrame(() => {
    if (!element.style.height) {
      element.style.height = `${element.offsetHeight}px`
    }
  })
}

const leave = (element) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = '0px'
    })
  })
}

const afterLeave = (element) => {
  element.style.height = null
}
</script>

<style lang="scss" scoped>
.v-collapse {
  @apply border rounded-xl p-3 mb-3 box-border cursor-pointer relative;
  &--header {
    @apply mb-0;
  }
  &--icon {
    @apply ml-auto hidden md:block;
  }
  &--content {
    @apply overflow-hidden;
  }
  &--wrapper {
    @apply max-w-[96%];
  }
  &--show {
    @apply flex items-center text-neutral3;
  }
  &:hover {
    @apply border border-primary;
    .v-collapse--show {
      @apply text-primary;
    }
  }
  &:first-child {
    @apply border-t-0;
  }

  &:last-child {
    @apply border-b-0;
  }
}
</style>
