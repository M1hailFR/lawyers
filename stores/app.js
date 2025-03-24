import { defineStore } from 'pinia'

export const useApp = defineStore('app', {
  state: () => ({
    loading: false,
    isShow: false,
  }),
  actions: {
    initializeReadyState() {
      const startTransition = () => {
        setTimeout(() => {
          this.loading = true
        }, 2000)
        setTimeout(() => {
          this.isShow = true
        }, 2500)

        window.removeEventListener('load', startTransition)
      }

      document.readyState === 'complete'
        ? startTransition()
        : window.addEventListener('load', startTransition)
    },

    async pageTransition() {
      this.isShow = false
      this.loading = false

      await new Promise((resolve) => setTimeout(resolve, 300))

      this.loading = true

      await new Promise((resolve) => setTimeout(resolve, 400))

      this.isShow = true
    },
  },
})
