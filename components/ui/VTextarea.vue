<template>
  <div :class="[classes, { error: error }]">
    <textarea
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      class="v-textarea--floating peer"
      @input="change"
    />
    <label
      class="v-textarea--floating-label"
      :class="[error ? 'text-danger/80' : 'text-neutral2/70']"
      :for="id"
      >{{ placeholder }}
    </label>
    <transition name="slide-right">
      <v-icon
        v-if="modelValue && clearable"
        @click="clear"
        class="v-textarea--clear"
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
  @apply relative;
  textarea {
    @apply w-full h-full resize-none cursor-pointer outline-none rounded-lg text-neutral2 pl-2 py-2 pr-5 bg-transparent border border-neutral5 appearance-none transition-[border-color,box-shadow] duration-150 ease-in-out hover:opacity-70;

    &:focus,
    &:hover {
      @apply bg-opacity-70 border border-primary;
      &::placeholder {
        @apply opacity-70;
      }
    }

    &::placeholder {
      @apply opacity-0;
    }
  }

  &--clear {
    @apply absolute right-0 top-0 cursor-pointer transition-transform duration-150 ease-in-out hover:rotate-90;
  }

  &--floating-label {
    @apply top-2 left-2 bg-neutral1 pointer-events-none absolute w-max overflow-hidden text-ellipsis;
    @apply transition-all duration-150 ease-out;
  }

  .peer:focus ~ &--floating-label,
  .peer:focus-within ~ &--floating-label,
  .peer:not(:placeholder-shown) ~ &--floating-label {
    @apply top-0 left-0 ml-2 w-fit;
    @apply -translate-y-1/2 px-1 text-xs leading-4;
  }

  &.error {
    textarea {
      @apply border-danger;
      &::placeholder {
        @apply text-danger;
      }
    }
  }
}
</style>
