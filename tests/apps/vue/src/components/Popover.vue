<template>
  <sinch-popover
    :open="isOpen"
    :modal="isModal"
    :orientation="orientation"
    @--close="onClose">
    <sinch-button
      slot="target"
      type="cta-secondary"
      text="Some content"
      aria-label="Button"
      @--click="onOpen">
    </sinch-button>
    <section slot="content" style="max-width: 240px; padding: 12px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</section>
  </sinch-popover>
</template>

<script>
import '@sinch-engage/nectary/popover'
import '@sinch-engage/nectary/button'

export default {
  methods: {
    onClose() {
      window.dispatchEvent(new CustomEvent('sinch-popover-close'))
      this.isOpen = false
    },
    onOpen() {
      window.dispatchEvent(new CustomEvent('sinch-popover-open'))
      this.isOpen = true
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    orientation() {
      return this.search.get('orientation')
    },
    isModal() {
      return this.search.get('modal') !== null
    }
  },
  data() {
    return {
      isOpen: this.search.get('open') !== null
    }
  }
}
</script>

