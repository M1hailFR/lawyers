<template>
  <div class="relative flex items-center">
    <input
      :id="`${placeholder}-input`"
      type="nativeType"
      :value="modelValue"
      :class="[classes, { error: error }]"
      class="input input-floating peer"
      :placeholder="placeholder"
      @change="change"
      @input="change"
      v-mask />
    <label
      class="input-floating-label"
      :class="{ error: error }"
      :for="`${placeholder}-input`"
      >{{ placeholder }}
    </label>
    <transition name="slide-right">
      <v-icon v-if="modelValue && clearable" @click="clear" class="input-clear" name="IconCross" />
    </transition>
  </div>
</template>

<script setup>
import { VIcon } from '~/components/ui'
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  nativeType: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: 'Type here...',
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
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

const emit = defineEmits(['update:modelValue', 'change'])

const { change } = setBasicUiDataBindings(emit)
const { classes } = setBasicUiProps(props, 'input-component')

const clear = () => {
  emit('update:modelValue', '')
}
</script>

<style lang="scss" scoped>
.input-component {
  @apply w-full h-full cursor-pointer outline-none rounded-lg text-neutral2 px-2 py-2 bg-transparent border border-neutral5 appearance-none transition-[border-color,box-shadow] duration-150 ease-in-out hover:opacity-70;

  &:focus,
  &:hover {
    @apply bg-opacity-70 border border-neutral4;
    &::placeholder {
      @apply opacity-70;
    }
  }

  &::placeholder {
    @apply opacity-0;
  }

  &.error {
    @apply border-danger;
    &::placeholder {
      @apply text-danger;
    }
  }
}

.input-clear {
  @apply cursor-pointer transition-transform duration-150 ease-in-out hover:rotate-90;
}

.input-floating-label {
  @apply bg-neutral1/70 pointer-events-none absolute w-max overflow-hidden text-ellipsis;
  @apply top-2 left-2 text-neutral2/80;
  @apply transition-all duration-150 ease-out;
  &.error {
    @apply text-danger;
  }
}

.peer:focus ~ .input-floating-label,
.peer:focus-within ~ .input-floating-label,
.peer:not(:placeholder-shown) ~ .input-floating-label {
  @apply top-0 left-0 ml-2 w-fit;
  @apply -translate-y-1/2 px-1 text-xs leading-4;
}
</style>
