<template>
  <sinch-sheet
    open
    :caption="title"
    :aria-label="title"
    close-aria-label="Close"
    :placement="placement"
    :overlay="overlay"
    @--close="onClose"
  >
    <sinch-icon v-if="icon" icons-version="2" name="fa-face-smile-plus" slot="icon" />
    <div v-if="content != null" slot="content">
      <sinch-text type="m">{{ content }}</sinch-text>
    </div>
    <sinch-button v-if="buttons" text="Cancel" type="secondary" slot="buttons"></sinch-button>
    <sinch-button v-if="buttons" text="Ok" type="primary" slot="buttons"></sinch-button>
  </sinch-sheet>
</template>
<script>
import '@nectary/components/sheet'
import '@nectary/components/button'
import '@nectary/components/text'
import '@nectary/components/icon'

export default {
  computed: {
    content() {
      return this.$route.query.content
    },
    title() {
      return this.$route.query.title ?? ''
    },
    buttons() {
      return this.$route.query.buttons != null
    },
    icon() {
      return this.$route.query.icon != null
    },
    placement() {
      const p = this.$route.query.placement
      return p === 'left' || p === 'right' || p === 'top' || p === 'bottom' ? p : 'right'
    },
    overlay() {
      const o = this.$route.query.overlay
      return o === 'push' ? 'push' : 'modal'
    }
  },
  methods: {
    onClose(e) {
      window.dispatchEvent(new CustomEvent('sinch-sheet-close', { detail: e.detail }))
    }
  }
}
</script>
