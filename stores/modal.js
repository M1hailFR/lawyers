import { defineStore } from 'pinia'

export const useModal = defineStore('modal', {
  state: () => ({
    type: null,
    variant: null,
    question: null,
    payload: {},
  }),

  actions: {
    open(type, payload = {}, variant = 'default') {
      this.type = type
      this.payload = payload
      this.variant = variant
    },
    close() {
      this.type = null
      this.variant = null
      this.payload = {}
    },
  },

  persist: true,
})
