<template>
  <sinch-sheet
    open
    :placement="placement"
    :overlay="overlay"
    @--close="onClose"
  >
    <sinch-sheet-title
      slot="title"
      :title="title"
      :description="desc"
      close-aria-label="Close"
    >
      <sinch-icon v-if="icon" icons-version="2" name="fa-face-smile-plus" slot="icon" />
    </sinch-sheet-title>
    <div v-if="content != null" slot="content">
      <sinch-text type="m">{{ content }}</sinch-text>
    </div>
    <sinch-button v-if="buttons" text="Cancel" type="secondary" slot="footer"></sinch-button>
    <sinch-button v-if="buttons" text="Ok" type="primary" slot="footer"></sinch-button>
  </sinch-sheet>
</template>
<script>
import '@nectary/components/sheet'
import '@nectary/components/sheet-title'
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
    desc() {
      return this.$route.query.desc ?? ''
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
