export default {
  beforeMount(el, binding) {
    const handler = (e) => {
      if (!el.contains(e.target) && el !== e.target) {
        binding.value(e)
      }
    }

    if (typeof binding.value === 'function') {
      el.__vueOutsideClick__ = handler
      document.addEventListener('click', el.__vueOutsideClick__, {
        capture: true,
      })
    }
  },
  beforeUnmount(el) {
    document.removeEventListener('click', el.__vueOutsideClick__, {
      capture: true,
    })

    el.__vueOutsideClick__ = null

  },
}
