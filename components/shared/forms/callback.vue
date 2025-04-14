<template>
  <div
    class="callback flex flex-col"
    :class="
      (`text-${color}`, isModal ? 'items-center justify-center gap-x-4' : '')
    ">
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
            placeholder="Имя"
            :error="errors.name" />
          <v-input
            v-if="settings.body.includes('phone')"
            v-model="form.phone"
            clearable
            placeholder="Номер телефона"
            v-mask="'mobile'"
            :error="errors.phone" />
          <v-input
            v-if="settings.body.includes('email')"
            v-model="form.email"
            clearable
            placeholder="Email"
            :error="errors.email" />
          <v-textarea
            v-if="settings.body.includes('message')"
            v-model="form.message"
            clearable
            placeholder="Ваш вопрос..."
            :error="errors.message"
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
              :error="errors.message"
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
                placeholder="Имя"
                :error="errors.name" />
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
                placeholder="Номер телефона"
                v-mask="'mobile'"
                :error="errors.phone" />
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
            :disabled="!isFormValid"
            :size="isModal ? 'small' : 'middle'">
            {{ settings.buttonText }}
          </VButton>
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
import { useFormValidation } from '~/composables/useFormValidation'

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

const initialForm = {
  name: '',
  phone: '',
  email: '',
  message: '',
}

const {
  form,
  errors,
  isSubmitted,
  isFormValid,
  validateForm,
  resetForm
} = useFormValidation(initialForm, props.settings.body || [])

const message = computed({
  get: () => form.value.message,
  set: (value) => {
    form.value.message = value
    modalStore.question = value
  },
})

const modalStore = useModal()

const onSendForm = async () => {
  // Устанавливаем флаг отправки для показа ошибок
  isSubmitted.value = true
  
  // Проверяем валидацию
  const isValid = validateForm()
  
  if (isValid) {
    // Формируем данные для отправки
    const formData = {
      ...form.value,
      phone: `+79${form.value.phone}`,
    }
    
    // Отправляем форму
    emit('send-form', 'success')
    console.log('Значения формы:', formData)

    // Закрываем модальное окно если это модальная форма
    if (props.isModal) {
      modalStore.close()
    }
    
    // Очищаем данные
    modalStore.question = ''
    resetForm()
    
    // Показываем сообщение об успехе
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
