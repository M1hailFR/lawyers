<template>
  <div class="callback flex flex-col gap-4 items-center justify-center">
    <VTitle
      v-if="settings && settings.title"
      :title="settings.title"
      additionalClass="font-semibold text-center" />

    <VTitle
      v-if="settings && settings.subtitle"
      :title="settings.subtitle"
      defaultClass="text-sm xl:text-lg font-medium text-center" />

    <div class="callback--body">
      <form
        class="callback--actions mt-6 mt-md-8 flex flex-col text-sm gap-4"
        @submit.prevent="onSendForm">
        <v-input
          v-if="settings.body.includes('name')"
          v-model="form.name"
          clearable
          placeholder="Имя" />
        <v-input
          v-if="settings.body.includes('phone')"
          v-model="form.phone"
          clearable
          placeholder="Телефон" />
        <v-input
          v-if="settings.body.includes('email')"
          v-model="form.email"
          clearable
          placeholder="Email" />
        <v-textarea
          v-if="settings.body.includes('message')"
          v-model="form.message"
          clearable
          placeholder="Сообщение"
          class="h-24" />
        <v-button
          v-if="settings && settings.buttonText"
          type="flat"
          native-type="submit"
          :disabled="!isValidForm"
          size="small">
          {{ settings.buttonText }}
        </v-button>
      </form>
      <VTitle
        v-if="settings.showDescription"
        :title="settings.description"
        defaultClass="callback--body-description text-xs leading-4 mt-4 text-center" />
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
})

const emit = defineEmits(['send-form'])

const form = ref({
  name: '',
  phone: '',
  email: '',
  message: '',
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
</script>
