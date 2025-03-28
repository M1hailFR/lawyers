<template>
  <ul :class="classes">
    <template v-for="(item, idx) in list">
      <li
        v-if="divider && idx"
        class="h-[1px] bg-neutral2/20 my-3" />
      <li class="v-list--item flex items-center">
        <component
          :is="getComponent(item)"
          :link="item.link"
          target="_target"
          class="flex items-start gap-3">
          <v-icon
            v-if="customMark"
            :name="item.icon || defaultCustomIcon"
            size="24"
            class="v-list--marker-custom min-w-6 text-primary" />

          <span
            v-if="!customMark"
            class="w-[20px] h-[20px] min-w-[20px] rounded-full bg-neutral2/20 border-4 border-neutral1"
            :class="`bg-${textColor}`" />

          <span class="d-flex flex-column">
            <span
              v-if="item.title"
              class="block text-lg mb-2 text-neutral2 leading-6">
              {{ item.title }}
            </span>
            <span
              v-if="item.text"
              class="text-base leading-6"
              :class="`text-${textColor}`">
              {{ item.text }}
            </span>
          </span>
        </component>
      </li>
    </template>
  </ul>
</template>

<script setup>
import { VIcon, VLink } from '~/components/ui'

defineOptions({
  name: 'VList',
})

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  divider: {
    type: Boolean,
    default: false,
  },
  customMark: {
    type: Boolean,
    default: false,
  },
  textColor: {
    type: String,
    default: 'neutral3',
  },
  defaultCustomIcon: {
    type: String,
    default: 'IconCross',
  },
})

const { classes } = setBasicUiProps(props, 'v-list')

const getComponent = (list) => {
  if (list.link) {
    return VLink
  }
  return 'div'
}
</script>

<style lang="scss" scoped>
.v-list {
  @apply list-none;

  &--item {
    @apply gap-y-2;
    &:has(.v-list--marker-custom) {
      @apply gap-y-4;
    }
  }
}
</style>
