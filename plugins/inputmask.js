import Inputmask from 'inputmask'

Inputmask.extendDefaults({
  rightAlign: false,
  showMaskOnHover: false,
  showMaskOnFocus: false,
  autoUnmask: true,
  removeMaskOnSubmit: true,
})

Inputmask.extendAliases({
  mobile: {
    mask: '+7 (\\999) 999-99-99',
    definitions: {
      9: {
        validator: '[0-9]',
      },
    },
  },
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('mask', (el, binding) => {
    const { value } = binding
    if (value) {
      const inputEl = el.querySelector('input')
      inputEl && Inputmask(value).mask(inputEl)
    }
  })
})
