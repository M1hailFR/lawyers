<template>
  <div
    v-outside="close"
    class="transition-all"
    :class="[classes]">
    <div
      class="v-dropdown-content"
      @click="toggle">
      <v-icon
        class=""
        :name="icon"
        size="20" />
      <div class="mt-[-4px]">
        <slot />
      </div>

      <v-icon
        v-if="props.openIndicator"
        class="chevron ml-auto"
        name="IconChevron"
        size="20" />
    </div>
    <div
      class="sub-level"
      :class="`bg-${color}`">
      <div class="sub-level-container flex flex-col gap-y-1 pl-2 pr-6">
        <div
          class="options"
          :class="`bg-${color}`">
          <slot name="options" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { VIcon } from '~/components/ui'
import { vOutside } from '~/core/helpers'

defineOptions({
  name: 'VDropdown',
})

const props = defineProps({
  openIndicator: {
    type: Boolean,
    default: true,
  },
  openOnHover: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: 'IconCross',
  },
  color: {
    type: String,
    default: 'neutral6',
  }
})

const emit = defineEmits(['change'])
const { change } = setBasicUiDataBindings(emit)
const { classes } = setBasicUiProps(props, 'v-dropdown')

const isOpen = ref(false)

const close = () => {
  isOpen.value = false
}
const open = () => {
  isOpen.value = true
}
const toggle = () => {
  if (isOpen.value) {
    close()
  } else {
    open()
  }
}
</script>

<style lang="scss" scoped>
.v-dropdown {
  @apply relative;
  &-content {
    @apply flex items-center w-full;
  }
  &:hover {
    @apply text-secondary visible drop-shadow-sm;
    .sub-level {
      @apply visible opacity-100 drop-shadow-sm;
    }
    .chevron {
      @apply rotate-180;
    }
  }
}
.sub-level {
  @apply absolute w-max p-2 left-1/2 -translate-x-1/2 top-6 invisible opacity-0 transition-all rounded-lg text-neutral2 bg-background shadow-sm;
  &::after {
    content: '';
    @apply absolute left-0  w-full h-full bg-transparent z-[-1];
  }

  &.light {
    @apply w-max;
  }

  .sub-level-container {
    @apply max-h-[290px] overflow-auto;
  }
}
</style>
