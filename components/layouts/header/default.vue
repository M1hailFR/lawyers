<template>
  <header
    ref="headerDefault"
    class="header"
    :class="[scrollSoter.isScrolling ? 'fixed shadow-md' : '']">
    <div class="header--container container transition-transform">
      <div
        v-if="!scrollSoter.isScrolling"
        class="header--top">
        <div class="flex items-center w-full gap-6">
          <VLink :to="'/'" class="mobile-menu--header-logo">
            <v-image
              v-if="fields.logo"
              :src="fields.logo"
              cover
              class="w-auto" />
          </VLink>
          <v-input
            v-model="search"
            nativeType="text"
            clearable
            placeholder="Найти..."
            class="text-xs w-full hidden md:block" />
        </div>

        <div class="flex items-center gap-2 ml-4">
          <v-button
            type="outline"
            size="small"
            class="text-xs"
            @click="openModal('phoneCall')">
            <div class="flex items-center gap-1 pr-2">
              <v-icon name="IconPhone" />
              <span class="text-nowrap">Заказать звонок</span>
            </div>
          </v-button>
          <v-button
            type="outline"
            size="small"
            class="text-xs"
            @click="openModal('auth')">
            <div class="flex items-center gap-1 pr-2">
              <v-icon name="IconLogin" />
              <span>Войти</span>
            </div>
          </v-button>
        </div>
      </div>

      <div class="header--bottom transition-transform">
        <div class="inline-flex items-center gap-6">
          <v-image
            v-if="
              (fields.logo && scrollSoter.isScrolling) || scrollSoter.isMobile
            "
            :src="fields.logo"
            cover
            class="w-auto" />
          <v-button
            type="flat"
            size="small"
            class="text-sm hidden md:block"
            @click="openModal('askQuestion')">
            <div class="flex items-center gap-1 pr-2">
              <v-icon name="IconQuestion" />
              <span class="text-nowrap">Задать вопрос</span>
            </div>
          </v-button>
        </div>
        <div class="hidden md:flex flex-1">
          <nav class="flex gap-3 lg:gap-5 items-center text-base">
            <li
              v-for="(item, idx) of fields.menu"
              :key="idx"
              class="list-none">
              <VDropdown
                v-if="item?.childs?.length"
                class=""
                icon="">
                <div>{{ item.text }}</div>

                <template #options>
                  <VDropdownOptions
                    v-for="(item, idx) in item.childs"
                    :key="idx"
                    class="text-sm">
                    <v-link :link="item.link">{{ item.text }}</v-link>
                  </VDropdownOptions>
                </template>
              </VDropdown>
              <v-link
                v-else
                :link="item.link"
                >{{ item.text }}</v-link
              >
            </li>
          </nav>
        </div>
        <div class="flex gap-2 items-center justify-end">
          <div class="hidden sm:flex gap-2 items-center">
            <VLink
              v-for="(item, idx) in fields.socials"
              :key="idx"
              :link="item.link"
              type="flat"
              class="h-full p-2">
              <v-icon
                :name="`Icon${item.name}`"
                :size="scrollSoter.isMobile ? 16 : 20" />
            </VLink>
          </div>
          <v-button
            type="outline"
            size="small"
            class="text-sm block md:hidden"
            @click="openModal('mobileMenu', 'menu')">
            <v-icon
              name="IconMenu"
              :size="scrollSoter.isMobile ? 16 : 20" />
          </v-button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useScroll } from '~/stores/scroll'
import { useModal } from '~/stores/modal'

import {
  VButton,
  VIcon,
  VImage,
  VInput,
  VLink,
  VDropdown,
  VDropdownOptions,
} from '~/components/ui'

defineOptions({
  name: 'HeaderDefault',
})

const props = defineProps({
  fields: {
    type: Object,
    default: () => ({}),
  },
  position: {
    type: String,
    default: 'static',
  },
})

const headerDefault = ref(null)
const scrollSoter = useScroll()

const modalStore = useModal()

const openModal = (type, variant) => {
  let payload = {
    ...props.fields[type].payload,
    ...props.fields.modalSettings,
  }
  modalStore.open(type, payload, variant)
}

const search = ref('')

</script>

<style lang="scss" scoped>
.header {
  @apply w-full z-50 top-0 bg-background;
  // &--container {}
  &--top {
    @apply pb-2 pt-4 hidden md:flex items-center gap-2;
  }
  &--bottom {
    @apply py-4 flex items-center justify-between gap-6;
  }
}
</style>
