import { defineStore } from 'pinia'

export const useScroll = defineStore('scroll', {
  state: () => ({
    windowS: 0,
    windowW: 0,
    isMobile: false,
    isScrolling: false,
  }),
  actions: {
    initializeWindowState() {

      this.windowS = window.scrollY
      this.windowW = window.innerWidth

      const updateScroll = () => {
        this.windowS = window.scrollY
        this.windowS > 64 ? this.isScrolling = true : this.isScrolling = false
      }

      const updateWidth = () => {
        this.windowW = window.innerWidth
        this.windowW < 768 ? this.isMobile = true : this.isMobile = false
      }

      window.addEventListener('scroll', updateScroll)
      window.addEventListener('resize', updateWidth)

      this._updateScroll = updateScroll()
      this._updateWidth = updateWidth()
    },
    clearWindowListeners() {
      window.removeEventListener('scroll', this._updateScroll)
      window.removeEventListener('resize', this._updateWidth)
    }
  },
})
