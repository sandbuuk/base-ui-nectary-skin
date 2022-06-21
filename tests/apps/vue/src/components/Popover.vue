<template>
  <sinch-popover
    open
    :orientation="orientation"
    @close="onClose">
    <sinch-button
      slot="target"
      type="cta-secondary"
      text="Some content"
      aria-label="Button">
    </sinch-button>
    <section slot="content" style="width: 240px; padding: 12px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</section>
  </sinch-popover>
</template>

<script>
export default {
  methods: {
    onClose() {
      window.dispatchEvent(new CustomEvent('sinch-popover-close'))
    }
  },
  props: {
    search: URLSearchParams
  },
  computed: {
    orientation() {
      return this.search.get('orientation')
    },

  }
}
</script>

