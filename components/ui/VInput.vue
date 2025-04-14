<template>
  <div :class="[classes, { error: error }]">
    <input
      :id="id"
      type="nativeType"
      :value="modelValue"
      class="v-input--floating peer"
      :class="`bg-${color} text-${textColor}`"
      :placeholder="placeholder"
      v-bind="$attrs"
      @change="change"
      @input="change" />
    <!-- v-mask -->
    <label
      class="v-input--floating-label"
      :class="[`bg-${color}`, { error: error }]"
      :for="id"
      >{{ placeholder }}
    </label>
    <transition name="slide-right">
      <v-icon
        v-if="modelValue && clearable"
        @click="clear"
        class="v-input--clear"
        :class="`text-${textColor}`"
        name="IconCross" />
    </transition>
    <div
      v-show="error"
      class="text-danger font-medium text-xs -mb-2 leading-4 mt-1">
      {{ error }}
    </div>
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
    type: String,
    default: '',
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
  rules: {
    type: String,
    default: '',
  }
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
  @apply relative hover:opacity-90 transition-all duration-300 ease-in-out;
  input {
    @apply w-full cursor-pointer outline-none rounded-lg pl-4 py-2 pr-6 border border-neutral5 appearance-none;

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
    @apply absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-150 ease-in-out hover:rotate-90 z-20;
  }

  &--floating-label {
    @apply top-1 left-2 rounded-lg px-2 py-1 mt-[2px] pointer-events-none absolute w-max overflow-hidden text-ellipsis text-neutral3;
    @apply transition-all duration-150 ease-out;
  }

  .peer:focus ~ &--floating-label,
  .peer:focus-within ~ &--floating-label,
  .peer:not(:placeholder-shown) ~ &--floating-label {
    @apply top-0 left-0 ml-2 w-fit;
    @apply -translate-y-1/2 px-2 py-0 mt-0 text-xs leading-4 border-primary;
  }

  &.error {
    input {
      @apply border-danger;
      &::placeholder {
        @apply text-danger;
      }
    }
    label {
      @apply text-danger;
    }
    .v-input--clear {
      @apply top-5;
    }
  }
}
</style>
