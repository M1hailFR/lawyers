<template>
  <footer
    ref="footerDefault"
    class="footer">
    <div class="footer--container">
      <div class="footer--top">
        <div
          class="container flex flex-wrap items-center justify-between gap-4 w-full">
          <VLink
            :to="'/'"
            class="footer--logo w-full">
            <v-image
              v-if="fields.logo"
              :src="fields.logo"
              cover
              class="w-auto" />
          </VLink>
          <div class="flex gap-x-4 md:gap-10 flex-wrap">
            <VLink
              v-for="(item, idx) in fields.contacts"
              :key="idx"
              :link="item.link"
              :target="item.link.startsWith('http') ? '_blank' : '_self'"
              class="flex items-center gap-3">
              <v-icon
                :name="item.icon"
                class="bg-neutral5 rounded-full p-2" />
              <div class="flex flex-col py-2 md:py-0">
                <span class="text-opacity-10 text-xs md:text-sm">{{
                  item.name
                }}</span>
                <span class="md:text-lg font-semibold">{{ item.value }}</span>
              </div>
            </VLink>
          </div>
          <div class="flex gap-2 items-center justify-end">
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
          </div>
        </div>
      </div>
      <div class="footer--bottom">
        <div class="container">
          <div
            class="flex gap-x-10 gap-y-6 items-start flex-wrap lg:flex-nowrap">
            <nav
              class="flex gap-x-10 gap-y-4 justify-between w-full items-start flex-wrap lg:flex-nowrap">
              <li
                v-for="(item, idx) in fields.menu"
                :key="idx"
                class="list-none">
                <span class="text-base mb-2 block">{{ item.text }}</span>
                <div
                  v-if="item.icons"
                  class="grid grid-cols-3 gap-2 mb-2">
                  <div
                    v-for="(icon, idx) in item.icons"
                    :key="idx"
                    class="flex justify-center bg-neutral5 p-2 rounded-xl">
                    <v-icon
                      :name="icon"
                      :size="scrollStore.isMobile ? 16 : 20" />
                  </div>
                </div>
                <div>
                  <VLink
                    v-for="(child, idx) in item.childs"
                    :key="idx"
                    :link="child.link"
                    class="text-neutral3 text-sm mb-1">
                    {{ child.text }}
                  </VLink>
                </div>
              </li>
            </nav>
            <div class="w-full h-full flex flex-col">
              <VTitle
                tag="h3"
                :title="fields.consultation"
                defaultClass="text-base font-medium sm:text-right mr-8 sm:mr-0">
              </VTitle>
              <VTextarea
                v-model="modalStore.question"
                clearable
                placeholder="Ваш вопрос..."
                class="text-sm leading-4 h-24 my-3" />
              <div class="flex gap-2 w-full sm:justify-end">
                <VButton
                  type="flat"
                  size="middle"
                  class="text-xs md:text-sm leading-4 w-full sm:w-auto"
                  @click="redirectTo()">
                  {{ fields.buttonAskQuestion }}
                </VButton>
                <VButton
                  type="outline"
                  size="middle"
                  class="text-xs md:text-sm leading-4 w-full sm:w-auto"
                  @click="openModal('phoneCall')">
                  {{ fields.buttonOrderCall }}
                </VButton>
              </div>
            </div>
          </div>

          <VTitle
            tag="h3"
            :title="fields.text"
            defaultClass="text-neutral3 text-xs md:w-1/2 mt-10 leading-4 mb-2">
          </VTitle>
        </div>
      </div>
    </div>
  </footer>
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
  VTitle,
  VTextarea,
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

const footerDefault = ref(null)

const router = useRouter()
const modalStore = useModal()
const scrollStore = useScroll()

const openModal = (type, variant) => {
  let payload = {
    ...props.fields[type].payload,
    ...props.fields.modalSettings,
  }
  modalStore.open(type, payload, variant)
}

const redirectTo = () => {
  router.push('/questions/create')
}
</script>

<style lang="scss" scoped>
.footer {
  @apply h-full;
  &--top {
    @apply py-6 border-y border-neutral5;
  }
  &--bottom {
    @apply flex flex-col pt-8 pb-2;
  }
}
</style>
