<template>
  <div class="callback flex flex-col" :class="`text-${color}`, isModal ? 'items-center justify-center gap-4' : ''">
    <VTitle
      v-if="settings && settings.title"
      :title="settings.title"
      :defaultClass="isModal ? 'title' : 'title '" />

    <VTitle
      v-if="settings && settings.subtitle"
      :title="settings.subtitle"
      :class="`text-${color}`"
      :defaultClass="
        isModal
          ? 'text-sm xl:text-lg text-opacity-50 font-medium text-center '
          : 'subtitle text-opacity-70'
      " />

    <div class="callback--body">
      <form
        class="callback--actions mt-6 mt-md-8"
        @submit.prevent="onSendForm">
        <div
          v-if="isModal"
          class="flex flex-col text-sm gap-4">
          <v-input
            v-if="settings.body.includes('name')"
            v-model="form.name"
            clearable
            placeholder="Имя" />
          <v-input
            v-if="settings.body.includes('phone')"
            v-model="form.phone"
            clearable
            placeholder="Номер телефона" />
          <v-input
            v-if="settings.body.includes('email')"
            v-model="form.email"
            clearable
            placeholder="Email" />
          <v-textarea
            v-if="settings.body.includes('message')"
            v-model="form.message"
            clearable
            placeholder="Ваш вопрос..."
            class="h-24" />
        </div>
        <div
          v-else
          class="flex flex-col text-base gap-5">
          <div
            class="flex flex-col gap-4"
            v-if="settings.body.includes('message')">
            <span
              v-if="settings.showLabel"
              class="text-base font-medium">
              Вопрос который Вас интересует
            </span>
            <v-textarea
              v-model="message"
              clearable
              placeholder="Ваш вопрос..."
              class="h-40" />
          </div>

          <div class="grid lg:grid-cols-2 gap-3">
            <div
              class="flex flex-col gap-3"
              v-if="settings.body.includes('name')">
              <span
                v-if="settings.showLabel"
                class="text-base font-medium">
                Как к Вам обращаться
              </span>
              <v-input
                v-model="form.name"
                clearable
                placeholder="Имя" />
            </div>

            <div class="flex flex-col gap-3">
              <span
                v-if="settings.showLabel"
                class="text-base font-medium">
                Ваш телефон
              </span>
              <v-input
                v-if="settings.body.includes('phone')"
                v-model="form.phone"
                clearable
                placeholder="Номер телефона" />
            </div>
          </div>
        </div>
        <div
          class="flex gap-x-4 mt-4"
          :class="
            isModal ? 'flex-col' : 'flex-col md:flex-row md:items-center'
          ">
          <VButton
            v-if="settings && settings.buttonText"
            native-type="submit"
            class="text-nowrap"
            :type="isBackground ? 'default' : 'flat'"
            :disabled="!isValidForm"
            :size="isModal ? 'small' : 'middle'">
            {{ settings.buttonText }}
          </VButton>
          <!-- :type="isBackground ? 'flat' : 'flat'" -->
          <VTitle
            v-if="settings.showDescription"
            :title="settings.description"
            defaultClass="callback--body-description text-xs leading-4"
            :class="
              isModal ? 'text-center mt-4' : 'max-w-[500px] mt-4 md:mt-0'
            " />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { VInput, VTextarea, VTitle, VButton } from '~/components/ui'
import { useModal } from '~/stores/modal'

defineOptions({
  name: 'SharedFormCallback',
})

const props = defineProps({
  settings: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  isModal: {
    type: Boolean,
    default: false,
  },
  isBackground: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'neutral2',
  },
})

const emit = defineEmits(['send-form'])

const form = ref({
  name: '',
  phone: '',
  email: '',
  message: '',
})

const message = computed({
  get: () => form.value.message,
  set: (value) => {
    form.value.message = value
    modalStore.question = value
  },
})

const modalStore = useModal()

const isSubmitted = ref(false)
const isValidForm = computed(() => {
  const requiredFields = props.settings.body.reduce((acc, field) => {
    acc[field] = form.value[field]
    return acc
  }, {})

  return Object.values(requiredFields).every(
    (value) => value && value.length > 0,
  )
})

const onSendForm = async () => {
  isSubmitted.value = true
  console.log('Попытка отправки формы')
  console.log('Значения формы:', form.value)

  if (isValidForm.value) {
    emit('send-form', 'success')
    console.log('типа отправлено')

    form.value = {
      name: '',
      phone: '',
      email: '',
      message: '',
    }

    if (props.isModal) {
      modalStore.close()
    }

    modalStore.open('success')
    setTimeout(() => modalStore.close(), 2000)
  }
}

watch(
  () => modalStore.question,
  (value) => {
    form.value.message = value || ''
  },
  { immediate: true },
)
</script>
