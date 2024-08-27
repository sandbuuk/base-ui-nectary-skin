<template>
  <sinch-dialog open :caption="title" @--close="onClose">
    <sinch-icon icons-version="2" name="fa-face-smile-plus" v-if="icon" slot="icon" />
    <sinch-text v-if="content != null" slot="content" type="m">{{content}}</sinch-text>
    <sinch-button v-if="buttons" text="Cancel" type="secondary" slot="buttons"></sinch-button>
    <sinch-button v-if="buttons" text="Ok" type="primary" slot="buttons"></sinch-button>
  </sinch-dialog>
</template>
<script>
import '@nectary/components/dialog'
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
    }
  },
  methods: {
    onClose(e) {
      window.dispatchEvent(new CustomEvent('sinch-dialog-close', { detail: e.detail }))
    }
  }
}
</script>
