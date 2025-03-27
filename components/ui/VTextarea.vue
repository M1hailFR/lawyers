<template>
  <div :class="[classes, { error: error }]">
    <textarea
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      class="v-textarea--floating peer"
      :class="`bg-${color} text-${textColor}`"
      @input="change" />
    <label
      class="v-textarea--floating-label"
      :class="[`bg-${color}`, { error: error }]"
      :for="id"
      >{{ placeholder }}
    </label>
    <transition name="slide-right">
      <v-icon
        v-if="modelValue && clearable"
        @click="clear"
        class="v-textarea--clear"
        :class="`text-${textColor}`"
        name="IconCross" />
    </transition>
  </div>
</template>

<script setup>
import { VIcon } from '~/components/ui'
import { generateId } from '~/core/utils'

defineOptions({
  name: 'VTextarea',
})

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Type here...',
  },
  error: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'neutral1',
  },
  textColor: {
    type: String,
    default: 'neutral2',
  },
})

const id = ref(generateId())

const emit = defineEmits(['update:modelValue', 'change'])

const { change } = setBasicUiDataBindings(emit)
const { classes } = setBasicUiProps(props, 'v-textarea')

const clear = () => {
  emit('update:modelValue', '')
}
</script>

<style lang="scss" scoped>
.v-textarea {
  @apply relative hover:opacity-70 transition-all duration-150 ease-in-out;
  textarea {
    @apply w-full h-full resize-none cursor-pointer outline-none rounded-lg pl-4 py-2 pr-6  border border-neutral5 appearance-none;
    &::-webkit-scrollbar {
      @apply bg-transparent w-1 rounded-lg;
    }
    &::-webkit-scrollbar-track {
      @apply bg-transparent;
    }
    &:focus,
    &:hover {
      @apply border-primary;
    }

    &::placeholder {
      @apply opacity-0;
    }
    &:focus {
      &::placeholder {
        @apply opacity-70;
      }
    }
  }

  &--clear {
    @apply absolute right-1 top-1 cursor-pointer transition-transform duration-150 ease-in-out hover:rotate-90 z-20;
  }

  &--floating-label {
    @apply top-1 left-2 rounded-lg px-2 py-1 mt-[4px] pointer-events-none absolute w-max overflow-hidden text-ellipsis text-neutral3;
    @apply transition-all duration-150 ease-out;
  }

  .peer:focus ~ &--floating-label,
  .peer:focus-within ~ &--floating-label,
  .peer:not(:placeholder-shown) ~ &--floating-label {
    @apply top-0 left-0 ml-2 w-fit;
    @apply -translate-y-1/2 px-2 py-0 mt-[0px] text-xs leading-4 border-primary;
  }

  &.error {
    textarea {
      @apply border-danger;
      &::placeholder {
        @apply text-danger;
      }
    }
    label {
      @apply text-danger;
    }
  }
}
</style>
