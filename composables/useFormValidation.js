import { ref, computed, watch } from 'vue'
import {
  namePules,
  phonePules,
  emailPules,
  messagePules,
} from '~/core/utils/validation'

export const useFormValidation = (initialForm = {}, formFields = []) => {
  const form = ref({ ...initialForm })
  const errors = ref({})
  const isSubmitted = ref(false)
  const touchedFields = ref({})

  const validateField = (value, rules, fieldName) => {
    if (!isSubmitted.value && !touchedFields.value[fieldName]) {
      return ''
    }
    
    for (const rule of rules) {
      const result = rule(value)
      if (result !== true) {
        return result
      }
    }
    return ''
  }

  const validateForm = () => {
    const newErrors = {}
    let isValid = true

    // Валидация имени
    if (formFields.includes('name') && form.value.name !== undefined) {
      const nameValidation = validateField(
        form.value.name,
        namePules,
        'name',
      )
      if (nameValidation) {
        newErrors.name = nameValidation
        isValid = false
      }
    }

    // Валидация телефона
    if (formFields.includes('phone') && form.value.phone !== undefined) {
      const phoneValidation = validateField(
        form.value.phone,
        phonePules,
        'phone',
      )
      if (phoneValidation) {
        newErrors.phone = phoneValidation
        isValid = false
      }
    }

    // Валидация email
    if (formFields.includes('email') && form.value.email !== undefined) {
      const emailValidation = validateField(
        form.value.email,
        emailPules,
        'email',
      )
      if (emailValidation) {
        newErrors.email = emailValidation
        isValid = false
      }
    }

    // Валидация сообщения
    if (formFields.includes('message') && form.value.message !== undefined) {
      const messageValidation = validateField(
        form.value.message,
        messagePules,
        'message',
      )
      if (messageValidation) {
        newErrors.message = messageValidation
        isValid = false
      }
    }

    errors.value = newErrors
    return isValid
  }

  const resetForm = () => {
    isSubmitted.value = false
    errors.value = {}
    touchedFields.value = {}

    Object.keys(form.value).forEach((key) => {
      form.value[key] = ''
    })
  }

  const isFormValid = computed(() => {
    if (!isSubmitted.value) return true
    return Object.keys(errors.value).length === 0
  })

  const hasErrors = computed(() => Object.keys(errors.value).length > 0)

  watch(
    form,
    (newForm) => {
      Object.keys(newForm).forEach((field) => {
        if (newForm[field] !== undefined && newForm[field] !== '') {
          touchedFields.value[field] = true
        }
      })

      if (
        isSubmitted.value ||
        Object.values(touchedFields.value).some(Boolean)
      ) {
        validateForm()
      }
    },
    { deep: true },
  )

  return {
    form,
    errors,
    isSubmitted,
    isFormValid,
    hasErrors,
    validateForm,
    resetForm,
    touchedFields,
  }
}
