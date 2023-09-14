<template>
  <sinch-dialog open :caption="title" @--close="onClose">
    <sinch-text v-if="content !== null" slot="content" type="m">{{content}}</sinch-text>
    <sinch-button v-if="buttons" text="Cancel" type="secondary" slot="buttons"></sinch-button>
    <sinch-button v-if="buttons" text="Ok" type="primary" slot="buttons"></sinch-button>
  </sinch-dialog>
</template>
<script>
import '@nectary/components/dialog'
import '@nectary/components/button'
import '@nectary/components/text'

export default {
  props: {
    search: URLSearchParams
  },
  computed: {
    content() {
      return this.search.get('content')
    },
    title() {
      return this.search.get('title') ?? ''
    },
    buttons() {
      return this.search.get('buttons') !== null
    }
  },
  methods: {
    onClose(e) {
      window.dispatchEvent(new CustomEvent('sinch-dialog-close', { detail: e.detail }))
    }
  }
}
</script>
