<template>
  <header
    ref="headerDefault"
    class="header"
    :class="[scrollStore.isScrolling ? 'fixed shadow-md' : '']">
    <div class="header--container container transition-transform">
      <div
        v-if="!scrollStore.isScrolling"
        class="header--top">
        <div class="flex items-center w-full gap-6">
          <VLink :link="'/'">
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
            textSize="text-xs"
            @click="openModal('phoneCall')">
            <div class="flex items-center gap-1 pr-2">
              <v-icon name="IconPhone" />
              <span class="text-nowrap">Заказать звонок</span>
            </div>
          </v-button>
          <v-button
            type="outline"
            size="small"
            textSize="text-xs"
            @click="openModal('auth')">
            <div class="flex items-center gap-1 pr-2">
              <v-icon name="IconLogin" />
              <span>Войти</span>
            </div>
          </v-button>
        </div>
      </div>

      <div class="header--bottom transition-all">
        <div class="inline-flex items-center gap-6">
          <VLink
            :link="'/'"
            v-if="
              (fields.logo && scrollStore.isScrolling) || scrollStore.isMobile
            ">
            <v-image
              :src="fields.logo"
              cover
              class="w-auto h-6 sm:h-full pr-6" />
          </VLink>

          <!-- <v-button
            type="flat"
            size="small"
            class="hidden md:flex items-center gap-1"
            textSize="text-xs"
            @click="openModal('askQuestion')">
            <v-icon name="IconQuestion" />
            <div class="text-nowrap pr-2">Задать вопрос</div>
          </v-button> -->
        </div>
        <div class="hidden md:flex flex-1 mt-1">
          <nav class="flex gap-3 xl:gap-5 items-center text-sm xl:text-base ml-1">
            <li
              v-for="(item, idx) of fields.menu"
              :key="idx"
              class="list-none">
              <VDropdown
                v-if="item?.childs?.length"
                icon="null">
                <div class="">{{ item.text }}</div>

                <template #options>
                  <VDropdownOptions
                    v-for="(item, idx) in item.childs"
                    :key="idx"
                    class="text-sm">
                    <v-link
                      :link="item.link"
                      type="secondary"
                      color="neutral3"
                      class="hover:translate-x-1"
                      >{{ item.text }}</v-link
                    >
                  </VDropdownOptions>
                </template>
              </VDropdown>
              <v-link
                v-else
                :link="item.link"
                type="secondary"
                class=""
                >{{ item.text }}</v-link
              >
            </li>
          </nav>
        </div>
        <div class="flex gap-2 items-center justify-end">
          <div class="hidden lg:flex gap-2 items-center">
            <VLink
              v-for="(item, idx) in fields.socials"
              :key="idx"
              :link="item.link"
              type="flat"
              target="_blank"
              class="h-full p-2">
              <v-icon
                :name="`Icon${item.name}`"
                :size="scrollStore.isMobile ? 16 : 20" />
            </VLink>
            <v-button
              type="flat"
              size="small"
              class="hidden md:flex items-center gap-1"
              textSize="text-xs"
              @click="openModal('askQuestion')">
              <v-icon name="IconQuestion" />
              <div class="text-nowrap pr-2">Задать вопрос</div>
            </v-button>
          </div>
          <v-button
            type="outline"
            size="small"
            class="block md:hidden"
            @click="openModal('mobileMenu', 'menu')">
            <v-icon
              name="IconMenu"
              :size="scrollStore.isMobile ? 16 : 20" />
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
const scrollStore = useScroll()

const modalStore = useModal()

const openModal = (type, variant) => {
  modalStore.open(type, props.fields[type].payload, variant)
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
    @apply py-4 flex items-center justify-between;
  }
}
</style>
