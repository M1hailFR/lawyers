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
        class="chevron ml-auto mt-1"
        name="IconChevron"
        size="20" />
    </div>
    <div
      class="sub-level"
      :class="variant">
      <div class="sub-level-container flex flex-col gap-y-1 pl-2 pr-6">
        <div
          class="options"
          :class="[variant]">
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
  variant: {
    type: String,
    default: 'light',
  },
})

const emit = defineEmits(['change'])
const { change } = setBasicUiDataBindings(emit)
const { classes } = setBasicUiProps(props, 'v-dropdown')

const isOpen = ref(false)

const mouseover = computed(() => (props.openOnHover ? open : ''))
const mouseleave = computed(() => (props.openOnHover ? close : ''))

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
    @apply flex items-center w-full p-1;
  }
  &:hover {
    @apply text-secondary visible drop-shadow-sm;
    .sub-level {
      @apply visible opacity-100 bg-neutral5 drop-shadow-sm;
    }
    .chevron {
      @apply rotate-180;
    }
  }
}
.sub-level {
  @apply absolute py-4 px-1 w-full left-0 top-16 invisible opacity-0 transition-all rounded-lg text-neutral2;
  &::after {
    content: '';
    @apply absolute left-0 top-[-24px] w-full h-full bg-transparent z-[-1];
  }
  &.dark {
    // @apply w-max  drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)];
  }
  &.light {
    @apply bg-neutral5;
  }
  &.transparent {
    @apply bg-transparent;
  }
  .sub-level-container {
    @apply max-h-[290px] overflow-auto;
  }
}
</style>
