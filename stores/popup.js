import { defineStore } from 'pinia'

export const usePopup = defineStore('popup', {
  state: () => ({
    type: null,
    payload: {},
  }),
  actions: {
    open(type, payload = {}) {
      this.type = type
      this.payload = payload
    },
    close() {
      this.type = null
      this.payload = {}
    },
  },
})
