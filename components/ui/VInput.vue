<template>
  <div :class="[classes, { error: error }]">
    <input
      :id="id"
      type="nativeType"
      :value="modelValue"
      class="v-input--floating peer"
      :placeholder="placeholder"
      @change="change"
      @input="change"
    />
    <!-- v-mask -->
    <label
      class="v-input--floating-label"
      :class="{ error: error }"
      :for="id"
      >{{ placeholder }}
    </label>
    <transition name="slide-right">
      <v-icon
        v-if="modelValue && clearable"
        @click="clear"
        class="v-input--clear"
        name="IconCross" />
    </transition>
  </div>
</template>

<script setup>
import { VIcon } from '~/components/ui'
import { generateId } from '~/core/utils'

defineOptions({
  name: 'VInput',
})

const id = ref(generateId())

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
const { classes } = setBasicUiProps(props, 'v-input')

const clear = () => {
  emit('update:modelValue', '')
}
</script>

<style lang="scss" scoped>
.v-input {
  @apply relative;
  input {
    @apply w-full cursor-pointer outline-none rounded-lg text-neutral2 pl-4 py-2 pr-6 bg-transparent border border-neutral5 appearance-none transition-[border-color,box-shadow] duration-150 ease-in-out hover:opacity-70;

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
  }

  &--clear {
    @apply absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-150 ease-in-out hover:rotate-90;
  }

  &--floating-label {
    @apply top-2 left-4 bg-neutral1 pointer-events-none absolute w-max overflow-hidden text-ellipsis;
    @apply transition-all duration-150 ease-out;
  }

  .peer:focus ~ &--floating-label,
  .peer:focus-within ~ &--floating-label,
  .peer:not(:placeholder-shown) ~ &--floating-label {
    @apply top-0 left-0 ml-2 w-fit;
    @apply -translate-y-1/2 px-1 text-xs leading-4;
  }

  &.error {
    input {
      @apply border-danger;
      &::placeholder {
        @apply text-danger;
      }
    }
  }
}
</style>
